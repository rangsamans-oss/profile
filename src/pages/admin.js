const stats = [
  { label: 'ผู้เข้าชมวันนี้', value: '128' },
  { label: 'ข้อความใหม่', value: '5' },
  { label: 'ผู้ใช้ทั้งหมด', value: '42' },
]

const rows = [
  { name: 'สมชาย ใจดี', email: 'somchai@example.com', active: true },
  { name: 'สมหญิง รักเรียน', email: 'somying@example.com', active: true },
  { name: 'มานะ อดทน', email: 'mana@example.com', active: false },
]

export function AdminPage() {
  const cards = stats
    .map(
      (s) => `
      <div class="rounded-xl border border-slate-200 bg-white p-5">
        <p class="text-sm text-slate-500">${s.label}</p>
        <p class="mt-1 text-3xl font-bold text-sky-700">${s.value}</p>
      </div>`
    )
    .join('')

  const body = rows
    .map(
      (r) => `
      <tr class="border-t border-slate-100">
        <td class="px-4 py-3">${r.name}</td>
        <td class="px-4 py-3">${r.email}</td>
        <td class="px-4 py-3">
          <span class="rounded-full px-3 py-1 text-sm ${
            r.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }">${r.active ? 'ใช้งาน' : 'ระงับ'}</span>
        </td>
      </tr>`
    )
    .join('')

  return `
    <main class="mx-auto max-w-5xl px-4 py-8">
      <h1 class="text-3xl font-bold">แอดมิน</h1>
      <p class="mt-2 text-slate-600">ภาพรวมการจัดการระบบ</p>
      <section class="mt-6 grid gap-4 sm:grid-cols-3">${cards}</section>
      <section class="mt-8 overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table class="w-full text-left">
          <thead class="bg-slate-100 text-sm text-slate-600">
            <tr>
              <th class="px-4 py-3">ชื่อ</th>
              <th class="px-4 py-3">อีเมล</th>
              <th class="px-4 py-3">สถานะ</th>
            </tr>
          </thead>
          <tbody>${body}</tbody>
        </table>
      </section>
    </main>`
}