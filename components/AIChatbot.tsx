"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  X,
  Send,
  Bot,
  Sparkles,
  RefreshCw,
  User,
  ExternalLink,
  Phone,
} from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

const QUICK_PROMPTS = [
  "🎁 How to get 15% OFF discount?",
  "🌐 What web services do you offer?",
  "💰 How much does a website cost?",
  "📁 Show me your portfolio",
  "📞 How can I contact LarkSpire?",
  "⚡ What is your turnaround time?",
];

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      role: "assistant",
      content:
        "Namaste! 🙏 Welcome to **LarkSpire AI**.\n\nI can answer any question about our web development, mobile apps, SEO, branding, **15% Game Discount**, or project timelines. How can I help your business scale today?",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [isOpen, messages, loading]);

  const handleSendMessage = async (textToSend?: string) => {
    const queryText = (textToSend || input).trim();
    if (!queryText || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: queryText,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) throw new Error("Network error");

      const data = await response.json();
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          data.reply ||
          "I'm sorry, I couldn't process that. Please contact our team at spirelark@gmail.com!",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content:
            "Connection issue. You can directly connect with us on WhatsApp at **+91 9928196424** or email **spirelark@gmail.com**!",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: Date.now().toString(),
        role: "assistant",
        content:
          "Chat reset! What else would you like to know about LarkSpire?",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
  };

  // Format Markdown text for AI output
  const renderFormattedContent = (content: string) => {
    const lines = content.split("\n");
    return lines.map((line, idx) => {
      const formattedLine = line;

      // Handle bold **text**
      const parts = formattedLine.split(/(\*\*.*?\*\*)/g);
      const elements = parts.map((part, pIdx) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={pIdx} className="font-semibold text-blue-300">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });

      return (
        <React.Fragment key={idx}>
          {elements}
          {idx < lines.length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  return (
    <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-[9999] font-sans">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(true);
          }}
          className="group relative flex items-center gap-2 sm:gap-3 px-3 py-2.5 sm:px-4 sm:py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 border border-white/20 cursor-pointer"
          aria-label="Open LarkSpire AI Assistant"
        >
          <div className="relative">
            <Bot className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-emerald-500"></span>
            </span>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-blue-200">
              LarkSpire AI
            </span>
            <span className="text-xs sm:text-sm font-bold hidden xs:inline sm:inline">
              Ask Anything
            </span>
          </div>
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 opacity-90 group-hover:rotate-12 transition-transform" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="flex flex-col w-[92vw] sm:w-[420px] h-[580px] max-h-[82vh] bg-slate-950/95 backdrop-blur-2xl border border-slate-800/80 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-slate-900 via-blue-950/60 to-slate-900 border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="relative p-2 bg-blue-600/20 border border-blue-500/30 rounded-xl">
                <Bot className="w-5 h-5 text-blue-400" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-slate-950" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-white text-base">
                    LarkSpire AI
                  </h3>
                  <span className="px-2 py-0.5 text-[10px] font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full">
                    Live
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Instant Answers & Project Consultation
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleReset}
                title="Reset Chat"
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
                title="Close Chat"
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.role === "assistant" && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white rounded-br-none shadow-lg shadow-blue-600/10"
                      : "bg-slate-900/90 border border-slate-800 text-slate-200 rounded-bl-none shadow-md"
                  }`}
                >
                  <div>{renderFormattedContent(msg.content)}</div>
                  <div
                    className={`text-[10px] mt-1.5 text-right ${
                      msg.role === "user" ? "text-blue-200/70" : "text-slate-500"
                    }`}
                  >
                    {msg.timestamp}
                  </div>
                </div>

                {msg.role === "user" && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {loading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-slate-900 border border-slate-800 px-4 py-3 rounded-2xl rounded-bl-none flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Starter Chips */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 bg-slate-900/40 border-t border-slate-800/40 overflow-x-auto flex gap-2 no-scrollbar">
              {QUICK_PROMPTS.map((prompt, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => handleSendMessage(prompt)}
                  className="whitespace-nowrap text-xs px-3 py-1.5 rounded-full bg-slate-800/80 hover:bg-blue-600/30 hover:border-blue-500/40 text-slate-300 hover:text-white border border-slate-700 transition-all duration-200 cursor-pointer"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Direct Action Bar */}
          <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
            <a
              href="https://wa.me/919928196424"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp: +91 9928196424</span>
            </a>
            <a
              href="/contact"
              className="flex items-center gap-1 hover:text-blue-400 transition-colors font-medium text-blue-400"
            >
              <span>Book Call</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-slate-950 border-t border-slate-800/80 flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about pricing, discount, services..."
              className="flex-1 bg-slate-900/90 text-white text-sm placeholder-slate-500 px-4 py-2.5 rounded-xl border border-slate-800 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/60 transition-all"
            />
            <button
              type="button"
              onClick={() => handleSendMessage()}
              disabled={!input.trim() || loading}
              className="p-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-40 disabled:hover:from-blue-600 text-white rounded-xl shadow-lg transition-all cursor-pointer"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
