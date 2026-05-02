'use client'

import { useState } from 'react'
import { Wallet, CreditCard, Check } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { cn } from '@/lib/utils'

// แก้ไขแพ็คเกจเติมเงินได้ที่นี่
const topupPackages = [
  { amount: 50, bonus: 0, label: '50฿' },
  { amount: 100, bonus: 10, label: '100฿', popular: true },
  { amount: 200, bonus: 30, label: '200฿' },
  { amount: 500, bonus: 100, label: '500฿', popular: false },
  { amount: 1000, bonus: 250, label: '1,000฿' },
  { amount: 2000, bonus: 600, label: '2,000฿' },
]

export default function TopupPage() {
  const [selected, setSelected] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [done, setDone] = useState(false)

  const finalAmount =
    selected !== null
      ? topupPackages[selected].amount
      : customAmount
      ? parseInt(customAmount, 10)
      : 0

  const handleTopup = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!finalAmount || finalAmount < 20) return
    setIsLoading(true)
    // TODO: เชื่อมต่อ Payment Gateway ที่นี่
    await new Promise((r) => setTimeout(r, 1400))
    setDone(true)
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 glow-purple">
            <Wallet className="h-7 w-7 text-primary" />
          </div>
          <h1 className="text-balance text-3xl font-extrabold text-foreground">เติมเงิน</h1>
          <p className="mt-2 text-muted-foreground">
            เลือกแพ็คเกจหรือกรอกจำนวนที่ต้องการ (ขั้นต่ำ 20฿)
          </p>
        </div>

        {done ? (
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-primary/40 bg-card p-10 text-center glow-purple">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <Check className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground">เติมเงินสำเร็จ!</h2>
            <p className="text-sm text-muted-foreground">
              ยอดเงิน <span className="font-bold text-primary">{finalAmount.toLocaleString()}฿</span>{' '}
              ถูกเพิ่มเข้ากระเป๋าของคุณแล้ว
            </p>
            <button
              onClick={() => { setDone(false); setSelected(null); setCustomAmount('') }}
              className="mt-2 rounded-lg bg-primary px-6 py-2 text-sm font-bold text-primary-foreground hover:bg-purple-light active:scale-95"
            >
              เติมเพิ่ม
            </button>
          </div>
        ) : (
          <form onSubmit={handleTopup} className="flex flex-col gap-6">
            {/* Package grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {topupPackages.map((pkg, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => { setSelected(i); setCustomAmount('') }}
                  className={cn(
                    'relative flex flex-col items-center gap-1 rounded-xl border p-4 text-center transition-all',
                    selected === i
                      ? 'border-primary bg-primary/10 glow-purple-sm'
                      : 'border-border bg-card hover:border-primary/50'
                  )}
                >
                  {pkg.popular && (
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-primary px-2.5 py-0.5 text-xs font-bold text-primary-foreground">
                      ยอดนิยม
                    </span>
                  )}
                  <span className="font-mono text-xl font-bold text-foreground">{pkg.label}</span>
                  {pkg.bonus > 0 && (
                    <span className="text-xs font-medium text-green-400">+{pkg.bonus}฿ โบนัส</span>
                  )}
                </button>
              ))}
            </div>

            {/* Custom amount */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="custom" className="text-sm font-medium text-foreground">
                หรือกรอกจำนวนเอง (฿)
              </label>
              <input
                id="custom"
                type="number"
                min={20}
                value={customAmount}
                onChange={(e) => { setCustomAmount(e.target.value); setSelected(null) }}
                placeholder="เช่น 350"
                className="rounded-lg border border-input bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            {/* Summary */}
            {finalAmount > 0 && (
              <div className="flex items-center justify-between rounded-xl bg-surface p-4">
                <span className="text-sm text-muted-foreground">ยอดที่จะเติม</span>
                <span className="font-mono text-2xl font-bold text-primary text-glow">
                  {finalAmount.toLocaleString()}฿
                </span>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading || finalAmount < 20}
              className="flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-purple-light active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 glow-purple-sm"
            >
              {isLoading ? (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
              ) : (
                <CreditCard className="h-4 w-4" />
              )}
              {isLoading ? 'กำลังดำเนินการ…' : 'ยืนยันการเติมเงิน'}
            </button>
          </form>
        )}
      </main>
    </div>
  )
}
