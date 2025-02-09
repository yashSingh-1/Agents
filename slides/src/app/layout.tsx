
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/provider/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import {ClerkProvider} from '@clerk/nextjs'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Slides",
  description: "Create slides with AI automatically!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <ClerkProvider>

        <ThemeProvider 
        attribute={"class"}
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
