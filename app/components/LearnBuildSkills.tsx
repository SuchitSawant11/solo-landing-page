
import Image from "next/image";

const learnSteps = [
  {
    number: "01",
    title: "Find a course",
    text: "Browse courses from your dashboard.",
    src: "/courses.png",
  },
  {
    number: "02",
    title: "Enroll",
    text: "Click Enroll to add it to your journey.",
    src: "/enroll .png",
  },
  {
    number: "03",
    title: "Start learning",
    text: "Go to My Enrollments and begin lessons.",
    src: "/my enrollment.png",
  },
  {
    number: "04",
    title: "Complete the course",
    text: "Finish lessons, activities and assessments.",
    src: "/course page.png",
  },
  {
    number: "05",
    title: "Request completion",
    text: "Fill the form, add badge/certificate, submit.",
    src: "/request completion.png",
  },
  {
    number: "06",
    title: "Done!",
    text: "See your learning achievement on your profile.",
    src: "/enrollsuccess.png",
  },
];

const learningFeatures = [
  {
    title: "Learning activities",
    text: "Open your dashboard to access your learning activities, courses and other available opportunities.",
    src: "/dashboard.png",
  },
  {
    title: "Track your progress",
    text: "Open your dashboard or Career Pathway to view your enrollment, learning progress and completed activities.",
    src: "/Your Enrollment Progress.png",
  },
  {
    title: "Discover opportunities",
    text: "Explore your dashboard and Career Pathways to find opportunities that match your skills and career interests.",
    src: "/Top Matching Jobs.png",
  },
];

const careerSteps = [
  { title: "Discover career paths" },
  { title: "Understand required skills" },
  { title: "Identify your skill gaps" },
  { title: "Explore possible job roles" },
  { title: "Prepare for opportunities" },
  { title: "Showcase readiness" },
];

const journeyItems = [
  {
    title: "Learn",
    text: "Courses, activities and structured learning.",
    color: "#fd4322",
  },
  {
    title: "Build Skills",
    text: "Projects, internships and real experiences.",
    color: "#ff7f07",
  },
  {
    title: "Prove Skills",
    text: "Credentials, badges and achievements.",
    color: "#1255ff",
  },
  {
    title: "Showcase",
    text: "Bring your skills and experiences together.",
    color: "#eb5038",
  },
];

function ImageCard({
  src,
  caption,
}: {
  src: string;
  caption: string;
}) {
  return (
    <div
      className="
        group relative z-0
        overflow-visible
        rounded-lg
        border border-black/10
        bg-white
        shadow-sm
        transition-all duration-300 ease-out
        hover:z-30
        hover:-translate-y-2
        hover:scale-[1.55]
        hover:shadow-2xl
        hover:border-[#fd4322]/30
      "
    >
      {/* Screenshot */}

      <div className="overflow-hidden rounded-t-lg bg-white">
        <Image
          src={src}
          alt={caption}
          className="
            block
            h-auto
            w-full
            object-contain
          "
          width={600}
          height={360}
          priority={false}
        />
      </div>

      {/* Caption */}

      <p
        className="
          rounded-b-lg
          bg-white
          px-2
          py-1.5
          text-center
          text-[8px]
          font-bold
          text-[#263952]
        "
      >
        {caption}
      </p>
    </div>
  );
}

function WorkflowBar({
  steps,
  color,
  bgColor,
}: {
  steps: string[];
  color: string;
  bgColor: string;
}) {
  return (
    <div
      className="mt-3 rounded-lg border px-3 py-2"
      style={{
        borderColor: `${color}20`,
        backgroundColor: bgColor,
      }}
    >
      <p
        className="
          mb-1
          text-center
          text-[6px]
          font-bold
          uppercase
          tracking-[0.14em]
        "
        style={{ color }}
      >
        SOLO Learner Flow
      </p>

      <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1">
        {steps.map((step, index) => (
          <div
            key={step}
            className="flex items-center gap-1"
          >
            <span
              className="rounded-full px-2 py-0.5 text-[7px] font-bold"
              style={{
                backgroundColor: `${color}15`,
                color,
              }}
            >
              {step}
            </span>

            {index < steps.length - 1 && (
              <span
                className="text-[8px] font-bold"
                style={{ color }}
              >
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LearnBuildSkills() {
  return (
    <section
      id="learn-build"
      className="
        bg-[#fff8f3]
        py-7
        lg:min-h-[calc(100vh-68px)]
        lg:py-8
      "
    >
      <div className="mx-auto w-[calc(100%-24px)] max-w-[1180px]">

        {/* ===================================================== */}
        {/* SECTION INTRO */}
        {/* ===================================================== */}

        <div className="max-w-[600px]">
          <p className="text-[9px] font-bold uppercase tracking-wider text-[#fd4322]">
            Learn & Grow
          </p>

          <h2
            className="
              mt-0.5
              text-xl
              font-extrabold
              leading-tight
              text-[#172b44]
              sm:text-2xl
            "
          >
            From your first course
            <br />
            to your next opportunity.
          </h2>

          <p className="mt-1.5 text-[10px] leading-4 text-[#607087]">
            Learn new skills, build experience, prove what you can do,
            and grow your career on SOLO.
          </p>
        </div>

        {/* ===================================================== */}
        {/* LEARN ON SOLO */}
        {/* ===================================================== */}

        <div className="mt-5">

          {/* Heading */}

          <div className="flex items-center gap-2">
            <div
              className="
                grid
                h-6
                w-6
                shrink-0
                place-items-center
                rounded-md
                bg-[#fd4322]
                text-[8px]
                font-bold
                text-white
              "
            >
              01
            </div>

            <div>
              <p className="text-[8px] font-bold uppercase tracking-wide text-[#fd4322]">
                Learn on SOLO
              </p>

              <h3 className="text-sm font-extrabold leading-tight text-[#172b44]">
                From finding a course to earning your certificate
              </h3>
            </div>
          </div>

          {/* ================================================= */}
          {/* HORIZONTAL LEARNING CARDS */}
          {/* ================================================= */}

          <div className="mt-3 overflow-visible">
            <div
              className="
                flex
                gap-2
                overflow-x-auto
                overflow-y-visible
                px-1
                py-4
                scrollbar-thin
              "
            >
              {learnSteps.map((step) => (
                <div
                  key={step.number}
                  className="w-[145px] shrink-0"
                >

                  {/* Step number + title */}

                  <div className="mb-1.5 flex items-center gap-1">
                    <div
                      className="
                        grid
                        h-4
                        w-4
                        shrink-0
                        place-items-center
                        rounded
                        bg-[#fd4322]
                        text-[6px]
                        font-extrabold
                        text-white
                      "
                    >
                      {step.number}
                    </div>

                    <h4
                      className="
                        truncate
                        text-[8px]
                        font-extrabold
                        leading-tight
                        text-[#263952]
                      "
                    >
                      {step.title}
                    </h4>
                  </div>

                  {/* Screenshot Card */}

                  <ImageCard
                    src={step.src}
                    caption={step.title}
                  />

                </div>
              ))}
            </div>
          </div>

          {/* ================================================= */}
          {/* LEARNING FLOW */}
          {/* ================================================= */}

          <WorkflowBar
            steps={[
              "Browse",
              "Enroll",
              "Start Learning",
              "Activities",
              "Complete",
              "Request Completion",
              "Submit",
            ]}
            color="#fd4322"
            bgColor="#fff1eb"
          />

          {/* ================================================= */}
          {/* LEARNING FEATURES */}
          {/* ================================================= */}

          <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
            {learningFeatures.map((item) => (
              <div
                key={item.title}
                className="
                  group
                  overflow-hidden
                  rounded-lg
                  border
                  border-[#fd4322]/10
                  bg-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-md
                "
              >
                {/* Original SOLO Screenshot */}

                <div className="overflow-hidden bg-[#fff8f3]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={600}
                    height={340}
                    className="
                      block
                      h-[105px]
                      w-full
                      object-cover
                      object-top
                      transition-transform
                      duration-300
                      group-hover:scale-[1.03]
                    "
                  />
                </div>

                {/* Card Content */}

                <div className="px-2.5 py-2">
                  <p className="text-[8px] font-extrabold text-[#263952]">
                    {item.title}
                  </p>

                  <p className="mt-0.5 text-[7px] leading-3 text-[#697586]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===================================================== */}
        {/* GROW YOUR CAREER */}
        {/* ===================================================== */}

        <div className="mt-5">

          <div
            className="
              grid
              gap-4
              lg:grid-cols-[1fr_390px]
              lg:items-center
            "
          >

            {/* LEFT CONTENT */}

            <div>

              <div className="flex items-center gap-2">

                <div
                  className="
                    grid
                    h-6
                    w-6
                    shrink-0
                    place-items-center
                    rounded-md
                    bg-[#1255ff]
                    text-[8px]
                    font-bold
                    text-white
                  "
                >
                  02
                </div>

                <div>
                  <p className="text-[8px] font-bold uppercase tracking-wide text-[#1255ff]">
                    Grow your career
                  </p>

                  <h3 className="text-sm font-extrabold leading-tight text-[#172b44]">
                    Connect learning to your career
                  </h3>
                </div>

              </div>

              <p className="mt-1.5 max-w-[460px] text-[10px] leading-4 text-[#667085]">
                Career Pathways connect courses, skills and real-world
                opportunities into a structured journey.
              </p>

              {/* ================================================= */}
              {/* CAREER STEPS */}
              {/* ================================================= */}

              <div className="mt-2 flex flex-wrap gap-1.5">

                {careerSteps.map((item) => (
                  <div
                    key={item.title}
                    className="
                      flex
                      items-center
                      gap-1
                      rounded-md
                      border
                      border-black/8
                      bg-white
                      px-2
                      py-1.5
                      transition-all
                      hover:-translate-y-0.5
                      hover:shadow-sm
                    "
                  >
                    <span className="text-[7px] font-extrabold text-[#1255ff]">
                      ✓
                    </span>

                    <span className="text-[8px] text-[#5e6877]">
                      {item.title}
                    </span>
                  </div>
                ))}

              </div>

              {/* ================================================= */}
              {/* BUILD → PROVE → SHOWCASE */}
              {/* ================================================= */}

              <div className="mt-3 grid grid-cols-2 gap-1.5">

                {journeyItems.map((item) => (
                  <div
                    key={item.title}
                    className="
                      rounded-md
                      border
                      border-black/8
                      bg-white
                      px-2
                      py-1.5
                      transition-all
                      hover:-translate-y-0.5
                      hover:shadow-sm
                    "
                  >
                    <div className="flex items-center gap-1">

                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{
                          backgroundColor: item.color,
                        }}
                      />

                      <p
                        className="text-[7px] font-extrabold"
                        style={{
                          color: item.color,
                        }}
                      >
                        {item.title}
                      </p>

                    </div>

                    <p className="mt-0.5 text-[6.5px] leading-3 text-[#697586]">
                      {item.text}
                    </p>
                  </div>
                ))}

              </div>

            </div>

            {/* ================================================= */}
            {/* CAREER SCREENSHOTS */}
            {/* ================================================= */}

            <div className="grid grid-cols-2 gap-2">

              <ImageCard
                src="/opportunities.png"
                caption="Discover opportunities"
              />

              <ImageCard
                src="/course1page.png"
                caption="Career Pathway"
              />

            </div>

          </div>

          {/* ================================================= */}
          {/* CAREER FLOW */}
          {/* ================================================= */}

          <WorkflowBar
            steps={[
              "Explore Pathways",
              "Choose",
              "Enroll",
              "Build Skills",
              "Complete",
              "Grow Profile",
            ]}
            color="#1255ff"
            bgColor="#eef3ff"
          />

          {/* ================================================= */}
          {/* PROFILE CONNECTION */}
          {/* ================================================= */}

          <div
            className="
              mt-2
              rounded-lg
              border
              border-[#1255ff]/10
              bg-white
              px-3
              py-2
            "
          >
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">

              <span className="text-[7px] font-extrabold text-[#1255ff]">
                YOUR SOLO PROFILE
              </span>

              <span className="text-[7px] text-[#9aa3af]">
                Skills
              </span>

              <span className="text-[7px] text-[#9aa3af]">
                +
              </span>

              <span className="text-[7px] text-[#9aa3af]">
                Experience
              </span>

              <span className="text-[7px] text-[#9aa3af]">
                +
              </span>

              <span className="text-[7px] text-[#9aa3af]">
                Credentials
              </span>

              <span className="text-[7px] text-[#9aa3af]">
                +
              </span>

              <span className="text-[7px] text-[#9aa3af]">
                Achievements
              </span>

              <span className="text-[8px] font-bold text-[#1255ff]">
                →
              </span>

              <span className="text-[7px] font-extrabold text-[#263952]">
                Opportunities
              </span>

            </div>
          </div>

        </div>

        {/* ===================================================== */}
        {/* FINAL LIGHT-MODE MESSAGE */}
        {/* ===================================================== */}

        <div
          className="
            mt-4
            rounded-lg
            border
            border-[#fd4322]/15
            bg-white
            px-4
            py-3
            text-center
            shadow-sm
          "
        >
          <h3 className="text-sm font-extrabold text-[#172b44]">
            Learn something. Build something. Grow from it.
          </h3>

          <p className="mx-auto mt-0.5 max-w-[500px] text-[8px] leading-3.5 text-[#667085]">
            Every course, experience and achievement becomes part of your
            verified journey on SOLO.
          </p>

          <p className="mt-1 text-[7px] font-semibold text-[#7a8492]">
            Learn → Build Skills → Prove Skills → Grow → Showcase
          </p>
        </div>

      </div>
    </section>
  );
}
