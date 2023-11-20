export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  navLinks: [
    {
      title: "CV",
      href: "/resume.pdf",
    },
  ],
  projects: [
    {
      name: "Zoom Hybrid Meeting Kiosk",
      description:
        "Start a Zoom hybrid meeting without the need for additional Polycom equipment or a Zoom Rooms subscription.",
      image: "/zoom_kiosk.jpg",
      link: "https://github.com/mikecebul/zoom-hybrid-meeting-kiosk",
      technologies: [
        "Electron.js",
        "Vite",
        "React",
        "Express.js",
        "Tailwindcss",
        "Remote Tunnel",
      ],
    },
    {
      name: "BASES Outpatient Facility",
      description:
        "Business website with a dynamic team, services, about us, and donation sections, along with a   custom admin panel",
      image: "/bases.png",
      link: "https://github.com/mikecebul/bases",
      technologies: [
        "Next.js",
        "Prisma",
        "PostgreSQL",
        "Tailwindcss",
        "Shadcn-ui",
        "Uploadthing",
      ],
    },
    {
      name: "District 21 Softball of Michigan",
      description:
        "E-commerce website to sell registration for tournaments and training workshops, tracking tournament stats, and a hall of fame section.",
      image: "/d21_softball.png",
      link: "/",
      technologies: ["Next.js", "Strapi.js", "Stripe", "MUI"],
    },
  ],
};
