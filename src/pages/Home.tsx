import { Hero } from '@/components/Hero';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { BrandStory } from '@/components/BrandStory';
import { Collections } from '@/components/Collections';
import { Newsletter } from '@/components/Newsletter';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedProducts />
      <BrandStory />
      <Collections />
      <Newsletter />
    </div>
  );
}