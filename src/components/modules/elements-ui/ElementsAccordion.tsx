import Accordion from '@/components/ui/accordion/Accordion'
import { Title } from '@/components/ui/title/Title'

export const ElementsAccordion = () => {
  const accordionItems = [
    { title: "Sección 1", content: "Contenido de la sección 1" },
    { title: "Sección 2", content: "Contenido de la sección 2" },
    { title: "Sección 3", content: "Contenido de la sección 3" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <Title size="h6" level={6}>
        Accordion
      </Title>

      <Accordion items={accordionItems} />
    </div>
  )
}
