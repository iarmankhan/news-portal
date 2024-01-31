import { News } from "@/hooks/use-news.ts";
import { NewsCard } from "@/components/news-card.tsx";
import { cn } from "@/lib/utils.ts";
import { NewsCardLoading } from "@/components/news-card-loading.tsx";

interface NewsListProps {
  news: News[];
  isLoading?: boolean;
}

export function NewsList(props: NewsListProps) {
  const { news, isLoading } = props;
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-6 my-4")}>
      {isLoading ? (
        new Array(9).fill(0).map((_, index) => {
          return <NewsCardLoading key={index} />;
        })
      ) : !news.length ? (
        <div className="text-center text-gray-500 text-xl h-72 flex items-center justify-center font-bold col-span-full">
          No News Found
        </div>
      ) : (
        news.map((news) => {
          return <NewsCard news={news} key={news.id} />;
        })
      )}
    </div>
  );
}
