import { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Outfit } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayush Juvekar — Software Engineer & ML Researcher",
  description:
    "Computer Science Graduate Student | Full Stack Developer | Machine Learning Engineer",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${playfair.variable} ${outfit.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
