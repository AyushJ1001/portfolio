import { Metadata } from "next";
import "./globals.css";
import { Young_Serif, Bricolage_Grotesque } from "next/font/google";
import { ThemeToggle } from "@/components/ThemeToggle";
import { THEME_ATTR, THEME_STORAGE_KEY } from "@/lib/theme";

const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-young-serif",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayush Juvekar — Software Engineer & ML Researcher",
  description:
    "Computer Science Master's Graduate | Full Stack Developer | Machine Learning Engineer",
  icons: {
    icon: "/favicon.svg",
  },
};

// Applies a manually-pinned theme before first paint so the OS-default page
// never flashes the wrong mode. Absent a stored choice, CSS `prefers-color-scheme`
// (dark-amber default) takes over — no attribute is set.
const themeInit = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"||t==="dark"){document.documentElement.setAttribute("${THEME_ATTR}",t);}}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${youngSerif.variable} ${bricolage.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="font-sans antialiased">
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
