// ============================================================
//  ZenithSMP — Product Data
//  แก้ไขราคา ชื่อ หรือรายละเอียดสินค้าได้ที่ไฟล์นี้
// ============================================================

export type Category = 'rank' | 'protect' | 'boost' | 'key'

export interface Product {
  id: string
  name: string
  description: string
  price: number          // ราคา (฿)
  image: string
  badge?: string         // ป้ายพิเศษ เช่น 'โปรโมชั่น', 'ยอดนิยม', 'ใหม่'
  badgeColor?: string    // Tailwind color class สำหรับป้าย
  duration?: string      // เช่น 'รายเดือน', '7 วัน', '30 วัน'
  details?: string[]     // รายละเอียดเพิ่มเติม (bullet points)
  highlighted?: boolean  // ไฮไลต์การ์ดนี้เป็นพิเศษ
}

// ─── Rank ──────────────────────────────────────────────────
export const rankProducts: Product[] = [
  {
    id: 'rank-bronze',
    name: 'Bronze',
    description: 'Rank เริ่มต้นสำหรับผู้เล่นใหม่ ปลดล็อกสิทธิ์พื้นฐาน',
    price: 49,
    image: '/images/rank-bronze.jpg',
    duration: 'รายเดือน',
    details: [
      'สีชื่อ Bronze ในแชท',
      'Kit Bronze ทุก 24 ชั่วโมง',
      'Homes 3 จุด',
      'ป้าย [Bronze] หน้าชื่อ',
    ],
  },
  {
    id: 'rank-silver',
    name: 'Silver',
    description: 'Rank กลางสำหรับผู้เล่นที่ต้องการสิทธิ์เพิ่มขึ้น',
    price: 129,
    image: '/images/rank-silver.jpg',
    duration: 'รายเดือน',
    badge: 'ยอดนิยม',
    badgeColor: 'bg-blue-500',
    highlighted: true,
    details: [
      'สีชื่อ Silver ในแชท',
      'Kit Silver ทุก 24 ชั่วโมง',
      'Homes 6 จุด',
      'ป้าย [Silver] หน้าชื่อ',
      'เข้าร่วม Event พิเศษ',
    ],
  },
  {
    id: 'rank-gold',
    name: 'Gold',
    description: 'Rank ระดับสูง มีสิทธิ์พิเศษมากมาย',
    price: 189,
    image: '/images/rank-gold.jpg',
    duration: 'รายเดือน',
    details: [
      'สีชื่อ Gold ในแชท',
      'Kit Gold ทุก 24 ชั่วโมง',
      'Homes 10 จุด',
      'ป้าย [Gold] หน้าชื่อ',
      'เข้าร่วม Event พิเศษ',
      'บิน (Fly) ใน Lobby',
    ],
  },
  {
    id: 'rank-supreme',
    name: 'Supreme',
    description: 'Rank สูงสุด สำหรับผู้เล่นระดับ Elite',
    price: 259,
    image: '/images/rank-supreme.jpg',
    duration: 'รายเดือน',
    badge: 'Elite',
    badgeColor: 'bg-purple-600',
    highlighted: false,
    details: [
      'สีชื่อ Supreme ในแชท',
      'Kit Supreme ทุก 24 ชั่วโมง',
      'Homes ไม่จำกัด',
      'ป้าย [Supreme] หน้าชื่อ',
      'เข้าร่วม Event พิเศษทั้งหมด',
      'บิน (Fly) ทุก World',
      'สิทธิ์ VIP ในอีเวนต์',
    ],
  },
]

// ─── Protect (โซนโพรเทค) ────────────────────────────────────
export const protectProducts: Product[] = [
  {
    id: 'protect-64',
    name: 'โซนโพรเทค 64×64',
    description: 'คุ้มครองพื้นที่ขนาด 64×64 บล็อก เหมาะสำหรับบ้านเล็ก',
    price: 200,
    image: '/images/protect-zone.jpg',
    details: [
      'พื้นที่ 64×64 บล็อก',
      'ป้องกันการทำลายจากผู้อื่น',
      'ตั้งสิทธิ์ผู้ร่วมใช้งานได้',
      'ใช้ได้ตลอดชีพ',
    ],
  },
  {
    id: 'protect-128',
    name: 'โซนโพรเทค 128×128',
    description: 'คุ้มครองพื้นที่ขนาด 128×128 บล็อก เหมาะสำหรับฟาร์มขนาดกลาง',
    price: 400,
    image: '/images/protect-zone.jpg',
    badge: 'ราคาโปรโมชั่น',
    badgeColor: 'bg-orange-500',
    highlighted: true,
    details: [
      'พื้นที่ 128×128 บล็อก',
      'ป้องกันการทำลายจากผู้อื่น',
      'ตั้งสิทธิ์ผู้ร่วมใช้งานได้',
      'ใช้ได้ตลอดชีพ',
      'รวม Sub-zone 2 จุด',
    ],
  },
  {
    id: 'protect-256',
    name: 'โซนโพรเทค 256×256',
    description: 'คุ้มครองพื้นที่ขนาด 256×256 บล็อก สำหรับฟาร์มและเมืองขนาดใหญ่',
    price: 800,
    image: '/images/protect-zone.jpg',
    badge: 'ราคาโปรโมชั่น',
    badgeColor: 'bg-orange-500',
    details: [
      'พื้นที่ 256×256 บล็อก',
      'ป้องกันการทำลายจากผู้อื่น',
      'ตั้งสิทธิ์ผู้ร่วมใช้งานได้',
      'ใช้ได้ตลอดชีพ',
      'รวม Sub-zone 5 จุด',
      'แสดงชื่อเจ้าของบนแผนที่',
    ],
  },
]

// ─── Boost ──────────────────────────────────────────────────
export const boostProducts: Product[] = [
  {
    id: 'boost-zenith-potion',
    name: 'Zenith Potion',
    description: 'บูสต์ความสามารถระยะสั้น เหมาะสำหรับการทดลองใช้',
    price: 50,
    image: '/images/zenith-potion.jpg',
    duration: '7 วัน',
    details: [
      'EXP x2 เป็นเวลา 7 วัน',
      'Drop Rate +20%',
      'Speed +10%',
    ],
  },
  {
    id: 'boost-zenith-potion-plus',
    name: 'Zenith Potion+',
    description: 'บูสต์ความสามารถสูงสุด คุ้มค่าสำหรับผู้เล่นจริงจัง',
    price: 200,
    image: '/images/zenith-potion.jpg',
    duration: '30 วัน',
    badge: 'คุ้มที่สุด',
    badgeColor: 'bg-green-600',
    highlighted: true,
    details: [
      'EXP x3 เป็นเวลา 30 วัน',
      'Drop Rate +50%',
      'Speed +20%',
      'Strength +10%',
      'สิทธิ์เข้า Event Boost พิเศษ',
    ],
  },
]

// ─── Key (กาชา) ─────────────────────────────────────────────
//  แก้ไขชื่อ Key และรายละเอียดรางวัลได้ที่นี่
export const keyProducts: Product[] = [
  {
    id: 'key-1',
    name: 'Key 1',          // <── เปลี่ยนชื่อ Key ได้ที่นี่
    description: 'กุญแจสุ่มรางวัลระดับ 1 — รางวัลพื้นฐาน',
    price: 10,
    image: '/images/gacha-key.jpg',
    details: ['สุ่มไอเทมระดับ Common', 'โอกาสได้รางวัล Uncommon 10%'],
  },
  {
    id: 'key-2',
    name: 'Key 2',
    description: 'กุญแจสุ่มรางวัลระดับ 2 — รางวัลดีขึ้น',
    price: 20,
    image: '/images/gacha-key.jpg',
    details: ['สุ่มไอเทมระดับ Uncommon', 'โอกาสได้รางวัล Rare 15%'],
  },
  {
    id: 'key-3',
    name: 'Key 3',
    description: 'กุญแจสุ่มรางวัลระดับ 3 — เริ่มมีของ Rare',
    price: 30,
    image: '/images/gacha-key.jpg',
    highlighted: true,
    details: ['สุ่มไอเทมระดับ Rare', 'โอกาสได้รางวัล Epic 20%'],
  },
  {
    id: 'key-4',
    name: 'Key 4',
    description: 'กุญแจสุ่มรางวัลระดับ 4 — ของ Epic เริ่มต้น',
    price: 40,
    image: '/images/gacha-key.jpg',
    details: ['สุ่มไอเทมระดับ Epic', 'โอกาสได้รางวัล Legendary 15%'],
  },
  {
    id: 'key-5',
    name: 'Key 5',
    description: 'กุญแจสุ่มรางวัลระดับ 5 — โอกาส Legendary สูง',
    price: 50,
    image: '/images/gacha-key.jpg',
    badge: 'แนะนำ',
    badgeColor: 'bg-yellow-500',
    details: ['สุ่มไอเทมระดับ Legendary', 'โอกาสได้รางวัล Mythic 10%'],
  },
  {
    id: 'key-6',
    name: 'Key 6',
    description: 'กุญแจสุ่มรางวัลระดับสูงสุด — รางวัล Mythic มีโอกาสออก',
    price: 60,
    image: '/images/gacha-key.jpg',
    badge: 'สูงสุด',
    badgeColor: 'bg-purple-600',
    highlighted: true,
    details: ['สุ่มไอเทมระดับ Mythic', 'รางวัล Exclusive พิเศษ', 'โอกาสได้ Rank ฟรี 1 เดือน'],
  },
]

// ─── Category Config ─────────────────────────────────────────
export const categories: {
  id: Category
  label: string
  description: string
  products: Product[]
}[] = [
  {
    id: 'rank',
    label: 'Rank',
    description: 'ปลดล็อกสิทธิ์พิเศษ สีแชท และไอเทมรายเดือน',
    products: rankProducts,
  },
  {
    id: 'protect',
    label: 'Protect',
    description: 'คุ้มครองพื้นที่ของคุณจากผู้บุกรุก',
    products: protectProducts,
  },
  {
    id: 'boost',
    label: 'Boost',
    description: 'เพิ่ม EXP และ Drop Rate ให้ตัวเอง',
    products: boostProducts,
  },
  {
    id: 'key',
    label: 'Key',
    description: 'สุ่มกาชารับรางวัลพิเศษ',
    products: keyProducts,
  },
]
