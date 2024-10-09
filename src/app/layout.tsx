import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { isDev } from "./utilities/Utilities";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {isDev() && (
          <div
            style={{
              position: "fixed",
              background: "yellow",
              width: "100%",
              padding: "1em",
              color: "#000",
              fontWeight: "bold",
            }}
          >
            {" "}
            Development Mode
          </div>
        )}
        {children}
      </body>
    </html>
  );
}
