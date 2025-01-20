import { Title } from "@/components/ui/title/Title";
import Drawer from "@/components/ui/drawer/Drawer";

export const ElementsDrawer = () => {
  return (
    <div className="flex flex-col gap-4">
      <Title size="h6" level={6}>
        Drawer
      </Title>

      <Drawer>
        <p>This is some content inside the drawer.</p>
      </Drawer>
    </div>
  );
};
