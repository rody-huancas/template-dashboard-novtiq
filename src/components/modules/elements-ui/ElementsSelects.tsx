import InputSelect from "@/components/ui/select/InputSelect";
import { Title } from "@/components/ui/title/Title";

export const ElementsSelects = () => {
  return (
    <div className="flex flex-col gap-4">
      <Title size="h6" level={6}>
        Selects
      </Title>

      <div className="grid grid-cols-4 gap-5">
        <InputSelect
          label="Select Normal"
          options={[
            { value: "1", label: "Opción 1" },
            { value: "2", label: "Opción 2" },
            { value: "3", label: "Opción 3" },
          ]}
        />

        <InputSelect
          label="Select con Error"
          error="Este campo es requerido"
          options={[
            { value: "1", label: "Opción 1" },
            { value: "2", label: "Opción 2" },
          ]}
        />

        <InputSelect
          label="Select Deshabilitado"
          disabled
          options={[
            { value: "1", label: "Opción 1" },
            { value: "2", label: "Opción 2" },
          ]}
        />

        <InputSelect
          variant="ghost"
          label="Select Variante Ghost"
          options={[
            { value: "1", label: "Opción 1" },
            { value: "2", label: "Opción 2" },
          ]}
        />
      </div>
    </div>
  );
};
