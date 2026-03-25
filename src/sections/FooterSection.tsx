export function FooterSection() {
  return (
    <footer className="mt-auto py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="text-sm text-[#94A3B8]">
            Built with React &amp; passion for data
          </div>
          <div className="text-xs text-[#94A3B8]">
            © {new Date().getFullYear()} Krishna Apurva
          </div>
        </div>
      </div>
    </footer>
  )
}

