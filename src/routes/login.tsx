import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
  component: () => <Login />,
})

function Login() {
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
}
