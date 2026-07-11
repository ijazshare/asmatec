import type { Metadata } from "next";
import {
  ShieldCheck,
  Megaphone,
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
import CopyLinkButton from "./CopyLinkButton";

const GUIDE_URL = "https://asmatec.com/whatsapp";

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
    title: "Check numbers are hidden",
    body: (
      <>
        <strong>Phone number privacy</strong> is on by default and can&apos;t
        be turned off — it hides members&apos; numbers from each other. Just
        open the group settings and confirm it&apos;s there.{" "}
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

// Privacy / posting first, then who can add groups, then the invite link last.
const communitySettings: Setting[] = [
  {
    icon: Megaphone,
    setting: "Announcement group",
    value: "Admins post, members read",
    why: "Members react but can't post links to everyone.",
  },
  {
    icon: Users,
    setting: "Community admins",
    value: "Trusted people only",
    why: "Admins can do everything — keep the list tiny.",
  },
  {
    icon: FolderPlus,
    setting: "Who can add groups",
    value: "Only admins",
    why: "So no one can attach a scam group to your community.",
  },
  {
    icon: LinkIcon,
    setting: "Invite link & QR",
    value: "Share freely",
    why: "Numbers are hidden and only admins post, so it's safe to share the link or QR code publicly.",
  },
];

// Posting / anti-impersonation first, then adding people, then the invite link last.
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
    value: "Off",
    why: "No need to vet joiners — a locked room is safe to walk into. Skip the friction.",
  },
  {
    icon: LinkIcon,
    setting: "Invite link & QR",
    value: "Share freely",
    why: "Post the link or QR anywhere — new joiners can't see members or post.",
  },
];

const mockToggles: { label: string; on: boolean }[] = [
  { label: "Edit group settings", on: false },
  { label: "Send messages", on: false },
  { label: "Add other members", on: false },
];

export default function WhatsAppGuidePage() {
  return (
    <main className="pt-14">
      {/* Compact header */}
      <section className="bg-[#0A1A2F] px-4 py-11 md:py-14">
        <div className="container mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6] mb-3">
            WhatsApp Communities · Free guide
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-3">
            Create a WhatsApp Community scammers can&apos;t get into
          </h1>
          <p className="text-[#94a3b8] text-[15px] md:text-base leading-relaxed max-w-2xl">
            Hide members&apos; numbers and lock posting and admin controls to
            admins only — then share the join link and QR code freely.
          </p>
        </div>
      </section>

      {/* Part 1 — set up */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <SectionLabel>Part 1 · Set it up</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f2137] tracking-tight mb-6">
            Build the community
          </h2>
          <Steps items={setupSteps} accent="#0A1A2F" />
        </div>
      </section>

      {/* Part 2 — lock it down (before adding anyone) */}
      <section className="py-12 md:py-16 bg-[#f8fafc] border-y border-[#e8edf2]">
        <div className="container mx-auto px-6 max-w-3xl">
          <SectionLabel>Part 2 · Lock it down</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f2137] tracking-tight mb-3">
            Admins only — for everything
          </h2>
          <p className="text-[15px] md:text-base text-[#64748b] leading-relaxed mb-5">
            Do this <strong className="text-[#0f2137]">before</strong> you add
            any groups or members, so no one ever lands in an open room. Set
            privacy and posting first, then who can add people, groups, and
            share links — for the{" "}
            <strong className="text-[#0f2137]">community</strong>, then for{" "}
            <strong className="text-[#0f2137]">every group inside it</strong>.
          </p>

          <PlatformNote />

          <div className="mt-6 grid md:grid-cols-[minmax(0,1fr)_240px] gap-6 items-start">
            <div className="space-y-5 min-w-0">
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
      </section>

      {/* Migration — mass-move an existing group in privately (after lockdown) */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="rounded-2xl border border-[#25D366]/30 bg-[#25D366]/[0.06] p-5 md:p-6">
            <div className="flex items-center gap-2.5 mb-2">
              <FaWhatsapp className="text-[#1e9c52]" size={20} />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1e9c52]">
                Already have a group? · Optional
              </p>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-[#0f2137] tracking-tight mb-2">
              Move everyone in — privately
            </h2>
            <p className="text-[15px] text-[#64748b] leading-relaxed mb-6">
              Now the community is locked down, move a whole existing group in
              at once — without members ever seeing each other.
            </p>
            <Steps items={migrationSteps} accent="#1e9c52" />
          </div>
        </div>
      </section>

      {/* Result */}
      <section className="py-12 md:py-16 bg-[#f8fafc] border-y border-[#e8edf2]">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="rounded-2xl bg-gradient-to-r from-[#0A1A2F] via-[#0d2a4a] to-[#0A1A2F] p-6 md:p-8">
            <CheckCircle2 className="h-7 w-7 text-[#25D366] mb-3" />
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-2">
              You&apos;re done
            </h2>
            <p className="text-[#94a3b8] text-[15px] leading-relaxed max-w-2xl">
              Members get every announcement — but can&apos;t see each
              other&apos;s numbers, can&apos;t post links, and can&apos;t add
              anyone. So share the join link and QR freely: a scammer who walks
              in finds a locked room — no numbers to grab, no way to broadcast,
              and no one to add.
            </p>
          </div>
        </div>
      </section>

      {/* Good to know */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <SectionLabel>Good to know</SectionLabel>
          <ul className="space-y-2.5 text-[15px] text-[#64748b] leading-relaxed">
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
                  Watch your admin list.
                </strong>{" "}
                Admins are the only ones who can post or change anything — keep
                that list to people you trust.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Share strip */}
      <section className="py-10 bg-[#f8fafc] border-t border-[#e8edf2]">
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

function Steps({
  items,
  accent,
}: {
  items: { title: string; body: React.ReactNode }[];
  accent: string;
}) {
  return (
    <ol className="space-y-3">
      {items.map((step, i) => (
        <li
          key={step.title}
          className="flex gap-4 bg-white rounded-xl border border-[#e2e8f0] card-shadow p-5"
        >
          <span
            className="flex-shrink-0 w-9 h-9 rounded-full text-white flex items-center justify-center font-heading font-bold text-sm"
            style={{ backgroundColor: accent }}
          >
            {i + 1}
          </span>
          <div>
            <h3 className="text-[16px] font-bold text-[#0f2137] mb-1">
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
    <div className="flex items-start gap-3 rounded-xl bg-[#eff6ff] border border-[#dbeafe] px-4 py-3">
      <Smartphone
        className="h-5 w-5 text-[#1e73dc] flex-shrink-0 mt-0.5"
        strokeWidth={1.75}
      />
      <p className="text-[13px] text-[#1e3a5f] leading-relaxed">
        <strong>iPhone &amp; Android are the same</strong> — only two names
        differ. Android says <em>Group permissions</em> and <em>members</em>;
        iPhone says <em>Group Settings</em> and <em>participants</em>.
      </p>
    </div>
  );
}

function PhoneMock() {
  return (
    <figure className="mx-auto w-full max-w-[240px] md:sticky md:top-24">
      <div className="rounded-[1.75rem] border-[6px] border-[#0A1A2F] bg-white overflow-hidden shadow-xl">
        <div className="bg-[#0A1A2F] text-white px-4 py-2.5">
          <p className="text-[11px] text-[#94a3b8]">Group permissions</p>
          <p className="text-[13px] font-semibold">Only admins can…</p>
        </div>
        <ul className="divide-y divide-[#eef1f6]">
          {mockToggles.map(({ label, on }) => (
            <li
              key={label}
              className="flex items-center justify-between gap-3 px-4 py-3"
            >
              <span className="text-[13px] font-medium text-[#0f2137] leading-tight">
                {label}
              </span>
              <Toggle on={on} />
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="text-[12px] text-[#94a3b8] text-center mt-2.5 leading-relaxed">
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
      <div className="bg-[#0A1A2F] px-5 py-3.5">
        <div className="flex items-center gap-3">
          <Icon className="h-5 w-5 text-[#1E81EF]" strokeWidth={1.75} />
          <h3 className="text-white font-heading font-bold text-[15px] tracking-tight">
            {badge}
          </h3>
        </div>
        <p className="text-[13px] text-[#94a3b8] mt-1 pl-8">{howTo}</p>
      </div>
      <ul className="divide-y divide-[#eef1f6]">
        {items.map(({ icon: RowIcon, setting, value, why }) => (
          <li
            key={setting}
            className="px-5 py-3.5 flex items-start gap-3.5 sm:items-center"
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
        <p className="px-5 py-3.5 bg-[#f8fafc] border-t border-[#eef1f6] text-[13px] text-[#64748b] leading-relaxed">
          {note}
        </p>
      )}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6] mb-2.5">
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
