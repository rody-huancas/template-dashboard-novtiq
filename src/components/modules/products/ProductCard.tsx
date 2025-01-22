import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Button } from "@/components/ui/button/Button";
import { formatMoney } from "@/utils/general.util";
import { FaStar } from "react-icons/fa";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

import "swiper/swiper-bundle.css";

interface Props {
  images?    : string[];
  title      : string;
  price      : number;
  rating?    : number;
  reviews?   : number;
  isFavorite?: boolean;
}

const DEFAULT_IMAGE = "https://adaptcommunitynetwork.org/wp-content/uploads/2022/01/ef3-placeholder-image.jpg";

export const ProductCard = (props: Props) => {
  const { images = [], title, price = 0, rating = 0, reviews = 0, isFavorite = false } = props;
  const displayImages = images.length > 0 ? images : [DEFAULT_IMAGE];

  const renderStars = () => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <FaStar
          key={index}
          className={index < rating ? "text-orange-500" : "text-gray-300"}
        />
      ));
  };

  return (
    <div className="w-full bg-light-100 rounded-lg swiper-slider">
      <div className="w-full relative">
        <Swiper modules={[Navigation]} navigation={true} className="w-full">
          {displayImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`${title} view ${index + 1}`}
                className="w-full h-52 object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex flex-col gap-5 p-5">
        <div className="flex justify-between items-start gap-4">
          <div className="space-y-2">
            <p className="font-bold text-dark-100/90 text-lg">{title}</p>
            <span className="text-primary font-medium">
              {formatMoney(price)}
            </span>
            <div className="flex items-center gap-1">
              {renderStars()}
              {reviews > 0 && (
                <span className="text-gray-600 text-sm ml-1">({reviews})</span>
              )}
            </div>
          </div>
          <button className="p-3 rounded-full bg-gray-500/15">
            { 
              isFavorite 
                ? <MdOutlineFavorite className="text-red-500" />
                : <MdFavoriteBorder className="text-dark-100" />
            }
          </button>
        </div>

        <div className="flex justify-start">
          <Button>Editar Producto</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
