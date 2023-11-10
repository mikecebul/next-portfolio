import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-[100dvh] container py-24 justify-center">
      <div className="flex gap-24">
        <div className="flex flex-col justify-center items-start h-96">
          <h1 className="text-2xl pb-4">Software Engineer</h1>
          <h2 className="text-7xl tracking-wide font-semibold">
            Hi, I&apos;m Mike.
          </h2>
        </div>
        {/* <svg
            id="visual"
            viewBox="0 0 900 600"
            width="900"
            height="600"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            className="absolute inset-0 w-full h-full"
          >
            <g transform="translate(462.38023724454115 268.56955310240977)">
              <path
                d="M184.9 -206.6C236.9 -176.7 274.5 -115.9 282.2 -52.7C289.8 10.5 267.5 76 231 128.1C194.6 180.2 144.2 218.8 81.9 254C19.7 289.1 -54.3 320.7 -120.1 306.8C-186 292.9 -243.7 233.5 -276 165.3C-308.3 97.1 -315.1 20.1 -302.5 -53.7C-289.9 -127.5 -257.8 -198.2 -204.1 -227.8C-150.4 -257.4 -75.2 -245.9 -4.4 -240.6C66.4 -235.4 132.8 -236.4 184.9 -206.6"
                fill=""
              ></path>
            </g>
  </svg> */}
        <Image
          alt="Profile picture"
          src="/profile_pic.jpg"
          width={300}
          height={300}
          className="rounded-full w-96 h-96"
        />
      </div>
    </main>
  );
}
