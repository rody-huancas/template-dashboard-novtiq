import { cn } from "@/utils/general.util";
import { Link } from "react-router-dom";

export interface PricingFeature {
  name: string;
  included: boolean;
}

export interface PricingTier {
  name: string;
  price: number;
  features: PricingFeature[];
  highlighted?: boolean;
}

export const PricingCard = (props: PricingTier) => {
  const { name, price, features, highlighted } = props;

  return (
    <div
      className={cn(
        "bg-white rounded-lg p-10 flex flex-col space-y-6 shadow-lg",
        highlighted ? "ring-2 ring-blue-500" : ""
      )}
    >
      <div className="text-center">
        <h3 className="text-4xl font-bold mb-2">{name}</h3>
        <p className="text-gray-500 text-sm">Costo Mensual</p>
        <p className="text-4xl font-bold text-blue-500 my-4">
          ${price.toFixed(2)}
        </p>
      </div>

      <div className="space-y-4 flex-grow">
        <div className="font-medium">Instalación Gratuita</div>
        <div className="font-medium">Límite de banda ancha 10GB</div>
        <div className="font-medium">20 Usuarios conectados</div>
        {features.map((feature, index) => (
          <div
            key={index}
            className={cn(
              "text-sm",
              feature.included ? "text-gray-900" : "text-gray-400"
            )}
          >
            {feature.name}
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <button
          className={cn(
            "w-full py-4 px-4 rounded-full font-medium transition-colors",
            highlighted
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-white text-blue-500 border border-blue-500 hover:bg-blue-50"
          )}
        >
          Empezar
        </button>
        <div className="text-center">
          <Link to="/" className="text-sm text-blue-500 hover:underline">
            Comience su prueba gratuita de 30 días
          </Link>
        </div>
      </div>
    </div>
  );
};
