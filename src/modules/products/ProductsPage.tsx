import { Title } from "@/components/ui/title/Title";
import { ProductCard } from "@/components/modules/products/ProductCard";
import { PromotionalSlider } from "@/components/modules/products/PromotionalSlider";

import { productsData } from "@/data/products";

const ProductsPage = () => {
  return (
    <div className="space-y-7">
      <Title size="h3">Productos</Title>

      <PromotionalSlider />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            images={product.images}
            price={product.price}
            rating={product.rating}
            reviews={product.reviews}
            isFavorite={product.isFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
