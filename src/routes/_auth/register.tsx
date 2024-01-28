import { createFileRoute } from "@tanstack/react-router";
import { AuthForm } from "@/components/auth-form.tsx";
import { useRegister } from "@/hooks/use-register.ts";

export const Route = createFileRoute("/_auth/register")({
  component: () => <Register />,
});

function Register() {
  const { register, isPending } = useRegister();
  return (
    <div>
      <AuthForm
        type="register"
        loading={isPending}
        onSubmit={async (values) => {
          await register({
            email: values.email,
            password: values.password,
            name: values.name as string,
          });
        }}
      />
    </div>
  );
}
