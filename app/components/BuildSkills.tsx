const PROJECTS = [
  {
    title: "Guided Projects",
    description: "Apply what you just learned in a hands-on mini-project.",
  },
  {
    title: "Sandbox Environment",
    description: "Practice safely with instant feedback, no setup required.",
  },
  {
    title: "Skill Checkpoints",
    description: "Quick checks to confirm you're ready to move forward.",
  },
];

export default function BuildSkills() {
  return (
    <div className="mt-12">
      <h3 className="font-heading text-xl font-bold text-solo-text">
        Build Skills
      </h3>
      <p className="mt-2 text-sm text-solo-muted">
        Turn lessons into muscle memory by building things that actually
        work.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="rounded-xl border border-black/10 bg-white p-4 shadow-sm"
          >
            <h4 className="text-sm font-semibold text-solo-text">
              {project.title}
            </h4>
            <p className="mt-1 text-xs text-solo-muted">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
