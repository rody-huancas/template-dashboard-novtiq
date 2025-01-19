import { PricingTier } from "@/components/modules/pricing/PricingCard";

export const pricingTiers: PricingTier[] = [
  {
    name: "Basic",
    price: 14.99,
    features: [
      { name: "Analytics Report", included: false },
      { name: "Public API Access", included: false },
      { name: "Plugins Integration", included: false },
      { name: "Custom Content Management", included: false },
    ],
  },
  {
    name: "Standard",
    price: 49.99,
    features: [
      { name: "Analytics Report", included: true },
      { name: "Public API Access", included: true },
      { name: "Plugins Integration", included: false },
      { name: "Custom Content Management", included: false },
    ],
  },
  {
    name: "Premium",
    price: 89.99,
    highlighted: true,
    features: [
      { name: "Analytics Report", included: true },
      { name: "Public API Access", included: true },
      { name: "Plugins Integration", included: true },
      { name: "Custom Content Management", included: true },
    ],
  },
];
