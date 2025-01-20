import RadioButton from "@/components/ui/radio-button/RadioButton";
import { Title } from "@/components/ui/title/Title";

export const ElementsRadioButton = () => {
  return (
    <div className="flex flex-col gap-4">
      <Title size="h6" level={6}>
        Radio Buttons
      </Title>

      <div className="grid grid-cols-4 gap-5">
        <RadioButton label="Radio Normal" name="radio-normal" />

        <RadioButton
          label="Radio con Error"
          name="radio-error"
          error="Este campo es requerido"
        />

        <RadioButton
          label="Radio Deshabilitado"
          name="radio-disabled"
          disabled
        />

        <RadioButton
          label="Radio Variante Ghost"
          name="radio-ghost"
          variant="ghost"
        />

        <RadioButton label="Radio tamaño lg" name="radio-lg" size="lg" />

        <RadioButton label="Radio tamaño md" name="radio-md" size="md" />

        <RadioButton label="Radio tamaño sm" name="radio-sm" size="sm" />
      </div>
    </div>
  );
};
