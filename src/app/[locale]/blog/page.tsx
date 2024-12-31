import BlogList from "@/components/blog/BlogList";
import { HeroSection } from "@/components/common/HeroSection";


// Örnek veri tipi
export interface BlogPost {
	id: number;
	title: string;
	author: string;
	date: string;
	image: string;
  }
  
  // Örnek blog verisi
  const mockBlogData: BlogPost[] = [
	{
	  id: 1,
	  title: "Android Geliştirme",
	  author: "Gizem Tütüncü",
	  date: "24.10.2024",
	  image: "https://picsum.photos/800/600?random=1",
	},
	{
	  id: 2,
	  title: "Endüstri 4.0 ve Girişimcilik",
	  author: "Dilan Çelebi",
	  date: "24.10.2024",
	  image: "https://picsum.photos/800/600?random=2",
	},
	{
	  id: 3,
	  title: "Endüstri 5.0",
	  author: "Kerem Çakır",
	  date: "24.10.2024",
	  image: "https://picsum.photos/800/600?random=3",
	},
	{
	  id: 4,
	  title: "Google Ads ve Maksimum Performans Kampanyaları",
	  author: "Dilan Çelebi",
	  date: "24.10.2024",
	  image: "https://picsum.photos/800/600?random=4",
	},
	{
	  id: 5,
	  title: "Google Cloud: Güçlü Bir Bulut Altyapısı",
	  author: "Dilan Çelebi",
	  date: "24.10.2024",
	  image: "https://picsum.photos/800/600?random=1",
	},
	{
	  id: 6,
	  title: "GDG Community: Teknoloji Dünyasına Açılan Kapı",
	  author: "Gizem Tütüncü",
	  date: "24.10.2024",
	  image: "https://picsum.photos/800/600?random=1",
	},
	{
	  id: 7,
	  title: "Google Workspace: Yeni Nesil İşbirliği ve Verimlilik Platformu",
	  author: "Kerem Çakır",
	  date: "24.10.2024",
	  image: "https://picsum.photos/800/600?random=1",
	},
	{
	  id: 8,
	  title: "Google Yapay Zeka (AI): Endüstri Mühendisliği Perspektifinden Akıllı Çözümlerde Geleceği Şekillendirme",
	  author: "Dilan Çelebi",
	  date: "24.10.2024",
	  image: "https://picsum.photos/800/600?random=1",
	},
  ];

export default function Blog() {
  return (
    <>
		<HeroSection title="Blog" />
		<BlogList blogs={mockBlogData}/>
	</>
  );
}
