import { Input } from "@/components/ui/input.tsx";
import { useNewsStore } from "@/lib/news-store";
import { cn, debounce, toTitleCase } from "@/lib/utils.ts";
import { useCallback, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";

const CATEGORIES = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

export function NewsFilters() {
  const [search, setSearch] = useState("");
  const setGlobalSearch = useNewsStore((state) => state.setSearch);
  const setPage = useNewsStore((state) => state.setPage);

  const category = useNewsStore((state) => state.category);
  const setCategory = useNewsStore((state) => state.setCategory);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateGlobalSearch = useCallback(
    debounce((s: string) => {
      setGlobalSearch(s);
      setPage(1);
    }, 500),
    [setGlobalSearch, setPage],
  );

  const updateGlobalCategory = useCallback(
    (c: string) => {
      setCategory(c);
      setPage(1);
    },
    [setCategory, setPage],
  );

  return (
    <div className={cn("flex flex-row gap-2")}>
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

      <Select value={category} onValueChange={updateGlobalCategory}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="All categories" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">All</SelectItem>
            {CATEGORIES.map((category) => {
              return (
                <SelectItem key={category} value={category}>
                  {toTitleCase(category)}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
