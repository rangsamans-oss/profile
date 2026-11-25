const links = [
  {href: '#/', path:'/',label:'หน้าแรก'},
  {href: '#/about',path:'/about',label:'เกี่ยวกับเรา'},
  {href: '#/contact',path: '/contact',label: 'ติดต่อ'},
  {href: '#/admin',path:'/admin',label:'แอดมิน'},
]

export function Navbar(currentPath) {
  const items = links
  .map(
    (l) => `
    <li>
      <a href="${l.href}"
        class="pb-1 font-medium focus:outline-none">${l.label}</a>
    </li>`
  )
  .join('')

  return `
    <nav class="bg-slate-900 text-white">
      <ul class="mx-auto flex max-w-5xl flex-wrap gap-6 px-4 py-4">${items}</ul>
    </nav>`
}