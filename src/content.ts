export const LINKS = {
  hire: "#",
  github: "#",
  linkedin: "#",
  x: "#",
  youtube: "#",
  email: "#",
  resume: "#",
  privacy: "#",
  buildYourOwn: "#",
} as const;

export const CONTENT = {
  page: {
    title: "Nrith Jana | Developer",
    description:
      "Portfolio of Nrith Jana. Fan-made GTA VI-style portfolio. Not affiliated with Rockstar Games.",
  },
  navbar: {
    monogram: "NJ", //dont change this shit
    hire: "Hire Me",
  },
  hero: {
    wordmark: "Nrith Jana",
    lines: ["Full-stack developer", "Booking spring 2027"],
    button: "Hire Me",
    tech: ["React", "Node.js", "PostgreSQL"],
    disclaimer: "Fan-made GTA VI-style portfolio. Not affiliated with Rockstar Games.",
  },
  meet: {
    scene: {
      eyebrow: "Watch",
      title: "Meet the Developer",
      button: "Play",
    },
    featured: {
      eyebrow: "Watch",
      title: "Ride Along",
      button: "Play",
    },
    projects: [
      { eyebrow: "AI", title: "AI Book Assistant" },
      { eyebrow: "3D Web", title: "3D Basketball Website" },
      { eyebrow: "Mobile", title: "React Native Language App" },
    ],
  },
  services: [
    {
      title: "Code Rescue",
      text: "For existing teams: slow pages, flaky deploys or a codebase nobody wants to touch. I find the problems, fix them and leave it documented.",
      button: "See What's Included",
    },
    {
      eyebrow: "For new products",
      title: "Full-Stack / Builds",
      text: "Product, API and database, designed and shipped end to end, from the first sketch to production. Typically six to ten weeks.",
      button: "Start a Project",
    },
  ],
  miami: {
    title: "Miami, USA.",
    bio: "I'm Nrith Jana, a full-stack developer who has spent eight years building products for startups, agencies and teams that need to ship fast without breaking things. I work across the whole stack, from the interface people see to the API and database behind it, and I care about code the next developer will thank me for.",
  },
  highlights: [
    {
      eyebrow: "Status",
      title: "Open to Work",
      text: "Available for freelance and contract work from spring 2027, remote or on site in Miami.",
      button: "Hire Me",
    },
    {
      eyebrow: "Community",
      title: "After Hours",
      text: "When the deploy's done, I'm out with Miami's dev crowd: meetups, talks and the occasional late-night hackathon.",
      button: "View All",
    },
    {
      eyebrow: "Case Study",
      title: "The Heist: Shipped in Six Weeks",
      text: "How I rebuilt a booking platform's checkout and cut drop-offs by 31%.",
      button: "Read the Case Study",
    },
    {
      eyebrow: "Personal",
      title: "Off the Clock",
      text: "Open-source contributor, weekend game jammer and the one who always brings the coffee to the meetup.",
      button: "More About Me",
    },
  ],
  clients: {
    header: "Clients",
    viewAll: "View All",
    cards: [
      {
        eyebrow: "Sample Clients",
        title: "Startups, Agencies and Product Teams",
        button: "See All Clients",
      },
      {
        eyebrow: "Sample Review",
        title: "Incredibly fast, detail-oriented, and easy to work with.",
        button: "Read the Review",
      },
    ],
  },
  blog: {
    header: "Blog",
    viewAll: "View all",
    posts: [
      { title: "700 AI Agents Escaped and Became Hackers", date: "November 3, 2026" },
      { title: "Agentic Engineering in 2026", date: "October 21, 2026" },
      { title: "Think System Design & Architecture", date: "October 8, 2026" },
    ],
  },
  footer: {
    build: {
      title: "Build Your Own",
      text: "Want a portfolio like this? Here's how it was built, step by step.",
    },
    badge: {
      title: "Rated D for Developer",
      text: "Clean Code, Mild Refactoring, Frequent Coffee.",
    },
    copyright: "© 2026 Grand Theft Developer.",
    disclaimer: "Fan-made GTA VI-style portfolio. Not affiliated with Rockstar Games.",
  },
} as const;
