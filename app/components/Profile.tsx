"use client";

import Image from "next/image";
import Link from "next/link";
import {
  UserRound,
  FileText,
  Target,
  Smartphone,
  Users,
  ArrowRight,
  ArrowUpRight,
  Eye,
  ShieldCheck,
  Share2,
  WalletCards,
  Sparkles,
  ThumbsUp,
  MessageSquare,
  Repeat2,
  CheckCircle2,
} from "lucide-react";

/* =========================================================
   JOURNEY NAV
========================================================= */

const journeyNav = [
  { label: "Build", subtitle: "Your profile", href: "#journey-build", icon: UserRound },
  { label: "Present", subtitle: "Your resume", href: "#journey-resume", icon: FileText },
  { label: "Grow", subtitle: "Jobs & skill gaps", href: "#journey-opportunities", icon: Target },
  { label: "Carry", subtitle: "Credential wallet", href: "#journey-wallet", icon: Smartphone },
  { label: "Connect", subtitle: "Your community", href: "#journey-connect", icon: Users },
];

/* =========================================================
   JOURNEY CARDS — Build Profile / Resume / Job Search
========================================================= */

type JourneyStep = { number: string; title: string; description: string };

type JourneyCard = {
  number: string;
  anchor: string;
  eyebrow: string;
  accent: "orange" | "gold" | "blue";
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  steps: JourneyStep[];
  details: string[];
  cta: string;
  href: string;
};

const ACCENTS = {
  orange: {
    text: "text-solo-orange",
    bg: "bg-solo-orange/10",
    border: "border-solo-orange/20",
    chipBg: "bg-solo-orange/5",
    dot: "bg-solo-orange",
    solid: "bg-solo-orange",
  },
  gold: {
    text: "text-solo-gold",
    bg: "bg-solo-gold/10",
    border: "border-solo-gold/25",
    chipBg: "bg-solo-gold/5",
    dot: "bg-solo-gold",
    solid: "bg-solo-gold",
  },
  blue: {
    text: "text-solo-blue",
    bg: "bg-solo-blue/10",
    border: "border-solo-blue/20",
    chipBg: "bg-solo-blue/5",
    dot: "bg-solo-blue",
    solid: "bg-solo-blue",
  },
} as const;

const journeyCards: JourneyCard[] = [
  {
    number: "01",
    anchor: "journey-build",
    eyebrow: "Build your profile",
    accent: "orange",
    title: "Tell your story. Build your profile.",
    description:
      "Your SOLO profile is more than a form — it's what recruiters, mentors, and faculty see. Bring together who you are, what you have learned, and what you can do.",
    image: "/images/profile/profile.png",
    imageAlt: "SOLO learner profile with about section, skills and resume tools",
    steps: [
      {
        number: "01",
        title: "Import or fill in your details",
        description:
          "Upload an existing resume and SOLO automatically extracts your skills, education, and experience — or fill in your profile manually, step by step.",
      },
      {
        number: "02",
        title: "Add skills & career interests",
        description:
          "Select accurate skills and interests so SOLO can recommend the right courses, internships, and opportunities for you.",
      },
      {
        number: "03",
        title: "Bring your achievements together",
        description:
          "Add education, badges, certificates, projects, internships, and work experience — all in one place.",
      },
    ],
    details: [
      "Personal information",
      "Education & experience",
      "Skills & career interests",
      "Badges & certificates",
      "Live projects",
    ],
    cta: "Build your profile",
    href: "https://app.thesolo.network/signup",
  },
  {
    number: "02",
    anchor: "journey-resume",
    eyebrow: "Generate your resume",
    accent: "gold",
    title: "Turn your profile into a resume.",
    description:
      "SOLO's built-in Resume Generation feature automatically creates a professional, ATS-ready resume using the information already in your learner profile.",
    image: "/images/profile/resumegenerate.jpeg",
    imageAlt: "SOLO resume generation flow — select data, choose a template, download",
    steps: [
      {
        number: "01",
        title: "Select what to include",
        description:
          "Choose which skills, credentials, experiences, and achievements from your profile should appear on your resume.",
      },
      {
        number: "02",
        title: "Choose a template",
        description:
          "Pick from professionally designed, ATS-friendly resume templates.",
      },
      {
        number: "03",
        title: "Download & share",
        description:
          "Your resume includes clickable links to your verified credentials, so employers can confirm your achievements instantly.",
      },
    ],
    details: [
      "ATS-ready formatting",
      "Clickable credential links",
      "Download or share directly",
      "Always up to date",
    ],
    cta: "Generate a resume",
    href: "https://app.thesolo.network/signup",
  },
];

/* =========================================================
   SKILL MATCH LEGEND
========================================================= */

const SKILL_MATCH = [
  {
    label: "Matched Skills",
    description: "Skills you already have that meet the job's requirements.",
    color: "bg-emerald-500",
    chip: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    label: "Partially Matched Skills",
    description: "Related skills you have some experience with, but could develop further.",
    color: "bg-solo-gold",
    chip: "bg-solo-gold/10 text-solo-gold border-solo-gold/25",
  },
  {
    label: "Missing Skills",
    description: "Skills required for the role that aren't yet on your profile.",
    color: "bg-red-400",
    chip: "bg-red-50 text-red-500 border-red-200",
  },
];

/* =========================================================
   WALLET APP FEATURES
========================================================= */

const WALLET_FEATURES = [
  {
    icon: Eye,
    title: "View credentials",
    description: "Access every earned credential and badge in one place, right from your phone.",
  },
  {
    icon: ShieldCheck,
    title: "Check details",
    description: "See the issuer, related skills, and verification status for each credential.",
  },
  {
    icon: Share2,
    title: "Share credentials",
    description: "Digitally share verified credentials with employers, institutions, or your network.",
  },
  {
    icon: WalletCards,
    title: "Carry digital proof",
    description: "Keep your verified achievements accessible anytime — no physical documents needed.",
  },
];

/* =========================================================
   COMMUNITY / SOCIAL PLATFORM
========================================================= */

const communityPosts = [
  { image: "/images/profile/community1.png", alt: "Post from a SOLO learner on the community feed" },
  { image: "/images/profile/community2.png", alt: "A learner sharing a career update on SOLO" },
];

const socialActions = [
  { icon: Sparkles, label: "Create & share posts" },
  { icon: ThumbsUp, label: "Like updates" },
  { icon: MessageSquare, label: "Comment & discuss" },
  { icon: Repeat2, label: "Repost & follow" },
];

/* =========================================================
   SECTION HEADER HELPER
========================================================= */

function Eyebrow({ children, color = "orange" }: { children: React.ReactNode; color?: keyof typeof ACCENTS }) {
  const a = ACCENTS[color];
  return (
    <div className="flex items-center gap-3">
      <span className={`h-px w-8 ${a.solid}`} />
      <p className={`text-xs font-bold uppercase tracking-[0.15em] ${a.text}`}>{children}</p>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Profile() {
  return (
    <section id="profile" className="relative overflow-hidden bg-solo-bg">
      {/* BACKGROUND ATMOSPHERE */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-solo-orange/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[35%] h-[420px] w-[420px] rounded-full bg-solo-blue/8 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #171412 1px, transparent 1px), linear-gradient(to bottom, #171412 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="relative mx-auto max-w-[1240px] px-5 py-16 md:px-6 md:py-20">

        {/* =================================================
            INTRO
        ================================================= */}

        <div className="max-w-[760px]">
          <div className="mb-5 flex items-center gap-3">
            <span className="inline-flex rounded-full border border-solo-orange/15 bg-white px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.16em] text-solo-orange shadow-sm sm:text-[9px]">
              Grow &amp; Showcase
            </span>
          </div>

          <h2 className="max-w-4xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-solo-text sm:text-5xl md:text-6xl">
            Build your story.
            <br />
            <span className="relative inline-block text-solo-orange">
              Show what comes next.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-7 text-solo-muted md:text-lg">
            Your learning journey is more than a list of courses. SOLO brings
            your profile, resume, opportunities, credentials, and community
            together — helping you move from learning, to doing, to your
            next opportunity.
          </p>
        </div>

        {/* =================================================
            JOURNEY NAV
        ================================================= */}

        <div className="mt-10 overflow-x-auto pb-2">
          <div className="flex min-w-max gap-2 sm:min-w-0 sm:flex-wrap">
            {journeyNav.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-solo-orange/30 hover:shadow-[0_10px_25px_rgba(23,20,18,0.07)]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-solo-orange/10 text-solo-orange transition-transform duration-300 group-hover:scale-105">
                    <Icon size={16} strokeWidth={2} />
                  </span>
                  <span className="whitespace-nowrap">
                    <span className="block text-xs font-bold text-solo-text">{item.label}</span>
                    <span className="block text-[10px] text-solo-muted">{item.subtitle}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* =================================================
            JOURNEY CARDS — BUILD PROFILE / RESUME
        ================================================= */}

        <div className="mt-16 flex flex-col gap-16 md:mt-20 md:gap-24">
          {journeyCards.map((card, index) => {
            const a = ACCENTS[card.accent];
            const reversed = index % 2 !== 0;

            return (
              <div
                key={card.number}
                id={card.anchor}
                className="scroll-mt-28"
              >
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 ${reversed ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                >
                  {/* Image */}
                  <div className="relative">
                    <div className={`absolute -inset-3 rounded-[2rem] ${a.chipBg}`} aria-hidden="true" />
                    <div className="relative overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white shadow-[0_20px_60px_rgba(23,20,18,0.08)]">
                      <div className="flex items-center gap-2 border-b border-neutral-100 px-4 py-2.5">
                        <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white ${a.solid}`}>
                          {card.number}
                        </span>
                        <span className="text-[11px] font-semibold text-neutral-500">Real SOLO platform</span>
                      </div>
                      <div className="flex min-h-[220px] items-center justify-center bg-neutral-50 p-3">
                        <Image
                          src={card.image}
                          alt={card.imageAlt}
                          width={1200}
                          height={800}
                          className="h-auto w-full rounded-xl object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <Eyebrow color={card.accent}>{card.eyebrow}</Eyebrow>

                    <h3 className="mt-3 font-heading text-2xl font-extrabold leading-tight tracking-tight text-solo-text md:text-3xl">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-solo-muted md:text-base">
                      {card.description}
                    </p>

                    <div className="mt-6 space-y-4">
                      {card.steps.map((step) => (
                        <div key={step.number} className="flex items-start gap-3">
                          <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-extrabold ${a.bg} ${a.text}`}>
                            {step.number}
                          </span>
                          <div>
                            <h4 className="text-sm font-bold text-solo-text">{step.title}</h4>
                            <p className="mt-0.5 text-xs leading-5 text-solo-muted">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {card.details.map((detail) => (
                        <span
                          key={detail}
                          className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-solo-muted"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={card.href}
                      target="_blank"
                      className={`group mt-7 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-xs font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${a.solid}`}
                    >
                      {card.cta}
                      <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* =================================================
            JOB SEARCH & SKILL GAP IDENTIFICATION
        ================================================= */}

        <div id="journey-opportunities" className="mt-20 scroll-mt-28 md:mt-24">
          <div className="mb-8 max-w-2xl">
            <Eyebrow color="blue">Job search &amp; skill gap identification</Eyebrow>
            <h3 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-solo-text md:text-3xl">
              Find your next opportunity — and see exactly what it takes.
            </h3>
            <p className="mt-2 text-sm leading-6 text-solo-muted">
              All jobs from different domains and organizations live in one
              place, each showing the skills required. Before you apply,
              SOLO&apos;s Skill Match Analysis compares the role&apos;s requirements
              with your profile.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_24px_80px_rgba(23,20,18,0.08)]">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">

              {/* Screenshot */}
              <div className="border-b border-neutral-100 bg-neutral-50 p-4 lg:border-b-0 lg:border-r md:p-6">
                <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
                  <img
                    src="images/profile/skillgap.png"
                    alt="SOLO Skill Match Analysis showing matched, partially matched and missing skills for a job role"
                    className="block h-auto w-full object-contain"
                  />
                </div>
                <div className="mt-4 overflow-hidden rounded-2xl border border-neutral-200 bg-white">
                  <img
                    src="/images/profile/job-search.png"
                    alt="Browsing job opportunities on SOLO"
                    className="block h-auto w-full object-contain"
                  />
                </div>
              </div>

              {/* Legend + copy */}
              <div className="p-6 md:p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-solo-blue">
                  Skill Match Analysis
                </p>
                <h4 className="mt-2 font-heading text-xl font-extrabold text-solo-text">
                  Know where you stand before you apply.
                </h4>
                <p className="mt-3 text-xs leading-5 text-solo-muted">
                  When you open a job role, SOLO compares the skills it
                  requires with the skills on your profile and sorts them
                  into three groups:
                </p>

                <div className="mt-5 space-y-3">
                  {SKILL_MATCH.map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-start gap-3 rounded-xl border p-3 ${item.chip}`}
                    >
                      <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${item.color}`} />
                      <div>
                        <p className="text-xs font-bold">{item.label}</p>
                        <p className="mt-0.5 text-[11px] leading-4 opacity-80">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                  <p className="text-xs font-bold text-solo-text">Then, you choose:</p>
                  <ul className="mt-2 space-y-1.5 text-xs leading-5 text-solo-muted">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="shrink-0 text-solo-blue" />
                      Apply directly, without updating your skills.
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="shrink-0 text-solo-blue" />
                      Close the gap first with a recommended course, internship, or opportunity.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            CREDENTIAL WALLET APP
        ================================================= */}

        <div id="journey-wallet" className="mt-20 scroll-mt-28 md:mt-24">
          <div className="overflow-hidden rounded-[2rem] border border-solo-orange/15 bg-gradient-to-br from-[#fff5f1] to-white">
            <div className="grid gap-10 p-7 md:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

              {/* Copy */}
              <div>
                <Eyebrow color="orange">Credential Wallet App</Eyebrow>
                <h3 className="mt-3 font-heading text-2xl font-extrabold leading-tight tracking-tight text-solo-text md:text-3xl">
                  Your credentials, in your pocket.
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-solo-muted">
                  The SOLO Credential Wallet mobile app lets you securely
                  store, manage, and access your verified credentials and
                  badges directly from your phone — no physical documents
                  required.
                </p>

                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-solo-orange/20 bg-white px-4 py-2 text-xs font-bold text-solo-orange shadow-sm">
                  <Smartphone size={14} />
                  Available on Google Play
                </div>
              </div>

              {/* Feature grid */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {WALLET_FEATURES.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className="group rounded-2xl border border-neutral-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(23,20,18,0.08)]"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-solo-orange/10 text-solo-orange">
                        <Icon size={18} strokeWidth={1.8} />
                      </div>
                      <h4 className="mt-3 text-sm font-bold text-solo-text">{feature.title}</h4>
                      <p className="mt-1 text-xs leading-5 text-solo-muted">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            CONNECT / SOCIAL PLATFORM
        ================================================= */}

        <div id="journey-connect" className="mt-20 scroll-mt-28 md:mt-24">
          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_24px_80px_rgba(23,20,18,0.08)]">
            <div className="grid lg:grid-cols-[1fr_0.9fr]">

              {/* Copy */}
              <div className="p-7 md:p-10">
                <Eyebrow color="blue">Connect · Social Platform</Eyebrow>
                <h3 className="mt-3 font-heading text-2xl font-extrabold leading-tight tracking-tight text-solo-text md:text-3xl">
                  Your journey doesn&apos;t happen alone.
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-solo-muted">
                  Learning becomes more meaningful when you connect with
                  people. SOLO&apos;s social platform brings learners, mentors,
                  institutions, and employers together — so you can showcase
                  achievements, stay motivated, and discover who&apos;s on a
                  similar path.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["Learners", "Mentors", "Institutions", "Employers"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-solo-blue/20 bg-solo-blue/5 px-3 py-1.5 text-[11px] font-semibold text-solo-blue"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                  {socialActions.map((action) => {
                    const Icon = action.icon;
                    return (
                      <div
                        key={action.label}
                        className="flex flex-col items-center gap-1.5 rounded-xl border border-neutral-200 bg-neutral-50 px-2 py-3 text-center"
                      >
                        <Icon size={15} className="text-solo-blue" />
                        <span className="text-[10px] font-semibold leading-tight text-solo-muted">
                          {action.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <a
                  href="https://app.thesolo.network/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-solo-blue px-5 py-3 text-xs font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  Explore the community
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

              {/* Community feed preview */}
              <div className="flex flex-col justify-center gap-3 border-t border-neutral-100 bg-neutral-50/70 p-6 lg:border-l lg:border-t-0 md:p-7">
                {communityPosts.map((post) => (
                  <div
                    key={post.image}
                    className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <img
                      src={post.image}
                      alt={post.alt}
                      className="block h-auto w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
