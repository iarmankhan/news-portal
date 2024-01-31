import { Input } from "@/components/ui/input.tsx";
import { useNewsStore } from "@/lib/news-store";
import { cn, debounce } from "@/lib/utils.ts";
import { useCallback, useState } from "react";

export function NewsFilters() {
  const [search, setSearch] = useState("");
  const setGlobalSearch = useNewsStore((state) => state.setSearch);
  const setPage = useNewsStore((state) => state.setPage);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateGlobalSearch = useCallback(
    debounce((s: string) => {
      setGlobalSearch(s);
      setPage(1);
    }, 500),
    [],
  );

  return (
    <div className={cn("flex flex-row gap-2")}>
      <div className="w-full">
        <Input
          type="search"
          placeholder="Search"
          value={search}
          className="w-full sm:w-72"
          onChange={(e) => {
            setSearch(e.target.value);
            updateGlobalSearch(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
