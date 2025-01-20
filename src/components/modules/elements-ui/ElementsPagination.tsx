import { Title } from "@/components/ui/title/Title";
import Pagination from "../../ui/pagination/Pagination";

export const ElementsPagination = () => {
  return (
    <div className="space-y-4">
      <Title size="h6" level={6}>
        Paginación
      </Title>
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={(page) => console.log(`Page changed to ${page}`)}
      />
    </div>
  );
};
