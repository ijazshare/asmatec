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
import CopyLinkButton from "@/components/CopyLinkButton";

// ── Screenshots ────────────────────────────────────────────────
// Ordered by the workflow that classified all 17 raw shots and mapped
// the 12 keepers to guide steps. Files live in /public/whatsapp-guide.
type Shot = { src: string; w: number; h: number; cap: string };
const shot = (n: string, cap: string, h = 1559): Shot => ({
  src: `/whatsapp-guide/${n}.webp`,
  w: 720,
  h,
  cap,
});

const IMG = {
  createCommunity: shot(
    "01-create-community",
    "A new community auto-creates an Announcement group and a General group.",
  ),
  adminConfirm: shot(
    "02-admin-confirmation",
    "You’re made a community admin — tap Continue.",
  ),
  deactivateGeneral: shot(
    "03-deactivate-general",
    "Open General → scroll down → Deactivate group to remove it.",
  ),
  phonePrivacy: shot(
    "04-phone-privacy",
    "In Community info, phone-number privacy sits with the other privacy controls.",
  ),
  yourNumber: shot(
    "05-your-number-visible",
    "Members can see your number because you’re the admin — the owner’s can’t be hidden.",
  ),
  communityMenu: shot(
    "06-community-menu",
    "Tap ⋯ → Community settings to reach the controls.",
  ),
  communityAdmins: shot(
    "07-community-add-groups-admins",
    "Set “Who can add new members / groups” to Only admins.",
  ),
  groupSettingsEntry: shot(
    "08-group-settings-entry",
    "Open a group → Group permissions.",
  ),
  groupPermsOff: shot(
    "09-group-permissions-off",
    "Turn every “Members can…” option off — grey = locked to admins.",
  ),
  addExisting: shot(
    "10-add-existing-group",
    "Add existing groups → pick the group you already run.",
    706,
  ),
  hideConfirm: shot(
    "11-hide-group-confirm",
    "Choose Hidden and confirm — visibility can’t be changed later.",
  ),
  addedHidden: shot(
    "12-group-added-hidden",
    "The group is now inside the community, marked hidden (eye-slash).",
  ),
};

// ── Copy (mirrors the text-only guide) ─────────────────────────
const setupSteps: { title: string; body: React.ReactNode; shots: Shot[] }[] = [
  {
    title: "Create the community",
    body: (
      <>
        Open the <Kbd>Communities</Kbd> tab → <Kbd>New community</Kbd>. WhatsApp
        makes two groups for you: an <strong>Announcement</strong> group (admins
        post, everyone reads) and a <strong>General</strong> group.
      </>
    ),
    shots: [IMG.createCommunity, IMG.adminConfirm],
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
    shots: [IMG.deactivateGeneral],
  },
  {
    title: "Check numbers are hidden",
    body: (
      <>
        <strong>Phone number privacy</strong> is on by default and can&apos;t
        be turned off — it hides members&apos; numbers from each other. Just
        open the group settings and confirm it&apos;s there.{" "}
        <span className="text-[#64748b]">Yours, as the owner, still shows.</span>
      </>
    ),
    shots: [IMG.phonePrivacy, IMG.yourNumber],
  },
];

const migrationSteps: { title: string; body: React.ReactNode; shot: Shot }[] = [
  {
    title: "Add your existing group as Hidden",
    body: (
      <>
        Add the group you already run into the community. When asked for
        visibility, choose <strong>Hidden</strong> — current members won&apos;t
        see it. <span className="text-[#64748b]">It can&apos;t be changed later.</span>
      </>
    ),
    shot: IMG.addExisting,
  },
  {
    title: "Confirm the Hidden choice",
    body: (
      <>
        WhatsApp warns you the choice is permanent. Confirm to bring the whole
        group in <strong>without members seeing each other</strong>.
      </>
    ),
    shot: IMG.hideConfirm,
  },
  {
    title: "Everyone's in — quietly",
    body: (
      <>
        Your whole group is now inside the private community with numbers
        hidden. Repeat for each group you want to move in.
      </>
    ),
    shot: IMG.addedHidden,
  },
];

type Setting = { icon: LucideIcon; setting: string; value: string; why: string };

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

export default function WhatsAppGuide({ guideUrl }: { guideUrl: string }) {
  return (
    <main className="pt-14">
      {/* Compact header */}
      <section className="bg-[#0A1A2F] px-4 py-11 md:py-14">
        <div className="container mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3b82f6] mb-3">
            WhatsApp Communities · Illustrated guide
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-3">
            Create a WhatsApp Community scammers can&apos;t get into
          </h1>
          <p className="text-[#94a3b8] text-[15px] md:text-base leading-relaxed max-w-2xl">
            Hide members&apos; numbers and lock posting and admin controls to
            admins only — then share the join link and QR code freely. Every
            step below is shown on a real phone.
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
          <ol className="space-y-4">
            {setupSteps.map((step, i) => (
              <li
                key={step.title}
                className="bg-white rounded-xl border border-[#e2e8f0] card-shadow p-5 md:p-6"
              >
                <div className="flex gap-4">
                  <StepNumber n={i + 1} accent="#0A1A2F" />
                  <div>
                    <h3 className="text-[16px] font-bold text-[#0f2137] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-[15px] text-[#64748b] leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
                <PhoneRow shots={step.shots} />
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Part 2 — lock it down */}
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

          <div className="mt-6 space-y-8">
            <div>
              <SettingsCard
                badge="Community settings"
                icon={Users}
                howTo="Tap ⋯ (top right) → Community settings"
                items={communitySettings}
              />
              <PhoneRow shots={[IMG.communityMenu, IMG.communityAdmins]} />
            </div>
            <div>
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
              <PhoneRow shots={[IMG.groupSettingsEntry, IMG.groupPermsOff]} />
            </div>
          </div>
        </div>
      </section>

      {/* Migration */}
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
            <div className="grid gap-5 sm:grid-cols-3">
              {migrationSteps.map((step, i) => (
                <div
                  key={step.title}
                  className="bg-white rounded-xl border border-[#e2e8f0] card-shadow p-4 flex flex-col"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <StepNumber n={i + 1} accent="#1e9c52" sm />
                    <h3 className="text-[15px] font-bold text-[#0f2137] leading-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[13px] text-[#64748b] leading-relaxed mb-4">
                    {step.body}
                  </p>
                  <div className="mt-auto">
                    <Phone shot={step.shot} />
                  </div>
                </div>
              ))}
            </div>
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
              url={guideUrl}
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

// ── Building blocks ────────────────────────────────────────────
function Phone({ shot }: { shot: Shot }) {
  return (
    <figure className="mx-auto w-full max-w-[220px]">
      <div className="rounded-[1.75rem] border-[6px] border-[#0A1A2F] bg-[#0A1A2F] overflow-hidden shadow-xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={shot.src}
          alt={shot.cap}
          width={shot.w}
          height={shot.h}
          loading="lazy"
          className="block w-full h-auto"
        />
      </div>
      <figcaption className="mt-2.5 text-center text-[12px] text-[#64748b] leading-snug">
        {shot.cap}
      </figcaption>
    </figure>
  );
}

function PhoneRow({ shots }: { shots: Shot[] }) {
  if (!shots?.length) return null;
  return (
    <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-6">
      {shots.map((s) => (
        <div key={s.src} className="w-[45%] max-w-[220px] sm:w-auto">
          <Phone shot={s} />
        </div>
      ))}
    </div>
  );
}

function StepNumber({ n, accent, sm }: { n: number; accent: string; sm?: boolean }) {
  return (
    <span
      className={`flex-shrink-0 rounded-full text-white flex items-center justify-center font-heading font-bold ${
        sm ? "w-7 h-7 text-[13px]" : "w-9 h-9 text-sm"
      }`}
      style={{ backgroundColor: accent }}
    >
      {n}
    </span>
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
        <strong>iPhone &amp; Android are nearly identical</strong> — a few
        labels differ (Android often says <em>members</em> where iPhone says{" "}
        <em>participants</em>). Screenshots below are from iPhone.
      </p>
    </div>
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
