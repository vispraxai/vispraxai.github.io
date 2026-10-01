import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Visprax.ai — Independent AI Research Lab",
  description:
    "Visprax is an independent research lab building systems around machine intelligence, autonomy, and long-horizon exploration.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
