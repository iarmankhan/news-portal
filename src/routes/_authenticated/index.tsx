import { createFileRoute } from "@tanstack/react-router";
import { LIMIT, useNews } from "@/hooks/use-news.ts";
import { NewsPagination } from "@/components/news-pagination.tsx";
import { NewsFilters } from "@/components/news-filters.tsx";
import { NewsList } from "@/components/news-list.tsx";

export const Route = createFileRoute("/_authenticated/")({
  component: () => <News />,
});

function News() {
  const { data, isPending } = useNews("", 1);

  const total = data?.total ?? 0;
  const totalPages = Math.ceil(total / LIMIT);

  const items = data?.data ?? [];

  return (
    <div className="my-2">
      <NewsFilters />
      <NewsList news={items} isLoading={isPending} />
      <NewsPagination totalPages={totalPages} />
    </div>
  );
}
