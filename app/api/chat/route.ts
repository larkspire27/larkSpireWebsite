import { NextRequest, NextResponse } from "next/server";
import { LARKSPIRE_KNOWLEDGE_BASE } from "@/lib/aiKnowledge";
import { logUnansweredQuestion } from "@/lib/unansweredLogger";

interface ChatMessage {
  role: string;
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid request payload. Messages array required." },
        { status: 400 }
      );
    }

    const lastUserMessage = messages[messages.length - 1]?.content || "";
    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY;

    // Option A: Call Google Gemini API if API Key is configured
    if (apiKey) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contents: [
                {
                  role: "user",
                  parts: [
                    {
                      text: `System Context & Guidelines:\n${LARKSPIRE_KNOWLEDGE_BASE}\n\nConversation History:\n${messages
                        .map((m: ChatMessage) => `${m.role.toUpperCase()}: ${m.content}`)
                        .join("\n")}\n\nASSISTANT:`,
                    },
                  ],
                },
              ],
              generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 800,
              },
            }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          const replyText =
            data.candidates?.[0]?.content?.parts?.[0]?.text ||
            "I'm sorry, I couldn't generate a response at this moment. Please feel free to contact our team directly at spirelark@gmail.com!";
          
          return NextResponse.json({ reply: replyText });
        }
      } catch (geminiErr) {
        console.error("Gemini API call failed, falling back to smart knowledge base:", geminiErr);
      }
    }

    // Option B: Smart Knowledge-Base Response Generator (Offline / Fallback)
    const { reply, isUnknown } = generateSmartFallbackReply(lastUserMessage);
    
    // Log unknown/unanswered question for admin review
    if (isUnknown) {
      await logUnansweredQuestion(lastUserMessage);
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Error in AI Chat API route:", error);
    return NextResponse.json(
      { error: "Internal server error processing chat message." },
      { status: 500 }
    );
  }
}

function generateSmartFallbackReply(userMessage: string): { reply: string; isUnknown: boolean } {
  const query = userMessage.toLowerCase();

  if (
    query.includes("hi") ||
    query.includes("hello") ||
    query.includes("hey") ||
    query.includes("namaste")
  ) {
    return {
      reply: "Hello! 👋 Welcome to LarkSpire.\n\nHow can I assist you with your web development, mobile app, SEO, or branding needs today?",
      isUnknown: false,
    };
  }

  // DISCOUNT & OFFER INTENT
  if (
    query.includes("discount") ||
    query.includes("offer") ||
    query.includes("coupon") ||
    query.includes("deal") ||
    query.includes("less") ||
    query.includes("off") ||
    query.includes("scheme") ||
    query.includes("concession")
  ) {
    return {
      reply: "🎉 **Exclusive 15% Discount Offer!**\n\n" +
        "You can claim an instant **15% OFF** on your project by playing our interactive **Tic-Tac-Toe Arcade Game**!\n\n" +
        "🎮 **How to win:**\n" +
        "1. Click the **Tic-Tac-Toe Challenge** button (bottom-left of the screen).\n" +
        "2. Play 3 rounds against our AI.\n" +
        "3. Win at least **2 out of 3 rounds** to unlock coupon code **`LARKSPIRE15`**!\n\n" +
        "Would you like to try the game or speak directly with our team at **+91 9928196424**?",
      isUnknown: false,
    };
  }

  if (
    query.includes("service") ||
    query.includes("offer") ||
    query.includes("what do you do") ||
    query.includes("capabilities")
  ) {
    return {
      reply: "At LarkSpire, we provide end-to-end digital services:\n\n" +
        "• **Custom Web Development** (Next.js, React, Node.js)\n" +
        "• **E-Commerce Solutions** (Shopify & Custom Stores)\n" +
        "• **Mobile App Development** (iOS & Android)\n" +
        "• **SEO & Local Search Optimization**\n" +
        "• **Logo & Brand Identity Design**\n" +
        "• **Meta Ads & Digital Marketing**\n" +
        "• **Custom CRM & Business Software**\n\n" +
        "Which of these services are you interested in?",
      isUnknown: false,
    };
  }

  if (
    query.includes("price") ||
    query.includes("cost") ||
    query.includes("pricing") ||
    query.includes("budget") ||
    query.includes("charge") ||
    query.includes("rate")
  ) {
    return {
      reply: "Our pricing depends on your custom project requirements. We offer flexible packages tailored for startups and businesses.\n\n" +
        "🎁 **Bonus**: You can play our website **Tic-Tac-Toe game** to win an instant **15% DISCOUNT**!\n\n" +
        "💡 **Get a free quote**: Contact our team directly on WhatsApp/Phone at **+91 9928196424** or email **spirelark@gmail.com**.",
      isUnknown: false,
    };
  }

  if (
    query.includes("contact") ||
    query.includes("phone") ||
    query.includes("email") ||
    query.includes("whatsapp") ||
    query.includes("number") ||
    query.includes("reach") ||
    query.includes("location") ||
    query.includes("address") ||
    query.includes("where")
  ) {
    return {
      reply: "You can reach LarkSpire easily through any of the following:\n\n" +
        "📍 **Location**: Jaipur, Rajasthan, India (Serving clients worldwide)\n" +
        "📧 **Email**: spirelark@gmail.com\n" +
        "📞 **Phone / WhatsApp**: +91 9928196424\n" +
        "⏰ **Working Hours**: Mon - Sat, 9:00 AM to 7:00 PM IST",
      isUnknown: false,
    };
  }

  if (
    query.includes("portfolio") ||
    query.includes("work") ||
    query.includes("project") ||
    query.includes("example") ||
    query.includes("sample") ||
    query.includes("client")
  ) {
    return {
      reply: "We have successfully delivered digital platforms across diverse industries including E-Commerce, CCTV & Security Solutions, Granite Export, SaaS, and Local Services.\n\n" +
        "You can view our featured case studies on our **Portfolio Page**, or we can share custom samples related to your industry! What industry is your business in?",
      isUnknown: false,
    };
  }

  if (
    query.includes("seo") ||
    query.includes("search engine") ||
    query.includes("google ranking") ||
    query.includes("traffic")
  ) {
    return {
      reply: "Our SEO service covers complete Technical SEO, On-Page Optimization, Content Strategy, Keyword Targeting, and Local Google Business Profile optimization to help your site rank top on Google and drive organic leads.",
      isUnknown: false,
    };
  }

  if (
    query.includes("mobile") ||
    query.includes("app") ||
    query.includes("android") ||
    query.includes("ios")
  ) {
    return {
      reply: "We build high-performance mobile apps for iOS and Android using React Native & Flutter. Our apps feature seamless UI, offline storage, push notifications, and fast backend APIs.",
      isUnknown: false,
    };
  }

  if (
    query.includes("shopify") ||
    query.includes("ecommerce") ||
    query.includes("online store") ||
    query.includes("shopping")
  ) {
    return {
      reply: "We specialize in high-converting Shopify store development, custom theme design, payment gateway integration (Razorpay/Stripe), and conversion speed optimization.",
      isUnknown: false,
    };
  }

  if (
    query.includes("time") ||
    query.includes("duration") ||
    query.includes("how long") ||
    query.includes("days")
  ) {
    return {
      reply: "Timeline breakdown:\n" +
        "• **Business Websites & Landing Pages**: 1 to 2 weeks\n" +
        "• **E-Commerce Stores**: 2 to 4 weeks\n" +
        "• **Custom SaaS & Mobile Apps**: 3 to 6 weeks\n\n" +
        "We follow agile sprints so you see live updates every week!",
      isUnknown: false,
    };
  }

  return {
    reply: "Thank you for reaching out! LarkSpire specializes in custom web development, mobile apps, UI/UX design, SEO, and Meta ads to help businesses grow.\n\n" +
      "💡 **Special Offer**: Play our website **Tic-Tac-Toe Game** (bottom left) to win 15% OFF on any service! Or chat with us directly on WhatsApp at **+91 9928196424**.",
    isUnknown: true,
  };
}
