"use client";

import Image from "next/image";
import { useState } from "react";

const STEPS = [
  {
    number: "01",
    title: "Open & complete your profile",
    description:
      "Open your Profile and select Edit Profile to add or update your information.",
    actions: [
      "Update your username",
      "Add About You",
      "Add your description",
      "Add your location",
      "Add other profile details",
    ],
    images: [
      { src: "/profile.png", label: "Profile" },
      { src: "/edit name.png", label: "Edit Profile" },
      { src: "/edit username.png", label: "Username" },
      { src: "/about you.png", label: "About You" },
      { src: "/description.png", label: "Description" },
      { src: "/location.png", label: "Location" },
      { src: "/add adhar details.png", label: "Additional Details" },
    ],
  },

  {
    number: "02",
    title: "Add your education",
    description:
      "Open the Education section and add your academic information.",
    actions: [
      "Click Add Education",
      "Add your course or degree",
      "Add your institute details",
      "Enter your education information",
      "Import your Open Badge when available",
    ],
    images: [
      { src: "/education.png", label: "Education" },
      { src: "/adding education.png", label: "Add Education" },
      {
        src: "/import your open badge.png",
        label: "Import Open Badge",
      },
    ],
  },

  {
    number: "03",
    title: "Upload or generate your resume",
    description:
      "Upload an existing resume or use your SOLO profile information to generate one.",
    actions: [
      "Upload your existing resume",
      "Open the resume option",
      "Click Generate Resume",
      "Check the information",
      "Review the cover page",
    ],
    images: [
      { src: "/upload resume.png", label: "Upload Resume" },
      {
        src: "/after click generate resume.png",
        label: "Generate Resume",
      },
      { src: "/upload resume.png", label: "Upload Resume" },
    ],
  },

  {
    number: "04",
    title: "Review & save your resume",
    description:
      "Select the resume you want, review it and save or download your resume.",
    actions: [
      "Select the resume you want",
      "Review your resume",
      "Check your profile information",
      "Click Save",
      "Download your resume",
    ],
    images: [
      {
        src: "/after click save resume after generating.png",
        label: "Save & Download Resume",
      },
    ],
  },
];

type Screenshot = {
  src: string;
  label: string;
};

export default function Profile() {
  const [selectedImage, setSelectedImage] = useState<Screenshot | null>(null);

  return (
    <section
      id="profile"
      className="relative w-full overflow-hidden bg-solo-bg"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-solo-orange/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-solo-blue/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1150px] px-4 py-12 sm:px-6 md:px-8 lg:py-16">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-solo-orange/15 bg-white px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.16em] text-solo-orange shadow-sm sm:text-[9px]">
            Your SOLO Profile
          </span>

          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-solo-text sm:text-4xl">
            Build your profile.
            <span className="block text-solo-orange">
              Showcase your journey.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-[10px] leading-5 text-solo-muted sm:text-xs">
            Follow the steps to add your details, education and resume on
            SOLO.
          </p>
        </div>

        {/* ONE PROFILE SECTION */}
        <div className="mt-10 rounded-3xl border border-black/5 bg-white p-4 shadow-[0_12px_40px_rgba(23,20,18,0.05)] sm:p-5 md:p-6">
          {/* 2 × 2 horizontal cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {STEPS.map((step, index) => (
              <article
                key={step.number}
                className="
                  group relative overflow-visible rounded-2xl
                  border border-black/5
                  bg-solo-bg/50
                  p-4
                  transition-all duration-300 ease-out
                  hover:-translate-y-1
                  hover:border-solo-orange/20
                  hover:bg-white
                  hover:shadow-[0_16px_35px_rgba(23,20,18,0.10)]
                "
              >
                {/* Step heading */}
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[9px] font-extrabold ${
                      index % 2 === 0
                        ? "bg-solo-orange/10 text-solo-orange"
                        : "bg-solo-blue/10 text-solo-blue"
                    }`}
                  >
                    {step.number}
                  </div>

                  <div className="min-w-0">
                    <p
                      className={`text-[7px] font-bold uppercase tracking-[0.15em] ${
                        index % 2 === 0
                          ? "text-solo-orange"
                          : "text-solo-blue"
                      }`}
                    >
                      Step {step.number}
                    </p>

                    <h3 className="font-heading text-sm font-extrabold leading-tight text-solo-text sm:text-base">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Main Screenshot */}
                <button
                  type="button"
                  onClick={() => setSelectedImage(step.images[0])}
                  className="group/image block w-full text-left"
                >
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-black/10 bg-white">
                    <Image
                      src={step.images[0].src}
                      alt={step.images[0].label}
                      fill
                      className="
                        object-cover object-top
                        transition-transform duration-500
                        group-hover/image:scale-[1.045]
                      "
                      sizes="(max-width: 768px) 100vw, 500px"
                    />

                    {/* Screenshot hover */}
                    <div
                      className="
                        absolute inset-0
                        flex items-center justify-center
                        bg-black/0
                        transition-all duration-300
                        group-hover/image:bg-black/10
                      "
                    >
                      <span
                        className="
                          rounded-full bg-white
                          px-3 py-1.5
                          text-[7px] font-bold text-solo-text
                          opacity-0 shadow-md
                          transition-all duration-300
                          group-hover/image:opacity-100
                        "
                      >
                        View screenshot
                      </span>
                    </div>
                  </div>

                  <p className="mt-1.5 text-[7px] font-semibold text-solo-muted">
                    {step.images[0].label} · Click to enlarge
                  </p>
                </button>

                {/* Description */}
                <p className="mt-3 text-[9px] leading-4 text-solo-muted sm:text-[10px]">
                  {step.description}
                </p>

                {/* Actions */}
                <div className="mt-3 grid grid-cols-1 gap-y-1.5 sm:grid-cols-2">
                  {step.actions.map((action) => (
                    <div
                      key={action}
                      className="flex items-start gap-2 text-[8px] leading-4 text-solo-text sm:text-[9px]"
                    >
                      <span
                        className={`mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full ${
                          index % 2 === 0
                            ? "bg-solo-orange"
                            : "bg-solo-blue"
                        }`}
                      />

                      <span>{action}</span>
                    </div>
                  ))}
                </div>

                {/* Small Screenshot Cards */}
                {step.images.length > 1 && (
                  <div className="mt-4 border-t border-black/5 pt-3">
                    <div className="flex flex-wrap gap-2">
                      {step.images.slice(1).map((image, imageIndex) => (
                        <button
                          key={`${image.src}-${imageIndex}`}
                          type="button"
                          onClick={() => setSelectedImage(image)}
                          className="
                            group/thumb relative
                            flex items-center gap-2
                            overflow-hidden
                            rounded-xl
                            border border-black/5
                            bg-white
                            px-2 py-1.5
                            text-left
                            transition-all duration-300 ease-out
                            hover:z-20
                            hover:-translate-y-1
                            hover:scale-[1.12]
                            hover:border-solo-orange/30
                            hover:shadow-[0_12px_25px_rgba(23,20,18,0.12)]
                          "
                        >
                          {/* Small screenshot */}
                          <span
                            className="
                              relative
                              h-8 w-12
                              shrink-0
                              overflow-hidden
                              rounded-lg
                              bg-solo-bg
                              transition-all duration-300
                              group-hover/thumb:h-12
                              group-hover/thumb:w-20
                            "
                          >
                            <Image
                              src={image.src}
                              alt={image.label}
                              fill
                              className="
                                object-cover object-top
                                transition-transform duration-500
                                group-hover/thumb:scale-110
                              "
                              sizes="80px"
                            />
                          </span>

                          {/* Card label */}
                          <span
                            className="
                              whitespace-nowrap
                              text-[7px]
                              font-semibold
                              text-solo-text
                              transition-all duration-300
                              group-hover/thumb:text-[8px]
                            "
                          >
                            {image.label}
                          </span>

                          {/* Arrow */}
                          <span
                            className="
                              text-[8px]
                              font-bold
                              text-solo-blue
                              transition-transform duration-300
                              group-hover/thumb:translate-x-1
                            "
                          >
                            →
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bottom hover line */}
                <div
                  className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full ${
                    index % 2 === 0
                      ? "bg-solo-orange"
                      : "bg-solo-blue"
                  }`}
                />
              </article>
            ))}
          </div>

          {/* Workflow */}
          <div className="mt-5 border-t border-black/5 pt-4">
            <div className="rounded-2xl bg-solo-bg/70 px-4 py-4 text-center">
              <p className="text-[7px] font-bold uppercase tracking-[0.15em] text-solo-muted">
                Your profile workflow
              </p>

              <div className="mt-2 flex flex-wrap items-center justify-center gap-2 text-[8px] font-bold text-solo-text sm:text-[9px]">
                <span>Complete Profile</span>

                <span className="text-solo-orange">→</span>

                <span>Add Education</span>

                <span className="text-solo-orange">→</span>

                <span>Upload or Generate Resume</span>

                <span className="text-solo-orange">→</span>

                <span>Select Resume</span>

                <span className="text-solo-orange">→</span>

                <span>Save & Download</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Screenshot Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-white p-2 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="
                absolute right-3 top-3 z-10
                flex h-9 w-9
                items-center justify-center
                rounded-full
                bg-white
                text-lg font-bold text-solo-text
                shadow-md
                transition
                hover:scale-105
              "
              aria-label="Close screenshot"
            >
              ×
            </button>

            {/* Large screenshot */}
            <div className="max-h-[88vh] overflow-auto rounded-xl bg-solo-bg">
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