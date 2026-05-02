'use client'

import { useState } from 'react'
import { Crown, Shield, Zap, Key } from 'lucide-react'
import { cn } from '@/lib/utils'
import { categories, type Category, type Product } from '@/lib/products'
import { ProductCard } from '@/components/product-card'
import { BuyModal } from '@/components/buy-modal'

const categoryIcons: Record<Category, React.ElementType> = {
  rank: Crown,
  protect: Shield,
  boost: Zap,
  key: Key,
}

export function ShopTabs() {
  const [activeTab, setActiveTab] = useState<Category>('rank')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const currentCategory = categories.find((c) => c.id === activeTab)!

  return (
    <div className="flex flex-col gap-6">
      {/* Tab Bar */}
      <div className="flex flex-wrap gap-2 rounded-xl border border-border bg-card p-1.5">
        {categories.map(({ id, label }) => {
          const Icon = categoryIcons[id]
          const isActive = activeTab === id
          return (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={cn(
                'flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all',
                isActive
                  ? 'bg-primary text-primary-foreground glow-purple-sm'
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </button>
          )
        })}
      </div>

      {/* Category description */}
      <p className="text-sm text-muted-foreground">{currentCategory.description}</p>

      {/* Product Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {currentCategory.products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onBuy={(p) => setSelectedProduct(p)}
          />
        ))}
      </div>

      {/* Buy Modal */}
      {selectedProduct && (
        <BuyModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  )
}
