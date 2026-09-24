"use client";

import Image from "next/image";
import Link from "next/link";

type JourneyStep = {
  number: string;
  title: string;
  description: string;
};

type JourneyCard = {
  number: string;
  anchor: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  steps: JourneyStep[];
  details: string[];
  cta: string;
  href: string;
};

const journeyCards: JourneyCard[] = [
  {
    number: "01",
    anchor: "journey-build",
    eyebrow: "BUILD YOUR PROFILE",
    title: "Tell your story. Build your profile.",
    description:
      "Create a learner profile that brings together who you are, what you have learned, and what you can do.",
    image: "/profile.png",
    imageAlt: "SOLO learner profile",
    steps: [
      {
        number: "01",
        title: "Add your details",
        description:
          "Complete your basic information, education, bio, and profile photo.",
      },
      {
        number: "02",
        title: "Show your learning",
        description:
          "Bring your badges, certificates, courses, and achievements together.",
      },
      {
        number: "03",
        title: "Build your identity",
        description:
          "Create one learner profile that represents your journey.",
      },
    ],
    details: [
      "Personal information",
      "Education",
      "Skills",
      "Badges & certificates",
      "Learning experiences",
    ],
    cta: "Build your profile",
    href: "/profile#profile",
  },

  {
    number: "02",
    anchor: "journey-present",
    eyebrow: "GENERATE YOUR RESUME",
    title: "Turn your profile into a resume.",
    description:
      "Transform the information already in your SOLO profile into a resume that presents your skills and experiences clearly.",
    image: "/resumegenerate.jpeg",
    imageAlt: "SOLO resume generation",
    steps: [
      {
        number: "01",
        title: "Review your profile",
        description:
          "Check your education, skills, credentials, and experiences.",
      },
      {
        number: "02",
        title: "Generate your resume",
        description:
          "Create a professional resume using the information in your profile.",
      },
      {
        number: "03",
        title: "Present your journey",
        description:
          "Use your resume when applying for learning and career opportunities.",
      },
    ],
    details: [
      "Profile information",
      "Education & skills",
      "Projects & experiences",
      "Credentials",
      "Resume generation",
    ],
    cta: "Create your resume",
    href: "/profile#resume",
  },

  {
    number: "03",
    anchor: "journey-grow",
    eyebrow: "GROW YOUR CAREER",
    title: "Discover what comes next.",
    description:
      "Understand your skill gaps and discover learning opportunities that can help you move towards your goals.",
    image: "/skillgap.png",
    imageAlt: "SOLO skill gap identification",
    steps: [
      {
        number: "01",
        title: "Identify your skills",
        description:
          "See the skills connected to your profile and experiences.",
      },
      {
        number: "02",
        title: "Find your gaps",
        description:
          "Understand which skills you can develop for your desired pathway.",
      },
      {
        number: "03",
        title: "Explore opportunities",
        description:
          "Discover courses, internships, projects, jobs, and other opportunities.",
      },
    ],
    details: [
      "Skill gap identification",
      "Learning pathways",
      "Courses",
      "Internships",
      "Career opportunities",
    ],
    cta: "Explore opportunities",
    href: "/#discovery",
  },
];

const journeyNav = [
  {
    label: "Build",
    subtitle: "Your identity",
    href: "#journey-build",
  },
  {
    label: "Present",
    subtitle: "Your resume",
    href: "#journey-present",
  },
  {
    label: "Grow",
    subtitle: "Your next step",
    href: "#journey-grow",
  },
  {
    label: "Connect",
    subtitle: "Your community",
    href: "#journey-connect",
  },
];

const communityCards = [
  {
    image: "/community1.png",
    alt: "SOLO community",
  },
  {
    image: "/community 2.png",
    alt: "SOLO community learners",
  },
  {
    image: "/community3.png",
    alt: "SOLO community connection",
  },
];

export default function Profile() {
  return (
    <section className="career-section" id="profile">
      <div className="career-container">

        {/* =========================
            JOURNEY INTRO
        ========================== */}

        <div className="journey-intro">
          <div className="journey-intro-top">
            <p className="section-eyebrow">
              YOUR JOURNEY WITH SOLO
            </p>
          </div>

          <h2>
            Build your story.{" "}
            <span>Show your skills.</span>{" "}
            Find what comes next.
          </h2>

          <p className="career-intro">
            Your learning journey is more than a list of courses.
            SOLO brings your profile, skills, credentials, experiences,
            and opportunities together — helping you move from learning
            to doing, and from doing to your next opportunity.
          </p>
        </div>

        {/* =========================
            JOURNEY NAVIGATION
        ========================== */}

        <nav
          className="journey-nav journey-nav-modern"
          aria-label="Career journey"
        >
          {journeyNav.map((item, index) => (
            <a
              href={item.href}
              key={item.label}
            >
              <span className="journey-nav-number">
                0{index + 1}
              </span>

              <span className="journey-nav-info">
                <strong>{item.label}</strong>
                <small>{item.subtitle}</small>
              </span>

              <span className="journey-nav-arrow">
                ↗
              </span>
            </a>
          ))}
        </nav>

        {/* =========================
            JOURNEY CARDS
        ========================== */}

        <div className="journey-cards">
          {journeyCards.map((card, index) => (
            <article
              className={`journey-card ${
                index % 2 !== 0
                  ? "journey-card-reverse"
                  : ""
              }`}
              id={card.anchor}
              key={card.number}
            >

              {/* Image */}

              <div className="journey-card-image">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  sizes="(max-width: 900px) 100vw, 55vw"
                  className="journey-image"
                />

                <div className="journey-image-number">
                  {card.number}
                </div>
              </div>

              {/* Content */}

              <div className="journey-card-content">

                <p className="journey-card-eyebrow">
                  {card.eyebrow}
                </p>

                <h3>
                  {card.title}
                </h3>

                <p className="journey-card-description">
                  {card.description}
                </p>

                {/* Steps */}

                <div className="journey-steps">
                  {card.steps.map((step) => (
                    <div
                      className="journey-step"
                      key={step.number}
                    >
                      <span className="journey-step-number">
                        {step.number}
                      </span>

                      <div>
                        <h4>
                          {step.title}
                        </h4>

                        <p>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Details */}

                <div className="journey-details">
                  {card.details.map((detail) => (
                    <span key={detail}>
                      {detail}
                    </span>
                  ))}
                </div>

                {/* CTA */}

                <Link
                  className="journey-button"
                  href={card.href}
                >
                  {card.cta}

                  <span>
                    ↗
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* =========================
            CONNECT / COMMUNITY
        ========================== */}

        <section
          className="community-section"
          id="journey-connect"
        >
          <div className="community-content">

            <p className="section-eyebrow">
              CONNECT
            </p>

            <h2>
              Your journey
              <br />
              <span>doesn’t happen alone.</span>
            </h2>

            <p>
              Learning becomes more meaningful when you connect
              with people, ideas, experiences, and opportunities.
              SOLO brings learners, mentors, institutions,
              employers, and communities closer together.
            </p>

            <div className="community-tags">
              <span>Learners</span>
              <span>Mentors</span>
              <span>Institutions</span>
              <span>Employers</span>
            </div>

            <Link
              href="/community"
              className="community-button"
            >
              Explore the community

              <span>
                ↗
              </span>
            </Link>
          </div>

          {/* Community Images */}

          <div className="community-visual">
            {communityCards.map((card, index) => (
              <div
                key={card.image}
                className={`community-card community-card-${
                  index + 1
                }`}
              >
                <div className="community-card-image">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 650px) 80vw, 300px"
                    className="community-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      <style jsx>{`

        /* =========================
           MAIN SECTION
        ========================== */

        .career-section {
          width: 100%;
          background: var(--color-solo-bg);
          color: var(--color-solo-text);
          font-family: var(--font-body);
          overflow: hidden;
        }

        .career-container {
          width: calc(100% - 80px);
          max-width: 1400px;
          margin: 0 auto;
          padding: 110px 0 90px;
        }

        /* =========================
           JOURNEY INTRO
        ========================== */

        .journey-intro {
          max-width: 900px;
          margin-bottom: 50px;
        }

        .journey-intro-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .section-eyebrow {
          margin: 0;
          color: var(--color-solo-orange);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.15em;
          line-height: 1.2;
        }

        .journey-intro h2 {
          max-width: 900px;
          margin: 0;
          font-family: var(--font-heading);
          font-size: clamp(38px, 5vw, 68px);
          line-height: 1.02;
          letter-spacing: -0.05em;
          font-weight: 800;
        }

        .journey-intro h2 span {
          color: var(--color-solo-orange);
        }

        .career-intro {
          max-width: 620px;
          margin: 22px 0 0;
          color: var(--color-solo-muted);
          font-size: 15px;
          line-height: 1.65;
        }

        /* =========================
           COMPACT JOURNEY NAV
        ========================== */

        .journey-nav-modern {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          margin-bottom: 85px;
          border-top: 1px solid var(--color-solo-muted);
          border-bottom: 1px solid var(--color-solo-muted);
        }

        .journey-nav-modern a {
          position: relative;
          display: flex;
          align-items: center;
          gap: 14px;
          min-height: 82px;
          padding: 16px 20px 16px 0;
          color: var(--color-solo-text);
          text-decoration: none;
          transition:
            color 0.25s ease,
            padding-left 0.25s ease;
        }

        .journey-nav-modern a:not(:last-child) {
          border-right: 1px solid var(--color-solo-muted);
          margin-right: 20px;
        }

        .journey-nav-modern a:hover {
          color: var(--color-solo-orange);
          padding-left: 5px;
        }

        .journey-nav-number {
          flex-shrink: 0;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--color-solo-muted);
          border-radius: 50%;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.05em;
          transition:
            background 0.25s ease,
            color 0.25s ease,
            border-color 0.25s ease;
        }

        .journey-nav-modern a:hover .journey-nav-number {
          background: var(--color-solo-orange);
          color: var(--color-solo-bg);
          border-color: var(--color-solo-orange);
        }

        .journey-nav-info {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .journey-nav-info strong {
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.07em;
        }

        .journey-nav-info small {
          color: var(--color-solo-muted);
          font-size: 10px;
          line-height: 1.3;
        }

        .journey-nav-arrow {
          margin-left: auto;
          color: var(--color-solo-muted);
          font-size: 15px;
          opacity: 0;
          transform: translate(-5px, 5px);
          transition:
            opacity 0.25s ease,
            transform 0.25s ease;
        }

        .journey-nav-modern a:hover .journey-nav-arrow {
          opacity: 1;
          transform: translate(0, 0);
        }

        /* =========================
           JOURNEY CARDS
        ========================== */

        .journey-cards {
          display: flex;
          flex-direction: column;
          gap: 110px;
        }

        .journey-card {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          align-items: center;
          gap: 70px;
        }

        .journey-card-reverse {
          grid-template-columns: 0.85fr 1.15fr;
        }

        .journey-card-reverse .journey-card-image {
          order: 2;
        }

        .journey-card-reverse .journey-card-content {
          order: 1;
        }

        .journey-card-image {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border-radius: 24px;
          background: var(--color-solo-gold);
        }

        .journey-image {
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .journey-card:hover .journey-image {
          transform: scale(1.035);
        }

        .journey-image-number {
          position: absolute;
          top: 20px;
          left: 20px;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--color-solo-bg);
          color: var(--color-solo-text);
          font-size: 12px;
          font-weight: 800;
        }

        .journey-card-content {
          max-width: 570px;
        }

        .journey-card-eyebrow {
          margin: 0 0 18px;
          color: var(--color-solo-orange);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.15em;
        }

        .journey-card-content h3 {
          margin: 0;
          font-family: var(--font-heading);
          font-size: clamp(34px, 4vw, 56px);
          line-height: 1;
          letter-spacing: -0.045em;
          font-weight: 800;
        }

        .journey-card-description {
          margin: 22px 0 34px;
          color: var(--color-solo-muted);
          font-size: 16px;
          line-height: 1.7;
        }

        /* =========================
           STEPS
        ========================== */

        .journey-steps {
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--color-solo-muted);
        }

        .journey-step {
          display: grid;
          grid-template-columns: 42px 1fr;
          gap: 15px;
          padding: 18px 0;
          border-bottom: 1px solid var(--color-solo-muted);
        }

        .journey-step-number {
          color: var(--color-solo-orange);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
        }

        .journey-step h4 {
          margin: 0 0 5px;
          font-size: 14px;
          font-weight: 800;
        }

        .journey-step p {
          margin: 0;
          color: var(--color-solo-muted);
          font-size: 13px;
          line-height: 1.6;
        }

        /* =========================
           DETAILS
        ========================== */

        .journey-details {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 24px 0 28px;
        }

        .journey-details span {
          padding: 8px 11px;
          border: 1px solid var(--color-solo-muted);
          border-radius: 100px;
          color: var(--color-solo-muted);
          font-size: 10px;
          font-weight: 700;
        }

        /* =========================
           CTA BUTTONS
        ========================== */

        .journey-button,
        .community-button {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          min-width: 205px;
          padding: 7px 8px 7px 20px;
          border: 1px solid var(--color-solo-text);
          border-radius: 100px;
          background: var(--color-solo-text);
          color: var(--color-solo-bg);
          text-decoration: none;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.02em;
          transition:
            transform 0.3s ease,
            background 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .journey-button span,
        .community-button span {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--color-solo-bg);
          color: var(--color-solo-text);
          font-size: 17px;
          transition:
            transform 0.35s ease,
            background 0.3s ease,
            color 0.3s ease;
        }

        .journey-button:hover,
        .community-button:hover {
          background: var(--color-solo-orange);
          border-color: var(--color-solo-orange);
          color: var(--color-solo-bg);
          transform: translateY(-4px);
          box-shadow: 0 12px 30px var(--color-solo-coral);
        }

        .journey-button:hover span,
        .community-button:hover span {
          background: var(--color-solo-bg);
          color: var(--color-solo-orange);
          transform: translate(3px, -3px) rotate(2deg);
        }

        .journey-button:active,
        .community-button:active {
          transform: translateY(-1px);
        }

        .journey-button:focus-visible,
        .community-button:focus-visible {
          outline: 3px solid var(--color-solo-gold);
          outline-offset: 4px;
        }

        /* =========================
           COMMUNITY
           LIGHT BACKGROUND
        ========================== */

        .community-section {
          position: relative;
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          align-items: center;
          gap: 80px;
          min-height: 650px;
          margin-top: 130px;
          padding: 100px;
          overflow: hidden;

          border: 1px solid var(--color-solo-muted);
          border-radius: 30px;

          background: var(--color-solo-bg);

          scroll-margin-top: 100px;
        }

        .community-content {
          position: relative;
          z-index: 5;
          max-width: 520px;
        }

        .community-content h2 {
          margin: 18px 0 22px;
          font-family: var(--font-heading);
          font-size: clamp(40px, 5vw, 70px);
          line-height: 0.98;
          letter-spacing: -0.055em;
          font-weight: 800;
        }

        .community-content h2 span {
          color: var(--color-solo-orange);
        }

        .community-content > p:not(.section-eyebrow) {
          max-width: 480px;
          margin: 0;
          color: var(--color-solo-text);
          font-size: 16px;
          line-height: 1.7;
        }

        .community-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 28px 0;
        }

        .community-tags span {
          padding: 8px 11px;
          border: 1px solid var(--color-solo-text);
          border-radius: 100px;
          color: var(--color-solo-text);
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        /* =========================
           COMMUNITY IMAGES
        ========================== */

        .community-visual {
          position: relative;
          min-height: 470px;
          width: 100%;
        }

        .community-card {
          position: absolute;
          width: 300px;
          padding: 10px;
          background: var(--color-solo-bg);
          box-shadow: 0 20px 55px var(--color-solo-muted);
          transition:
            transform 0.4s ease,
            box-shadow 0.4s ease;
        }

        .community-card:hover {
          z-index: 10;
          box-shadow: 0 25px 65px var(--color-solo-muted);
        }

        .community-card-image {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
        }

        .community-image {
          object-fit: cover;
        }

        .community-card-1 {
          top: 15px;
          left: 4%;
          transform: rotate(-4deg);
          z-index: 2;
        }

        .community-card-1:hover {
          transform: rotate(-2deg) translateY(-8px);
        }

        .community-card-2 {
          top: 150px;
          right: 4%;
          transform: rotate(4deg);
          z-index: 3;
        }

        .community-card-2:hover {
          transform: rotate(2deg) translateY(-8px);
        }

        .community-card-3 {
          bottom: 10px;
          left: 18%;
          transform: rotate(-2deg);
          z-index: 4;
        }

        .community-card-3:hover {
          transform: rotate(0deg) translateY(-8px);
        }

        /* =========================
           TABLET
        ========================== */

        @media (max-width: 1000px) {
          .career-container {
            width: calc(100% - 48px);
            padding: 90px 0 80px;
          }

          .journey-card,
          .journey-card-reverse {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .journey-card-reverse .journey-card-image,
          .journey-card-reverse .journey-card-content {
            order: initial;
          }

          .journey-card-content {
            max-width: 700px;
          }

          .community-section {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 70px;
          }

          .community-content {
            max-width: 650px;
          }

          .community-visual {
            min-height: 500px;
          }
        }

        /* =========================
           MOBILE
        ========================== */

        @media (max-width: 650px) {
          .career-container {
            width: calc(100% - 32px);
            padding: 70px 0 60px;
          }

          .journey-intro {
            margin-bottom: 38px;
          }

          .journey-intro-top {
            margin-bottom: 16px;
          }

          .journey-intro h2 {
            font-size: clamp(34px, 10vw, 48px);
            line-height: 1.02;
          }

          .career-intro {
            margin-top: 18px;
            font-size: 14px;
            line-height: 1.65;
          }

          /* 2 × 2 Journey layout */

          .journey-nav-modern {
            grid-template-columns: 1fr 1fr;
            margin-bottom: 65px;
          }

          .journey-nav-modern a {
            min-height: 78px;
            padding: 14px 12px 14px 0;
            gap: 9px;
          }

          .journey-nav-modern a:not(:last-child) {
            margin-right: 0;
          }

          .journey-nav-modern a:nth-child(1),
          .journey-nav-modern a:nth-child(3) {
            border-right: 1px solid var(--color-solo-muted);
            padding-right: 12px;
          }

          .journey-nav-modern a:nth-child(2),
          .journey-nav-modern a:nth-child(4) {
            padding-left: 12px;
          }

          .journey-nav-modern a:nth-child(1),
          .journey-nav-modern a:nth-child(2) {
            border-bottom: 1px solid var(--color-solo-muted);
          }

          .journey-nav-number {
            width: 26px;
            height: 26px;
            font-size: 8px;
          }

          .journey-nav-info strong {
            font-size: 10px;
          }

          .journey-nav-info small {
            font-size: 9px;
          }

          .journey-nav-arrow {
            display: none;
          }

          /* Journey cards */

          .journey-cards {
            gap: 80px;
          }

          .journey-card {
            gap: 35px;
          }

          .journey-card-image {
            aspect-ratio: 1 / 0.82;
            border-radius: 18px;
          }

          .journey-image-number {
            top: 14px;
            left: 14px;
            width: 40px;
            height: 40px;
            font-size: 10px;
          }

          .journey-card-eyebrow {
            margin-bottom: 14px;
            font-size: 10px;
          }

          .journey-card-content h3 {
            font-size: 36px;
            line-height: 1;
          }

          .journey-card-description {
            margin: 18px 0 25px;
            font-size: 14px;
          }

          .journey-step {
            grid-template-columns: 34px 1fr;
            gap: 10px;
            padding: 15px 0;
          }

          .journey-step h4 {
            font-size: 13px;
          }

          .journey-step p {
            font-size: 12px;
          }

          .journey-details {
            margin: 20px 0 24px;
          }

          .journey-details span {
            padding: 7px 9px;
            font-size: 9px;
          }

          .journey-button {
            min-width: 170px;
            padding: 13px 17px;
            font-size: 11px;
          }

          .journey-button span,
          .community-button span {
            width: 23px;
            height: 23px;
            font-size: 14px;
          }

          /* Community */

          .community-section {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 30px;
            min-height: auto;
            margin-top: 90px;
            padding: 45px 24px 35px;
            border-radius: 22px;
            background: var(--color-solo-bg);
          }

          .community-content h2 {
            margin: 15px 0 18px;
            font-size: 42px;
          }

          .community-content > p:not(.section-eyebrow) {
            font-size: 14px;
          }

          .community-visual {
            min-height: 430px;
            margin-top: 10px;
          }

          .community-card {
            width: 245px;
            padding: 8px;
          }

          .community-card-image {
            height: 220px;
          }

          .community-card-1 {
            top: 0;
            left: 0;
          }

          .community-card-2 {
            top: 145px;
            right: 0;
          }

          .community-card-3 {
            bottom: 0;
            left: 12%;
          }
        }

        /* =========================
           SMALL MOBILE
        ========================== */

        @media (max-width: 400px) {
          .journey-intro h2 {
            font-size: 40px;
          }

          .journey-nav-modern {
            grid-template-columns: 1fr;
          }

          .journey-nav-modern a:nth-child(1),
          .journey-nav-modern a:nth-child(2),
          .journey-nav-modern a:nth-child(3),
          .journey-nav-modern a:nth-child(4) {
            border-right: none;
            padding-left: 0;
            padding-right: 0;
          }

          .journey-nav-modern a:not(:last-child) {
            border-bottom: 1px solid var(--color-solo-muted);
          }

          .community-section {
            padding-left: 18px;
            padding-right: 18px;
            background: var(--color-solo-bg);
          }

          .community-card {
            width: 215px;
          }

          .community-card-image {
            height: 195px;
          }

          .community-visual {
            min-height: 380px;
          }
        }
      `}</style>
    </section>
  );
}