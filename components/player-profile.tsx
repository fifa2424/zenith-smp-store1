'use client'

import Image from 'next/image'
import { Crown, Shield, Zap, Wallet, Clock } from 'lucide-react'

// Mock data — TODO: replace with real data from Database
const mockPlayer = {
  username: 'ZenithPlayer',
  rank: 'Silver',
  balance: 150,
  activePurchases: [
    { id: 1, name: 'Silver Rank', icon: Crown, expiry: '2025-06-01', color: 'text-blue-400' },
    { id: 2, name: 'Zenith Potion', icon: Zap, expiry: '2025-05-15', color: 'text-purple-400' },
    { id: 3, name: 'โซนโพรเทค 64×64', icon: Shield, expiry: 'ตลอดชีพ', color: 'text-green-400' },
  ],
}

export function PlayerProfile() {
  return (
    <div className="flex flex-col gap-6">
      {/* Profile header */}
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-start">
        {/* Avatar (Minecraft head) */}
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 border-primary glow-purple-sm">
          <Image
            src={`https://mc-heads.net/avatar/${mockPlayer.username}/80`}
            alt={`${mockPlayer.username} avatar`}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="flex flex-1 flex-col gap-1 text-center sm:text-left">
          <h2 className="text-2xl font-bold text-foreground">{mockPlayer.username}</h2>
          <div className="flex items-center justify-center gap-2 sm:justify-start">
            <span className="rounded-full bg-primary/20 px-3 py-0.5 text-xs font-bold text-primary">
              {mockPlayer.rank}
            </span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            สมาชิก ZenithSMP — ยินดีต้อนรับกลับมา
          </p>
        </div>

        {/* Balance */}
        <div className="flex flex-col items-center gap-1 rounded-xl border border-primary/30 bg-primary/10 px-6 py-4">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Wallet className="h-4 w-4" />
            <span className="text-xs font-medium">ยอดเงิน</span>
          </div>
          <span className="font-mono text-2xl font-bold text-primary text-glow">
            {mockPlayer.balance.toLocaleString()}฿
          </span>
        </div>
      </div>

      {/* Active purchases */}
      <div className="rounded-2xl border border-border bg-card p-6">
        <h3 className="mb-4 font-bold text-foreground">สิทธิ์ที่ใช้งานอยู่</h3>
        <div className="flex flex-col gap-3">
          {mockPlayer.activePurchases.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3 transition-colors hover:border-primary/40"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <Icon className={`h-5 w-5 ${item.color}`} />
                </div>
                <div className="flex flex-1 flex-col">
                  <span className="text-sm font-semibold text-foreground">{item.name}</span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>หมดอายุ: {item.expiry}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
