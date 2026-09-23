
"use client";

import Image from "next/image";

type Screenshot = {
  src: string;
  label: string;
  description?: string;
};

/* =========================================================
   SCREENSHOT DATA
========================================================= */

const PROFILE_IMAGES: Screenshot[] = [
  {
    src: "/profile.png",
    label: "Profile",
    description: "View your learner profile and personal information.",
  },
  {
    src: "/edit name.png",
    label: "Edit Name",
    description: "Update your name and basic profile details.",
  },
  {
    src: "/edit username.png",
    label: "Username",
    description: "Choose and update your SOLO username.",
  },
  {
    src: "/about you.png",
    label: "About You",
    description: "Add information about yourself and your interests.",
  },
  {
    src: "/description.png",
    label: "Description",
    description: "Add a short description to introduce yourself.",
  },
  {
    src: "/location.png",
    label: "Location",
    description: "Add your location to complete your profile.",
  },
  {
    src: "/add adhar details.png",
    label: "Identity Details",
    description:
      "Add the required identity information to your profile.",
  },
];

const EDUCATION_IMAGES: Screenshot[] = [
  {
    src: "/education.png",
    label: "Education",
    description:
      "Add your educational background to your profile.",
  },
  {
    src: "/adding education.png",
    label: "Add Education",
    description:
      "Enter your qualification, institution and education details.",
  },
];

const RESUME_IMAGES: Screenshot[] = [
  {
    src: "/import your open badge.png",
    label: "Import Open Badge",
    description:
      "Import eligible credentials into your SOLO profile.",
  },
  {
    src: "/upload resume.png",
    label: "Upload Resume",
    description:
      "Upload your existing resume to your profile.",
  },
  {
    src: "/after click generate resume.png",
    label: "Generate Resume",
    description:
      "Generate a resume using the information in your profile.",
  },
  {
    src: "/after click save resume after generating.png",
    label: "Save Resume",
    description:
      "Save your generated resume for future use.",
  },
];

const OPPORTUNITY_IMAGES: Screenshot[] = [
  {
    src: "/opportunities.png",
    label: "Explore Opportunities",
    description:
      "Browse courses, internships, projects and other opportunities.",
  },
  {
    src: "/enroll .png",
    label: "Enroll in a Course",
    description:
      "Open a course and enroll to add it to your learning journey.",
  },
  {
    src: "/careerpathway.png",
    label: "Career Pathway",
    description:
      "Explore a structured pathway and enroll in opportunities that support your career goals.",
  },
];

const LEARNING_IMAGES: Screenshot[] = [
  {
    src: "/dashboard.png",
    label: "Learner Dashboard",
    description:
      "Use your dashboard to access learning activities and opportunities.",
  },
  {
    src: "/pathwayprogess.png",
    label: "Pathway Progress",
    description:
      "Track your enrollment and progress through your career pathway.",
  },
  {
    src: "/my enrollment.png",
    label: "Manage Enrollments",
    description:
      "View and manage the opportunities you have joined.",
  },
];

const COMPLETION_IMAGES: Screenshot[] = [
  {
    src: "/request completion.png",
    label: "Request Completion",
    description:
      "For applicable external courses, request completion on SOLO.",
  },
  {
    src: "/badgeDesign-1788165226796.png",
    label: "Credential",
    description:
      "Receive a badge or certificate after completing an eligible opportunity.",
  },
];

const CAREER_IMAGES: Screenshot[] = [
  {
    src: "/SkillGapIdentification.png",
    label: "Skill Gap Identification",
    description:
      "Identify skills that you can develop for your career goals.",
  },
  {
    src: "/skillmatchanalysis.png",
    label: "Match Skills with Jobs",
    description:
      "Use your skills and profile information to explore relevant job opportunities.",
  },
  {
    src: "/job serach.png",
    label: "Job Search",
    description:
      "Explore available jobs based on your interests and career goals.",
  },
];

/* =========================================================
   SCREENSHOT CARD
========================================================= */

function ScreenshotCard({
  image,
}: {
  image: Screenshot;
}) {
  return (
    <figure className="group min-w-0 overflow-hidden rounded-xl border border-[#e8e1dc] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="relative flex h-[190px] items-center justify-center overflow-hidden bg-[#f7f4f1] p-2.5 sm:h-[210px]">
        <Image
          src={image.src}
          alt={image.label}
          width={1200}
          height={750}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <figcaption className="px-3.5 py-3">
        <h4 className="text-sm font-semibold text-[#171412]">
          {image.label}
        </h4>

        {image.description && (
          <p className="mt-1 text-xs leading-5 text-[#6B6560]">
            {image.description}
          </p>
        )}
      </figcaption>
    </figure>
  );
}

/* =========================================================
   STANDARD GRID
========================================================= */

function ScreenshotGrid({
  images,
  columns = 3,
}: {
  images: Screenshot[];
  columns?: 1 | 2 | 3;
}) {
  const gridClass =
    columns === 1
      ? "grid min-w-0 gap-4"
      : columns === 2
        ? "grid min-w-0 gap-4 sm:grid-cols-2"
        : "grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={gridClass}>
      {images.map((image) => (
        <ScreenshotCard key={image.src} image={image} />
      ))}
    </div>
  );
}

/* =========================================================
   STEP HEADER
========================================================= */

function StepHeader({
  number,
  eyebrow,
  title,
  description,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-5 flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FD4322] text-sm font-bold text-white shadow-sm">
        {number}
      </div>

      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#FD4322]">
          {eyebrow}
        </p>

        <h3 className="mt-1 text-xl font-bold tracking-tight text-[#171412] sm:text-2xl">
          {title}
        </h3>

        <p className="mt-1 max-w-3xl text-sm leading-6 text-[#6B6560]">
          {description}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   STORY CONNECTOR
========================================================= */

function StoryConnector({
  text,
}: {
  text: string;
}) {
  return (
    <div className="my-6 flex items-center gap-3">
      <div className="h-px flex-1 bg-[#eee7e2]" />

      <span className="rounded-full border border-[#ffd8ce] bg-[#fff7f4] px-3 py-1.5 text-xs font-medium text-[#FD4322]">
        {text}
      </span>

      <div className="h-px flex-1 bg-[#eee7e2]" />
    </div>
  );
}

/* =========================================================
   SMALL STORY BOX
========================================================= */

function StoryBox({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-[#eee7e2] bg-[#fffcfa] px-4 py-3.5">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#FD4322]">
        {title}
      </p>

      <p className="mt-1 text-sm leading-6 text-[#6B6560]">
        {text}
      </p>
    </div>
  );
}

/* =========================================================
   CREDENTIAL WALLET
========================================================= */

function CredentialWalletSection() {
  const walletImages: Screenshot[] = [
    {
      src: "/Credentialwallet.png",
      label: "Open Credential Wallet",
      description:
        "Open the Credential Wallet to access your verified credentials and badges.",
    },
    {
      src: "/select credential.png",
      label: "Select a Credential",
      description:
        "Choose the credential or badge you want to view or share.",
    },
    {
      src: "/view Credential.png",
      label: "View Credential Details",
      description:
        "Check the credential name, issuer, skills and verification information.",
    },
    {
      src: "/share credential.png",
      label: "Share Credential",
      description:
        "Use the sharing option to digitally share your verified credential.",
    },
  ];

  return (
    <div className="mt-7">
      {/* Wallet introduction */}
      <div className="rounded-xl border border-[#e8e1dc] bg-[#fffcfa] p-4 sm:p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1255FF]">
              Your digital proof
            </p>

            <h4 className="mt-1 text-lg font-bold text-[#171412]">
              Accessing the Credential Wallet App
            </h4>
          </div>

          <span className="w-fit rounded-full bg-white px-3 py-1.5 text-xs font-medium text-[#6B6560]">
            Verified achievements
          </span>
        </div>

        <p className="mt-2 max-w-4xl text-sm leading-6 text-[#6B6560]">
          The Credential Mobile Wallet App allows learners to securely store,
          manage, and access their verified credentials and badges directly
          from their mobile devices.
        </p>

        <div className="mt-3 rounded-lg border border-[#ffe0d8] bg-[#fff7f4] px-4 py-3">
          <p className="text-sm leading-6 text-[#171412]">
            <strong>Accessing the Credential Wallet App:</strong>{" "}
            Download the SOLO Credential Wallet app from the Google Play Store
            to access and manage your credentials.
          </p>
        </div>
      </div>

      {/* What you can do */}
      <div className="mt-6">
        <h4 className="text-lg font-bold text-[#171412]">
          What You Can Do with the Credential Wallet
        </h4>

        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "View Credentials",
              text: "Access all your earned credentials and badges in one place.",
            },
            {
              title: "Check Details",
              text: "View information such as the issuer, skills, and verification status.",
            },
            {
              title: "Share Credentials",
              text: "Digitally share your verified credentials with employers, institutions, or professional networks.",
            },
            {
              title: "Carry Digital Proof",
              text: "Keep your verified achievements readily accessible without relying on physical documents.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-[#eee7e2] bg-white p-3.5"
            >
              <h5 className="text-sm font-semibold text-[#171412]">
                {item.title}
              </h5>

              <p className="mt-1 text-xs leading-5 text-[#6B6560]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Wallet journey */}
      <div className="mt-7">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1255FF]">
              Credential workflow
            </p>

            <h4 className="mt-1 text-lg font-bold text-[#171412]">
              How to Access and Share Your Credential
            </h4>
          </div>

          <p className="max-w-xl text-xs leading-5 text-[#6B6560] sm:text-right">
            View your credential, check its details and share it when applying
            for opportunities.
          </p>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {walletImages.map((image) => (
            <ScreenshotCard key={image.src} image={image} />
          ))}
        </div>
      </div>

      {/* Sharing */}
      <div className="mt-6 rounded-xl border border-[#eee7e2] bg-white px-4 py-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h4 className="text-base font-bold text-[#171412]">
              Where Can You Share Your Credential?
            </h4>

            <p className="mt-1 text-xs leading-5 text-[#6B6560]">
              Use your verified credential as digital proof of your learning
              and achievements.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 sm:max-w-[60%] sm:justify-end">
            {[
              "Job Applications",
              "Internships",
              "LinkedIn",
              "Resume / CV",
              "Portfolio",
              "Employers",
              "Institutions",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#ffd8ce] bg-[#fff7f4] px-3 py-1.5 text-xs font-medium text-[#171412]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Why it matters */}
      <div className="mt-6">
        <h4 className="text-lg font-bold text-[#171412]">
          Why the Credential Wallet Matters
        </h4>

        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <StoryBox
            title="One place"
            text="A single place to manage verified achievements."
          />

          <StoryBox
            title="Always accessible"
            text="Access credentials anytime, anywhere."
          />

          <StoryBox
            title="Showcase skills"
            text="Quickly showcase verified skills and achievements."
          />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Profile() {
  return (
    <section
      id="profile"
      className="w-full overflow-hidden bg-[#fffcfa] px-3 py-10 sm:px-5 lg:px-6"
    >
      <div className="mx-auto w-full max-w-7xl min-w-0">

        {/* =================================================
            SECTION INTRO
        ================================================= */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#fff0eb] px-3 py-1 text-xs font-semibold text-[#FD4322]">
            Your Journey
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#171412] sm:text-4xl">
            From learner to career-ready
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#6B6560]">
            Follow your journey on SOLO — build your profile, learn new
            skills, earn verified credentials and discover opportunities
            that support your career goals.
          </p>
        </div>

        {/* =================================================
            JOURNEY MAP
        ================================================= */}

        <div className="mx-auto mt-7 max-w-5xl">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
            {[
              "Start with You",
              "Education",
              "Resume",
              "Opportunities",
              "Build Skills",
              "Credentials",
              "Career",
            ].map((item, index) => (
              <div
                key={item}
                className="relative flex items-center gap-2 rounded-lg border border-[#eee7e2] bg-white px-2.5 py-2.5"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fff0eb] text-[10px] font-bold text-[#FD4322]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-xs font-medium text-[#171412]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* =================================================
            JOURNEY CONTAINER
        ================================================= */}

        <div className="mt-8 overflow-hidden rounded-2xl border border-[#e8e1dc] bg-white shadow-sm">

          {/* =================================================
              STEP 01
          ================================================= */}

          <section className="border-b border-[#eee7e2] px-4 py-8 sm:px-6 lg:px-8">
            <StepHeader
              number="01"
              eyebrow="Start with you"
              title="Build your profile"
              description="Every learner starts with their own story. Complete your profile with your personal information, interests and identity details."
            />

            <ScreenshotGrid images={PROFILE_IMAGES} columns={3} />

            <StoryConnector text="Your story is taking shape" />
          </section>

          {/* =================================================
              STEP 02
          ================================================= */}

          <section className="border-b border-[#eee7e2] px-4 py-8 sm:px-6 lg:px-8">
            <StepHeader
              number="02"
              eyebrow="Add your background"
              title="Add your education"
              description="Your education gives context to your knowledge and experience. Add your academic background to complete your learner profile."
            />

            <ScreenshotGrid images={EDUCATION_IMAGES} columns={2} />

            <StoryConnector text="Now connect your learning with your experience" />
          </section>

          {/* =================================================
              STEP 03
          ================================================= */}

          <section className="border-b border-[#eee7e2] px-4 py-8 sm:px-6 lg:px-8">
            <StepHeader
              number="03"
              eyebrow="Present your experience"
              title="Import or create your resume"
              description="Turn your profile, learning and achievements into a professional resume that represents your journey."
            />

            <div className="mb-5 grid gap-2 sm:grid-cols-4">
              {[
                "Import achievements",
                "Upload resume",
                "Generate resume",
                "Save and use it",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-lg bg-[#fffcfa] px-3 py-2.5"
                >
                  <span className="text-xs font-bold text-[#FD4322]">
                    0{index + 1}
                  </span>

                  <span className="text-xs font-medium text-[#6B6560]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <ScreenshotGrid images={RESUME_IMAGES} columns={2} />

            <StoryConnector text="Your profile is ready to meet opportunities" />
          </section>

          {/* =================================================
              STEP 04
          ================================================= */}

          <section className="border-b border-[#eee7e2] px-4 py-8 sm:px-6 lg:px-8">
            <StepHeader
              number="04"
              eyebrow="Explore what comes next"
              title="Discover opportunities"
              description="With your profile ready, explore courses, career pathways and other opportunities that match your learning and career goals."
            />

            <div className="mb-5 grid gap-3 sm:grid-cols-3">
              <StoryBox
                title="Explore"
                text="Browse opportunities that match your interests."
              />

              <StoryBox
                title="Enroll"
                text="Choose learning opportunities and start building experience."
              />

              <StoryBox
                title="Choose your path"
                text="Follow a career pathway that supports your goals."
              />
            </div>

            <ScreenshotGrid images={OPPORTUNITY_IMAGES} columns={3} />

            <StoryConnector text="Discover → Learn → Build" />
          </section>

          {/* =================================================
              STEP 05
          ================================================= */}

          <section className="border-b border-[#eee7e2] px-4 py-8 sm:px-6 lg:px-8">
            <StepHeader
              number="05"
              eyebrow="Keep moving forward"
              title="Learn and build skills"
              description="Learning becomes meaningful when you can track your activities, monitor your progress and manage the opportunities you have joined."
            />

            <ScreenshotGrid images={LEARNING_IMAGES} columns={3} />

            <StoryConnector text="Learn it. Build it. Track it." />
          </section>

          {/* =================================================
              STEP 06
          ================================================= */}

          <section className="border-b border-[#eee7e2] px-4 py-8 sm:px-6 lg:px-8">
            <StepHeader
              number="06"
              eyebrow="Turn learning into proof"
              title="Complete and receive credentials"
              description="Complete eligible opportunities, request completion where required and receive your badge or credential."
            />

            {/* Completion flow */}

            <div className="mb-6 grid gap-3 sm:grid-cols-2">
              {COMPLETION_IMAGES.map((image, index) => (
                <div key={image.src} className="relative">
                  <ScreenshotCard image={image} />

                  {index === 0 && (
                    <div className="pointer-events-none absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 sm:block">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ffd8ce] bg-white text-sm text-[#FD4322] shadow-sm">
                        →
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <CredentialWalletSection />

            <StoryConnector text="Your achievements are ready to be shared" />
          </section>

          {/* =================================================
              STEP 07
          ================================================= */}

          <section className="px-4 py-8 sm:px-6 lg:px-8">
            <StepHeader
              number="07"
              eyebrow="Take your next step"
              title="Grow your career"
              description="Your profile, skills and credentials can now help you identify skill gaps, explore relevant opportunities and continue your career journey."
            />

            <div className="mb-5 grid gap-3 sm:grid-cols-3">
              <StoryBox
                title="Identify"
                text="Identify skills that you can develop for your career goals."
              />

              <StoryBox
                title="Match"
                text="Use your skills and profile information to explore relevant jobs."
              />

              <StoryBox
                title="Explore"
                text="Discover available jobs based on your interests and career goals."
              />
            </div>

            <ScreenshotGrid images={CAREER_IMAGES} columns={3} />

            {/* =================================================
                FINAL CTA
            ================================================= */}

            <div className="mt-8 overflow-hidden rounded-2xl border border-[#ffd8ce] bg-gradient-to-r from-[#fff1ed] via-[#fff7f1] to-[#eef4ff] px-5 py-8 text-center sm:px-8">
              <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#FD4322]">
                Your next chapter starts here
              </span>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#171412]">
                Keep growing with SOLO
              </h3>

              <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-[#6B6560]">
                Keep learning, building skills, earning credentials and
                discovering new opportunities as you move forward in your
                career journey.
              </p>

              <button
                type="button"
                className="mt-5 rounded-full bg-[#FD4322] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#EB5038]"
              >
                Start Your Journey
              </button>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
