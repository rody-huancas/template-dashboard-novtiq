import { Input } from "@/components/ui/input/Input";
import { Title } from "@/components/ui/title/Title";
import { RiSearch2Fill } from "react-icons/ri";

export const ElementsInput = () => {
  return (
    <div className="flex flex-col gap-4">
      <Title size="h6" level={6}>
        Inputs
      </Title>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <Input label="Input Normal" placeholder="Placeholder..." />

        <Input
          label="Input con Error"
          placeholder="Placeholder..."
          error="Este campo es requerido"
        />

        <Input
          label="Input con Icono"
          placeholder="Placeholder..."
          leftIcon={<RiSearch2Fill />}
        />

        <Input
          label="Input Deshabilitado"
          placeholder="Placeholder..."
          disabled
        />

        <Input
          label="Input Variante Flat"
          placeholder="Placeholder..."
          variant="flat"
        />

        <Input
          label="Input con Tipo"
          placeholder="Placeholder..."
          type="password"
        />
      </div>
    </div>
  );
};
