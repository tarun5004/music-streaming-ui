import AuthPage from '../components/AuthPage'

const LoginPage = () => {
  return (
    <AuthPage
      title="Welcome back"
      emailId="login-email"
      socialAction="Continue"
      switchPrompt="Don't have an account?"
      switchLabel="Sign up"
      switchTo="/register"
    />
  )
}

export default LoginPage
