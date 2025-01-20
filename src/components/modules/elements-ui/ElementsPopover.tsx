import Popover from "@/components/ui/popover/Popover";
import { Title } from "@/components/ui/title/Title";

export const ElementsPopover = () => {
  return (
    <div className="space-y-4">
      <Title size="h6" level={6}>
        Popover
      </Title>
      <Popover
        content="This is popover content"
        trigger={
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Click me
          </button>
        }
      />
    </div>
  );
};
