// TASK 7: Shared page heading used by the portal's inner pages.
function PageHeader({ eyebrow = 'YSSE Main Portal', title, description }) {
  return (
    <header className="mx-auto max-w-3xl py-10 text-center sm:py-14">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">{eyebrow}</p>
      <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">{title}</h1>
      {description && <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>}
    </header>
  )
}

export default PageHeader
