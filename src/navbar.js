const links = [
  { href: '#/', path: '/', label: 'หน้าแรก' },
  { href: '#/about', path: '/about', label: 'เกี่ยวกับเรา' },
  { href: '#/contact', path: '/contact', label: 'ติดต่อ' },
  { href: '#/admin', path: '/admin', label: 'แอดมิน' },
]

export function Navbar(currentPath) {
  const items = links
    .map((l) => {
      const active = l.path === currentPath
      return `
        <li>
          <a href="${l.href}"
             class="pb-1 font-medium transition hover:text-sky-300 ${
               active ? 'border-b-2 border-sky-400 text-sky-300' : ''
             }">${l.label}</a>
        </li>`
    })
    .join('')

  return `
    <nav class="bg-slate-900 text-white">
      <ul class="mx-auto flex max-w-5xl flex-wrap gap-6 px-4 py-4">${items}</ul>
    </nav>`
}