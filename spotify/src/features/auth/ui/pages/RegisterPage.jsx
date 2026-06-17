import AuthPage from '../components/AuthPage'

const registerAuthProviders = [
  { name: 'phone number', icon: 'phone' },
  { name: 'Google', icon: 'google' },
  { name: 'Apple', icon: 'apple' },
]

const RegisterPage = () => {
  return (
    <AuthPage
      title={
        <>
          Sign up to
          <br />
          start listening
        </>
      }
      emailId="register-email"
      emailLabel="Email address"
      emailPlaceholder="name@domain.com"
      primaryButtonLabel="Next"
      socialAction="Sign up"
      authProviders={registerAuthProviders}
      switchPrompt="Already have an account?"
      switchLabel="Log in"
      switchTo="/"
    />
  )
}

export default RegisterPage
