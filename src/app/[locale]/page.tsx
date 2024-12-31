import { HomeHeroSection } from "@/components/home/HomeHeroSection";
import { Features } from "@/components/home/Features";
import Newsletter from "@/components/home/Newsletter";
import LatestBlogs from "@/components/home/LatestBlogs";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HomeHeroSection />

      {/* Feature Section */}
      <Features />

      {/* Newsletter */}
      <Newsletter />

      {/* Latest Blogs */}
      <LatestBlogs />
    </div>
  );
}
