import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { fetchCurrentUser } from "@/lib/fetch-current-user.ts";

export const Route = createFileRoute("/_authenticated")({
  component: () => <AuthLayout />,
  beforeLoad: async ({ context, location }) => {
    if (!context.auth.isAuthenticated) {
      const { data } = await fetchCurrentUser();

      if (data) {
        context.auth.setUser(data);
        return;
      }

      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
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
