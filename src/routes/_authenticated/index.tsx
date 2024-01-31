import { createFileRoute } from "@tanstack/react-router";
import { LIMIT, useNews } from "@/hooks/use-news.ts";
import { NewsPagination } from "@/components/news-pagination.tsx";
import { NewsFilters } from "@/components/news-filters.tsx";
import { NewsList } from "@/components/news-list.tsx";
import { useNewsStore } from "@/lib/news-store";

export const Route = createFileRoute("/_authenticated/")({
  component: () => <News />,
});

function News() {
  const page = useNewsStore((state) => state.page);
  const search = useNewsStore((state) => state.search);
  const { data, isLoading } = useNews(search, page);

  const total = data?.total ?? 0;
  const totalPages = Math.ceil(total / LIMIT);

  const items = data?.data ?? [];

  return (
    <div className="my-2">
      <NewsFilters />
      <NewsList news={items} isLoading={isLoading} />
      <NewsPagination totalPages={totalPages} />
    </div>
  );
}
