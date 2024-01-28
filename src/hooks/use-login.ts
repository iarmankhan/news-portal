import { useMutation } from "@tanstack/react-query";
import { fetchApi } from "@/lib/fetch-api.ts";

interface LoginResponse {
  access_token: string;
  token_type: "bearer";
  expires_in: number;
}

export function useLogin() {
  const { mutateAsync, ...rest } = useMutation<
    unknown,
    unknown,
    {
      email: string;
      password: string;
    }
  >({
    mutationKey: ["login"],
    mutationFn: async (data) => {
      const response = await fetchApi<LoginResponse>({
        url: "/auth/login",
        method: "POST",
        data,
      });

      if (response.data) {
        localStorage.setItem("token", response.data.access_token);
      }
    },
  });

  return {
    login: mutateAsync,
    ...rest,
  };
}
