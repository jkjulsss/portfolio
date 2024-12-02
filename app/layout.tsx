import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import { IoAirplane } from "react-icons/io5";
import dynamic from "next/dynamic";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

const PostHogPageView = dynamic(() => import("./PostHogPageView"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className="min-h-screen antialiased">
        <Providers themeProps={{ attribute: "class", forcedTheme: "light" }}>
          <PostHogPageView />
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-2xl pt-10 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-5">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="/"
                title="nextui.org homepage"
              >
                <span className="text-default-600">Julius</span>
                <IoAirplane className="text-primary-700" size={20} />
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
