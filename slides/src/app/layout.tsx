
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import { ThemeProvider } from "@/provider/theme-provider";
import { Toaster } from "@/components/ui/toaster";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased bg-black text-white`}
      >
        {/* <ThemeProvider 
        attribute={"class"}
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
        > */}
          {children}
          <Toaster />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
