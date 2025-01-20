import { Title } from "@/components/ui/title/Title";
import { ElementsInput } from "@/components/modules/elements-ui/ElementsInput";
import { ElementsButton } from "@/components/modules/elements-ui/ElementsButton";
import { ElementsSelects } from "@/components/modules/elements-ui/ElementsSelects";
import { ElementsCheckbox } from "@/components/modules/elements-ui/ElementsCheckbox";
import { ElementsRadioButton } from "@/components/modules/elements-ui/ElementsRadioButton";
import { ElementsTooltip } from "@/components/modules/elements-ui/ElementsTooltip";
import { ElementsAccordion } from "@/components/modules/elements-ui/ElementsAccordion";
import { ElementsAvatar } from "@/components/modules/elements-ui/ElelementsAvatar";
import { ElementsBreadcrumb } from "@/components/modules/elements-ui/ElementsBreadcrumb";
import { ElementsCard } from "@/components/modules/elements-ui/ElementsCard";
import { ElementsCollapsible } from "@/components/modules/elements-ui/ElementsCollapsible";
import { ElementsDropdown } from "@/components/modules/elements-ui/ElementsDropdown";
import { ElementsHoverCard } from "@/components/modules/elements-ui/ElementsHoverCard";
import { ElementsLabel } from "@/components/modules/elements-ui/ElementsLabel";
import { ElementsDrawer } from "@/components/modules/elements-ui/ElementsDrawer";
import { ElementsPagination } from "@/components/modules/elements-ui/ElementsPagination";
import { ElementsPopover } from "@/components/modules/elements-ui/ElementsPopover";
import { ElementsProgress } from "@/components/modules/elements-ui/ElementsProgress";
import { ElementsScrollArea } from "@/components/modules/elements-ui/ElementsScrollArea";
import { ElementsSeparator } from "@/components/modules/elements-ui/ElementsSeparator";
import { ElementsSkeleton } from "@/components/modules/elements-ui/ElementsSkeleton";
import { TabsElements } from "@/components/ui/tab/Tab";

const ElementsUIPage = () => {
  const formElements = (
    <div className="space-y-7">
      <ElementsInput />
      <ElementsButton />
      <ElementsSelects />
      <ElementsCheckbox />
      <ElementsRadioButton />
      <ElementsLabel />
    </div>
  );

  const overlayElements = (
    <div className="space-y-7">
      <ElementsTooltip />
      <ElementsDropdown />
      <ElementsHoverCard />
      <ElementsDrawer />
      <ElementsPopover />
    </div>
  );

  const layoutElements = (
    <div className="space-y-7">
      <ElementsAccordion />
      <ElementsCard />
      <ElementsCollapsible />
      <ElementsSeparator />
      <ElementsScrollArea />
    </div>
  );

  const navigationElements = (
    <div className="space-y-7">
      <ElementsBreadcrumb />
      <ElementsPagination />
    </div>
  );

  const dataDisplayElements = (
    <div className="space-y-7">
      <ElementsAvatar />
      <ElementsProgress />
      <ElementsSkeleton />
    </div>
  );

  const tabs = [
    {
      label: "Formularios",
      content: formElements,
    },
    {
      label: "Overlays",
      content: overlayElements,
    },
    {
      label: "Layouts",
      content: layoutElements,
    },
    {
      label: "Navegación",
      content: navigationElements,
    },
    {
      label: "Visualización",
      content: dataDisplayElements,
    },
  ];

  return (
    <div className="space-y-7">
      <Title size="h3">Elementos UI</Title>
      <div className="bg-light-100 rounded-xl p-10">
        <TabsElements tabs={tabs} />
      </div>
    </div>
  );
};

export default ElementsUIPage;
