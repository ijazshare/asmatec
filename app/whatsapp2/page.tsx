import type { Metadata } from "next";
import PageCTA from "@/components/PageCTA";
import CopyLinkButton from "../whatsapp/CopyLinkButton";

const GUIDE_URL = "https://asmatec.com/whatsapp2";

export const metadata: Metadata = {
  metadataBase: new URL("https://asmatec.com"),
  title: "Create a Private, Scam-Proof WhatsApp Community | AsmaTec",
  description:
    "The quick version: 5 steps to a private WhatsApp Community where phone numbers stay hidden and only admins can post — so scammers can't get in.",
  alternates: { canonical: GUIDE_URL },
  openGraph: {
    type: "article",
    url: GUIDE_URL,
    title: "Create a Private, Scam-Proof WhatsApp Community",
    description:
      "Hide members' numbers, lock posting to admins only, and share the join link freely. Free quick-start guide from AsmaTec.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Create a Private, Scam-Proof WhatsApp Community",
    description:
      "The quick version: 5 steps to a private, scam-proof WhatsApp Community.",
  },
};

const steps: { title: string; body: React.ReactNode }[] = [
  {
    title: "Make the community",
    body: (
      <>
        <Kbd>Communities</Kbd> tab → <Kbd>New community</Kbd>. WhatsApp creates
        an <strong>Announcement</strong> group everyone shares.
      </>
    ),
  },
  {
    title: "Check numbers are hidden",
    body: (
      <>
        <strong>Phone number privacy</strong> is on by default and can&apos;t
        be turned off — but open the group settings and confirm. It hides
        members&apos; numbers from each other.
      </>
    ),
  },
  {
    title: "Lock it to admins",
    body: (
      <>
        Open each group → <Kbd>Group permissions</Kbd> → set{" "}
        <strong>Send messages</strong>, <strong>Edit group settings</strong>,
        and <strong>Add members</strong> to <strong>Only admins</strong>.
      </>
    ),
  },
  {
    title: "Already have a group? Move it in",
    body: (
      <>
        Add your existing group to the community as <strong>Hidden</strong>,
        then <strong>unlink</strong> it. Everyone stays in — no one sees the
        list. <span className="text-[#94a3b8]">(Optional.)</span>
      </>
    ),
  },
  {
    title: "Share the link freely",
    body: (
      <>
        Post the invite <strong>link or QR code</strong> anywhere. The room is
        locked, so newcomers can&apos;t see members or post — no approvals
        needed.
      </>
    ),
  },
];

export default function WhatsApp2Page() {
  return (
    <main className="pt-14">
      {/* Header */}
      <section className="bg-[#0A1A2F] px-4 py-11 md:py-14">
        <div className="container mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6] mb-3">
            WhatsApp Communities · Quick guide
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-3">
            Create a WhatsApp Community scammers can&apos;t get into
          </h1>
          <p className="text-[#94a3b8] text-[15px] md:text-base leading-relaxed max-w-2xl">
            Hide members&apos; numbers and lock everything to admins — then
            share the join link freely. Five steps.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <ol className="space-y-3">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="flex gap-4 bg-white rounded-xl border border-[#e2e8f0] card-shadow p-5"
              >
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#0A1A2F] text-white flex items-center justify-center font-heading font-bold text-sm">
                  {i + 1}
                </span>
                <div>
                  <h2 className="text-[16px] font-bold text-[#0f2137] mb-1">
                    {step.title}
                  </h2>
                  <p className="text-[15px] text-[#64748b] leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Result */}
      <section className="py-12 md:py-16 bg-[#f8fafc] border-y border-[#e8edf2]">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="rounded-2xl bg-gradient-to-r from-[#0A1A2F] via-[#0d2a4a] to-[#0A1A2F] p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-2">
              That&apos;s it
            </h2>
            <p className="text-[#94a3b8] text-[15px] leading-relaxed max-w-2xl">
              Everyone gets your announcements, no one sees anyone else&apos;s
              number, and only admins can post or add people. Share the link
              with anyone — a scammer who joins finds a locked room.
            </p>
          </div>
        </div>
      </section>

      {/* Share strip */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-[#e2e8f0] card-shadow p-5 md:p-6">
            <div>
              <h2 className="text-lg md:text-xl font-bold text-[#0f2137] tracking-tight mb-0.5">
                Know someone who needs this?
              </h2>
              <p className="text-[14px] text-[#64748b]">
                Copy the link and send them the guide.
              </p>
            </div>
            <CopyLinkButton
              url={GUIDE_URL}
              className="bg-[#1E81EF] text-white hover:bg-[#1E81EF]/90"
            />
          </div>
        </div>
      </section>

      <PageCTA
        title="Want this kind of protection across your whole organization?"
        description="AsmaTec helps businesses and nonprofits lock down the tools their people use every day. Book a free assessment."
        buttonText="Get Free Assessment"
      />
    </main>
  );
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-[#f8fafc] border border-[#e2e8f0] rounded-md px-1.5 py-0.5 text-[13px] font-semibold text-[#1e3a5f] whitespace-nowrap">
      {children}
    </span>
  );
}
