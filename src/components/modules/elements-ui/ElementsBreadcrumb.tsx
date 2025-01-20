import { Title } from "@/components/ui/title/Title";
import Breadcrumb from "@/components/ui/breadcrumb/Breadcrumb";

export const ElementsBreadcrumb = () => {
  const breadcrumbItems = ["Home", "Category", "Product"];

  return (
    <div className="flex flex-col gap-4">
      <Title size="h6" level={6}>
        Breadcrumb
      </Title>

      <Breadcrumb items={breadcrumbItems} />
    </div>
  );
};
