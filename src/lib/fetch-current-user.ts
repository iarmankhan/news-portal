import { fetchApi } from "@/lib/fetch-api.ts";
import { User } from "@/auth.tsx";

export const fetchCurrentUser = async () => {
  return fetchApi<User>(
    {
      url: "/me",
      method: "GET",
    },
    true,
  );
};
