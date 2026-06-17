import { Link } from 'react-router'

const defaultAuthProviders = [
  { name: 'phone number', icon: 'phone' },
  { name: 'Google', icon: 'google' },
  { name: 'Facebook', icon: 'facebook' },
  { name: 'Apple', icon: 'apple' },
]

const SpotifyLogo = () => (
  <svg
    aria-hidden="true"
    className="h-10 w-10"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="24" cy="24" r="24" fill="#fff" />
    <path
      d="M13.4 18.6c6.9-1.8 15.1-1.3 21.2 2.3"
      stroke="#121212"
      strokeWidth="3.6"
      strokeLinecap="round"
    />
    <path
      d="M15.2 24.5c5.4-1.4 12.3-1 17.3 1.9"
      stroke="#121212"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M16.9 30c4.4-1 9.4-.7 13.2 1.5"
      stroke="#121212"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
)

const AuthIcon = ({ type }) => {
  if (type === 'phone') {
    return (
      <svg
        aria-hidden="true"
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="7.2"
          y="2.8"
          width="9.6"
          height="18.4"
          rx="1.8"
          stroke="currentColor"
          strokeWidth="2.1"
        />
        <circle cx="12" cy="17.6" r="1.1" fill="currentColor" />
      </svg>
    )
  }

  if (type === 'google') {
    return (
      <svg
        aria-hidden="true"
        className="h-6 w-6"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.6 12.23c0-.76-.07-1.49-.2-2.19H12v4.14h5.37a4.6 4.6 0 0 1-1.99 3.01v2.5h3.22c1.88-1.74 3-4.28 3-7.46Z"
          fill="#4285F4"
        />
        <path
          d="M12 22c2.7 0 4.96-.89 6.61-2.41l-3.22-2.5c-.9.6-2.04.95-3.39.95-2.6 0-4.81-1.76-5.6-4.12H3.08v2.58A9.98 9.98 0 0 0 12 22Z"
          fill="#34A853"
        />
        <path
          d="M6.4 13.92a6 6 0 0 1-.31-1.92c0-.67.11-1.31.31-1.92V7.5H3.08A9.98 9.98 0 0 0 2 12c0 1.61.39 3.14 1.08 4.5l3.32-2.58Z"
          fill="#FBBC05"
        />
        <path
          d="M12 5.96c1.46 0 2.78.5 3.82 1.49l2.86-2.86C16.95 2.98 14.69 2 12 2a9.98 9.98 0 0 0-8.92 5.5l3.32 2.58C7.19 7.72 9.4 5.96 12 5.96Z"
          fill="#EA4335"
        />
      </svg>
    )
  }

  if (type === 'facebook') {
    return (
      <svg
        aria-hidden="true"
        className="h-6 w-6"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="11" fill="#1877F2" />
        <path
          d="M15 8.7h-1.7c-.5 0-.9.4-.9.9v1.3h2.5l-.4 2.8h-2.1V21h-3v-7.3H7v-2.8h2.4V9.4c0-2.4 1.4-3.7 3.6-3.7.8 0 1.6.1 2 .2v2.8Z"
          fill="#fff"
        />
      </svg>
    )
  }

  return (
    <svg
      aria-hidden="true"
      className="h-7 w-7"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.63 13.17c-.03-3.06 2.5-4.53 2.62-4.6-1.43-2.08-3.64-2.37-4.42-2.4-1.88-.19-3.66 1.1-4.61 1.1-.95 0-2.42-1.08-3.98-1.05-2.05.03-3.94 1.19-4.99 3.02-2.13 3.69-.55 9.15 1.53 12.14 1.01 1.46 2.22 3.1 3.81 3.04 1.53-.06 2.1-.99 3.94-.99s2.35.99 3.97.96c1.64-.03 2.68-1.49 3.68-2.96 1.16-1.69 1.64-3.33 1.66-3.42-.04-.02-3.19-1.22-3.22-4.84Zm-3.03-9c.84-1.01 1.4-2.42 1.24-3.82-1.21.05-2.67.81-3.54 1.82-.78.9-1.46 2.33-1.28 3.7 1.35.1 2.74-.69 3.58-1.7Z" />
    </svg>
  )
}

const AuthPage = ({
  title,
  emailId,
  emailLabel = 'Email',
  emailPlaceholder = '',
  primaryButtonLabel = 'Continue',
  socialAction,
  authProviders = defaultAuthProviders,
  switchPrompt,
  switchLabel,
  switchTo,
}) => {
  return (
    <main className="min-h-screen bg-[#121212] px-6 py-10 text-white">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full flex-col items-center">
        <div className="flex w-full flex-1 flex-col items-center justify-center pt-2">
          <SpotifyLogo />

          <h1 className="mt-5 w-full text-center text-[38px] font-black leading-[1.05] tracking-normal min-[380px]:text-[46px] sm:text-[54px]">
            {title}
          </h1>

          <form className="mt-11 w-full max-w-[365px]" action="#">
            <label
              htmlFor={emailId}
              className="mb-2 block text-[15px] font-bold leading-none text-white"
            >
              {emailLabel}
            </label>
            <input
              id={emailId}
              type="email"
              autoComplete="email"
              placeholder={emailPlaceholder}
              className="h-[54px] w-full rounded-[4px] border border-[#7c7c7c] bg-transparent px-4 text-base font-medium text-white outline-none transition focus:border-white focus:ring-1 focus:ring-white"
            />

            <button
              type="submit"
              className="mt-5 h-[53px] w-full rounded-full bg-[#1ed760] text-[16px] font-extrabold text-black transition hover:scale-[1.02] hover:bg-[#20e568] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#121212]"
            >
              {primaryButtonLabel}
            </button>
          </form>

          <p className="my-6 text-[15px] font-bold">or</p>

          <div className="flex w-full max-w-[365px] flex-col gap-[9px]">
            {authProviders.map((provider) => (
              <button
                key={provider.name}
                type="button"
                className="relative flex h-[54px] w-full items-center justify-center rounded-full border border-[#7c7c7c] px-12 text-[16px] font-extrabold text-white transition hover:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#121212]"
              >
                <span className="absolute left-[29px] flex items-center justify-center text-white">
                  <AuthIcon type={provider.icon} />
                </span>
                <span className="truncate">
                  {socialAction} with {provider.name}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-[74px] text-center">
            <p className="text-[16px] font-medium text-[#d7d7d7]">
              {switchPrompt}
            </p>
            <Link
              to={switchTo}
              className="mt-6 inline-block text-[16px] font-extrabold text-white transition hover:text-[#1ed760]"
            >
              {switchLabel}
            </Link>
          </div>
        </div>

        <p className="max-w-[365px] pb-2 text-center text-[13px] font-medium leading-5 text-[#d7d7d7]">
          This site is protected by reCAPTCHA and the Google{' '}
          <a href="#" className="underline hover:text-white">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="#" className="underline hover:text-white">
            Terms of Service
          </a>{' '}
          apply.
        </p>
      </section>
    </main>
  )
}

export default AuthPage
