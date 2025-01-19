import { Title } from "@/components/ui/title/Title";
import { PricingCard } from "@/components/modules/pricing/PricingCard";
import { pricingTiers } from "@/data/pricingData";

const PrincingPage = () => {
  return (
    <div className="space-y-10">
      <Title level={3} size="h3">
        Precios
      </Title>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingTiers.map((tier) => (
          <PricingCard key={tier.name} {...tier} />
        ))}
      </div>
    </div>
  );
};

export default PrincingPage;
