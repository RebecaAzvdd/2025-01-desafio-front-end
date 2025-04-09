import { animalService } from "@/services/data/animalService";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Services() {
  return (
    <section className="max-w-screen-xl mx-auto px-6 py-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-indigo-900 mb-4">
        Serviços para proteção animal
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Ações e programas do governo para o bem-estar dos animais.
      </p>

      <div className="block md:hidden">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.2}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {animalService.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl p-6 border border-gray-200 flex flex-col items-center justify-center text-center min-h-[220px] transition-transform duration-300 ease-in-out hover:scale-105 active:scale-105">
                <service.icon className="h-14 w-14 text-indigo-700 mb-4" />
                <h3 className="text-lg text-indigo-800">{service.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
        {animalService.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 border border-gray-200 flex flex-col items-center justify-center text-center min-h-[220px] transition-transform duration-300 ease-in-out hover:scale-105 active:scale-105"
          >
            <service.icon className="h-14 w-14 text-indigo-700 mb-4" />
            <h3 className="text-lg text-indigo-800">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
