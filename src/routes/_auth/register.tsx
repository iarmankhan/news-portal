import { createFileRoute } from '@tanstack/react-router'
import {AuthForm} from "@/components/auth-form.tsx";

export const Route = createFileRoute('/_auth/register')({
  component: () => <Register />,
})


function Register() {
  return (
    <div>
      <h1>Register</h1>
      <AuthForm type='register' onSubmit={(values) => {
        console.log(values)
      }}/>
    </div>
  );
}

