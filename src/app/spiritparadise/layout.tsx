import { SpiritFooter } from "@/components/spirit/Footer";
import { SpiritHeader } from "@/components/spirit/Header";

export default function SpiritLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="theme-spirit min-h-screen bg-[#f7f1e8] text-ink">
      <SpiritHeader />
      {children}
      <SpiritFooter />
    </div>
  );
}
