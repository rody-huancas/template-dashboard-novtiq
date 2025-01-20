import { Title } from "@/components/ui/title/Title";
import { Dropdown } from "@/components/ui/dropdown/Dropdown";

export const ElementsDropdown = () => {
  return (
    <div className="flex flex-col gap-4">
      <Title size="h6" level={6}>
        Dropdown
      </Title>

      <Dropdown
        trigger={<button>Click to Open Dropdown</button>}
        options={[
          { label: "Option 1", onClick: () => alert("Option 1 clicked") },
          { label: "Option 2", onClick: () => alert("Option 2 clicked") },
        ]}
      />
    </div>
  );
};
