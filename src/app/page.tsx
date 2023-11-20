import Image from "next/image";
import { buttonVariants } from "@/_components/ui/button";
import { cn } from "@/_lib/utils";
import Dots from "@/_components/dots";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/_components/ui/card";
import { ContactForm } from "@/_components/contact-form";
import { siteConfig } from "@/_config/site";

export default function Home() {
  return (
    <main className="py-8 container">
      <Hero />
      <Cards />
    </main>
  );
}

function Hero() {
  return (
    <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2 relative">
      <div className="space-y-2 text-center lg:text-left justify-center lg:mx-auto">
        <h1 className="text-lg md:text-xl">Software Engineer</h1>
        <h2 className="text-4xl md:text-6xl tracking-wide font-bold lg:pb-8">
          Hi, I&apos;m Mike.
        </h2>
        <div className="lg:pt-8">
          <ContactForm className="lg:block hidden w-full" />
        </div>
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
            priority
            className="rounded-full z-10 w-32 xs:w-48 sm:w-64 lg:w-48 xl:w-64"
          />
        </div>
      </div>
      <ContactForm className="block lg:hidden" />
      <Dots />
    </div>
  );
}

function Cards() {
  return (
    <section className="w-full py-24 lg:py-32">
      <div className="mb-8 md:mb-12 lg:text-center lg:text-lg">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-slate-50">
          Recent Projects
        </h2>
        <p className="text-slate-500 dark:text-slate-400">
          Check out some of my most recent projects
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-6 lg:gap-12">
        {siteConfig.projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={project.image}
                alt={project.name}
                width={300}
                height={200}
                className="object-cover object-top rounded-md w-full h-48"
              />
            </CardContent>
            <CardFooter>
              <a
                className={cn(buttonVariants({ variant: "secondary" }), "")}
                href={project.link}
              >
                View Code
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
