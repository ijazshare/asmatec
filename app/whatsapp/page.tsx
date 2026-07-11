import type { Metadata } from "next";
import {
  ShieldCheck,
  EyeOff,
  Megaphone,
  UserX,
  FolderPlus,
  Users,
  UserCheck,
  UserPlus,
  Settings,
  Link as LinkIcon,
  CheckCircle2,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import PageCTA from "@/components/PageCTA";

const GUIDE_URL = "https://asmatec.com/whatsapp";
const SHARE_HREF = `https://wa.me/?text=${encodeURIComponent(
  `Set up a private, scam-proof WhatsApp Community — free step-by-step guide:\n${GUIDE_URL}`,
)}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://asmatec.com"),
  title: "Create a Private, Scam-Proof WhatsApp Community | AsmaTec",
  description:
    "A free, step-by-step guide to setting up a private WhatsApp Community where phone numbers stay hidden and only admins can post, add members, or add groups — so scammers can't get in.",
  alternates: { canonical: GUIDE_URL },
  openGraph: {
    type: "article",
    url: GUIDE_URL,
    title: "Create a Private, Scam-Proof WhatsApp Community",
    description:
      "Hide members' numbers, lock posting and joining to admins only, and keep scammers out of your WhatsApp Community. Free step-by-step guide from AsmaTec.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Create a Private, Scam-Proof WhatsApp Community",
    description:
      "Hide members' numbers and lock everything to admins only. Free guide from AsmaTec.",
  },
};

const protections: { icon: LucideIcon; label: string }[] = [
  { icon: EyeOff, label: "Numbers stay hidden from other members" },
  { icon: Megaphone, label: "Only admins can post — no scam links" },
  { icon: UserX, label: "No one can add stranger accounts" },
  { icon: ShieldCheck, label: "No one can rename the group to fake being you" },
];

const setupSteps: { title: string; body: React.ReactNode }[] = [
  {
    title: "Create the community",
    body: (
      <>
        Open the <Kbd>Communities</Kbd> tab → <Kbd>New community</Kbd>. WhatsApp
        makes two groups for you: an <strong>Announcement</strong> group (admins
        post, everyone reads) and a <strong>General</strong> group.
      </>
    ),
  },
  {
    title: "Keep or delete the General group",
    body: (
      <>
        Just want a broadcast? Open <strong>General</strong> and delete it —
        everyone stays in Announcement. Want members to chat? Keep it, and lock
        it down in Part 2.
      </>
    ),
  },
  {
    title: "Hide everyone's numbers",
    body: (
      <>
        In the group settings, turn on <strong>Phone number privacy</strong> so
        members can&apos;t see each other&apos;s numbers.{" "}
        <span className="text-[#94a3b8]">
          Yours, as the owner, still shows.
        </span>
      </>
    ),
  },
];

const migrationSteps: { title: string; body: React.ReactNode }[] = [
  {
    title: "Add your existing group as Hidden",
    body: (
      <>
        Add the group you already run into the community. When asked for
        visibility, choose <strong>Hidden</strong> — current members won&apos;t
        see it.{" "}
        <span className="text-[#64748b]">
          Pick Hidden now; it can&apos;t be changed later.
        </span>
      </>
    ),
  },
  {
    title: "Unlink the group, keep the people",
    body: (
      <>
        Once it&apos;s added, <strong>remove (unlink)</strong> the group from
        the community. The group goes back to standing on its own — but its
        people stay in the community.
      </>
    ),
  },
  {
    title: "Everyone's in — quietly",
    body: (
      <>
        Your whole group is now inside the private community with numbers
        hidden, and no one can see who else joined. Repeat for each group you
        want to move in.
      </>
    ),
  },
];

type Setting = { icon: LucideIcon; setting: string; value: string; why: string };

const communitySettings: Setting[] = [
  {
    icon: FolderPlus,
    setting: "Who can add groups",
    value: "Only admins",
    why: "So no one can attach a scam group to your community.",
  },
  {
    icon: Users,
    setting: "Community admins",
    value: "Trusted people only",
    why: "Admins can do everything — keep the list tiny.",
  },
  {
    icon: Megaphone,
    setting: "Announcement group",
    value: "Admins post, members read",
    why: "Members react but can't post links to everyone.",
  },
  {
    icon: UserCheck,
    setting: "Invite link",
    value: "Share privately",
    why: "Anyone who gets the link can ask to join.",
  },
];

const groupSettings: Setting[] = [
  {
    icon: Megaphone,
    setting: "Send messages",
    value: "Only admins",
    why: "Members can't post scam links or spam.",
  },
  {
    icon: Settings,
    setting: "Edit group settings",
    value: "Only admins",
    why: "No one can rename it or change the photo to fake being you.",
  },
  {
    icon: UserPlus,
    setting: "Add other members",
    value: "Only admins",
    why: "Members can't pull in strangers.",
  },
  {
    icon: UserCheck,
    setting: "Approve new members",
    value: "On",
    why: "You approve every person before they're in.",
  },
  {
    icon: LinkIcon,
    setting: "Invite link",
    value: "Reset if it leaks",
    why: "It's the front door — reset it if it spreads too far.",
  },
];

// The four toggles as they should look on the Group permissions screen.
const mockToggles: { label: string; on: boolean }[] = [
  { label: "Edit group settings", on: false },
  { label: "Send messages", on: false },
  { label: "Add other members", on: false },
  { label: "Approve new members", on: true },
];

export default function WhatsAppGuidePage() {
  return (
    <main className="pt-14">
      {/* Hero */}
      <section className="bg-[#0A1A2F] py-20 md:py-28 px-4">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Create a WhatsApp Community scammers can&apos;t get into
          </h1>
          <p className="text-[#94a3b8] text-base md:text-lg leading-relaxed max-w-3xl mb-8">
            Scammers love open WhatsApp groups — they grab members&apos; phone
            numbers, message people privately, and post fake links. Here&apos;s
            how to set up a Community where numbers stay hidden and only admins
            can post, add people, or add groups.
          </p>
          <ShareButton />
        </div>
      </section>

      {/* What this protects */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto">
            <SectionLabel>What this protects</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f2137] tracking-tight mb-8">
              A room scammers can&apos;t work
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {protections.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 bg-white rounded-xl border border-[#e2e8f0] card-shadow p-5"
                >
                  <span className="flex-shrink-0 w-11 h-11 rounded-md bg-[#E8F1FB] flex items-center justify-center">
                    <Icon className="h-5 w-5 text-[#3b82f6]" strokeWidth={1.5} />
                  </span>
                  <span className="text-[15px] font-medium text-[#374151] leading-snug">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Part 1 — set up */}
      <section className="py-16 md:py-24 bg-[#f8fafc] border-y border-[#e8edf2]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto">
            <SectionLabel>Part 1 · Set it up</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f2137] tracking-tight mb-10">
              Build the community
            </h2>
            <Steps items={setupSteps} accent="#0A1A2F" />
          </div>
        </div>
      </section>

      {/* Migration — mass-move an existing group in privately */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl border border-[#25D366]/30 bg-[#25D366]/[0.06] p-6 md:p-8">
              <div className="flex items-center gap-2.5 mb-3">
                <FaWhatsapp className="text-[#1e9c52]" size={22} />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1e9c52]">
                  Already have a group? · Optional
                </p>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f2137] tracking-tight mb-2">
                Move everyone in — privately
              </h2>
              <p className="text-[15px] text-[#64748b] leading-relaxed mb-8">
                This is how you migrate a whole existing group into your new
                private community at once, without members ever seeing each
                other.
              </p>
              <Steps items={migrationSteps} accent="#1e9c52" />
            </div>
          </div>
        </div>
      </section>

      {/* Part 2 — lock it down */}
      <section className="py-16 md:py-24 bg-[#f8fafc] border-y border-[#e8edf2]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto">
            <SectionLabel>Part 2 · Lock it down</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f2137] tracking-tight mb-4">
              Admins only — for everything
            </h2>
            <p className="text-[15px] md:text-base text-[#64748b] leading-relaxed mb-6">
              This is the part that keeps scammers out. Go through the settings
              below — first for the{" "}
              <strong className="text-[#0f2137]">community</strong>, then for{" "}
              <strong className="text-[#0f2137]">every group inside it</strong>.
              Set each one to the value on the right.
            </p>

            <PlatformNote />

            <div className="mt-8 grid md:grid-cols-[minmax(0,1fr)_260px] gap-8 items-start">
              <div className="space-y-6 min-w-0">
                <SettingsCard
                  badge="Community settings"
                  icon={Users}
                  howTo="Tap the community name at the top → Settings"
                  items={communitySettings}
                />
                <SettingsCard
                  badge="Each group's settings"
                  icon={ShieldCheck}
                  howTo={
                    <>
                      Open a group → tap its name → <Kbd>Group permissions</Kbd>
                    </>
                  }
                  items={groupSettings}
                  note="Do this for the default group and every other group you keep in the community."
                />
              </div>
              <PhoneMock />
            </div>
          </div>
        </div>
      </section>

      {/* Result */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto rounded-2xl bg-gradient-to-r from-[#0A1A2F] via-[#0d2a4a] to-[#0A1A2F] p-8 md:p-10">
            <CheckCircle2 className="h-8 w-8 text-[#25D366] mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
              You&apos;re done
            </h2>
            <p className="text-[#94a3b8] text-[15px] md:text-base leading-relaxed max-w-2xl">
              Members get every announcement — but can&apos;t see each
              other&apos;s numbers, can&apos;t post links, and can&apos;t add
              anyone. A scammer who slips in finds a locked room: no numbers to
              grab, no way to broadcast, and an admin approving every new face.
            </p>
          </div>
        </div>
      </section>

      {/* Good to know */}
      <section className="py-14 md:py-20 bg-[#f8fafc] border-t border-[#e8edf2]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto">
            <SectionLabel>Good to know</SectionLabel>
            <ul className="space-y-3 text-[15px] text-[#64748b] leading-relaxed">
              <li className="flex gap-3">
                <Dot />
                <span>
                  <strong className="text-[#0f2137]">Your number shows.</strong>{" "}
                  As the owner, members can see your number — that can&apos;t be
                  hidden.
                </span>
              </li>
              <li className="flex gap-3">
                <Dot />
                <span>
                  <strong className="text-[#0f2137]">Update WhatsApp</strong>{" "}
                  first, so all the privacy and permission options appear.
                </span>
              </li>
              <li className="flex gap-3">
                <Dot />
                <span>
                  <strong className="text-[#0f2137]">
                    Check back now and then.
                  </strong>{" "}
                  Review your admin list, and reset any invite link that spreads
                  too far.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Share strip */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 rounded-2xl border border-[#e2e8f0] card-shadow p-6 md:p-8">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#0f2137] tracking-tight mb-1">
                Know someone who needs this?
              </h2>
              <p className="text-[15px] text-[#64748b]">
                Send them the guide and help shut the scammers out.
              </p>
            </div>
            <ShareButton />
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

function ShareButton() {
  return (
    <a
      href={SHARE_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold px-6 py-3.5 rounded-lg shadow-lg shadow-green-500/20 transition-colors"
    >
      <FaWhatsapp size={20} />
      Share this guide
    </a>
  );
}

function Steps({
  items,
  accent,
}: {
  items: { title: string; body: React.ReactNode }[];
  accent: string;
}) {
  return (
    <ol className="space-y-4">
      {items.map((step, i) => (
        <li
          key={step.title}
          className="flex gap-5 bg-white rounded-xl border border-[#e2e8f0] card-shadow p-6"
        >
          <span
            className="flex-shrink-0 w-10 h-10 rounded-full text-white flex items-center justify-center font-heading font-bold"
            style={{ backgroundColor: accent }}
          >
            {i + 1}
          </span>
          <div>
            <h3 className="text-[17px] font-bold text-[#0f2137] mb-1.5">
              {step.title}
            </h3>
            <p className="text-[15px] text-[#64748b] leading-relaxed">
              {step.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function PlatformNote() {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-[#eff6ff] border border-[#dbeafe] px-5 py-4">
      <Smartphone
        className="h-5 w-5 text-[#1e73dc] flex-shrink-0 mt-0.5"
        strokeWidth={1.75}
      />
      <p className="text-[14px] text-[#1e3a5f] leading-relaxed">
        <strong>iPhone &amp; Android are the same</strong> — only two names
        differ. Android says <em>Group permissions</em> and <em>members</em>;
        iPhone says <em>Group Settings</em> and <em>participants</em>. Pick the
        closest match you see.
      </p>
    </div>
  );
}

function PhoneMock() {
  return (
    <figure className="mx-auto w-full max-w-[260px] md:sticky md:top-24">
      <div className="rounded-[2rem] border-[6px] border-[#0A1A2F] bg-white overflow-hidden shadow-xl">
        <div className="bg-[#0A1A2F] text-white px-4 py-3">
          <p className="text-[11px] text-[#94a3b8]">Group permissions</p>
          <p className="text-[13px] font-semibold">Only admins can…</p>
        </div>
        <ul className="divide-y divide-[#eef1f6]">
          {mockToggles.map(({ label, on }) => (
            <li
              key={label}
              className="flex items-center justify-between gap-3 px-4 py-3.5"
            >
              <span className="text-[13px] font-medium text-[#0f2137] leading-tight">
                {label}
              </span>
              <Toggle on={on} />
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="text-[12px] text-[#94a3b8] text-center mt-3 leading-relaxed">
        How your screen should look. <strong>Grey = locked to admins.</strong>
      </figcaption>
    </figure>
  );
}

function Toggle({ on }: { on: boolean }) {
  return (
    <span
      className={`flex-shrink-0 w-10 h-6 rounded-full flex items-center px-0.5 ${
        on ? "bg-[#25D366] justify-end" : "bg-[#cbd5e1] justify-start"
      }`}
    >
      <span className="w-5 h-5 rounded-full bg-white shadow-sm" />
    </span>
  );
}

function SettingsCard({
  badge,
  icon: Icon,
  howTo,
  items,
  note,
}: {
  badge: string;
  icon: LucideIcon;
  howTo: React.ReactNode;
  items: Setting[];
  note?: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-[#e2e8f0] card-shadow overflow-hidden">
      <div className="bg-[#0A1A2F] px-6 py-4">
        <div className="flex items-center gap-3">
          <Icon className="h-5 w-5 text-[#1E81EF]" strokeWidth={1.75} />
          <h3 className="text-white font-heading font-bold text-[15px] tracking-tight">
            {badge}
          </h3>
        </div>
        <p className="text-[13px] text-[#94a3b8] mt-1.5 pl-8">{howTo}</p>
      </div>
      <ul className="divide-y divide-[#eef1f6]">
        {items.map(({ icon: RowIcon, setting, value, why }) => (
          <li
            key={setting}
            className="px-6 py-4 flex items-start gap-4 sm:items-center"
          >
            <span className="flex-shrink-0 w-9 h-9 rounded-md bg-[#E8F1FB] flex items-center justify-center">
              <RowIcon className="h-4 w-4 text-[#3b82f6]" strokeWidth={1.75} />
            </span>
            <div className="min-w-0 flex-1">
              <span className="font-bold text-[#0f2137] text-[15px]">
                {setting}
              </span>
              <p className="text-[13px] text-[#64748b] leading-snug mt-0.5">
                {why}
              </p>
            </div>
            <span className="flex-shrink-0 self-center inline-block text-[12px] font-bold text-[#1e73dc] bg-[#eff6ff] rounded-full px-3 py-1 whitespace-nowrap">
              {value}
            </span>
          </li>
        ))}
      </ul>
      {note && (
        <p className="px-6 py-4 bg-[#f8fafc] border-t border-[#eef1f6] text-[13px] text-[#64748b] leading-relaxed">
          {note}
        </p>
      )}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6] mb-3">
      {children}
    </p>
  );
}

function Dot() {
  return (
    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#3b82f6] mt-2.5" />
  );
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-[#f8fafc] border border-[#e2e8f0] rounded-md px-1.5 py-0.5 text-[13px] font-semibold text-[#1e3a5f] whitespace-nowrap">
      {children}
    </span>
  );
}
