'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff, LogIn } from 'lucide-react'
import { Navbar } from '@/components/navbar'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // TODO: เชื่อมต่อ Authentication API / Database ที่นี่
    await new Promise((r) => setTimeout(r, 1000))
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex min-h-[calc(100vh-64px)] items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-2xl">
            {/* Header */}
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 glow-purple-sm">
                <LogIn className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-2xl font-extrabold text-foreground">เข้าสู่ระบบ</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                เข้าสู่บัญชี ZenithSMP ของคุณ
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  อีเมล
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="rounded-lg border border-input bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium text-foreground">
                    รหัสผ่าน
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-xs text-primary hover:underline"
                  >
                    ลืมรหัสผ่าน?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    placeholder="••••••••"
                    className="w-full rounded-lg border border-input bg-input px-4 py-2.5 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    aria-label={showPassword ? 'ซ่อนรหัสผ่าน' : 'แสดงรหัสผ่าน'}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-purple-light active:scale-95 disabled:opacity-60 glow-purple-sm"
              >
                {isLoading ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                ) : (
                  <LogIn className="h-4 w-4" />
                )}
                {isLoading ? 'กำลังเข้าสู่ระบบ…' : 'เข้าสู่ระบบ'}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              ยังไม่มีบัญชี?{' '}
              <Link href="/register" className="font-medium text-primary hover:underline">
                สมัครสมาชิกฟรี
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
