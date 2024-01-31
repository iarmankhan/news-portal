import { News } from "@/hooks/use-news.ts";
import { formatDate } from "@/lib/utils";

interface NewsCardProps {
  news: News;
}

export function NewsCard(props: NewsCardProps) {
  const { news } = props;
  return (
    <a href={news.url} target="_blank" rel="noopener noreferrer">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm group cursor-pointer hover:shadow-md transition-all">
        <div className="flex flex-col items-start gap-2">
          {news.image_link ? (
            <img
              src={news.image_link}
              alt={news.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-300"
            />
          ) : (
            <div className="w-full h-64 bg-gray-300">
              <div className="flex items-center justify-center h-full text-gray-500 text-2xl font-bold">
                No Image
              </div>
            </div>
          )}
          <div className="flex flex-col flex-1 p-4">
            <div className="text-sm text-gray-500">{formatDate(news.published_at)}</div>
            <div className="text-lg text-gray-800 line-clamp-2 font-semibold my-1">{news.title}</div>
            <div className="text-sm mt-1 text-gray-600 line-clamp-2">
              {news.description}
            </div>
            <div className="text-xs mt-1 text-gray-500">{news.author}</div>
          </div>
        </div>
      </div>
    </a>
  );
}
