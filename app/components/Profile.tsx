
"use client";

import Image from "next/image";
import { useState } from "react";

type Screenshot = {
  src: string;
  label: string;
};

const PROFILE_IMAGES: Screenshot[] = [
  { src: "/profile.png", label: "Profile" },
  { src: "/edit name.png", label: "Edit Profile" },
  { src: "/edit username.png", label: "Username" },
  { src: "/about you.png", label: "About You" },
  { src: "/description.png", label: "Description" },
  { src: "/location.png", label: "Location" },
  { src: "/add adhar details.png", label: "Additional Details" },
];

const EDUCATION_IMAGES: Screenshot[] = [
  { src: "/education.png", label: "Education" },
  { src: "/adding education.png", label: "Add Education" },
  { src: "/import your open badge.png", label: "Import Open Badge" },
];

const RESUME_IMAGES: Screenshot[] = [
  { src: "/upload resume.png", label: "Upload Resume" },
  {
    src: "/after click generate resume.png",
    label: "Generate Resume",
  },
  {
    src: "/after click save resume after generating.png",
    label: "Save & Download Resume",
  },
];

const PROFILE_FEATURES = [
  {
    number: "01",
    title: "About You",
    text: "Introduce yourself, interests and goals.",
  },
  {
    number: "02",
    title: "Education",
    text: "Add your course, degree and institute.",
  },
  {
    number: "03",
    title: "Skills",
    text: "Show the skills you develop.",
  },
  {
    number: "04",
    title: "Projects",
    text: "Highlight academic and personal projects.",
  },
  {
    number: "05",
    title: "Achievements",
    text: "Add recognitions and milestones.",
  },
  {
    number: "06",
    title: "Credentials",
    text: "Keep certificates and badges together.",
  },
  {
    number: "07",
    title: "Resume",
    text: "Import or generate your resume.",
  },
  {
    number: "08",
    title: "Progress",
    text: "Show your learning progress.",
  },
];

const PROFILE_STEPS = [
  "Complete your profile",
  "Add your education",
  "Add skills & projects",
  "Add achievements & credentials",
];

const RESUME_STEPS = [
  "Import your resume",
  "Review information",
  "Generate your resume",
  "Save & download",
];

export default function Profile() {
  const [selectedImage, setSelectedImage] =
    useState<Screenshot | null>(null);

  return (
    <section
      id="profile"
      className="relative overflow-hidden bg-solo-bg"
    >
      {/* Soft background decoration */}
      <div className="pointer-events-none absolute -left-28 top-16 h-48 w-48 rounded-full bg-solo-orange/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 top-[45%] h-56 w-56 rounded-full bg-solo-blue/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1180px] px-4 py-9 sm:px-6 sm:py-11 lg:px-8">

        {/* ===================================================== */}
        {/* HEADER */}
        {/* ===================================================== */}

        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-solo-orange/15 bg-white px-2.5 py-1 text-[7px] font-bold uppercase tracking-[0.15em] text-solo-orange shadow-sm">
            Your SOLO Learner Profile
          </span>

          <h2 className="mt-3 font-heading text-2xl font-extrabold leading-[1.08] tracking-tight text-solo-text sm:text-3xl md:text-4xl">
            One profile.
            <span className="block text-solo-orange">
              Your learning & career identity.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-[9px] leading-4 text-solo-muted sm:text-[10px]">
            Bring your education, skills, projects, achievements,
            credentials, progress and resume together in one place.
          </p>
        </div>

        {/* ===================================================== */}
        {/* PROFILE INTRODUCTION */}
        {/* ===================================================== */}

        <div className="mt-7 grid items-center gap-5 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-solo-orange text-[8px] font-extrabold text-white">
                01
              </span>

              <div>
                <p className="text-[6px] font-bold uppercase tracking-[0.15em] text-solo-orange">
                  Learner Profile
                </p>

                <h3 className="mt-0.5 font-heading text-lg font-extrabold text-solo-text sm:text-xl">
                  Build your profile.
                </h3>
              </div>
            </div>

            <p className="mt-3 max-w-sm text-[9px] leading-4 text-solo-muted sm:text-[10px]">
              Your SOLO profile brings your learning and career
              information together. Keep it updated as you learn,
              build and grow.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-1.5">
              {[
                "Education",
                "Skills",
                "Projects",
                "Achievements",
                "Credentials",
                "Resume",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-black/5 bg-white px-2.5 py-2 text-[7px] font-semibold text-solo-text shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-solo-orange/20 hover:shadow-md"
                >
                  <span className="mr-1 text-solo-orange">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <ScreenshotCard
            image={PROFILE_IMAGES[0]}
            onClick={() => setSelectedImage(PROFILE_IMAGES[0])}
            large
          />
        </div>

        {/* ===================================================== */}
        {/* PROFILE SETUP STEPS */}
        {/* ===================================================== */}

        <div className="mt-10">
          <SectionHeading
            eyebrow="Build your profile"
            title="Add information as you grow."
            description="Complete the important parts of your learner profile."
          />

          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {PROFILE_STEPS.map((step, index) => (
              <div
                key={step}
                className="group flex gap-2.5 rounded-xl border border-black/5 bg-white p-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[7px] font-extrabold text-white ${
                    index % 2 === 0
                      ? "bg-solo-orange"
                      : "bg-solo-blue"
                  }`}
                >
                  0{index + 1}
                </span>

                <div>
                  <h4 className="text-[8px] font-extrabold text-solo-text sm:text-[9px]">
                    {step}
                  </h4>

                  <p className="mt-1 text-[7px] leading-3.5 text-solo-muted sm:text-[8px]">
                    Open your profile and update this information
                    whenever needed.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===================================================== */}
        {/* PROFILE FEATURES - HORIZONTAL */}
        {/* ===================================================== */}

        <div className="mt-10">
          <SectionHeading
            eyebrow="Profile features"
            title="Everything important in one place."
            description="Your profile grows with your learning and experience."
          />

          <div className="mt-4 overflow-x-auto pb-2 scrollbar-thin">
            <div className="flex min-w-max gap-2">
              {PROFILE_FEATURES.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group w-[145px] shrink-0 rounded-xl border border-black/5 bg-white p-3 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-solo-orange/20 hover:shadow-md sm:w-[155px]"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[7px] font-extrabold ${
                        index % 2 === 0
                          ? "text-solo-orange"
                          : "text-solo-blue"
                      }`}
                    >
                      {feature.number}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-black/10 transition-all duration-200 group-hover:w-4 group-hover:bg-solo-orange" />
                  </div>

                  <h4 className="mt-2.5 text-[8px] font-extrabold text-solo-text sm:text-[9px]">
                    {feature.title}
                  </h4>

                  <p className="mt-1 min-h-[30px] text-[7px] leading-3.5 text-solo-muted sm:text-[8px]">
                    {feature.text}
                  </p>

                  <div className="mt-2 text-[7px] font-bold text-solo-orange opacity-70 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
                    Explore →
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===================================================== */}
        {/* PROFILE SETUP SCREENSHOTS */}
        {/* ===================================================== */}

        <div className="mt-10">
          <SectionHeading
            eyebrow="Profile setup"
            title="Update your details."
            description="Click a screenshot to view the original SOLO interface."
          />

          <div className="mt-4 overflow-x-auto pb-2">
            <div className="flex min-w-max gap-2">
              {PROFILE_IMAGES.slice(1).map((image) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className="group w-[150px] shrink-0 overflow-hidden rounded-lg border border-black/5 bg-white text-left shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-solo-orange/20 hover:shadow-md sm:w-[165px]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-solo-bg">
                    <Image
                      src={image.src}
                      alt={image.label}
                      fill
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                      sizes="165px"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-200 group-hover:bg-black/10">
                      <span className="translate-y-1 rounded-full bg-white px-2.5 py-1 text-[6px] font-bold text-solo-text opacity-0 shadow-md transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                        View
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between px-2 py-2">
                    <span className="truncate text-[7px] font-bold text-solo-text sm:text-[8px]">
                      {image.label}
                    </span>

                    <span className="ml-1 shrink-0 text-[8px] font-bold text-solo-orange transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ===================================================== */}
        {/* EDUCATION - RESPONSIVE */}
        {/* ===================================================== */}

        <div className="mt-10">
          <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm sm:p-5">

            {/* Education intro + steps */}
            <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

              {/* Education intro */}
              <div>
                <span className="text-[7px] font-bold uppercase tracking-[0.15em] text-solo-blue">
                  Education
                </span>

                <h3 className="mt-1.5 font-heading text-lg font-extrabold leading-tight text-solo-text sm:text-xl">
                  Add your education.
                </h3>

                <p className="mt-2 max-w-sm text-[8px] leading-4 text-solo-muted sm:text-[9px]">
                  Add your academic information so your profile reflects
                  your educational journey.
                </p>
              </div>

              {/* Education steps */}
              <div className="overflow-x-auto pb-1">
                <div className="flex min-w-max gap-1.5">
                  {[
                    "Open the Education section",
                    "Click Add Education",
                    "Enter your course or degree",
                    "Add your institute details",
                    "Import your Open Badge when available",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="group flex w-[125px] shrink-0 flex-col rounded-lg border border-black/5 bg-solo-bg p-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-solo-blue/20 hover:bg-white hover:shadow-sm sm:w-[135px]"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-md bg-solo-blue/10 text-[6px] font-extrabold text-solo-blue transition-colors duration-200 group-hover:bg-solo-blue group-hover:text-white">
                        0{index + 1}
                      </span>

                      <span className="mt-2 text-[7px] font-semibold leading-3.5 text-solo-text sm:text-[8px]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education screenshots BELOW steps */}
            <div className="mt-5 border-t border-black/5 pt-4">

              <div className="mb-2.5 flex items-center justify-between">
                <div>
                  <p className="text-[7px] font-bold uppercase tracking-[0.15em] text-solo-blue">
                    Original SOLO interface
                  </p>

                  <p className="mt-0.5 text-[7px] text-solo-muted sm:text-[8px]">
                    Click any screenshot to view it larger.
                  </p>
                </div>

                <span className="hidden text-[7px] font-semibold text-solo-muted sm:block">
                  Scroll →
                </span>
              </div>

              {/* Small horizontal screenshot cards */}
              <div className="overflow-x-auto pb-2">
                <div className="flex min-w-max gap-2">
                  {EDUCATION_IMAGES.map((image) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setSelectedImage(image)}
                      className="group w-[155px] shrink-0 overflow-hidden rounded-lg border border-black/5 bg-white text-left shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-solo-blue/20 hover:shadow-md sm:w-[175px] md:w-[190px]"
                    >
                      {/* Screenshot */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-solo-bg">
                        <Image
                          src={image.src}
                          alt={image.label}
                          fill
                          className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                          sizes="190px"
                        />

                        {/* Hover overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-200 group-hover:bg-black/10">
                          <span className="translate-y-1 rounded-full bg-white px-2.5 py-1 text-[6px] font-bold text-solo-text opacity-0 shadow-md transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                            View
                          </span>
                        </div>
                      </div>

                      {/* Screenshot title */}
                      <div className="flex items-center justify-between px-2 py-2">
                        <span className="truncate text-[7px] font-bold text-solo-text sm:text-[8px]">
                          {image.label}
                        </span>

                        <span className="ml-1 shrink-0 text-[8px] font-bold text-solo-blue transition-transform duration-200 group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================== */}
        {/* YOUR RESUME */}
        {/* ===================================================== */}

        <div className="mt-10">
          <div className="overflow-x-auto pb-2">
            <div className="flex min-w-max items-stretch gap-2">

              {/* Resume intro */}
              <div className="w-[205px] shrink-0 rounded-xl border border-solo-orange/10 bg-solo-orange/5 px-3 py-3 sm:w-[225px]">
                <span className="text-[7px] font-bold uppercase tracking-[0.15em] text-solo-orange">
                  Your resume
                </span>

                <h3 className="mt-1.5 font-heading text-base font-extrabold leading-tight text-solo-text sm:text-lg">
                  Import or generate your resume.
                </h3>

                <p className="mt-1.5 text-[8px] leading-3.5 text-solo-muted sm:text-[9px]">
                  Use an existing resume or create one from your
                  SOLO profile.
                </p>
              </div>

              {/* Import resume */}
              <ResumeOption
                number="01"
                title="Import your resume"
                description="Upload an existing resume and reuse the available information."
                steps={[
                  "Upload",
                  "Review",
                  "Edit",
                  "Update",
                ]}
                image={RESUME_IMAGES[0]}
                onClick={() =>
                  setSelectedImage(RESUME_IMAGES[0])
                }
                compact
              />

              {/* Generate resume */}
              <ResumeOption
                number="02"
                title="Generate your resume"
                description="Use your SOLO profile information to create a resume."
                steps={[
                  "Open",
                  "Generate",
                  "Check",
                  "Review",
                ]}
                image={RESUME_IMAGES[1]}
                onClick={() =>
                  setSelectedImage(RESUME_IMAGES[1])
                }
                compact
              />
            </div>
          </div>
        </div>

        {/* ===================================================== */}
        {/* SAVE & DOWNLOAD */}
        {/* ===================================================== */}

        <div className="mt-4 grid items-center gap-4 rounded-2xl border border-black/5 bg-white p-4 shadow-sm md:grid-cols-[0.75fr_1.25fr]">
          <div>
            <span className="text-[7px] font-bold uppercase tracking-[0.15em] text-solo-orange">
              Final resume step
            </span>

            <h3 className="mt-1.5 font-heading text-lg font-extrabold text-solo-text sm:text-xl">
              Review, save & download.
            </h3>

            <p className="mt-2 text-[8px] leading-4 text-solo-muted sm:text-[9px]">
              Check your information, save the resume and
              download the final version.
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {[
                "Select",
                "Review",
                "Save",
                "Download",
              ].map((item, index) => (
                <span
                  key={item}
                  className="rounded-full bg-solo-bg px-2.5 py-1 text-[7px] font-semibold text-solo-text"
                >
                  {index + 1}. {item}
                </span>
              ))}
            </div>
          </div>

          <ScreenshotCard
            image={RESUME_IMAGES[2]}
            onClick={() =>
              setSelectedImage(RESUME_IMAGES[2])
            }
            large
          />
        </div>

        {/* ===================================================== */}
        {/* RESUME JOURNEY */}
        {/* ===================================================== */}

        <div className="mt-4 rounded-2xl border border-solo-orange/10 bg-solo-orange/5 px-4 py-5">
          <div className="text-center">
            <span className="text-[7px] font-bold uppercase tracking-[0.15em] text-solo-orange">
              Resume journey
            </span>

            <h3 className="mt-1.5 font-heading text-lg font-extrabold text-solo-text sm:text-xl">
              From profile to resume.
            </h3>

            <p className="mx-auto mt-1.5 max-w-lg text-[8px] leading-4 text-solo-muted">
              Keep your information updated and use it whenever
              you need to create or update your resume.
            </p>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5">
            {RESUME_STEPS.map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-1.5"
              >
                <span className="rounded-full border border-black/5 bg-white px-2.5 py-1.5 text-[7px] font-bold text-solo-text shadow-sm">
                  {index + 1}. {step}
                </span>

                {index < RESUME_STEPS.length - 1 && (
                  <span className="text-[8px] font-bold text-solo-orange">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ===================================================== */}
        {/* SHOWCASE */}
        {/* ===================================================== */}

        <div className="mt-10 grid items-center gap-5 md:grid-cols-[0.75fr_1.25fr]">
          <div>
            <span className="text-[7px] font-bold uppercase tracking-[0.15em] text-solo-orange">
              Showcase your profile
            </span>

            <h3 className="mt-1.5 font-heading text-lg font-extrabold leading-tight text-solo-text sm:text-xl">
              Let your journey tell your story.
            </h3>

            <p className="mt-2 max-w-sm text-[8px] leading-4 text-solo-muted sm:text-[9px]">
              Bring your learning, skills, projects, achievements
              and credentials together.
            </p>
          </div>

          <div className="overflow-x-auto pb-2">
            <div className="flex min-w-max gap-1.5">
              {[
                "Learning",
                "Skills",
                "Projects",
                "Achievements",
                "Credentials",
                "Progress",
              ].map((item, index) => (
                <div
                  key={item}
                  className="group w-[105px] shrink-0 rounded-xl border border-black/5 bg-white p-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:w-[115px]"
                >
                  <span className="text-[6px] font-extrabold text-solo-orange">
                    0{index + 1}
                  </span>

                  <p className="mt-2.5 text-[8px] font-bold text-solo-text sm:text-[9px]">
                    {item}
                  </p>

                  <span className="mt-1 block text-[7px] text-solo-muted transition-transform duration-200 group-hover:translate-x-1">
                    Explore →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===================================================== */}
        {/* FINAL MESSAGE */}
        {/* ===================================================== */}

        <div className="mt-10 text-center">
          <div className="mx-auto h-px max-w-24 bg-black/10" />

          <p className="mt-5 text-[7px] font-bold uppercase tracking-[0.15em] text-solo-orange">
            Keep building your journey
          </p>

          <h3 className="mt-1.5 font-heading text-lg font-extrabold text-solo-text sm:text-xl">
            Your profile grows with you.
          </h3>

          <p className="mx-auto mt-1.5 max-w-md text-[8px] leading-4 text-solo-muted sm:text-[9px]">
            Add new learning experiences, skills, projects,
            achievements and credentials as you continue your
            journey on SOLO.
          </p>
        </div>
      </div>

      {/* ===================================================== */}
      {/* SCREENSHOT MODAL */}
      {/* ===================================================== */}

      {selectedImage && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-3 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-xl bg-white p-1.5 shadow-2xl"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-base font-bold text-solo-text shadow-md transition-all hover:scale-105 hover:bg-solo-orange hover:text-white"
              aria-label="Close screenshot"
            >
              ×
            </button>

            <div className="max-h-[88vh] overflow-auto rounded-lg bg-solo-bg">
              <Image
                src={selectedImage.src}
                alt={selectedImage.label}
                width={1800}
                height={1100}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ===================================================== */
/* SECTION HEADING */
/* ===================================================== */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-1.5 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <span className="text-[7px] font-bold uppercase tracking-[0.15em] text-solo-orange">
          {eyebrow}
        </span>

        <h3 className="mt-1.5 font-heading text-lg font-extrabold text-solo-text sm:text-xl">
          {title}
        </h3>
      </div>

      <p className="max-w-sm text-[8px] leading-4 text-solo-muted sm:text-right sm:text-[9px]">
        {description}
      </p>
    </div>
  );
}

/* ===================================================== */
/* SCREENSHOT CARD */
/* ===================================================== */

function ScreenshotCard({
  image,
  onClick,
  large = false,
}: {
  image: Screenshot;
  onClick: () => void;
  large?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative block w-full overflow-hidden rounded-xl border border-black/5 bg-white text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(23,20,18,0.09)]"
    >
      <div
        className={`relative ${
          large
            ? "aspect-[16/8]"
            : "aspect-[16/9]"
        }`}
      >
        <Image
          src={image.src}
          alt={image.label}
          fill
          className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 600px"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-200 group-hover:bg-black/10">
          <span className="translate-y-1 rounded-full bg-white px-3 py-1.5 text-[7px] font-bold text-solo-text opacity-0 shadow-md transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
            View screenshot
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-black/5 bg-white px-2.5 py-2">
        <span className="text-[7px] font-bold text-solo-text sm:text-[8px]">
          {image.label}
        </span>

        <span className="text-[8px] font-bold text-solo-orange transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </div>
    </button>
  );
}

/* ===================================================== */
/* RESUME OPTION */
/* ===================================================== */

function ResumeOption({
  number,
  title,
  description,
  steps,
  image,
  onClick,
  compact = false,
}: {
  number: string;
  title: string;
  description: string;
  steps: string[];
  image: Screenshot;
  onClick: () => void;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <div className="group w-[245px] shrink-0 overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:w-[265px]">
        <div className="p-3">
          <div className="flex items-start gap-2">
            <span
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[7px] font-extrabold text-white ${
                number === "01"
                  ? "bg-solo-orange"
                  : "bg-solo-blue"
              }`}
            >
              {number}
            </span>

            <div>
              <h4 className="font-heading text-[10px] font-extrabold text-solo-text sm:text-[11px]">
                {title}
              </h4>

              <p className="mt-1 text-[7px] leading-3.5 text-solo-muted sm:text-[8px]">
                {description}
              </p>
            </div>
          </div>

          <div className="mt-2.5 flex flex-wrap gap-1">
            {steps.map((step, index) => (
              <span
                key={step}
                className="rounded-full bg-solo-bg px-2 py-1 text-[6px] font-semibold text-solo-text"
              >
                {index + 1}. {step}
              </span>
            ))}
          </div>
        </div>

        <div className="px-2.5 pb-2.5">
          <button
            type="button"
            onClick={onClick}
            className="group relative block w-full overflow-hidden rounded-lg border border-black/5"
          >
            <div className="relative aspect-[16/8] overflow-hidden bg-solo-bg">
              <Image
                src={image.src}
                alt={image.label}
                fill
                className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                sizes="265px"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-200 group-hover:bg-black/10">
                <span className="rounded-full bg-white px-2 py-1 text-[6px] font-bold text-solo-text opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100">
                  View
                </span>
              </div>
            </div>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="p-4">
        <div className="flex items-start gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-solo-orange text-[7px] font-extrabold text-white">
            {number}
          </span>

          <div>
            <h4 className="font-heading text-base font-extrabold text-solo-text sm:text-lg">
              {title}
            </h4>

            <p className="mt-1.5 text-[8px] leading-4 text-solo-muted sm:text-[9px]">
              {description}
            </p>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-1.5">
          {steps.map((step, index) => (
            <div
              key={step}
              className="flex items-center gap-1.5 rounded-lg bg-solo-bg px-2 py-1.5"
            >
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white text-[6px] font-bold text-solo-orange">
                {index + 1}
              </span>

              <span className="text-[7px] font-semibold text-solo-text">
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-3 pb-3">
        <ScreenshotCard
          image={image}
          onClick={onClick}
        />
      </div>
    </div>
  );
}
