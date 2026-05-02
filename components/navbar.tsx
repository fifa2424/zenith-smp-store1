'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Wallet, LogIn, User, ShoppingBag, Home } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'หน้าแรก', icon: Home },
  { href: '/shop', label: 'ร้านค้า', icon: ShoppingBag },
  { href: '/profile', label: 'โปรไฟล์', icon: User },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-card/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary glow-purple-sm">
            <span className="font-mono text-sm font-bold text-primary-foreground">Z</span>
          </div>
          <span className="font-mono text-lg font-bold tracking-tight text-foreground">
            Zenith<span className="text-primary text-glow">SMP</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'rounded-md px-4 py-2 text-sm font-medium transition-colors',
                pathname === href
                  ? 'bg-primary/20 text-primary'
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
              )}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/login"
            className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <LogIn className="h-4 w-4" />
            เข้าสู่ระบบ
          </Link>
          <Link
            href="/topup"
            className="glow-purple-sm flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-all hover:bg-purple-light active:scale-95"
          >
            <Wallet className="h-4 w-4" />
            เติมเงิน
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/topup"
            className="flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-sm font-bold text-primary-foreground"
          >
            <Wallet className="h-4 w-4" />
            เติมเงิน
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground"
            aria-label="เปิดเมนู"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-border bg-card px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
                  pathname === href
                    ? 'bg-primary/20 text-primary'
                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                )}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            ))}
            <div className="mt-2 border-t border-border pt-2">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                <LogIn className="h-4 w-4" />
                เข้าสู่ระบบ
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
