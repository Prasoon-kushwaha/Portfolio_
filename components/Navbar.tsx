interface NavbarProps {
  setActivePage: (page: string) => void
  activePage: string
}

export default function Navbar({ setActivePage, activePage }: NavbarProps) {
  const navItems = ["About", "Resume", "Achievement", "Blog", "Contact"]

  return (
    <nav className="md:bg-transparent md:border-none fixed md:static bottom-0 left-0 right-0 bg-[#2a2a2a] border-t border-[#333] z-10 md:z-auto">
      <div className="max-w-8xl mx-auto px-4">
        <ul className="flex justify-center md:justify-end text-center items-center gap-8 py-4 md:px-6">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => setActivePage(item.toLowerCase())}
                className={`text-sm md:text-base transition-colors ${
                  activePage === item.toLowerCase() ? "text-[#ffd700]" : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

