import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBag, Users, Wallet, ArrowRight, Crown, Shield, Zap, Key } from 'lucide-react'
import { Navbar } from '@/components/navbar'

const features = [
  {
    icon: Crown,
    title: 'Rank',
    desc: 'ปลดล็อกสิทธิ์พิเศษ สีชื่อ และไอเทมรายเดือน',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
  },
  {
    icon: Shield,
    title: 'Protect',
    desc: 'คุ้มครองพื้นที่บนเซิร์ฟเวอร์จากผู้บุกรุก',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
  },
  {
    icon: Zap,
    title: 'Boost',
    desc: 'เพิ่ม EXP และ Drop Rate ให้ตัวเองทันที',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: Key,
    title: 'Key',
    desc: 'สุ่มกาชารับรางวัลพิเศษที่หาที่ไหนไม่ได้',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
]

const stats = [
  { value: '1,200+', label: 'ผู้เล่น Online' },
  { value: '500+', label: 'คำสั่งซื้อ/เดือน' },
  { value: '24/7', label: 'Support' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="relative h-[420px] w-full sm:h-[520px]">
            <Image
              src="/images/server-banner.jpg"
              alt="ZenithSMP Server Banner"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <span className="mb-3 rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              ZenithSMP Official Store
            </span>
            <h1 className="text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
              เติมพลัง{' '}
              <span className="text-primary text-glow">Zenith</span>
              <br />
              ของคุณวันนี้
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
              ซื้อ Rank, Protect Zone, Boost Potion และ Gacha Key ได้ทันที
              ระบบประมวลผลอัตโนมัติภายใน 5 นาที
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/shop"
                className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-bold text-primary-foreground transition-all hover:bg-purple-light active:scale-95 glow-purple"
              >
                <ShoppingBag className="h-5 w-5" />
                ไปยังร้านค้า
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/topup"
                className="flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-6 py-3 text-base font-semibold text-primary transition-all hover:bg-primary/20 active:scale-95"
              >
                <Wallet className="h-5 w-5" />
                เติมเงิน
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-border bg-card/50 py-8">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-4 sm:gap-16">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1">
                <span className="font-mono text-3xl font-bold text-primary text-glow">{s.value}</span>
                <span className="text-sm text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-balance text-3xl font-extrabold text-foreground">
              มีอะไรในร้านค้าบ้าง?
            </h2>
            <p className="mt-2 text-muted-foreground">เลือกซื้อสินค้าได้ตามต้องการ</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, desc, color, bg }) => (
              <Link
                key={title}
                href="/shop"
                className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/50"
              >
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${bg}`}>
                  <Icon className={`h-6 w-6 ${color}`} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
                <div className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  ดูสินค้า <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
          <div className="rounded-2xl border border-primary/30 bg-primary/10 p-8 text-center glow-purple">
            <Users className="mx-auto mb-3 h-10 w-10 text-primary" />
            <h2 className="text-balance text-2xl font-extrabold text-foreground">
              เข้าร่วมชุมชน ZenithSMP
            </h2>
            <p className="mt-2 text-muted-foreground">
              สร้างบัญชีเพื่อติดตามคำสั่งซื้อ ดูประวัติ และสิทธิ์ที่คุณมีได้ทันที
            </p>
            <Link
              href="/register"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-purple-light active:scale-95"
            >
              สมัครสมาชิกฟรี
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card/50 py-6 text-center text-sm text-muted-foreground">
        © 2025 ZenithSMP — All rights reserved
      </footer>
    </div>
  )
}
