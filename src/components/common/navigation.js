import Link from 'next/link'

function NavLink({href, children, className}) {
  return (
    <Link href={href || scroll}>
      <a className={`text-gray-600 hover:text-gray-800 ${className}`}>{children}</a>
    </Link>
  )
}

export default function Navigation() {
  return (
    <div className="pt-28">
      <div className="fixed top-0 left-0 w-full bg-gradient-to-b from-white to-transparent z-10">
        <nav className="relative py-5 max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 font-header" aria-label="Global">
          <div className="space-x-4 text-sm md:text-base md:space-x-10 flex items-center w-full">
            <Link href="/">
              <a className="mr-auto font-bold text-gray-900">
                <span className="sr-only">Jesco Wuester</span>
                <svg className="w-8 text-indigo-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 17.6152C8.78211 18.4891 10.3314 18.9999 12 18.9999C13.6686 18.9999 15.2179 18.4891 16.5 17.6152" stroke="currentColor" stroke-width="2" />
                  <circle cx="12" cy="7" r="3" stroke="currentColor" stroke-width="2" />
                  <circle cx="5" cy="15" r="3" fill="white" stroke="currentColor" stroke-width="2" />
                  <circle cx="19" cy="15" r="3" fill="white" stroke="currentColor" stroke-width="2" />
                </svg>
              </a>
            </Link>
            <NavLink href="/blog">Articles</NavLink>
            <Link href="/#work">
              <a className="text-gray-600 hover:text-gray-800 hidden sm:block">Cases</a>
            </Link>
            <Link href="/contact">
              <a className="btn-secondary text-sm md:text-base px-4" href="/#contact">
                Hire me
              </a>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}
