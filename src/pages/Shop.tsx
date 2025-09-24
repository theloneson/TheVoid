import { useState } from 'react';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Filter, Grid, List } from 'lucide-react';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCollection, setSelectedCollection] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const collectionMatch = selectedCollection === 'all' || product.collection === selectedCollection;
    return categoryMatch && collectionMatch;
  });

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'hoodies', label: 'Hoodies' },
    { value: 'tees', label: 'T-Shirts' },
    { value: 'tracksuits', label: 'Tracksuits' },
  ];

  const collections = [
    { value: 'all', label: 'All Collections' },
    { value: 'The Fifth Eclipse', label: 'The Fifth Eclipse' },
    { value: 'Oblivion Core', label: 'Oblivion Core' },
    { value: 'Void Runner', label: 'Void Runner' },
  ];

  return (
    <div className="min-h-screen pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Shop The Void
          </h1>
          <p className="text-lg text-muted font-heading max-w-2xl">
            Discover our complete collection of cosmic streetwear designed for the fearless.
          </p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8 p-4 bg-surface/50 rounded-xl">
          <div className="flex flex-wrap gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-heading font-medium text-foreground mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-background border border-border rounded-lg px-3 py-2 text-sm font-body focus:outline-none focus:ring-2 focus:ring-void-primary"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Collection Filter */}
            <div>
              <label className="block text-sm font-heading font-medium text-foreground mb-2">
                Collection
              </label>
              <select
                value={selectedCollection}
                onChange={(e) => setSelectedCollection(e.target.value)}
                className="bg-background border border-border rounded-lg px-3 py-2 text-sm font-body focus:outline-none focus:ring-2 focus:ring-void-primary"
              >
                {collections.map(collection => (
                  <option key={collection.value} value={collection.value}>
                    {collection.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted font-body">
              {filteredProducts.length} products
            </span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted mb-4">
              <Filter className="h-12 w-12 mx-auto mb-4 opacity-50" />
            </div>
            <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
              No products found
            </h3>
            <p className="text-muted font-body mb-6">
              Try adjusting your filters to find what you're looking for.
            </p>
            <Button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedCollection('all');
              }}
              variant="outline"
              className="btn-outline-cosmic"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}