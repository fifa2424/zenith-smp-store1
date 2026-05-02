'use client'

import Image from 'next/image'
import { ShoppingCart, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Product } from '@/lib/products'

interface ProductCardProps {
  product: Product
  onBuy?: (product: Product) => void
}

export function ProductCard({ product, onBuy }: ProductCardProps) {
  return (
    <div
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:-translate-y-1',
        product.highlighted
          ? 'border-primary glow-purple'
          : 'border-border hover:border-primary/50'
      )}
    >
      {/* Badge */}
      {product.badge && (
        <div
          className={cn(
            'absolute right-3 top-3 z-10 rounded-full px-2.5 py-0.5 text-xs font-bold text-white shadow-md',
            product.badgeColor ?? 'bg-primary'
          )}
        >
          {product.badge}
        </div>
      )}

      {/* Image */}
      <div className="relative h-44 w-full overflow-hidden bg-surface">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="text-balance text-lg font-bold text-foreground">{product.name}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>
        </div>

        {/* Detail bullets */}
        {product.details && product.details.length > 0 && (
          <ul className="flex flex-col gap-1">
            {product.details.map((d, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                {d}
              </li>
            ))}
          </ul>
        )}

        {/* Price & Buy */}
        <div className="mt-auto flex items-center justify-between pt-2">
          <div>
            <span
              className={cn(
                'font-mono text-2xl font-bold',
                product.highlighted ? 'text-glow text-primary' : 'text-foreground'
              )}
            >
              {product.price.toLocaleString()}฿
            </span>
            {product.duration && (
              <span className="ml-1 text-xs text-muted-foreground">/ {product.duration}</span>
            )}
          </div>
          <button
            onClick={() => onBuy?.(product)}
            className={cn(
              'flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-bold transition-all active:scale-95',
              product.highlighted
                ? 'bg-primary text-primary-foreground glow-purple-sm hover:bg-purple-light'
                : 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground'
            )}
          >
            <ShoppingCart className="h-4 w-4" />
            ซื้อสินค้า
          </button>
        </div>
      </div>
    </div>
  )
}
