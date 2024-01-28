import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Link } from "@tanstack/react-router";

interface AuthFormProps {
  type: "login" | "register";
  onSubmit: (values: z.infer<ReturnType<typeof getFormSchema>>) => void;
  loading?: boolean;
}

const getFormSchema = (type: "login" | "register") =>
  z.object({
    ...(type === "register" && {
      name: z.string().min(1),
    }),
    email: z.string().email(),
    password: z.string().min(8),
  });

export function AuthForm(props: AuthFormProps) {
  const { type, loading, onSubmit } = props;

  const form = useForm({
    resolver: zodResolver(getFormSchema(type)),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  return (
    <div className="w-[400px] bg-background shadow p-4 rounded-lg">
      <h1 className="text-center my-2 font-bold text-2xl">
        {type === "register" ? "Register" : "Login"}
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          {type === "register" && (
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="E-mail" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loading}>
            {loading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
            {type === "register" ? "Register" : "Login"}
          </Button>
        </form>
      </Form>

      <div className="mt-4 text-sm">
        {type === "register"
          ? "Already have an account?"
          : "Don't have an account?"}
        <Link
          to={type === "register" ? "/login" : "/register"}
          className="ml-1 underline text-blue-500"
        >
          {type === "register" ? "Login" : "Register"}
        </Link>
      </div>
    </div>
  );
}
