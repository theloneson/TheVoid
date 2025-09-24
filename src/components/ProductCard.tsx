import { Link } from 'react-router-dom';
import { ShoppingBag, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group product-card bg-card rounded-xl overflow-hidden border border-border/50">
      {/* Product Image */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.images[0]}
          alt={product.title}
          className="product-image w-full h-full object-cover transition-transform duration-300"
        />
        
        {/* Limited Badge */}
        {product.limited && (
          <div className="absolute top-3 left-3">
            <span className="bg-void-primary text-white px-2 py-1 text-xs font-semibold rounded-full">
              LIMITED
            </span>
          </div>
        )}

        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
          <Button
            size="sm"
            className="btn-cosmic text-sm"
            onClick={(e) => {
              e.preventDefault();
              // TODO: Add quick add to cart functionality
            }}
          >
            <ShoppingBag className="h-4 w-4 mr-1" />
            Add to Cart
          </Button>
          
          <Link to={`/product/${product.id}`}>
            <Button
              size="sm"
              variant="outline"
              className="btn-outline-cosmic text-sm"
            >
              <Eye className="h-4 w-4 mr-1" />
              Quick View
            </Button>
          </Link>
        </div>
        
        {/* Product Glow Effect */}
        <div className="product-glow absolute inset-0 rounded-lg opacity-0 transition-all duration-300" />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-2">
          <p className="text-xs font-medium text-muted uppercase tracking-wider">
            {product.collection}
          </p>
        </div>
        
        <h3 className="font-heading font-semibold text-foreground mb-2 line-clamp-2">
          {product.title}
        </h3>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-void-primary">
            ${product.price}
          </span>
          
          <div className="flex items-center space-x-1">
            {product.variants.map((variant, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border-2 border-border"
                style={{
                  backgroundColor: variant.color.toLowerCase().includes('black') ? '#000' :
                                   variant.color.toLowerCase().includes('wine') ? '#722f37' :
                                   variant.color.toLowerCase().includes('purple') ? '#8b5cf6' :
                                   variant.color.toLowerCase().includes('blue') ? '#3b82f6' :
                                   variant.color.toLowerCase().includes('brown') ? '#a3683c' :
                                   variant.color.toLowerCase().includes('gray') ? '#6b7280' :
                                   variant.color.toLowerCase().includes('cream') ? '#f3f1ec' : '#666'
                }}
                title={variant.color}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}