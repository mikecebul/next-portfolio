import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/_lib/utils";
import { MainNav } from "@/_components/main-nav";
import { ThemeProvider } from "@/_components/theme-provider";
import Chatbot from "@/_components/chatbot";
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mikecebul.dev"),
  title: "MikeCebul",
  description: "Portfolio Website for Mike Cebulski.",
  openGraph: {
    title: "MikeCebul",
    description: "Portfolio Website for Mike Cebulski.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainNav />
          {children}
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
