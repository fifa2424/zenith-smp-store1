import { Navbar } from '@/components/navbar'
import { ShopTabs } from '@/components/shop-tabs'

export const metadata = {
  title: 'ร้านค้า — ZenithSMP',
  description: 'เลือกซื้อ Rank, Protect, Boost และ Key ได้ที่นี่',
}

export default function ShopPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="mb-8">
          <h1 className="text-balance text-3xl font-extrabold text-foreground sm:text-4xl">
            ร้านค้า
          </h1>
          <p className="mt-2 text-muted-foreground">
            เลือกสินค้าแล้วกด <strong className="text-foreground">ซื้อสินค้า</strong>{' '}
            ระบบจะดำเนินการโดยอัตโนมัติภายใน 5 นาที
          </p>
        </div>
        <ShopTabs />
      </main>
      <footer className="border-t border-border bg-card/50 py-6 text-center text-sm text-muted-foreground">
        © 2025 ZenithSMP — All rights reserved
      </footer>
    </div>
  )
}
