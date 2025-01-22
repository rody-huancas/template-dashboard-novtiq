import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import { Button } from "@/components/ui/button/Button";
import { cn } from "@/utils/general.util";

import "swiper/swiper-bundle.css";

interface PromoBanner {
  id: number;
  date: string;
  title: string;
  subtitle: string;
  buttonText: string;
  bgColor: string;
}

const promoBanners: PromoBanner[] = [
  {
    id: 1,
    date: "Septiembre 12-25",
    title: "Disfruta de la entrega\na domicilio en este verano",
    subtitle: "Lo último en tecnología - Elige entre la variedad de productos",
    buttonText: "Empezar",
    bgColor: "bg-primary",
  },
  {
    id: 2,
    date: "Octubre 1-15",
    title: "Ofertas exclusivas en\nproductos Apple",
    subtitle:
      "Descubre nuestra colección de productos premium con grandes descuentos",
    buttonText: "Ver Ofertas",
    bgColor: "bg-indigo-600",
  },
  {
    id: 3,
    date: "Noviembre 20-30",
    title: "Black Friday\nAdelanta tus compras",
    subtitle: "Aprovecha los mejores descuentos del año en tecnología",
    buttonText: "Comprar Ahora",
    bgColor: "bg-violet-600",
  },
];

export const PromotionalSlider = () => {
  return (
    <div className="swiper-slider  rounded-lg overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full"
      >
        {promoBanners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div
              className={cn(
                "rounded-lg p-10 text-light-100 h-full",
                banner.bgColor
              )}
            >
              <div className="flex flex-col gap-5 w-3/4 mx-auto">
                <span className="text-base">{banner.date}</span>
                <h3 className="text-2xl md:text-6xl font-bold whitespace-pre-line">
                  {banner.title}
                </h3>
                <span className="text-base">{banner.subtitle}</span>
                <div className="flex justify-start">
                  <Button className="px-10 bg-orange-500 hover:bg-orange-600 text-xl h-12">
                    {banner.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
