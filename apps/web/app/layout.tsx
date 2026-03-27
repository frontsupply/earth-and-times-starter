import "./globals.css";
import { SiteShell } from "../components/site-shell";

export const metadata = {
  title: "Earth & Times",
  description: "A living biblical clock and witnessing tool.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
