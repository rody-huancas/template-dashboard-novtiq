import Skeleton from "@/components/ui/skeleton/Skeleton";
import { Title } from "@/components/ui/title/Title";

export const ElementsSkeleton = () => {
  return (
    <div className="space-y-4">
      <Title size="h6" level={6}>
        Skeleton
      </Title>
      <div className="space-y-2">
        <Skeleton width="100%" height="20px" />
        <Skeleton width="75%" height="20px" />
        <Skeleton width="50%" height="20px" />
      </div>
    </div>
  );
};
