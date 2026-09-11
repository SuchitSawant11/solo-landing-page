import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["600", "700", "800"],
  display: "swap",
  preload: true,
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "SOLO - Skills for the Future",
  description: "SOLO is a platform that helps you discover, learn, and prove your skills to unlock career opportunities.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${roboto.variable} font-body`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}