'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ShoppingCart, Wallet } from 'lucide-react'
import type { Product } from '@/lib/products'

interface BuyModalProps {
  product: Product
  onClose: () => void
}

export function BuyModal({ product, onClose }: BuyModalProps) {
  const [username, setUsername] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  const handlePurchase = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!username.trim()) return
    setIsSubmitting(true)
    // TODO: เชื่อมต่อ API / Database ที่นี่
    await new Promise((r) => setTimeout(r, 1200))
    setDone(true)
    setIsSubmitting(false)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground"
          aria-label="ปิด"
        >
          <X className="h-4 w-4" />
        </button>

        {done ? (
          /* Success state */
          <div className="flex flex-col items-center gap-4 p-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 glow-purple">
              <ShoppingCart className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground">คำสั่งซื้อสำเร็จ!</h2>
            <p className="text-sm text-muted-foreground">
              รายการ <span className="font-semibold text-primary">{product.name}</span> จะถูก
              ดำเนินการภายใน 5 นาที กรุณาเข้าเซิร์ฟเวอร์เพื่อรับของ
            </p>
            <button
              onClick={onClose}
              className="mt-2 rounded-lg bg-primary px-6 py-2 text-sm font-bold text-primary-foreground transition-all hover:bg-purple-light active:scale-95"
            >
              ปิด
            </button>
          </div>
        ) : (
          <>
            {/* Product info */}
            <div className="relative h-40 w-full">
              <Image src={product.image} alt={product.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h2 className="text-xl font-bold text-foreground">{product.name}</h2>
                {product.duration && (
                  <p className="text-xs text-muted-foreground">/ {product.duration}</p>
                )}
              </div>
            </div>

            <form onSubmit={handlePurchase} className="flex flex-col gap-4 p-6">
              <div className="flex items-center justify-between rounded-lg bg-surface p-3">
                <span className="text-sm text-muted-foreground">ราคา</span>
                <span className="font-mono text-xl font-bold text-primary text-glow">
                  {product.price.toLocaleString()}฿
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="username" className="text-sm font-medium text-foreground">
                  Minecraft Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="ชื่อผู้เล่นใน Minecraft"
                  className="rounded-lg border border-input bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>

              <div className="flex items-start gap-2 rounded-lg bg-primary/10 p-3 text-xs text-muted-foreground">
                <Wallet className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  ระบบจะตัดยอดจากกระเป๋าเงินของคุณ หากยอดไม่เพียงพอ
                  กรุณากดปุ่ม <strong className="text-primary">เติมเงิน</strong> ที่ Navbar
                </span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !username.trim()}
                className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-purple-light active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 glow-purple-sm"
              >
                {isSubmitting ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                ) : (
                  <ShoppingCart className="h-4 w-4" />
                )}
                {isSubmitting ? 'กำลังดำเนินการ…' : 'ยืนยันการซื้อ'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
