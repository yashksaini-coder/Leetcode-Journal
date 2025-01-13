import { Card, CardContent, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export function DashboardContentSkeleton() {
  return (
    <main className="container mx-auto p-4 space-y-6">
      <Skeleton className="h-10 w-[250px]" />

      <Card>
        <CardHeader>
          <Skeleton className="h-7 w-[100px]" />
        </CardHeader>
        <CardContent className="space-y-2">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <Skeleton className="h-7 w-[120px]" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-20 w-full" />
        </CardContent>
      </Card>
    </main>
  );
}
