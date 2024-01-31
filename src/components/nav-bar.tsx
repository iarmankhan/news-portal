import { cn } from "@/lib/utils.ts";
import { Button } from "@/components/ui/button.tsx";
import { useNavigate } from "@tanstack/react-router";
import { useCallback } from "react";

export function NavBar() {
  const navigate = useNavigate();

  const handleLogout = useCallback(async () => {
    localStorage.removeItem("token");
    await navigate({
      to: "/login",
    });
  }, [navigate]);

  return (
    <div className={cn("flex flex-row justify-between items-center")}>
      <h1 className={cn("text-2xl font-bold")}>News</h1>
      <div className={cn("flex flex-row ml-auto gap-2")}>
        <Button variant="ghost" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
}
