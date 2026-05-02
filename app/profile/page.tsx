import { Navbar } from '@/components/navbar'
import { PlayerProfile } from '@/components/player-profile'

export const metadata = {
  title: 'โปรไฟล์ — ZenithSMP',
  description: 'ดูโปรไฟล์และสิทธิ์ที่คุณมีบน ZenithSMP',
}

export default function ProfilePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <div className="mb-8">
          <h1 className="text-balance text-3xl font-extrabold text-foreground sm:text-4xl">
            โปรไฟล์
          </h1>
          <p className="mt-2 text-muted-foreground">
            ดูข้อมูล ยอดเงิน และสิทธิ์ที่คุณมีบนเซิร์ฟเวอร์
          </p>
        </div>
        <PlayerProfile />
      </main>
      <footer className="border-t border-border bg-card/50 py-6 text-center text-sm text-muted-foreground">
        © 2025 ZenithSMP — All rights reserved
      </footer>
    </div>
  )
}
