import { Title } from "@/components/ui/title/Title";
import { Button } from "@/components/ui/button/Button";
import { RiSearch2Fill } from "react-icons/ri";

export const ElementsButton = () => {
  return (
    <div className="flex flex-col gap-4">
      <Title size="h6" level={6}>
        Botones
      </Title>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <Button>Botón Normal</Button>
        <Button variant="default">Botón Default</Button>
        <Button variant="secondary">Botón Secundario</Button>
        <Button variant="outline">Botón Outline</Button>
        <Button variant="destructive">Botón Destructivo</Button>
        <Button variant="link">Botón Link</Button>
        <Button variant="ghost">Botón Ghost</Button>
        <Button disabled>Botón Deshabilitado</Button>
        <Button size="sm">Botón Pequeño</Button>
        <Button size="lg">Botón Grande</Button>
        <Button leftIcon={<RiSearch2Fill />}>Con Icono</Button>
      </div>
    </div>
  );
};

