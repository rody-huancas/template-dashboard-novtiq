import { Title } from "@/components/ui/title/Title";
import ProductCard from "@/components/modules/products/ProductCard";

import { productsData } from "@/data/products";

const FavoritesPage = () => {
  const favoriteProducts = productsData.filter(product => product.isFavorite);

  return (
    <div className="space-y-7">
      <Title size="h3">Favoritos</Title>

      {favoriteProducts.length === 0 ? (
        <p className="text-gray-500 text-center py-10">No tienes productos favoritos</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {favoriteProducts.map((product) => (
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
      )}
    </div>
  );
};

export default FavoritesPage;