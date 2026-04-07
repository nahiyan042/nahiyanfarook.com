import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Nahiyan Al Farook — Civil Engineer & Researcher",
  description:
    "Portfolio of Engr. Nahiyan Al Farook — Geotechnical Researcher, Structural Engineer, and Sustainability Professional. Specializing in ground improvement, FEM modeling, and sustainable materials.",
  keywords: [
    "Nahiyan Al Farook",
    "Civil Engineer",
    "Geotechnical Research",
    "Structural Engineer",
    "Sustainability",
    "Ground Improvement",
    "PLAXIS 3D",
    "RAP",
    "Bangladesh",
  ],
  authors: [{ name: "Nahiyan Al Farook" }],
  openGraph: {
    title: "Engr. Nahiyan Al Farook — Civil Engineer & Researcher",
    description:
      "Geotechnical Researcher, Structural Engineer & Sustainability Professional",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
