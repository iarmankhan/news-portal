import { createFileRoute } from "@tanstack/react-router";
import { AuthForm } from "@/components/auth-form.tsx";
import { useLogin } from "@/hooks/use-login.ts";

export const Route = createFileRoute("/_auth/login")({
  component: () => <Login />,
});

function Login() {
  const { login, isPending } = useLogin();

  return (
    <div>
      <h1>Login</h1>
      <AuthForm
        loading={isPending}
        type="login"
        onSubmit={async (values) => {
          console.log(values);
          await login(values);
        }}
      />
    </div>
  );
}
