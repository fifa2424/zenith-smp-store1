'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff, UserPlus } from 'lucide-react'
import { Navbar } from '@/components/navbar'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    minecraftName: '',
  })
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (form.password !== form.confirmPassword) {
      setError('รหัสผ่านไม่ตรงกัน')
      return
    }
    setError('')
    setIsLoading(true)
    // TODO: เชื่อมต่อ Registration API / Database ที่นี่
    await new Promise((r) => setTimeout(r, 1000))
    setIsLoading(false)
  }

  const fields = [
    { id: 'username', label: 'ชื่อผู้ใช้', type: 'text', placeholder: 'username', key: 'username' as const },
    { id: 'email', label: 'อีเมล', type: 'email', placeholder: 'you@example.com', key: 'email' as const },
    { id: 'minecraftName', label: 'Minecraft Username', type: 'text', placeholder: 'Steve', key: 'minecraftName' as const },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex min-h-[calc(100vh-64px)] items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-2xl">
            {/* Header */}
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 glow-purple-sm">
                <UserPlus className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-2xl font-extrabold text-foreground">สมัครสมาชิก</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                สร้างบัญชีใหม่บน ZenithSMP
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {fields.map(({ id, label, type, placeholder, key }) => (
                <div key={id} className="flex flex-col gap-1.5">
                  <label htmlFor={id} className="text-sm font-medium text-foreground">
                    {label}
                  </label>
                  <input
                    id={id}
                    type={type}
                    value={form[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    placeholder={placeholder}
                    className="rounded-lg border border-input bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  />
                </div>
              ))}

              {/* Password */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="password" className="text-sm font-medium text-foreground">
                  รหัสผ่าน
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    placeholder="อย่างน้อย 8 ตัวอักษร"
                    className="w-full rounded-lg border border-input bg-input px-4 py-2.5 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                    minLength={8}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    aria-label={showPassword ? 'ซ่อนรหัสผ่าน' : 'แสดงรหัสผ่าน'}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
                  ยืนยันรหัสผ่าน
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={form.confirmPassword}
                  onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                  placeholder="••••••••"
                  className="rounded-lg border border-input bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>

              {error && (
                <p className="rounded-lg bg-destructive/10 px-3 py-2 text-xs font-medium text-red-400">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="mt-1 flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-purple-light active:scale-95 disabled:opacity-60 glow-purple-sm"
              >
                {isLoading ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                ) : (
                  <UserPlus className="h-4 w-4" />
                )}
                {isLoading ? 'กำลังสมัคร…' : 'สมัครสมาชิก'}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              มีบัญชีแล้ว?{' '}
              <Link href="/login" className="font-medium text-primary hover:underline">
                เข้าสู่ระบบ
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
