export function AboutPage() {
  return `
    <main class="mx-auto max-w-5xl px-4 py-8">
      <h1 class="text-3xl font-bold">เกี่ยวกับเรา</h1>
      <p class="mt-2 max-w-2xl text-slate-600">
        เว็บไซต์นี้สร้างขึ้นเพื่อฝึกทำเว็บ 4 หน้าด้วย Vite และ Tailwind CSS
        พร้อมนำขึ้นใช้งานจริงบน Vercel
      </p>
      <section class="mt-6 grid gap-4 sm:grid-cols-2">
        <div class="rounded-xl border border-slate-200 bg-white p-5">
          <h2 class="text-lg font-bold">เทคโนโลยีที่ใช้</h2>
          <ul class="mt-2 list-disc pl-5 text-slate-600">
            <li>Vite</li>
            <li>JavaScript (hash routing)</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div class="rounded-xl border border-slate-200 bg-white p-5">
          <h2 class="text-lg font-bold">ผู้จัดทำ</h2>
          <p class="mt-2 text-slate-600">ใส่ชื่อ-นามสกุลของคุณที่นี่</p>
        </div>
      </section>
    </main>`
}