import { useNewsStore } from "@/lib/news-store.ts";
import { Button } from "@/components/ui/button.tsx";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils.ts";

interface NewsPaginationProps {
  totalPages: number;
}

export function NewsPagination({ totalPages }: NewsPaginationProps) {
  const page = useNewsStore((state) => state.page);
  const setPage = useNewsStore((state) => state.setPage);

  return (
    <div className={cn("flex flex-row gap-4 items-center justify-center")}>
      <Button
        variant="ghost"
        disabled={page === 1}
        onClick={() => {
          if (page > 1) {
            setPage(page - 1);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }
        }}
      >
        <ChevronLeftIcon className="h-4 w-4" />
        Previous
      </Button>
      <Button
        variant="ghost"
        disabled={page === totalPages}
        onClick={() => {
          if (page < totalPages) {
            setPage(page + 1);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }
        }}
      >
        Next
        <ChevronRightIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}
