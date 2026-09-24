import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Compass,
  FileCheck2,
  GraduationCap,
  ListChecks,
  PlayCircle,
  Rocket,
  Search,
  Send,
  UserRound,
} from "lucide-react";

/* ============================================================
   DATA
============================================================ */

const learnSteps = [
  {
    number: "01",
    title: "Find a course",
    text: "Browse courses from your dashboard.",
    image: "/courses.png",
  },
  {
    number: "02",
    title: "Enroll",
    text: "Click Enroll to add it to your journey.",
    image: "/enroll .png",
  },
  {
    number: "03",
    title: "Start learning",
    text: "Go to My Enrollments and begin lessons.",
    image: "/my enrollment.png",
  },
  {
    number: "04",
    title: "Complete the course",
    text: "Finish lessons, activities and assessments.",
    image: "/course page.png",
  },
  {
    number: "05",
    title: "Request completion",
    text: "Fill the form, add badge/certificate, submit.",
    image: "/request completion.png",
  },
  {
    number: "06",
    title: "Done!",
    text: "See your learning achievement on your profile.",
    image: "/enrollsuccess.png",
  },
];

const learningFeatures = [
  {
    title: "Learning activities",
    text: "Open your dashboard to access your learning activities, courses and other available opportunities.",
    image: "/dashboard.png",
    icon: GraduationCap,
  },
  {
    title: "Track your progress",
    text: "Open your dashboard or Career Pathway to view your enrollment, learning progress and completed activities.",
    image: "/Your Enrollment Progress.png",
    icon: PlayCircle,
  },
  {
    title: "Discover opportunities",
    text: "Explore your dashboard and Career Pathways to find opportunities that match your skills and career interests.",
    image: "/Top Matching Jobs.png",
    icon: CheckCircle2,
  },
];

const careerSteps = [
  "Discover career paths",
  "Understand required skills",
  "Identify your skill gaps",
  "Explore possible job roles",
  "Prepare for opportunities",
  "Showcase readiness",
];

const careerPathwaySteps = [
  {
    number: "01",
    title: "Explore a Pathway",
    text: "Find a Career Pathway that matches your interests and career goals.",
    image: "/career-pathway-explore.png",
  },
  {
    number: "02",
    title: "Take the Pathway",
    text: "Review the pathway details and start your selected learning path.",
    image: "/career-pathway-take.png",
  },
  {
    number: "03",
    title: "Follow Your Learning Path",
    text: "Work through the connected courses and learning opportunities in your pathway.",
    image: "/career-pathway-learning.png",
  },
  {
    number: "04",
    title: "Track Your Progress",
    text: "Complete courses, earn credentials, and monitor your progress as you move through the pathway.",
    image: "/Your Enrollment Progress.png",
  },
];

const careerFlow = [
  {
    title: "Explore Pathways",
    icon: Compass,
  },
  {
    title: "Choose",
    icon: Send,
  },
  {
    title: "Enroll",
    icon: FileCheck2,
  },
  {
    title: "Build Skills",
    icon: ListChecks,
  },
  {
    title: "Complete",
    icon: CheckCircle2,
  },
  {
    title: "Grow Profile",
    icon: UserRound,
  },
];

/* ============================================================
   STEP CARD
============================================================ */

function LearnStep({
  step,
  isLast,
  index,
}: {
  step: (typeof learnSteps)[number];
  isLast: boolean;
  index: number;
}) {
  /*
   * Position the enlarged preview so that the first cards
   * open toward the right and the last cards open toward
   * the left. This prevents the preview from going outside
   * the viewport.
   */
  const previewPosition =
    index === 0
      ? "left-0 origin-left"
      : index === learnSteps.length - 1
        ? "right-0 origin-right"
        : "left-1/2 -translate-x-1/2 origin-center";

  return (
    <div className="relative flex min-w-[220px] flex-1 items-stretch">
      {/* =====================================================
          STEP CARD
      ===================================================== */}

      <div className="group relative z-10 w-full group-hover:z-[200]">
        {/* ===================================================
            NORMAL SCREENSHOT CARD
        =================================================== */}

        <div className="relative overflow-visible rounded-xl border border-neutral-200 bg-white shadow-[0_4px_18px_rgba(23,20,18,0.04)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_25px_rgba(23,20,18,0.09)]">

          {/* Step Number */}

          <div className="absolute left-3 top-3 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-solo-orange text-[10px] font-bold text-white shadow-sm">
            {step.number}
          </div>

          {/* =================================================
              SMALL SCREENSHOT
          ================================================= */}

          <div className="flex h-[155px] items-center justify-center overflow-hidden rounded-xl bg-neutral-50 p-2">
            <Image
              src={step.image}
              alt={step.title}
              width={600}
              height={360}
              className="h-full w-full object-contain object-top transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>

          {/* =================================================
              ENLARGED HOVER PREVIEW
          ================================================= */}

          <div
            className={`
              pointer-events-none
              absolute
              bottom-full
              z-[300]
              mb-4
              hidden
              w-[520px]
              max-w-[calc(100vw-32px)]
              scale-95
              rounded-2xl
              border
              border-neutral-200
              bg-white
              p-2
              opacity-0
              shadow-[0_24px_70px_rgba(23,20,18,0.22)]
              transition-all
              duration-300
              ease-out
              lg:block
              group-hover:scale-100
              group-hover:opacity-100
              ${index === 0
                          ? "left-0 origin-bottom-left"
                          : index === learnSteps.length - 1
                            ? "right-0 origin-bottom-right"
                            : "left-1/2 -translate-x-1/2 origin-bottom"
                        }
            `}
          >
            {/* Preview Header */}
            <div className="flex items-center justify-between border-b border-neutral-100 px-3 py-2">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-solo-orange text-[9px] font-bold text-white">
                  {step.number}
                </span>

                <span className="text-xs font-bold text-neutral-900">
                  {step.title}
                </span>
              </div>

              <span className="text-[10px] font-medium text-neutral-400">
                SOLO Preview
              </span>
            </div>

            {/* Full Screenshot */}
            <div className="mt-2 overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50">
              <Image
                src={step.image}
                alt={`${step.title} enlarged screenshot`}
                width={1400}
                height={900}
                className="h-auto max-h-[70vh] w-full object-contain object-top"
              />
            </div>

            {/* Description */}
            <div className="px-2 pb-2 pt-3">
              <p className="text-xs leading-5 text-neutral-600">
                {step.text}
              </p>
            </div>
          </div>
        </div>

        {/* ===================================================
            CAPTION BELOW SCREENSHOT
        =================================================== */}

        <div className="mt-3 px-1">
          <h4 className="text-sm font-bold leading-5 text-solo-text">
            {step.title}
          </h4>

          <p className="mt-1 text-xs leading-5 text-solo-muted">
            {step.text}
          </p>
        </div>
      </div>

      {/* =====================================================
          ARROW BETWEEN STEPS
      ===================================================== */}

      {!isLast && (
        <div className="hidden shrink-0 items-start pt-[75px] lg:flex">
          <ArrowRight
            size={18}
            strokeWidth={1.7}
            className="mx-2 text-neutral-400"
          />
        </div>
      )}
    </div>
  );
}

/* ============================================================
   FEATURE CARD
============================================================ */

function LearningFeatureCard({
  feature,
}: {
  feature: (typeof learningFeatures)[number];
}) {
  const Icon = feature.icon;

  return (
    <div className="group overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_4px_18px_rgba(23,20,18,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(23,20,18,0.09)]">

      {/* Screenshot */}

      <div className="overflow-hidden bg-neutral-50 p-2">
        <div className="overflow-hidden rounded-lg border border-neutral-100 bg-white">
          <Image
            src={feature.image}
            alt={feature.title}
            width={700}
            height={400}
            className="h-[185px] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      </div>

      {/* Content */}

      <div className="px-4 pb-5 pt-3">

        <div className="flex items-start gap-3">

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-solo-orange/10 text-solo-orange">
            <Icon size={18} strokeWidth={1.8} />
          </div>

          <div>
            <h4 className="text-sm font-bold text-solo-text">
              {feature.title}
            </h4>

            <p className="mt-1 text-xs leading-5 text-solo-muted">
              {feature.text}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

/* ============================================================
   FLOW BAR
============================================================ */

function LearningFlow() {
  const flow = [
    {
      title: "Browse",
      icon: Search,
    },
    {
      title: "Enroll",
      icon: BookOpen,
    },
    {
      title: "Start Learning",
      icon: PlayCircle,
    },
    {
      title: "Activities",
      icon: ListChecks,
    },
    {
      title: "Complete",
      icon: CheckCircle2,
    },
    {
      title: "Request Completion",
      icon: FileCheck2,
    },
    {
      title: "Submit",
      icon: Send,
    },
  ];

  return (
    <div className="mt-8 rounded-2xl border border-solo-orange/10 bg-[#fff5f1] px-4 py-5 sm:px-6">

      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.14em] text-solo-orange">
        SOLO Learner Flow
      </p>

      <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">

        {flow.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex shrink-0 items-center"
            >

              <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-solo-orange/10">

                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-solo-orange/10 text-solo-orange">
                  <Icon size={14} />
                </div>

                <span className="text-[11px] font-semibold text-solo-text">
                  {item.title}
                </span>

              </div>

              {index < flow.length - 1 && (
                <ArrowRight
                  size={16}
                  className="mx-2 shrink-0 text-solo-orange"
                />
              )}

            </div>
          );
        })}

      </div>
    </div>
  );
}

/* ============================================================
   CAREER FLOW
============================================================ */

function CareerFlow() {
  return (
    <div className="mt-8 rounded-2xl border border-blue-100 bg-[#f3f6ff] px-4 py-5 sm:px-6">

      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.14em] text-solo-blue">
        SOLO Career Flow
      </p>

      <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">

        {careerFlow.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex shrink-0 items-center"
            >

              <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-blue-100">

                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-solo-blue">
                  <Icon size={14} />
                </div>

                <span className="text-[11px] font-semibold text-solo-text">
                  {item.title}
                </span>

              </div>

              {index < careerFlow.length - 1 && (
                <ArrowRight
                  size={16}
                  className="mx-2 shrink-0 text-solo-blue"
                />
              )}

            </div>
          );
        })}

      </div>
    </div>
  );
}

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function LearnBuildSkills() {
  return (
    <section
      id="learn-build"
      className="bg-solo-bg px-5 py-10 sm:px-6"
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

      <div className="mx-auto max-w-[1240px]">

        {/* ==================================================
                    INTRO
                ================================================== */}

        <div className="max-w-[760px]">

          <div className="mb-5 flex items-center gap-3">
            <span className="inline-flex rounded-full border border-solo-orange/15 bg-white px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.16em] text-solo-orange shadow-sm sm:text-[9px]">
              Learn & Build Skills
            </span>
          </div>

          <h2 className="max-w-4xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-solo-text sm:text-5xl md:text-6xl">
            From your first course
            <br />

            <span className="relative inline-block text-solo-orange">
              to your next opportunity.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-7 text-solo-muted md:text-lg">
            Learn new skills, build experience, prove what you can do,
            and grow your career on SOLO.
          </p>

        </div>

        {/* ==================================================
                    01 — LEARN ON SOLO
                ================================================== */}

        <div className="mt-16">

          {/* Heading */}

          <div className="flex items-start gap-4">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-solo-orange text-xs font-bold text-white shadow-sm">
              01
            </div>

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.12em] text-solo-orange">
                Learn on SOLO
              </p>

              <h3 className="mt-1 font-heading text-xl font-extrabold leading-tight text-solo-text sm:text-2xl">
                From finding a course to earning your certificate
              </h3>

              <p className="mt-1 text-sm text-solo-muted">
                Follow these simple steps to enroll in a course and complete it on SOLO.
              </p>

            </div>

          </div>

          {/* ==================================================
                        SIX STEP JOURNEY
                    ================================================== */}

          <div className="mt-8">

            {/* Desktop */}

            <div className="hidden lg:flex lg:items-start">
              {learnSteps.map((step, index) => (
                <LearnStep
                  key={step.number}
                  step={step}
                  index={index}
                  isLast={index === learnSteps.length - 1}
                />
              ))}
            </div>

            {/* Tablet / Mobile horizontal scroll */}

            <div className="flex gap-4 overflow-x-auto pb-4 lg:hidden scrollbar-hide">
              {learnSteps.map((step, index) => (
                <div
                  key={step.number}
                  className="w-[235px] shrink-0"
                >
                  <LearnStep
                    step={step}
                    index={index}
                    isLast={true}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Flow */}

          <LearningFlow />

        </div>

        {/* ==================================================
                    KEY LEARNING FEATURES
                ================================================== */}

        <div className="mt-12">

          <div className="mb-6">

            <h3 className="font-heading text-xl font-extrabold text-solo-text sm:text-2xl">
              Key learning features
            </h3>

            <p className="mt-1 text-sm text-solo-muted">
              Everything you need to learn, track and discover opportunities — all in one place.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {learningFeatures.map((feature) => (
              <LearningFeatureCard
                key={feature.title}
                feature={feature}
              />
            ))}
          </div>

        </div>

        {/* ==================================================
                    02 — GROW YOUR CAREER
                ================================================== */}

        <div className="mt-20">

          <div className="flex items-start gap-4">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-solo-blue text-xs font-bold text-white shadow-sm">
              02
            </div>

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.12em] text-solo-blue">
                Build your career
              </p>

              <h3 className="mt-1 font-heading text-xl font-extrabold leading-tight text-solo-text sm:text-2xl">
                Build skills. Follow a path. Reach your career goal.
              </h3>

              <p className="mt-1 text-sm text-solo-muted">
                Career Pathways help you build skills in a structured
                way by following a guided sequence of learning
                opportunities designed for a specific career role or
                domain.
              </p>

            </div>

          </div>

          {/* =================================================
                  HOW IT WORKS
              ================================================= */}

          <div className="px-1 py-6">
            <h4 className="mb-6 text-lg font-bold text-neutral-900">
              How it works
            </h4>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {careerPathwaySteps.map((step) => (
                <div
                  key={step.number}
                  className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_4px_18px_rgba(23,20,18,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(23,20,18,0.09)]"
                >
                  {/* Screenshot */}
                  <div className="relative overflow-hidden bg-neutral-50 p-2">
                    {/* Step Number */}
                    <div className="absolute left-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-solo-orange text-xs font-bold text-white shadow-md">
                      {step.number}
                    </div>

                    {/* Screenshot Container */}
                    <div className="flex h-[230px] items-center justify-center overflow-hidden rounded-xl border border-neutral-100 bg-white">
                      <Image
                        src={step.image}
                        alt={`${step.title} - SOLO Career Pathway`}
                        width={1200}
                        height={700}
                        className="h-full w-full object-contain object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-5 pb-5 pt-4">
                    <h5 className="text-base font-bold text-neutral-900">
                      {step.title}
                    </h5>

                    <p className="mt-2 text-sm leading-6 text-neutral-600">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================
            REAL SOLO EXAMPLE
        ================================================= */}

          <div className="border-t border-neutral-100 bg-neutral-50/50 px-1 py-7">

            {/* Screenshot Heading */}
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-solo-orange">
                See it in action
              </p>

              <h4 className="mt-1 text-xl font-bold text-neutral-900">
                Example: Frontend Developer Career Pathway
              </h4>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-600">
                See how courses and credentials are connected to guide
                your learning journey toward a career goal.
              </p>
            </div>

            {/* Screenshot Container */}
            <div className="group overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_4px_16px_rgba(23,20,18,0.04)]">

              <div className="overflow-hidden">
                <img
                  src="/frontend-career-pathway.png"
                  alt="Frontend Developer Career Pathway in SOLO showing connected courses and earned credentials"
                  className="block h-auto w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
              </div>

              {/* Screenshot Caption */}
              <div className="border-t border-neutral-100 px-5 py-3">
                <p className="text-center text-xs italic leading-5 text-neutral-500 md:text-sm">
                  Example of a Career Pathway in SOLO showing the
                  progression through connected courses, credentials,
                  and learning opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
            PROGRESS CALLOUT
        ================================================= */}

          <div className="border-t border-neutral-100 px-1 py-5">
            <div className="flex items-start gap-4 rounded-xl border border-solo-orange/15 bg-solo-orange/[0.04] p-4 md:p-5">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-solo-orange/10 text-solo-orange">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12l5 5L20 7"
                  />
                </svg>
              </div>

              <div>
                <h5 className="text-sm font-bold text-neutral-900">
                  Keep progressing
                </h5>

                <p className="mt-1 text-sm leading-6 text-neutral-600">
                  As you complete learning opportunities, your pathway
                  reflects your progress with earned credentials and
                  badges.
                </p>
              </div>
            </div>
          </div>


          {/* Career flow */}

          <CareerFlow />

        </div>

        {/* ==================================================
                    FINAL CTA
                ================================================== */}

        <div className="mt-8 rounded-2xl border border-solo-orange/10 bg-[#fff5f1] px-6 py-7 sm:px-8">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-solo-orange shadow-sm">
                <Rocket size={21} />
              </div>

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-solo-orange">
                  Your next step
                </p>

                <h3 className="mt-1 font-heading text-xl font-extrabold text-solo-text">
                  Learn something. Build something. Grow from it.
                </h3>

                <p className="mt-1 text-sm text-solo-muted">
                  Every course, experience and achievement becomes part of your verified journey on SOLO.
                </p>

                <p className="mt-2 text-xs font-semibold text-solo-muted">
                  Learn → Build Skills → Prove Skills → Grow → Showcase
                </p>

              </div>

            </div>

            <button
              type="button"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-solo-orange px-5 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Explore opportunities
              <ArrowRight size={15} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}