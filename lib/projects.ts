export type Project = {
  slug: string;
  number: string;
  title: string;
  status: string;
  stage: string;
  summary: string;
  shortLabel: string;
  tags: string[];
  overview: string;
  questions: string[];
  note: string;
};

export const projects: Project[] = [
  {
    slug: "neural-routing",
    number: "01",
    title: "Neural Routing",
    status: "Active_v1.2",
    stage: "Deployment",
    shortLabel: "Decision paths",
    summary:
      "Multi-vector logic paths for autonomous agent decisioning in high-latency environments.",
    tags: ["agents", "decisioning", "routing"],
    overview:
      "Neural Routing explores how autonomous systems can choose between multiple reasoning paths when latency, uncertainty, and available tools all matter.",
    questions: [
      "How should an agent route work when multiple paths have different latency costs?",
      "Which signals are useful for choosing a path without overfitting the router?",
      "How can routing remain inspectable as the system becomes more capable?",
    ],
    note: "The current public record describes this project as Active_v1.2.",
  },
  {
    slug: "state-integrity",
    number: "02",
    title: "State Integrity",
    status: "Research_Phase",
    stage: "Research",
    shortLabel: "Data provenance",
    summary:
      "Provenance tracking for AI training data, verified end to end.",
    tags: ["provenance", "training data", "verification"],
    overview:
      "State Integrity is focused on making the lineage of AI training data easier to follow, inspect, and verify from source through downstream use.",
    questions: [
      "What metadata is worth carrying through a modern data pipeline?",
      "How should provenance be represented so that it stays useful at scale?",
      "Where do verification guarantees break down in real workflows?",
    ],
    note: "The current public record describes this project as Research_Phase.",
  },
  {
    slug: "synaptic-sync",
    number: "03",
    title: "Synaptic Sync",
    status: "Internal_Beta",
    stage: "Prototype",
    shortLabel: "Real-time loops",
    summary:
      "Low-latency stream processing for real-time cognitive feedback loops.",
    tags: ["streaming", "latency", "feedback"],
    overview:
      "Synaptic Sync investigates low-latency stream processing patterns for systems that need to continuously react to incoming signals.",
    questions: [
      "What does a useful feedback loop look like under tight latency constraints?",
      "How should state move between streams without becoming opaque?",
      "Which parts of a feedback system should remain observable by default?",
    ],
    note: "The current public record describes this project as Internal_Beta.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
