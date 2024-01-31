import { cn } from "@/lib/utils.ts";
import { Input } from "@/components/ui/input.tsx";
import { useState } from "react";

interface NewsFiltersProps {}

export function NewsFilters(props: NewsFiltersProps) {
  const [search, setSearch] = useState("");

  return (
    <div className={cn("flex flex-row gap-2")}>
      <div>
        <Input
          placeholder="Search"
          value={search}
          className="w-64"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
