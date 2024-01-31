import { useQuery } from "@tanstack/react-query";
import { fetchApi } from "@/lib/fetch-api.ts";

export interface News {
  id: number;
  title: string;
  description: string;
  image_link: string;
  author: string;
  published_at: string;
  metadata: any;
  url: string;
  category: string;
  source: string;
}

interface NewsResponse {
  data: News[];
  last_page: number;
  total: number;
}

export const LIMIT = 12;

export function useNews(search?: string, category?: string, page: number = 1) {
  return useQuery<NewsResponse>({
    queryKey: ["news", search, page, category],
    queryFn: async () => {
      const { data } = await fetchApi<NewsResponse>({
        url: "/news",
        method: "GET",
        params: {
          page,
          limit: LIMIT,
          ...(search && { search }),
          ...(category &&
            category !== "all" && {
              category,
            }),
        },
      });

      return data;
    },
  });
}
