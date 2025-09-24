import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { collections } from '@/data/products';

export function Collections() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Curated Collections
          </h2>
          <p className="text-lg text-muted font-heading max-w-2xl mx-auto">
            Each collection tells a story of rebellion, creativity, and the pursuit of something beyond ordinary
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div key={collection.name} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-4">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Collection Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    {collection.name}
                  </h3>
                  <p className="text-sm text-gray-200 mb-4">
                    {collection.description}
                  </p>
                  
                  {collection.name === 'Void Runner' ? (
                    <Button
                      disabled
                      className="w-full bg-white/20 text-white border border-white/30 hover:bg-white/30"
                    >
                      Coming Soon
                    </Button>
                  ) : (
                    <Link to={`/collection/${collection.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      <Button className="w-full btn-cosmic group/btn">
                        Explore Collection
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}