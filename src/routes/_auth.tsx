import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { fetchCurrentUser } from "@/lib/fetch-current-user.ts";

export const Route = createFileRoute("/_auth")({
  component: () => <AuthLayout />,
  beforeLoad: async ({ context }) => {
    const { data } = await fetchCurrentUser();

    if (data) {
      context.auth.setUser(data);

      throw redirect({
        to: "/",
      });
    }
  },
});

function AuthLayout() {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
}
