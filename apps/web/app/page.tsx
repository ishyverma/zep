import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Last } from "@/components/Last";
import { Middle } from "@/components/Middle";
import { RemoteTeam } from "@/components/RemoteTeams";
import { Stories } from "@/components/Stories";

export default function Home() {
  return <div>
    <div className="bg-gradient-to-b from-[#202545] to-[#373AA1] h-screen relative">
      <Header />
      <Hero />
    </div>
    <Middle />
    <RemoteTeam />
    <div className="bg-[#F7F5F4]">
      <Stories />
    </div>
    <Last />
    <Footer />
  </div>  
}
