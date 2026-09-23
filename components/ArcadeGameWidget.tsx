"use client";

import React, { useState, useEffect } from "react";
import { Gamepad2, X, Trophy, Sparkles, CheckCircle2, RefreshCw, ArrowRight, Bot, User, Frown } from "lucide-react";

type SquareValue = "X" | "O" | null;

export default function ArcadeGameWidget() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Series State (Best of 3)
  const [currentRound, setCurrentRound] = useState(1);
  const [userWins, setUserWins] = useState(0);
  const [aiWins, setAiWins] = useState(0);
  const [ties, setTies] = useState(0);
  
  // Current Board State
  const [board, setBoard] = useState<SquareValue[]>(Array(9).fill(null));
  const [isUserTurn, setIsUserTurn] = useState(true);
  const [roundStatus, setRoundStatus] = useState<"PLAYING" | "USER_WON" | "AI_WON" | "TIE">("PLAYING");
  const [seriesFinished, setSeriesFinished] = useState(false);

  // Lead Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Web Development",
  });
  const [submitting, setSubmitting] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  // Auto-open Tic-Tac-Toe Game Popup when initial Lead Popup is closed
  useEffect(() => {
    const handleLeadPopupClosed = () => {
      setTimeout(() => {
        setIsOpen(true);
      }, 500);
    };

    window.addEventListener("larkspire_lead_popup_closed", handleLeadPopupClosed);
    return () => window.removeEventListener("larkspire_lead_popup_closed", handleLeadPopupClosed);
  }, []);

  // Sound Synth using Web Audio API
  const playSound = (type: "move" | "win" | "lose") => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === "move") {
        osc.frequency.setValueAtTime(500, ctx.currentTime);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.08);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
      } else if (type === "win") {
        osc.frequency.setValueAtTime(523.25, ctx.currentTime);
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1);
        osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      } else if (type === "lose") {
        osc.frequency.setValueAtTime(300, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.2);
        osc.start();
        osc.stop(ctx.currentTime + 0.2);
      }
    } catch {
      // Ignore browser audio restrictions
    }
  };

  // Winning combinations check
  const checkWinner = (b: SquareValue[]): "X" | "O" | "TIE" | null => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const [a, c, d] of lines) {
      if (b[a] && b[a] === b[c] && b[a] === b[d]) {
        return b[a];
      }
    }

    if (b.every((sq) => sq !== null)) {
      return "TIE";
    }

    return null;
  };

  // Unbeatable Minimax Algorithm
  const minimax = (b: SquareValue[], depth: number, isMaximizing: boolean): number => {
    const winner = checkWinner(b);
    if (winner === "O") return 10 - depth;
    if (winner === "X") return depth - 10;
    if (winner === "TIE") return 0;

    const emptyIndices = b
      .map((val, idx) => (val === null ? idx : null))
      .filter((val): val is number => val !== null);

    if (isMaximizing) {
      let maxEval = -Infinity;
      for (const idx of emptyIndices) {
        b[idx] = "O";
        const evaluation = minimax(b, depth + 1, false);
        b[idx] = null;
        maxEval = Math.max(maxEval, evaluation);
      }
      return maxEval;
    } else {
      let minEval = Infinity;
      for (const idx of emptyIndices) {
        b[idx] = "X";
        const evaluation = minimax(b, depth + 1, true);
        b[idx] = null;
        minEval = Math.min(minEval, evaluation);
      }
      return minEval;
    }
  };

  // Smart Unfair AI Move Algorithm (Minimax)
  const getBestAiMove = (b: SquareValue[]): number => {
    const emptyIndices = b
      .map((val, idx) => (val === null ? idx : null))
      .filter((val): val is number => val !== null);
    if (emptyIndices.length === 0) return -1;

    let bestScore = -Infinity;
    let bestMove = emptyIndices[0];

    for (const idx of emptyIndices) {
      const bCopy = [...b];
      bCopy[idx] = "O";
      const score = minimax(bCopy, 0, false);
      if (score > bestScore) {
        bestScore = score;
        bestMove = idx;
      }
    }

    return bestMove;
  };

  // Handle User Click on Square
  const handleSquareClick = (index: number) => {
    if (board[index] !== null || !isUserTurn || roundStatus !== "PLAYING" || seriesFinished) return;

    const nextBoard = [...board];
    nextBoard[index] = "X";
    setBoard(nextBoard);
    playSound("move");

    const winner = checkWinner(nextBoard);
    if (winner) {
      handleRoundFinish(winner, nextBoard);
    } else {
      setIsUserTurn(false);
    }
  };

  // Trigger AI Turn after user move
  useEffect(() => {
    if (isUserTurn || roundStatus !== "PLAYING" || seriesFinished) return;

    const timer = setTimeout(() => {
      const aiMove = getBestAiMove(board);
      if (aiMove !== -1) {
        const nextBoard = [...board];
        nextBoard[aiMove] = "O";
        setBoard(nextBoard);
        playSound("move");

        const winner = checkWinner(nextBoard);
        if (winner) {
          handleRoundFinish(winner, nextBoard);
        } else {
          setIsUserTurn(true);
        }
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [isUserTurn, board, roundStatus, seriesFinished]);

  // Handle Round Finish & Progress Series
  const handleRoundFinish = (winner: "X" | "O" | "TIE", finalBoard: SquareValue[]) => {
    setBoard(finalBoard);

    let nextUserWins = userWins;
    let nextAiWins = aiWins;
    let nextTies = ties;

    if (winner === "X") {
      setRoundStatus("USER_WON");
      nextUserWins += 1;
      setUserWins(nextUserWins);
      playSound("win");
    } else if (winner === "O") {
      setRoundStatus("AI_WON");
      nextAiWins += 1;
      setAiWins(nextAiWins);
      playSound("lose");
    } else {
      setRoundStatus("TIE");
      nextTies += 1;
      setTies(nextTies);
    }

    // Check if 3 rounds completed
    if (currentRound >= 3) {
      setSeriesFinished(true);
    }
  };

  // Move to Next Round
  const startNextRound = () => {
    if (currentRound < 3) {
      setCurrentRound((prev) => prev + 1);
      setBoard(Array(9).fill(null));
      setRoundStatus("PLAYING");
      setIsUserTurn(true);
    }
  };

  // Reset Entire Game Series (Replay)
  const resetEntireSeries = () => {
    setCurrentRound(1);
    setUserWins(0);
    setAiWins(0);
    setTies(0);
    setBoard(Array(9).fill(null));
    setRoundStatus("PLAYING");
    setIsUserTurn(true);
    setSeriesFinished(false);
    setLeadSubmitted(false);
  };

  // Lead Form Submission
  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email || "tictactoe-lead@larkspire.in",
          service: formData.service,
          message: `🎮 Tic-Tac-Toe Winner! Beat AI ${userWins}-${aiWins}! Coupon LARKSPIRE15 claimed.`,
        }),
      });
    } catch {
      // Ignore network errors
    } finally {
      setSubmitting(false);
      setLeadSubmitted(true);
    }
  };

  const isOfferUnlocked = userWins >= 2;

  return (
    <>
      {/* Floating Badge (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => {
            setIsOpen(true);
            if (seriesFinished) resetEntireSeries();
          }}
          className="group relative flex items-center gap-3 px-4.5 py-3 min-h-[44px] rounded-full bg-slate-900 border border-slate-700/80 text-white shadow-lg hover:scale-105 hover:bg-slate-800 transition-all duration-300 overflow-hidden apple-focus-ring"
        >
          <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold shadow-md shrink-0 group-hover:rotate-12 transition-transform">
            <Gamepad2 className="w-4 h-4" />
          </div>

          <div className="text-left">
            <div className="text-xs font-bold text-teal-300 uppercase tracking-wider flex items-center gap-1">
              <span>Tic-Tac-Toe Challenge</span>
              <Sparkles className="w-3 h-3 text-emerald-400" />
            </div>
            <div className="text-xs text-slate-300 font-light">
              Win 2/3 Rounds = 15% OFF! ❌⭕
            </div>
          </div>
        </button>
      </div>

      {/* Pop-up Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
            
            {/* Header */}
            <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-teal-500/20 border border-teal-500/30 text-teal-400">
                  <Gamepad2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    LarkSpire AI Challenge
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 font-mono">
                      BEST OF 3
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400">Win 2 out of 3 rounds to unlock 15% OFF!</p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scorecard Bar */}
            <div className="px-6 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-1.5 text-teal-400 font-bold">
                <User className="w-3.5 h-3.5" />
                <span>YOU (X): {userWins}</span>
              </div>

              <div className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[11px]">
                ROUND {currentRound}/3
              </div>

              <div className="flex items-center gap-1.5 text-rose-400 font-bold">
                <Bot className="w-3.5 h-3.5" />
                <span>AI (O): {aiWins}</span>
              </div>
            </div>

            {/* Main Game / Series Result Body */}
            <div className="p-6 flex flex-col items-center justify-center space-y-5">

              {/* GAME ONGOING OR ROUND FINISHED */}
              {!seriesFinished ? (
                <div className="w-full space-y-4 flex flex-col items-center">
                  
                  {/* Status Indicator */}
                  <div className="text-xs font-semibold text-center h-6 flex items-center justify-center">
                    {roundStatus === "PLAYING" && (
                      <span className={isUserTurn ? "text-teal-400 animate-pulse" : "text-slate-400 animate-pulse"}>
                        {isUserTurn ? "👉 Your Turn (X)" : "🤖 AI is thinking (O)..."}
                      </span>
                    )}
                    {roundStatus === "USER_WON" && (
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        🎉 Round {currentRound} Won by You!
                      </span>
                    )}
                    {roundStatus === "AI_WON" && (
                      <span className="text-rose-400 font-bold flex items-center gap-1">
                        🤖 Round {currentRound} Won by LarkSpire AI!
                      </span>
                    )}
                    {roundStatus === "TIE" && (
                      <span className="text-amber-400 font-bold">
                        🤝 Round {currentRound} is a Tie!
                      </span>
                    )}
                  </div>

                  {/* 3x3 Tic-Tac-Toe Grid */}
                  <div className="grid grid-cols-3 gap-3 w-full max-w-[270px]">
                    {board.map((square, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSquareClick(idx)}
                        disabled={square !== null || !isUserTurn || roundStatus !== "PLAYING"}
                        className={`w-20 h-20 rounded-2xl border text-3xl font-extrabold flex items-center justify-center transition-all duration-200 shadow-md ${
                          square === "X"
                            ? "bg-teal-950/80 border-teal-400 text-teal-300 shadow-teal-500/20"
                            : square === "O"
                            ? "bg-rose-950/80 border-rose-500 text-rose-400 shadow-rose-500/20"
                            : "bg-slate-950 border-slate-800 hover:border-teal-500/60 hover:bg-slate-800/80 text-white"
                        }`}
                      >
                        {square}
                      </button>
                    ))}
                  </div>

                  {/* Next Round Button if round finished but series not over */}
                  {roundStatus !== "PLAYING" && currentRound < 3 && (
                    <button
                      onClick={startNextRound}
                      className="mt-2 px-6 py-2.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-lg flex items-center gap-2 transition-all duration-200 animate-bounce"
                    >
                      <span>Play Round {currentRound + 1}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ) : (
                /* SERIES FINISHED - CHECK OFFER ELIGIBILITY */
                <div className="w-full space-y-5 text-center animate-in zoom-in-95 duration-200">
                  
                  {isOfferUnlocked ? (
                    /* USER WON 2 OR 3 ROUNDS -> OFFER UNLOCKED */
                    <div className="space-y-4">
                      <div className="p-5 rounded-2xl bg-gradient-to-b from-teal-950/80 to-slate-950 border border-teal-400 space-y-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
                          <Trophy className="w-4 h-4" />
                          <span>SERIES VICTORY ({userWins}-{aiWins})!</span>
                        </div>
                        <h4 className="text-2xl font-extrabold text-white">
                          🎉 You Beat the AI!
                        </h4>
                        <p className="text-xs text-slate-300">
                          You won <span className="text-teal-300 font-bold">{userWins} out of 3</span> rounds! Here is your 15% Discount Code:
                        </p>
                        <div className="inline-block px-4 py-2 rounded-xl bg-slate-900 border border-teal-400/40 font-mono text-sm text-teal-300 tracking-widest font-bold select-all">
                          COUPON: LARKSPIRE15
                        </div>
                      </div>

                      {!leadSubmitted ? (
                        <form onSubmit={handleSubmitLead} className="space-y-3 text-left">
                          <h5 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                            Claim 15% OFF &amp; Free Website Audit:
                          </h5>
                          <input
                            type="text"
                            required
                            placeholder="Your Name *"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-teal-500 transition-colors"
                          />
                          <input
                            type="tel"
                            required
                            placeholder="Phone Number / WhatsApp *"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-teal-500 transition-colors"
                          />
                          <button
                            type="submit"
                            disabled={submitting}
                            className="w-full py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-lg flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50"
                          >
                            {submitting ? <span>Claiming...</span> : <span>CLAIM 15% DISCOUNT OFFER</span>}
                          </button>
                        </form>
                      ) : (
                        <div className="p-4 rounded-xl bg-teal-950 border border-teal-400 text-center space-y-2">
                          <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                          <h5 className="text-sm font-bold text-white">Offer Claimed!</h5>
                          <p className="text-xs text-slate-300">Our team will reach out on WhatsApp to apply your discount.</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    /* USER LOST OR TIED (WINS < 2) -> NO OFFER, REPLAY PROMPT */
                    <div className="p-6 rounded-2xl bg-rose-950/40 border border-rose-500/40 space-y-4">
                      <div className="w-12 h-12 rounded-full bg-rose-500/20 border border-rose-500/40 flex items-center justify-center mx-auto text-rose-400">
                        <Frown className="w-6 h-6" />
                      </div>

                      <div className="space-y-1">
                        <h4 className="text-xl font-bold text-white">AI Won the Series ({aiWins}-{userWins})</h4>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          You needed at least <span className="text-amber-300 font-bold">2 wins</span> out of 3 rounds to unlock the 15% discount offer. LarkSpire AI is tough to beat!
                        </p>
                      </div>

                      <button
                        onClick={resetEntireSeries}
                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-xs shadow-lg flex items-center justify-center gap-2 transition-all duration-300"
                      >
                        <RefreshCw className="w-4 h-4" />
                        <span>REPLAY GAME &amp; TRY AGAIN</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between text-[11px] text-slate-400">
              <span>❌⭕ Tic-Tac-Toe Best of 3</span>
              <button
                onClick={resetEntireSeries}
                className="inline-flex items-center gap-1 text-teal-400 font-bold hover:underline"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset Series</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
