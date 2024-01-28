import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { fetchCurrentUser } from "@/lib/fetch-current-user.ts";

export const Route = createFileRoute("/_auth")({
  component: () => <AuthLayout />,
  beforeLoad: async ({ context }) => {
    try {
      const { data } = await fetchCurrentUser();

      if (data) {
        context.auth.setUser(data);
        throw new Error("User already logged in");
      }
    } catch (error) {
      if (
        error &&
        (error as { message: string }).message === "User already logged in"
      ) {
        throw redirect({
          to: "/",
        });
      }
    }
  },
});

function AuthLayout() {
  return (
    <div className="container flex items-center justify-center w-full h-screen">
      <Outlet />
    </div>
  );
}
