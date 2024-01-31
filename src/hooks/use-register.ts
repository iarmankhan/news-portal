import { useMutation } from "@tanstack/react-query";
import { fetchApi } from "@/lib/fetch-api.ts";
import { useNavigate } from "@tanstack/react-router";

export function useRegister() {
  const navigate = useNavigate();
  const { mutateAsync, ...rest } = useMutation<
    unknown,
    unknown,
    {
      name: string;
      email: string;
      password: string;
    }
  >({
    mutationKey: ["register"],
    mutationFn: async (data) => {
      const response = await fetchApi(
        {
          url: "/auth/register",
          method: "POST",
          data,
        },
        false,
      );

      if (response.data) {
        await navigate({
          to: "/login",
          replace: true,
        });
      }
    },
  });

  return {
    register: mutateAsync,
    ...rest,
  };
}
