import { useQuery } from "@tanstack/react-query";
import { fetchCurrentUser } from "@/lib/fetch-current-user.ts";

export function useMe() {
  return useQuery({
    queryKey: ["me"],
    queryFn: fetchCurrentUser,
  });
}
