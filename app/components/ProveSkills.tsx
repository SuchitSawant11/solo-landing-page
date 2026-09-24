"use client";

import { useState } from "react";

const SOLO_SCREENSHOTS = {
  enrollInOpportunity:
    "/opportunities.png",

  credentialWallet:
    "/images/prove-skills/credential-wallet.png",

  requestCompletion:
    "/images/prove-skills/request-completion.png",

  credentialOne:
    "/images/prove-skills/credential-react-redux.png",

  credentialTwo:
    "/images/prove-skills/credential-deployment.png",

  credentialThree:
    "/images/prove-skills/credential-reactjs.png",
};

/* =========================================================
   PROOF FEATURES
   ========================================================= */

const PROOF_FEATURES = [
  {
    number: "01",
    title: "Badges & Credentials",
    description:
      "Earn badges and credentials that recognize the skills and milestones you achieve.",
    accent: "border-solo-gold/30 bg-solo-gold/10",
    numberColor: "text-solo-gold",
  },
  {
    number: "02",
    title: "Skills Profile",
    description:
      "Build a clear skills profile that highlights what you have learned and what you can do.",
    accent: "border-solo-orange/25 bg-solo-orange/5",
    numberColor: "text-solo-orange",
  },
  {
    number: "03",
    title: "Completed Projects",
    description:
      "Showcase practical projects that demonstrate how you apply your knowledge in real situations.",
    accent: "border-solo-blue/25 bg-solo-blue/5",
    numberColor: "text-solo-blue",
  },
  {
    number: "04",
    title: "Track Achievements",
    description:
      "Keep track of completed challenges, milestones, badges, and other achievements.",
    accent: "border-solo-orange/25 bg-solo-orange/5",
    numberColor: "text-solo-orange",
  },
  {
    number: "05",
    title: "Build Evidence",
    description:
      "Create meaningful evidence of your capabilities through projects, assessments, and completed work.",
    accent: "border-solo-blue/25 bg-solo-blue/5",
    numberColor: "text-solo-blue",
  },
];

/* =========================================================
   CREDENTIAL PROCESS
   ========================================================= */

const CREDENTIAL_STEPS = [
  {
    number: "01",
    shortTitle: "Enroll",
    title: "Enroll in the Opportunity",
    description:
      "Browse or get recommended a course, internship, live project, or hackathon, then click Enroll to join it.",
    color: "text-solo-orange",
    bg: "bg-solo-orange/10",
    border: "border-solo-orange/20",
  },
  {
    number: "02",
    shortTitle: "Complete",
    title: "Complete the Requirements",
    description:
      "For SOLO-hosted courses, complete the modules, assignments, quizzes, and assessments. For external courses, complete the required work on the external platform using the same email ID registered on SOLO. For hackathons and live projects, complete the assigned challenges, deliverables, or milestones.",
    color: "text-solo-gold",
    bg: "bg-solo-gold/10",
    border: "border-solo-gold/20",
  },
  {
    number: "03",
    shortTitle: "Request",
    title: "Request Completion",
    description:
      "Return to SOLO and go to Manage → Enrollments. Select the opportunity, click More → Request Completion, and submit evidence of your work along with a short description.",
    color: "text-solo-blue",
    bg: "bg-solo-blue/10",
    border: "border-solo-blue/20",
  },
  {
    number: "04",
    shortTitle: "Assessment",
    title: "Your Submission Gets Assessed",
    description:
      "SOLO, or the relevant institution for institution-run opportunities, reviews the evidence you submitted. For challenges, hackathons, and live projects, your work is evaluated against the relevant assessment criteria.",
    color: "text-solo-orange",
    bg: "bg-solo-orange/10",
    border: "border-solo-orange/20",
  },
  {
    number: "05",
    shortTitle: "Issued",
    title: "Credential Issued",
    description:
      "Once your completion is approved, SOLO issues your verified credential — a badge or certificate — and it appears in your Credential Wallet.",
    color: "text-solo-blue",
    bg: "bg-solo-blue/10",
    border: "border-solo-blue/20",
  },
];

/* =========================================================
   REAL SOLO CREDENTIALS
   ========================================================= */

const CREDENTIALS = [
  {
    id: 1,
    type: "Certificate",
    title: "React Redux Toolkit",
    issuer: "SPARK Technologies",
    skills: "6 Skills",
    issued: "August 14, 2026",
    expires: "August 14, 2031",
    image: SOLO_SCREENSHOTS.credentialOne,
    accent: "border-solo-blue/20",
  },
  {
    id: 2,
    type: "Open Badge",
    title: "Deployment & Version Control",
    issuer: "SPARK Technologies",
    skills: "2 Skills",
    issued: "September 5, 2026",
    expires: "September 7, 2031",
    image: SOLO_SCREENSHOTS.credentialTwo,
    accent: "border-solo-gold/20",
  },
  {
    id: 3,
    type: "Open Badge",
    title: "ReactJS",
    issuer: "SPARK Technologies",
    skills: "8 Skills",
    issued: "August 7, 2026",
    expires: "August 7, 2031",
    image: SOLO_SCREENSHOTS.credentialThree,
    accent: "border-solo-blue/20",
  },
];

/* =========================================================
   CREDENTIAL SHARING
   ========================================================= */

function getCredentialShareUrl(credentialTitle: string) {
  if (typeof window === "undefined") {
    return "";
  }

  const url = new URL(window.location.href);

  url.hash = `credential-${credentialTitle
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;

  return url.toString();
}

function shareCredential(
  credential: (typeof CREDENTIALS)[number]
) {
  const shareUrl = getCredentialShareUrl(credential.title);

  if (!shareUrl) {
    return;
  }

  const shareText = `I earned the ${credential.title} credential through SOLO.`;

  if (navigator.share) {
    navigator
      .share({
        title: `${credential.title} | SOLO`,
        text: shareText,
        url: shareUrl,
      })
      .catch(() => {
        // User cancelled the share dialog.
      });

    return;
  }

  window.open(
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      shareUrl
    )}`,
    "_blank",
    "noopener,noreferrer"
  );
}

function shareCredentialByEmail(
  credential: (typeof CREDENTIALS)[number]
) {
  const shareUrl = getCredentialShareUrl(credential.title);

  const subject = encodeURIComponent(
    `My ${credential.title} credential`
  );

  const body = encodeURIComponent(
    `I wanted to share my ${credential.title} credential earned through SOLO.\n\nView credential: ${shareUrl}`
  );

  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

/* =========================================================
   SCREENSHOT COMPONENT
   ========================================================= */

function ScreenshotPreview({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={`block h-full w-full object-contain ${className}`}
    />
  );
}

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function ProveSkills() {
  const [activeStep, setActiveStep] = useState(0);

  const [activeCredential, setActiveCredential] =
    useState<number | null>(null);

  const [showSharePanel, setShowSharePanel] = useState(false);

  return (
    <section
      id="prove"
      className="relative overflow-hidden bg-solo-bg"
    >
      {/* =================================================
                BACKGROUND ATMOSPHERE
            ================================================= */}

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

      <div className="relative mx-auto max-w-[1240px] px-5 py-16 md:py-24">

        {/* ===================================================
            SECTION INTRO
            =================================================== */}

        <div className="max-w-[760px]">

          <div className="mb-5 flex items-center gap-3">
            <span className="inline-flex rounded-full border border-solo-orange/15 bg-white px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.16em] text-solo-orange shadow-sm sm:text-[9px]">
              Prove Your SKills
            </span>
          </div>

          <h2 className="max-w-4xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-solo-text sm:text-5xl md:text-6xl">
            Prove your skills
            <br />

            <span className="relative inline-block text-solo-orange">
              with real evidence.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-7 text-solo-muted md:text-lg">
            Move beyond lessons and demonstrate what you have learned through
            projects, achievements, credentials, and real evidence of your
            capabilities.
          </p>
        </div>

        {/* ===================================================
            01 — PROOF SYSTEM
            =================================================== */}

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_24px_80px_rgba(23,20,18,0.08)]">

          {/* Top information bar */}

          <div className="grid border-b border-black/10 lg:grid-cols-[1fr_auto]">

            <div className="p-5 md:p-7">

              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-solo-orange">
                Skills & Evidence
              </p>

              <h3 className="mt-2 font-heading text-2xl font-extrabold text-solo-text md:text-3xl">
                Show What You Can Do.
              </h3>

              <p className="mt-3 max-w-2xl text-xs leading-5 text-solo-muted md:text-sm">
                Turn your learning into visible proof through skills, projects,
                achievements, credentials, and practical evidence.
              </p>

            </div>

            <div className="flex items-center border-t border-black/10 bg-solo-orange/5 p-5 lg:border-l lg:border-t-0 md:p-7">

              <a
                href="#profile"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-solo-orange bg-white px-5 py-3 text-xs font-bold text-solo-orange transition-all duration-300 hover:-translate-y-1 hover:bg-solo-orange hover:text-white hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-solo-orange lg:w-auto"
              >
                View Profile

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

            </div>
          </div>

          {/* Main board */}

          <div className="grid lg:grid-cols-[0.75fr_1.25fr]">

            {/* Left proof outcome */}

            <aside className="relative overflow-hidden border-b border-black/10 bg-solo-blue/5 p-6 md:p-7 lg:border-b-0 lg:border-r">

              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-solo-blue/10 blur-2xl" />

              <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-solo-gold/20 blur-2xl" />

              <div className="relative">

                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-solo-blue">
                  Your Proof System
                </p>

                <h3 className="mt-3 font-heading text-3xl font-extrabold leading-tight text-solo-text">
                  Learning is stronger when you can show it.
                </h3>

                <p className="mt-4 text-xs leading-5 text-solo-muted">
                  Each completed activity becomes visible evidence of your
                  effort, growth, and capability.
                </p>

                <div className="mt-8 rounded-2xl border border-solo-blue/20 bg-white p-5 shadow-sm">

                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-solo-blue">
                    Evidence Progress
                  </p>

                  <div className="mt-3 flex items-end justify-between">

                    <p className="font-heading text-4xl font-extrabold text-solo-text">
                      05
                    </p>

                    <span className="rounded-full bg-solo-blue/10 px-3 py-1.5 text-[10px] font-bold text-solo-blue">
                      Proof Areas
                    </span>

                  </div>

                  <div className="mt-5 flex gap-1.5">

                    <span className="h-2 flex-1 rounded-full bg-solo-gold" />

                    <span className="h-2 flex-1 rounded-full bg-solo-orange" />

                    <span className="h-2 flex-1 rounded-full bg-solo-blue" />

                    <span className="h-2 flex-1 rounded-full bg-solo-orange" />

                    <span className="h-2 flex-1 rounded-full bg-solo-blue" />

                  </div>

                  <p className="mt-3 text-[10px] leading-4 text-solo-muted">
                    Credentials, skills, projects, achievements, and evidence.
                  </p>

                </div>

                <div className="mt-8">

                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-solo-orange">
                    Your outcome
                  </p>

                  <p className="mt-2 font-heading text-lg font-bold text-solo-text">
                    A profile that shows more than marks.
                  </p>

                </div>

              </div>
            </aside>

            {/* Right evidence cards */}

            <div className="p-5 md:p-7">

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-solo-orange">
                  Build Your Evidence
                </p>

                <h3 className="mt-1 font-heading text-xl font-extrabold text-solo-text">
                  Five ways to prove your growth
                </h3>

              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">

                {PROOF_FEATURES.map((feature, index) => (

                  <article
                    key={feature.title}
                    className={`group relative overflow-hidden rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${feature.accent
                      } ${index === 4
                        ? "sm:col-span-2"
                        : ""
                      }`}
                  >

                    <div className="flex items-start justify-between gap-3">

                      <span
                        className={`text-[10px] font-extrabold ${feature.numberColor}`}
                      >
                        {feature.number}
                      </span>

                      <span className="rounded-full border border-black/5 bg-white/70 px-2 py-1 text-[9px] font-bold text-solo-muted">
                        Evidence
                      </span>

                    </div>

                    <h4 className="mt-8 font-heading text-base font-bold text-solo-text">
                      {feature.title}
                    </h4>

                    <p className="mt-2 max-w-md text-[11px] leading-5 text-solo-muted">
                      {feature.description}
                    </p>

                    <div
                      className={`absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full ${index === 0
                        ? "bg-solo-gold"
                        : index === 2 || index === 4
                          ? "bg-solo-blue"
                          : "bg-solo-orange"
                        }`}
                    />

                  </article>

                ))}

              </div>

            </div>
          </div>
        </div>

        {/* ===================================================
            02 — HOW DO YOU RECEIVE CREDENTIALS?
            =================================================== */}

        <div className="mt-24">

          {/* Heading */}

          <div className="mb-6 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-solo-orange" />

              <p className="text-xs font-bold uppercase tracking-[0.15em] text-solo-orange">
                How Credentials Work
              </p>
            </div>

            <h3 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-solo-text md:text-3xl">
              How do you receive credentials?
            </h3>

            <p className="mt-2 text-sm leading-6 text-solo-muted">
              Every credential on SOLO — a badge or a certificate — comes
              through a simple, verifiable pipeline: enroll, complete, get
              assessed, and get issued.
            </p>
          </div>



          {/* =================================================
              DESKTOP STEP NAVIGATION
              ================================================= */}

          <div className="mt-10 hidden items-center md:flex">

            {CREDENTIAL_STEPS.map((step, index) => (

              <div
                key={step.number}
                className="flex flex-1 items-center"
              >

                <button
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={`group flex items-center gap-3 text-left ${index === activeStep
                    ? "text-solo-text"
                    : "text-solo-muted"
                    }`}
                >

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[10px] font-extrabold transition-all duration-300 ${index === activeStep
                      ? `${step.bg} ${step.color} ring-4 ring-white shadow-sm`
                      : "bg-neutral-100 text-neutral-500 group-hover:bg-neutral-200"
                      }`}
                  >
                    {step.number}
                  </span>

                  <span className="hidden text-[10px] font-bold uppercase tracking-[0.08em] lg:block">
                    {step.shortTitle}
                  </span>

                </button>

                {index < CREDENTIAL_STEPS.length - 1 && (
                  <div className="mx-3 h-px flex-1 bg-neutral-200" />
                )}

              </div>

            ))}

          </div>

          {/* =================================================
              MOBILE STEP CARDS
              ================================================= */}

          <div className="mt-8 space-y-3 md:hidden">

            {CREDENTIAL_STEPS.map((step, index) => (

              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`w-full rounded-2xl border p-4 text-left transition-all duration-300 ${index === activeStep
                  ? `${step.border} bg-white shadow-[0_12px_35px_rgba(23,20,18,0.08)]`
                  : "border-neutral-100 bg-white hover:border-neutral-200"
                  }`}
              >

                <div className="flex items-start gap-4">

                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-extrabold ${step.bg} ${step.color}`}
                  >
                    {step.number}
                  </div>

                  <div className="min-w-0 flex-1">

                    <div className="flex items-start justify-between gap-3">

                      <div>

                        <p
                          className={`text-[10px] font-bold uppercase tracking-[0.14em] ${step.color}`}
                        >
                          Step {step.number}
                        </p>

                        <h4 className="mt-1 font-heading text-sm font-bold text-solo-text">
                          {step.title}
                        </h4>

                      </div>

                      <span
                        className={`mt-1 text-sm transition-transform duration-300 ${index === activeStep
                          ? "rotate-90 text-solo-orange"
                          : "text-neutral-400"
                          }`}
                      >
                        →
                      </span>

                    </div>

                    {index === activeStep && (
                      <p className="mt-3 text-xs leading-5 text-solo-muted">
                        {step.description}
                      </p>
                    )}

                  </div>

                </div>

              </button>

            ))}

          </div>

          {/* =================================================
              ACTIVE STEP — DESKTOP
              ================================================= */}

          <div className="mt-8 hidden overflow-hidden rounded-[1.75rem] border border-neutral-100 bg-white shadow-[0_18px_50px_rgba(23,20,18,0.06)] md:block">

            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">

              {/* Step information */}

              <div className="flex flex-col justify-center p-7 md:p-9">

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${CREDENTIAL_STEPS[activeStep].bg} ${CREDENTIAL_STEPS[activeStep].color}`}
                >
                  <span className="font-heading text-sm font-extrabold">
                    {CREDENTIAL_STEPS[activeStep].number}
                  </span>
                </div>

                <p
                  className={`mt-6 text-[10px] font-bold uppercase tracking-[0.16em] ${CREDENTIAL_STEPS[activeStep].color}`}
                >
                  Step {CREDENTIAL_STEPS[activeStep].number}
                </p>

                <h4 className="mt-2 font-heading text-2xl font-extrabold leading-tight text-solo-text md:text-3xl">
                  {CREDENTIAL_STEPS[activeStep].title}
                </h4>

                <p className="mt-4 max-w-xl text-sm leading-6 text-solo-muted">
                  {CREDENTIAL_STEPS[activeStep].description}
                </p>

                {/* Step dots */}

                <div className="mt-7 flex gap-2">

                  {CREDENTIAL_STEPS.map((step, index) => (

                    <button
                      key={step.number}
                      type="button"
                      aria-label={`Go to step ${index + 1}`}
                      onClick={() => setActiveStep(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${index === activeStep
                        ? "w-10 bg-solo-orange"
                        : "w-4 bg-neutral-200 hover:bg-neutral-300"
                        }`}
                    />

                  ))}

                </div>

              </div>

              {/* Step visual */}

              <div className="border-t border-neutral-100 bg-neutral-50 p-5 lg:border-l lg:border-t-0 md:p-7">

                {/* STEP 1 */}

                {activeStep === 0 && (

                  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">

                    <div className="border-b border-neutral-100 px-4 py-3">

                      <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-solo-blue">
                        Real SOLO workflow
                      </p>

                      <p className="mt-1 text-xs font-bold text-solo-text">
                        Enroll in the Opportunity
                      </p>

                    </div>

                    <div className="max-h-[420px] overflow-hidden bg-neutral-50 p-3">

                      <ScreenshotPreview
                        src={SOLO_SCREENSHOTS.enrollInOpportunity}
                        alt="SOLO Enroll in Opportunity screen"
                        className="max-h-[390px] rounded-xl object-contain"
                      />

                    </div>

                  </div>

                )}

                {/* STEP 2 */}

                {activeStep === 1 && (

                  <div className="flex min-h-[320px] items-center justify-center overflow-hidden rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">

                    <div className="w-full">

                      <div className="mb-3 flex items-center justify-between">

                        <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-solo-gold">
                          SOLO learning flow
                        </span>

                        <span className="rounded-full bg-solo-gold/10 px-2 py-1 text-[8px] font-bold text-solo-gold">
                          Complete
                        </span>

                      </div>

                      <div className="flex min-h-[280px] items-center justify-center rounded-xl bg-neutral-50 p-4">

                        <div className="text-center">

                          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-solo-gold/10">

                            <span className="font-heading text-lg font-extrabold text-solo-gold">
                              02
                            </span>

                          </div>

                          <p className="mt-4 font-heading text-sm font-bold text-solo-text">
                            Complete the requirements
                          </p>

                          <p className="mx-auto mt-2 max-w-sm text-[10px] leading-5 text-solo-muted">
                            Finish modules, assignments, quizzes, assessments,
                            challenges, deliverables, or project milestones.
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>

                )}

                {/* STEP 3 — REQUEST COMPLETION */}

                {activeStep === 2 && (

                  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">

                    <div className="border-b border-neutral-100 px-4 py-3">

                      <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-solo-blue">
                        Real SOLO workflow
                      </p>

                      <p className="mt-1 text-xs font-bold text-solo-text">
                        Request Completion
                      </p>

                    </div>

                    <div className="max-h-[420px] overflow-hidden bg-neutral-50 p-3">

                      <ScreenshotPreview
                        src={SOLO_SCREENSHOTS.requestCompletion}
                        alt="SOLO Request Completion screen"
                        className="max-h-[390px] rounded-xl object-contain"
                      />

                    </div>

                  </div>

                )}

                {/* STEP 4 — ASSESSMENT */}

                {activeStep === 3 && (

                  <div className="flex min-h-[320px] items-center justify-center rounded-2xl border border-neutral-200 bg-white p-8">

                    <div className="max-w-sm text-center">

                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-solo-orange/10">

                        <span className="font-heading text-xl font-extrabold text-solo-orange">
                          04
                        </span>

                      </div>

                      <p className="mt-5 font-heading text-lg font-bold text-solo-text">
                        Your evidence gets assessed
                      </p>

                      <p className="mt-2 text-xs leading-5 text-solo-muted">
                        SOLO or the relevant institution reviews your submitted
                        evidence against the requirements and assessment
                        criteria.
                      </p>

                    </div>

                  </div>

                )}

                {/* STEP 5 — CREDENTIAL ISSUED */}

                {activeStep === 4 && (

                  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">

                    <div className="border-b border-neutral-100 px-4 py-3">

                      <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-solo-blue">
                        Real SOLO platform
                      </p>

                      <p className="mt-1 text-xs font-bold text-solo-text">
                        Credential Wallet
                      </p>

                    </div>

                    <div className="max-h-[420px] overflow-hidden bg-neutral-50 p-3">

                      <ScreenshotPreview
                        src={SOLO_SCREENSHOTS.credentialWallet}
                        alt="SOLO Credential Wallet"
                        className="max-h-[390px] rounded-xl object-contain"
                      />

                    </div>

                  </div>

                )}

              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            EXTERNAL COURSE NOTE
            =================================================== */}

        <div className="mt-6 rounded-2xl border border-solo-gold/20 bg-solo-gold/5 p-5 md:p-6">

          <div className="flex items-start gap-4">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-solo-gold/15 text-sm font-bold text-solo-gold">
              i
            </div>

            <div>

              <p className="font-heading text-sm font-bold text-solo-text">
                Taken an external course?
              </p>

              <p className="mt-1 text-xs leading-5 text-solo-muted">
                If you have taken an external course listed on SOLO, you can
                upload the external certificate when requesting completion.
              </p>

            </div>

          </div>

        </div>

        {/* What Counts as Proof */}
        <section className="mt-24">

          <div className="mb-6 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-solo-orange" />

              <p className="text-xs font-bold uppercase tracking-[0.15em] text-solo-orange">
                Evidence matters
              </p>
            </div>

            <h3 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-solo-text md:text-3xl">
              What counts as proof?
            </h3>

            <p className="mt-2 text-sm leading-6 text-solo-muted">
              Your learning can be demonstrated in different ways. SOLO uses
              evidence of your work and completed requirements to verify your
              achievement
            </p>
          </div>


          <div className="flex flex-col gap-4 lg:flex-row">
            {[
              {
                number: "01",
                title: "Certificates",
                description:
                  "Certificates from completed courses or learning experiences.",
                icon: "📜",
              },
              {
                number: "02",
                title: "Badges",
                description:
                  "Verified badges that represent completed skills or achievements.",
                icon: "🏅",
              },
              {
                number: "03",
                title: "Projects",
                description:
                  "Projects and completed work that demonstrate practical skills.",
                icon: "🛠️",
              },
              {
                number: "04",
                title: "Challenges",
                description:
                  "Challenges, deliverables, and milestones completed during opportunities.",
                icon: "🎯",
              },
              {
                number: "05",
                title: "Assessments",
                description:
                  "Assignments, quizzes, assessments, and other required evaluations.",
                icon: "✓",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="group min-w-0 flex-1 rounded-2xl border border-neutral-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-[0_10px_25px_rgba(23,20,18,0.07)]"
              >
                {/* Icon */}
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF1EC] text-xl">
                  {item.icon}
                </div>

                {/* Number */}
                <span className="text-xs font-semibold tracking-wider text-neutral-400">
                  {item.number}
                </span>

                {/* Title */}
                <h3 className="mt-2 text-base font-semibold text-neutral-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-5 text-neutral-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================
            03 — CREDENTIAL WALLET
            =================================================== */}

        <div className="mt-24">

          {/* Heading */}

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

            <div className="mb-6 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-solo-orange" />

                <p className="text-xs font-bold uppercase tracking-[0.15em] text-solo-orange">
                  Credential Wallet
                </p>
              </div>

              <h3 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-solo-text md:text-3xl">
                Your learning, turned into proof.
              </h3>

              <p className="mt-2 text-sm leading-6 text-solo-muted">
                Once your completion is approved, your verified badges and
                certificates appear in your Credential Wallet — ready to
                showcase as part of your learner profile.
              </p>
            </div>

          </div>

          {/* Wallet container */}

          <div className="mt-3 overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_24px_80px_rgba(23,20,18,0.08)]">

            {/* Wallet header */}

            <div className="flex flex-col gap-4 border-b border-neutral-100 bg-neutral-50/70 p-5 sm:flex-row sm:items-center sm:justify-between md:p-7">

              <div>

                <p className="font-heading text-base font-bold text-solo-text">
                  Credentials Issued
                </p>

                <p className="mt-1 text-xs text-solo-muted">
                  Badges and certificates earned through your SOLO journey.
                </p>

              </div>

              <div className="flex w-fit items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5">

                <span className="h-2 w-2 rounded-full bg-green-500" />

                <span className="text-[10px] font-bold text-solo-muted">
                  Verified credentials
                </span>

              </div>

            </div>

            {/* =================================================
                CREDENTIAL CARDS
                ================================================= */}

            <div className="grid gap-5 p-5 md:grid-cols-3 md:p-7">

              {CREDENTIALS.map((credential) => {

                const isActive =
                  activeCredential === credential.id;

                return (
                  <button
                    key={credential.id}
                    type="button"
                    onClick={() =>
                      setActiveCredential(
                        isActive
                          ? null
                          : credential.id
                      )
                    }
                    className={`group overflow-hidden rounded-2xl border bg-white text-left transition-all duration-300 ${credential.accent
                      } ${isActive
                        ? "shadow-[0_18px_45px_rgba(23,20,18,0.12)]"
                        : "hover:-translate-y-1 hover:border-neutral-200 hover:shadow-[0_14px_35px_rgba(23,20,18,0.08)]"
                      }`}
                  >

                    {/* Credential image */}

                    <div className="relative flex h-[210px] items-center justify-center overflow-hidden bg-neutral-50 p-5">

                      <img
                        src={credential.image}
                        alt={`${credential.title} credential`}
                        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                      />

                      {/* Verified */}

                      <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white bg-white/95 px-2.5 py-1.5 text-[9px] font-bold text-solo-text shadow-sm backdrop-blur">

                        <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-green-500 text-[8px] text-white">
                          ✓
                        </span>

                        Verified

                      </span>

                    </div>

                    {/* Information */}

                    <div className="border-t border-neutral-100 p-4">

                      <div className="flex items-center justify-between gap-3">

                        <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-solo-orange">
                          {credential.type}
                        </span>

                        <span className="text-xs text-neutral-400 transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>

                      </div>

                      <h4 className="mt-2 font-heading text-sm font-bold text-solo-text">
                        {credential.title}
                      </h4>

                      <p className="mt-1 text-[10px] text-solo-muted">
                        {credential.issuer}
                      </p>

                      <div className="mt-3 flex items-center justify-between gap-2">

                        <span className="rounded-full bg-solo-orange/10 px-2.5 py-1 text-[9px] font-bold text-solo-orange">
                          {credential.skills}
                        </span>

                        <span className="text-[9px] font-semibold text-solo-muted">
                          View Credential
                        </span>

                      </div>

                    </div>

                  </button>
                );

              })}

            </div>

            {/* =================================================
                SELECTED CREDENTIAL DETAILS
                ================================================= */}

            {activeCredential && (

              <div className="border-t border-neutral-100 bg-solo-orange/5 p-5 md:p-7">

                {(() => {

                  const credential =
                    CREDENTIALS.find(
                      (item) =>
                        item.id === activeCredential
                    );

                  if (!credential) {
                    return null;
                  }

                  return (

                    <div className="grid gap-7 lg:grid-cols-[1fr_280px] lg:items-center">

                      {/* Details */}

                      <div>

                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-solo-orange">
                          Verified Credential
                        </p>

                        <h4 className="mt-2 font-heading text-xl font-extrabold text-solo-text md:text-2xl">
                          {credential.title}
                        </h4>

                        <p className="mt-1 text-xs font-medium text-solo-muted">
                          Issued by {credential.issuer}
                        </p>

                        <p className="mt-4 max-w-2xl text-xs leading-5 text-solo-muted md:text-sm">
                          This credential represents completed learning and
                          verified achievement within the SOLO learning journey.
                        </p>

                        {/* Metadata */}

                        <div className="mt-5 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">

                          <div className="rounded-xl border border-white bg-white p-3">

                            <p className="text-[8px] font-bold uppercase tracking-[0.1em] text-solo-muted">
                              Skills
                            </p>

                            <p className="mt-1 text-xs font-bold text-solo-text">
                              {credential.skills}
                            </p>

                          </div>

                          <div className="rounded-xl border border-white bg-white p-3">

                            <p className="text-[8px] font-bold uppercase tracking-[0.1em] text-solo-muted">
                              Issued
                            </p>

                            <p className="mt-1 text-xs font-bold text-solo-text">
                              {credential.issued}
                            </p>

                          </div>

                          <div className="rounded-xl border border-white bg-white p-3">

                            <p className="text-[8px] font-bold uppercase tracking-[0.1em] text-solo-muted">
                              Expires
                            </p>

                            <p className="mt-1 text-xs font-bold text-solo-text">
                              {credential.expires}
                            </p>

                          </div>

                        </div>

                        {/* Status */}

                        <div className="mt-5 flex flex-wrap gap-2">

                          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[9px] font-bold text-green-600 shadow-sm">

                            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-green-500 text-[8px] text-white">
                              ✓
                            </span>

                            Verified

                          </span>

                          <span className="rounded-full bg-white px-3 py-1.5 text-[9px] font-bold text-solo-muted shadow-sm">
                            SOLO Credential
                          </span>

                          <span className="rounded-full bg-white px-3 py-1.5 text-[9px] font-bold text-solo-muted shadow-sm">
                            Shareable
                          </span>

                        </div>

                      </div>

                      {/* Share credential */}

                      <div className="mt-6 flex flex-wrap gap-3">
                        <button
                          type="button"
                          onClick={() => setShowSharePanel(true)}
                          className="group inline-flex items-center gap-2 rounded-xl bg-solo-orange px-4 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                        >
                          Share Credential

                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setActiveCredential(null)}
                          className="rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-xs font-bold text-solo-muted transition-all duration-300 hover:border-neutral-300 hover:text-solo-text"
                        >
                          Close
                        </button>
                      </div>

                      {/* Actual credential preview */}

                      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">

                        <p className="mb-3 text-center text-[9px] font-bold uppercase tracking-[0.12em] text-solo-muted">
                          Credential Preview
                        </p>

                        <div className="flex h-[170px] items-center justify-center overflow-hidden rounded-xl bg-neutral-50 p-3">

                          <img
                            src={credential.image}
                            alt={`Preview of ${credential.title}`}
                            className="h-full w-full object-contain"
                          />

                        </div>

                        <p className="mt-3 text-center text-[9px] leading-4 text-solo-muted">
                          View the credential and its verification details
                          through the SOLO platform.
                        </p>

                      </div>

                    </div>

                  );

                })()}

              </div>

            )}

          </div>

        </div>

        {/* ===================================================
    04 — SHARE YOUR CREDENTIALS
    =================================================== */}

        <div className="mt-24">

          {/* Section heading */}

          <div className="mb-6 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-solo-orange" />

              <p className="text-xs font-bold uppercase tracking-[0.15em] text-solo-orange">
                Share Your Achievements
              </p>
            </div>

            <h3 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-solo-text md:text-3xl">
              Your achievements are worth sharing.
            </h3>

            <p className="mt-2 text-sm leading-6 text-solo-muted">
              Share your verified credentials to showcase the skills you developed,
              the work you completed, and the learning experiences you achieved
              through SOLO.
            </p>
          </div>

          {/* Share experience */}

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_24px_80px_rgba(23,20,18,0.08)]">

            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

              {/* Left — credential preview */}

              <div className="relative overflow-hidden border-b border-neutral-100 bg-solo-blue/5 p-6 md:p-8 lg:border-b-0 lg:border-r">

                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-solo-blue/10 blur-3xl" />

                <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-solo-gold/15 blur-3xl" />

                <div className="relative">

                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-solo-blue">
                    Verified Achievement
                  </p>

                  <h4 className="mt-3 font-heading text-2xl font-extrabold leading-tight text-solo-text md:text-3xl">
                    Turn your credential
                    <br />
                    into a story.
                  </h4>

                  <p className="mt-4 max-w-md text-xs leading-5 text-solo-muted">
                    Share what you learned, the skills you developed, and the work
                    you completed during the learning experience.
                  </p>

                  {/* Credential preview */}

                  <div className="mt-7 overflow-hidden rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">

                    <img
                      src="/credential-sharing.png"
                      alt="Preview of the credential sharing options"
                      className="h-full w-full object-contain"
                    />

                  </div>

                </div>

              </div>

              {/* Right — sharing options */}

              <div className="p-6 md:p-8">

                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-solo-orange">
                  Share Your Credential
                </p>

                <h4 className="mt-2 font-heading text-xl font-extrabold text-solo-text md:text-2xl">
                  Showcase what you have achieved.
                </h4>

                <p className="mt-3 max-w-xl text-xs leading-5 text-solo-muted md:text-sm">
                  Choose how you want to share your verified achievement with your
                  network, peers, institutions, or potential employers.
                </p>

                {/* Share options */}

                <div className="mt-7 space-y-3">

                  {/* LinkedIn */}

                  <button
                    type="button"
                    onClick={() => shareCredential(CREDENTIALS[0])}
                    className="group flex w-full items-center gap-4 rounded-2xl border border-neutral-100 bg-white p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-solo-blue/20 hover:bg-solo-blue/5 hover:shadow-sm"
                  >

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-solo-blue/10 font-heading text-sm font-extrabold text-solo-blue">
                      in
                    </div>

                    <div className="min-w-0 flex-1">

                      <p className="font-heading text-sm font-bold text-solo-text">
                        Share on LinkedIn
                      </p>

                      <p className="mt-1 text-[10px] leading-4 text-solo-muted">
                        Showcase your verified achievement with your professional
                        network.
                      </p>

                    </div>

                    <span className="text-sm text-neutral-400 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>

                  </button>

                  {/* Social / native share */}

                  <button
                    type="button"
                    className="group flex w-full items-center gap-4 rounded-2xl border border-neutral-100 bg-white p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-solo-orange/20 hover:bg-solo-orange/5 hover:shadow-sm"
                  >

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-solo-orange/10 text-sm font-bold text-solo-orange">
                      ↗
                    </div>

                    <div className="min-w-0 flex-1">

                      <p className="font-heading text-sm font-bold text-solo-text">
                        Share with your network
                      </p>

                      <p className="mt-1 text-[10px] leading-4 text-solo-muted">
                        Use the available sharing options on your device or browser.
                      </p>

                    </div>

                    <span className="text-sm text-neutral-400 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>

                  </button>

                  {/* Email */}

                  <button
                    type="button"
                    onClick={() =>
                      shareCredentialByEmail(CREDENTIALS[0])
                    }
                    className="group flex w-full items-center gap-4 rounded-2xl border border-neutral-100 bg-white p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-solo-gold/20 hover:bg-solo-gold/5 hover:shadow-sm"
                  >

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-solo-gold/10 text-sm font-bold text-solo-gold">
                      @
                    </div>

                    <div className="min-w-0 flex-1">

                      <p className="font-heading text-sm font-bold text-solo-text">
                        Share Personally
                      </p>

                      <p className="mt-1 text-[10px] leading-4 text-solo-muted">
                        Share your credential directly with someone through email.
                      </p>

                    </div>

                    <span className="text-sm text-neutral-400 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>

                  </button>

                </div>

                {/* Sharing tip */}

                <div className="mt-6 rounded-2xl border border-solo-blue/15 bg-solo-blue/5 p-4">

                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-solo-blue">
                    Make it meaningful
                  </p>

                  <p className="mt-2 text-xs leading-5 text-solo-muted">
                    When sharing a credential, briefly mention what you learned,
                    the skills you developed, and the projects or work you completed.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Endorsement bridge */}

          <div className="mt-5 rounded-2xl border border-solo-gold/20 bg-solo-gold/5 p-5 md:p-6">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-solo-gold">
                  Beyond credentials
                </p>

                <h4 className="mt-1 font-heading text-base font-bold text-solo-text">
                  Let others support your achievements.
                </h4>

                <p className="mt-1 max-w-2xl text-xs leading-5 text-solo-muted">
                  Ask teammates or peers for endorsements to add another layer of
                  recognition to your learning and work.
                </p>

              </div>

              <a
                href="#profile"
                className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-xl border border-solo-gold/30 bg-white px-4 py-2.5 text-xs font-bold text-solo-gold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm"
              >
                View Profile

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

              </a>

            </div>

          </div>

        </div>

        {/* ===================================================
            05 — WHY VERIFICATION MATTERS
            =================================================== */}

        <div className="mt-15">

          <div className="overflow-hidden rounded-[2rem] border border-solo-blue/15 bg-solo-blue/5">

            <div className="grid lg:grid-cols-[1fr_0.9fr]">

              {/* Left */}

              <div className="p-7 md:p-10">

                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-solo-blue">
                  Why Verification Matters
                </p>

                <h3 className="mt-3 max-w-xl font-heading text-3xl font-extrabold leading-tight text-solo-text md:text-4xl">

                  Learning is valuable.

                  <br />

                  <span className="text-solo-blue">
                    Proof makes it visible.
                  </span>

                </h3>

                <p className="mt-5 max-w-xl text-sm leading-6 text-solo-muted">

                  Your credentials provide evidence of what you have completed
                  and achieved. They turn your learning journey into something
                  you can showcase as part of your profile.

                </p>

              </div>

              {/* Right */}

              <div className="border-t border-solo-blue/10 bg-white/70 p-7 lg:border-l lg:border-t-0 md:p-10">

                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-solo-muted">
                  From learning to proof
                </p>

                <div className="mt-6 space-y-3">

                  {[
                    "Learn",
                    "Complete",
                    "Assess",
                    "Verify",
                    "Showcase",
                  ].map((item, index) => (

                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >

                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-solo-blue/10 text-[9px] font-extrabold text-solo-blue">
                        0{index + 1}
                      </span>

                      <span className="font-heading text-sm font-bold text-solo-text">
                        {item}
                      </span>

                      {index < 4 && (
                        <span className="ml-auto text-xs text-neutral-300">
                          ↓
                        </span>
                      )}

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}