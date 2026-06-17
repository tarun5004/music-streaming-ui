import {
  Bell,
  Download,
  Home,
  Library,
  Search,
  Users,
} from 'lucide-react'

const iconButtonClasses =
  'grid h-12 w-12 place-items-center rounded-full bg-[#1f1f1f] text-white transition hover:bg-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-white'

const SpotifyLogo = () => (
  <svg
    aria-label="Spotify"
    className="h-9 w-9"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="24" cy="24" r="24" fill="#fff" />
    <path
      d="M13.4 18.6c6.9-1.8 15.1-1.3 21.2 2.3"
      stroke="#121212"
      strokeLinecap="round"
      strokeWidth="3.6"
    />
    <path
      d="M15.2 24.5c5.4-1.4 12.3-1 17.3 1.9"
      stroke="#121212"
      strokeLinecap="round"
      strokeWidth="3"
    />
    <path
      d="M16.9 30c4.4-1 9.4-.7 13.2 1.5"
      stroke="#121212"
      strokeLinecap="round"
      strokeWidth="2.5"
    />
  </svg>
)

const IconButton = ({ label, children, className = '' }) => (
  <button
    type="button"
    aria-label={label}
    className={`${iconButtonClasses} ${className}`}
  >
    {children}
  </button>
)

const SearchBar = () => (
  <label className="flex h-12 w-full max-w-[475px] items-center rounded-full bg-[#1f1f1f] px-4 text-[#b3b3b3] transition focus-within:bg-[#242424] focus-within:ring-2 focus-within:ring-white">
    <Search size={24} strokeWidth={2.2} />
    <input
      type="search"
      placeholder="What do you want to play?"
      className="min-w-0 flex-1 bg-transparent px-3 text-[15px] font-medium text-white outline-none placeholder:text-[#b3b3b3]"
    />
    <span className="mx-2 h-6 w-px bg-[#7c7c7c]" />
    <Library size={23} strokeWidth={2.1} />
  </label>
)

const Navbar = () => {
  return (
    <header className="flex min-h-[64px] w-full items-center bg-black px-4 py-2 text-white sm:px-5">
      <nav className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-3">
        <a href="/dashboard" aria-label="Spotify home" className="shrink-0">
          <SpotifyLogo />
        </a>

        <div className="hidden items-center justify-center gap-2 md:flex">
          <IconButton label="Home">
            <Home size={25} fill="currentColor" strokeWidth={0} />
          </IconButton>
          <SearchBar />
        </div>

        <div className="flex items-center justify-end gap-2 sm:gap-4">
          <div className="flex items-center gap-2 md:hidden">
            <IconButton label="Home" className="h-10 w-10">
              <Home size={22} fill="currentColor" strokeWidth={0} />
            </IconButton>
            <IconButton label="Search" className="h-10 w-10">
              <Search size={21} />
            </IconButton>
          </div>

          <button
            type="button"
            className="hidden rounded-full bg-white px-5 py-3 text-sm font-extrabold text-black transition hover:scale-105 lg:inline-flex"
          >
            Explore Premium
          </button>

          <button
            type="button"
            className="hidden items-center gap-2 text-sm font-bold text-[#b3b3b3] transition hover:text-white md:inline-flex"
          >
            <Download size={17} />
            <span>Install App</span>
          </button>

          <IconButton label="Notifications" className="hidden h-10 w-10 bg-black text-[#b3b3b3] hover:bg-black hover:text-white sm:grid">
            <Bell size={19} />
          </IconButton>

          <IconButton label="Friends" className="hidden h-10 w-10 bg-black text-[#b3b3b3] hover:bg-black hover:text-white sm:grid">
            <Users size={19} />
          </IconButton>

          <button
            type="button"
            aria-label="Profile"
            className="grid h-12 w-12 place-items-center rounded-full bg-[#1f1f1f] p-1 transition hover:bg-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-white"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#1ed760] text-base font-black text-black">
              T
            </span>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
