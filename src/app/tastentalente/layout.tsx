import { MusicFooter } from "@/components/music/Footer";
import { MusicHeader } from "@/components/music/Header";

export default function MusicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="theme-music min-h-screen bg-cream">
      <MusicHeader />
      {children}
      <MusicFooter />
    </div>
  );
}
