const field =
  'mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-200'

export function ContactPage() {
  return `
    <main class="mx-auto max-w-5xl px-4 py-8">
      <h1 class="text-3xl font-bold">ติดต่อ</h1>
      <p class="mt-2 text-slate-600">ส่งข้อความถึงเราได้ที่นี่</p>

      <form id="contact-form" class="mt-6 max-w-lg space-y-4">
        <label class="block font-medium">ชื่อ
          <input required type="text" class="${field}" />
        </label>
        <label class="block font-medium">อีเมล
          <input required type="email" class="${field}" />
        </label>
        <label class="block font-medium">ข้อความ
          <textarea required rows="4" class="${field}"></textarea>
        </label>
        <button type="submit"
          class="rounded-lg bg-sky-700 px-6 py-3 font-bold text-white transition hover:bg-sky-800">
          ส่งข้อความ
        </button>
        <p id="contact-result" class="hidden rounded-lg bg-green-100 px-4 py-2 text-green-800">
          ส่งข้อความเรียบร้อยแล้ว
        </p>
      </form>
    </main>`
}

// เรียกหลังจากวาดหน้าเสร็จ เพื่อผูกปุ่มส่งฟอร์ม
export function setupContactForm() {
  const form = document.querySelector('#contact-form')
  if (!form) return
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    document.querySelector('#contact-result').classList.remove('hidden')
    form.reset()
  })
}