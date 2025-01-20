import { Title } from "@/components/ui/title/Title";

export const ElementsTitle = () => {
  return (
    <div className="flex flex-col gap-4">
      <Title size="h6" level={6}>
        Títulos
      </Title>

      <div className="grid grid-cols-1 gap-5">
        <Title size="h1" level={1}>
          Título h1
        </Title>

        <Title size="h2" level={2}>
          Título h2
        </Title>

        <Title size="h3" level={3}>
          Título h3
        </Title>

        <Title size="h4" level={4}>
          Título h4
        </Title>

        <Title size="h5" level={5}>
          Título h5
        </Title>

        <Title size="h6" level={6}>
          Título h6
        </Title>

        <Title size="h3" level={3} className="text-blue-500">
          Título con color personalizado
        </Title>

        <Title size="h4" level={4} className="italic">
          Título con estilo personalizado
        </Title>
      </div>
    </div>
  );
};
