import React, { useState } from "react";
import { Mail, BookOpen, Palette, Archive, CheckCircle } from "lucide-react";

const SERVICES = [
  {
    icon: <BookOpen size={22} strokeWidth={1.5} />,
    title: "Historical Research",
    description:
      "Primary and secondary source research into 18th- and 19th-century material culture, textile trades, and women's history. Suitable for museums, authors, documentary producers, and academic projects.",
  },
  {
    icon: <Palette size={22} strokeWidth={1.5} />,
    title: "Dye & Textile Consultation",
    description:
      "Hands-on consultation for historical re-creation projects, living history programs, and museum demonstrations. Covers natural dyeing, period-accurate fiber preparation, and recipe interpretation.",
  },
  {
    icon: <Archive size={22} strokeWidth={1.5} />,
    title: "Writing & Content",
    description:
      "Long-form articles, catalog essays, exhibition text, and educational materials grounded in primary sources. Published work spans dyeing history, decorative arts, and domestic material culture.",
  },
];

const LABEL = { fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 700, letterSpacing: "0.04em" } as const;
const INPUT = "w-full border border-border rounded-sm px-3 py-2.5 bg-input-background focus:outline-none focus:ring-1 focus:ring-ring transition";

export default function HireMe() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-background pt-20 pb-24">

      {/* Hero */}
      <header className="w-full px-6 py-16 border-b border-border">
        <div className="max-w-3xl">
          <p
            style={{ fontFamily: "var(--font-heading)", fontSize: "12px", letterSpacing: "0.12em", color: "var(--accent)" }}
            className="uppercase mb-4"
          >
            Available for Projects
          </p>
          <h1
            style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 400, lineHeight: 1.1 }}
            className="text-foreground mb-6"
          >
            Let's Work Together
          </h1>
          <p
            style={{ fontFamily: "var(--font-body)", fontSize: "18px", lineHeight: 1.7, color: "var(--muted-foreground)" }}
            className="max-w-2xl"
          >
            I bring primary-source rigor and hands-on craft knowledge to research, consultation, and writing projects centered on 18th- and 19th-century material culture, textiles, and decorative arts.
          </p>
        </div>
      </header>

      {/* Services */}
      <section className="w-full px-6 py-16 border-b border-border">
        <h2
          style={{ fontFamily: "var(--font-heading)", fontSize: "12px", letterSpacing: "0.12em", color: "var(--muted-foreground)" }}
          className="uppercase mb-10"
        >
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map(s => (
            <div key={s.title} className="flex flex-col gap-4 p-6 border border-border rounded-sm hover:border-primary transition-colors">
              <div style={{ color: "var(--primary)" }}>{s.icon}</div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "17px" }} className="text-foreground">
                {s.title}
              </h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.7, color: "var(--muted-foreground)" }}>
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact form */}
      <section className="w-full px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — context */}
          <div>
            <h2
              style={{ fontFamily: "var(--font-headline)", fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 400, lineHeight: 1.2 }}
              className="text-foreground mb-6"
            >
              Get in Touch
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.7, color: "var(--muted-foreground)" }} className="mb-8">
              Tell me about your project — scope, timeline, and budget are all helpful. I respond to all inquiries within 2–3 business days.
            </p>
            <a
              href="mailto:hello@rainbowanddove.com"
              className="inline-flex items-center gap-2 hover:text-primary transition-colors"
              style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--muted-foreground)" }}
            >
              <Mail size={15} />
              hello@rainbowanddove.com
            </a>
          </div>

          {/* Right — form */}
          <div>
            {sent ? (
              <div className="flex flex-col items-center gap-4 py-16 text-center border border-border rounded-sm">
                <CheckCircle size={40} strokeWidth={1.5} style={{ color: "var(--accent)" }} />
                <p style={{ fontFamily: "var(--font-headline)", fontSize: "28px", fontWeight: 400 }} className="text-foreground">
                  Message sent!
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--muted-foreground)" }}>
                  I'll be in touch within a few business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label style={LABEL} className="block mb-1.5 text-foreground">Name</label>
                    <input required placeholder="Your name" className={INPUT} style={{ fontFamily: "var(--font-body)", fontSize: "14px" }} />
                  </div>
                  <div className="flex-1">
                    <label style={LABEL} className="block mb-1.5 text-foreground">Email</label>
                    <input required type="email" placeholder="you@example.com" className={INPUT} style={{ fontFamily: "var(--font-body)", fontSize: "14px" }} />
                  </div>
                </div>

                <div>
                  <label style={LABEL} className="block mb-1.5 text-foreground">Service</label>
                  <select required className={INPUT} style={{ fontFamily: "var(--font-body)", fontSize: "14px" }}>
                    <option value="">Select a service…</option>
                    {SERVICES.map(s => <option key={s.title}>{s.title}</option>)}
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label style={LABEL} className="block mb-1.5 text-foreground">Project Details</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your project, timeline, and any relevant details…"
                    className={INPUT + " resize-none"}
                    style={{ fontFamily: "var(--font-body)", fontSize: "14px" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-sm transition-colors"
                  style={{ fontFamily: "var(--font-heading)", fontSize: "14px", letterSpacing: "0.06em", backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
