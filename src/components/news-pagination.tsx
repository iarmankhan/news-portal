import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination.tsx";
import { useNewsStore } from "@/lib/news-store.ts";

interface NewsPaginationProps {
  totalPages: number;
}

export function NewsPagination({ totalPages }: NewsPaginationProps) {
  const page = useNewsStore((state) => state.page);
  const setPage = useNewsStore((state) => state.setPage);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => {
              if (page > 1) setPage(page - 1);
            }}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
