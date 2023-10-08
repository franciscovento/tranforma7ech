// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const ValuesSlider = () => {
  return (
    <div className="px-12">
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        breakpoints={{
          0: {
            slidesPerView: 1.4,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 2.4,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 3.4,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4.2,
            spaceBetween: 40,
          },
          1450: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <div className=" h-[300px]  bg-secondary p-8 rounded-2xl text-white text-[32px] flex flex-col justify-center gap-8 font-semibold">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M46.6667 39.6667C48.0045 39.6667 49.1322 40.1334 50.05 41.0667C50.9678 42.0001 51.4189 43.089 51.4034 44.3334L32.6667 51.3334L16.3334 46.6667V25.6667H20.8834L37.8467 31.9434C39.06 32.4256 39.6667 33.2967 39.6667 34.5567C39.6667 35.2879 39.4022 35.9256 38.8734 36.4701C38.3445 37.0145 37.6756 37.3023 36.8667 37.3334H30.3334L26.25 35.7701L25.48 37.9634L30.3334 39.6667H46.6667ZM37.3334 7.53675C38.9822 5.62341 41.0822 4.66675 43.6334 4.66675C45.7489 4.66675 47.5378 5.44453 49 7.00008C50.4622 8.55564 51.24 10.3445 51.3334 12.3667C51.3334 13.969 50.5556 15.8823 49 18.1067C47.4445 20.3312 45.9122 22.1901 44.4034 23.6834C42.8945 25.1767 40.5378 27.3934 37.3334 30.3334C34.0978 27.3934 31.7178 25.1767 30.1934 23.6834C28.6689 22.1901 27.1367 20.3312 25.5967 18.1067C24.0567 15.8823 23.3022 13.969 23.3334 12.3667C23.3334 10.2512 24.0878 8.4623 25.5967 7.00008C27.1056 5.53786 28.9256 4.76008 31.0567 4.66675C33.5456 4.66675 35.6378 5.62341 37.3334 7.53675ZM2.29602 25.6667H11.6667V51.3334H2.29602V25.6667Z"
                fill="white"
              />
            </svg>
            Sus <br /> Valores
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-tt-text h-[300px] bg-primary p-8 rounded-2xl  flex flex-col justify-evenly items-center ">
            <h2 className="text-2xl font-medium text-center">Innovación</h2>
            <p className="text-sm font-extralight">
              Buscamos constantemente nuevas tendencias y en busca de utilizar
              tecnologías para innovar y crecer la organización.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-tt-text h-[300px] bg-[#E5F77D] p-8 rounded-2xl  flex flex-col justify-evenly items-center ">
            <h2 className="text-2xl font-medium text-center">
              Buena Relación con el cliente
            </h2>
            <p className="text-sm font-extralight">
              Buscamos constantemente nuevas tendencias y en busca de utilizar
              tecnologías para innovar y crecer la organización.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-tt-text h-[300px] bg-[#E89B7B] p-8 rounded-2xl  flex flex-col justify-evenly items-center ">
            <h2 className="text-2xl font-medium text-center">Colaboración</h2>
            <p className="text-sm font-extralight">
              Fomentamos un ambiente de trabajo colaborativo donde cada miembro
              del equipo tiene voz y contribuye al éxito de la empresa.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-tt-text h-[300px] bg-[#D1D4FB] p-8 rounded-2xl  flex flex-col justify-evenly items-center ">
            <h2 className="text-2xl font-medium text-center">
              Pasión por la moda
            </h2>
            <p className="text-sm font-extralight">
              Amamos la moda y estamos apasionados por ayudar a las mujeres a
              sentirse seguras y hermosas a través de nuestras prendas.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ValuesSlider;

const Card = () => {
  return (
    <div className="text-tt-text w-[258px] h-[300px] bg-primary p-8 rounded-2xl  flex flex-col justify-evenly items-center ">
      <h2 className="text-2xl font-medium">Innovación</h2>
      <p className="text-sm font-extralight">
        Buscamos constantemente nuevas tendencias y en busca de utilizar
        tecnologías para innovar y crecer la organización.
      </p>
    </div>
  );
};
