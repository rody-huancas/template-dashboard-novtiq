import Checkbox from "@/components/ui/checkbox/Checkbox";
import { Title } from "@/components/ui/title/Title";

export const ElementsCheckbox = () => {
  return (
    <div className="flex flex-col gap-4">
      <Title size="h6" level={6}>
        Checkboxes
      </Title>

      <div className="grid grid-cols-4 gap-5">
        <Checkbox label="Checkbox Normal" />

        <Checkbox 
          label="Checkbox con Error"
          error="Este campo es requerido"
        />

        <Checkbox
          label="Checkbox Deshabilitado"
          disabled
        />

        <Checkbox
          label="Checkbox con tamaño lg"
          size="lg"
        />

        <Checkbox
          label="Checkbox con tamaño md"
          size="md"
        />

        <Checkbox
          label="Checkbox con tamaño sm"
          size="sm"
        />
      </div>
    </div>
  );
};
