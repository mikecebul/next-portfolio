import { Button } from "@/_components/ui/button";
import Image from "next/image";
import { buttonVariants } from "@/_components/ui/button";
import { cn } from "@/_lib/utils";
import Dots from "@/_components/dots";

const projects = [
  {
    name: "Zoom Hybrid Meeting Kiosk",
    description:
      "Start a Zoom hybrid meeting without the need for additional Polycom equipment or a Zoom Rooms subscription.",
    image: "/project_1.jpg",
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
];

export default function Home() {
  return (
    <main className="py-8">
      <Hero />
    </main>
  );
}

function Hero() {
  return (
    <div className="lg:container">
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2 relative">
        <div className="space-y-2 text-center lg:text-left justify-center lg:mx-auto">
          <h1 className="">Software Engineer</h1>
          <h2 className="text-3xl tracking-wide font-bold lg:pb-8">
            Hi, I&apos;m Mike.
          </h2>
          <a
            href="mailto:mikecebul@gmail.com"
            className={cn(
              buttonVariants(),
              "hidden lg:block font-semibold text-lg"
            )}
          >
            Contact Me
          </a>
        </div>
        <div className="flex flex-col justify-center items-center relative">
          <svg
            id="visual"
            viewBox="0 0 900 600"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            className="w-full h-auto max-w-full"
          >
            <g transform="translate(462.38023724454115 268.56955310240977)">
              <path
                d="M184.9 -206.6C236.9 -176.7 274.5 -115.9 282.2 -52.7C289.8 10.5 267.5 76 231 128.1C194.6 180.2 144.2 218.8 81.9 254C19.7 289.1 -54.3 320.7 -120.1 306.8C-186 292.9 -243.7 233.5 -276 165.3C-308.3 97.1 -315.1 20.1 -302.5 -53.7C-289.9 -127.5 -257.8 -198.2 -204.1 -227.8C-150.4 -257.4 -75.2 -245.9 -4.4 -240.6C66.4 -235.4 132.8 -236.4 184.9 -206.6"
                fill="currentColor"
                className="text-accent"
              ></path>
            </g>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              alt="Profile picture"
              src="/profile_pic.jpg"
              width={350}
              height={350}
              className="rounded-full z-10 w-32 xs:w-48 sm:w-64 lg:w-48 xl:w-64"
            />
          </div>
        </div>
        <Button className="font-semibold text-lg lg:hidden rounded-none">
          Contact Me
        </Button>
        <Dots />
      </div>
      <Projects />
    </div>
  );
}

function Projects() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6 lg:gap-12">
        {projects.map((project, index) => (
          <div className="rounded-lg shadow-lg overflow-hidden" key={index}>
            <Image
              alt={project.name}
              className="object-cover object-top w-full h-64"
              width="300"
              height="200"
              src={project.image}
            />
            <div className="p-6 bg-white dark:bg-zinc-800">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                {project.name}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                {project.description}
              </p>
              <a
                className="mt-4 inline-block text-zinc-600 underline dark:text-zinc-300"
                href={project.link}
              >
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
