import { Skeleton } from "@/components/ui/skeleton.tsx";

export function NewsCardLoading() {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm group cursor-pointer hover:shadow-md transition-all">
      <div className="flex flex-col items-start gap-2">
        <Skeleton className="w-full h-64" />
        <div className="flex flex-col flex-1 p-4">
          <Skeleton className="h-4 w-40 my-1" />
          <Skeleton className="h-6 w-80 my-1" />
          <Skeleton className="h-4 w-72 my-1" />
          <Skeleton className="h-4 w-32 my-1" />
        </div>
      </div>
    </div>
  );
}
