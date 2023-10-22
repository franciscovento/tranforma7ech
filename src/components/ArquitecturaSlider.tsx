// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { useSwiper } from 'swiper/react';

const ArquitecturaSlider = () => {
  return (
    <div className="px-12">
      <Swiper spaceBetween={50} slidesPerView={1}>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center gap-8">
            <h3 className="uppercase text-tt-blue text-2xl font-bold flex flex-col items-center justify-center gap-4 text-center">
              <span className="bg-white h-14 w-14  rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 7C21 9.21 16.97 11 12 11C7.03 11 3 9.21 3 7C3 4.79 7.03 3 12 3C16.97 3 21 4.79 21 7Z"
                    fill="#868DF5"
                  />
                  <path
                    d="M21 7C21 9.21 16.97 11 12 11C7.03 11 3 9.21 3 7M21 7C21 4.79 16.97 3 12 3C7.03 3 3 4.79 3 7M21 7V12M3 7V12M21 12C21 14.21 16.97 16 12 16C7.03 16 3 14.21 3 12M21 12V17C21 19.21 16.97 21 12 21C7.03 21 3 19.21 3 17V12"
                    stroke="#868DF5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Arquitectura de datos
            </h3>
            <img src="/arquitectura-datos.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center gap-8">
            <h3 className="uppercase text-tt-blue text-2xl font-bold flex flex-col items-center justify-center gap-4 text-center">
              <span className="bg-white h-14 w-14  rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="22"
                  viewBox="0 0 14 22"
                  fill="none"
                >
                  <path
                    d="M5 19H9V18H5V19ZM2 22C1.45 22 0.979002 21.804 0.587002 21.412C0.195002 21.02 -0.000664969 20.5493 1.69779e-06 20V2C1.69779e-06 1.45 0.196001 0.979002 0.588001 0.587002C0.980001 0.195002 1.45067 -0.000664969 2 1.69779e-06H12C12.55 1.69779e-06 13.021 0.196002 13.413 0.588002C13.805 0.980002 14.0007 1.45067 14 2V20C14 20.55 13.804 21.021 13.412 21.413C13.02 21.805 12.5493 22.0007 12 22H2ZM2 17V20H12V17H2ZM2 15H12V5H2V15ZM2 3H12V2H2V3Z"
                    fill="#868DF5"
                  />
                </svg>
              </span>
              Arquitectura de Aplicaciones
            </h3>
            <img src="/arquitectura-aplicaciones.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center gap-8">
            <h3 className="uppercase text-tt-blue text-2xl font-bold flex flex-col items-center justify-center gap-4 text-center">
              <span className="bg-white h-14 w-14  rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9.17997 1H14.82L15.467 4.237C16.0027 4.47701 16.5121 4.77192 16.987 5.117L20.116 4.058L22.936 8.942L20.455 11.122C20.515 11.7058 20.515 12.2942 20.455 12.878L22.935 15.058L20.116 19.942L16.987 18.884C16.512 19.2287 16.0026 19.5233 15.467 19.763L14.819 23H9.17997L8.53296 19.763C7.99726 19.523 7.48787 19.2281 7.01296 18.883L3.88397 19.942L1.06396 15.058L3.54496 12.878C3.48496 12.2942 3.48496 11.7058 3.54496 11.122L1.06496 8.942L3.88496 4.058L7.01296 5.116C7.4879 4.77127 7.99729 4.47669 8.53296 4.237L9.17997 1ZM10.82 3L10.278 5.705L9.75296 5.898C9.05713 6.15474 8.41044 6.52882 7.84096 7.004L7.41096 7.363L4.79596 6.478L3.61596 8.522L5.68796 10.343L5.59296 10.894C5.46756 11.626 5.46756 12.374 5.59296 13.106L5.68796 13.656L3.61496 15.478L4.79496 17.522L7.41096 16.637L7.84096 16.996C8.41076 17.4707 9.05737 17.8448 9.75296 18.102L10.278 18.295L10.82 21H13.18L13.722 18.295L14.247 18.102C14.9428 17.8452 15.5895 17.4711 16.159 16.996L16.589 16.637L19.205 17.522L20.385 15.478L18.313 13.657L18.407 13.106C18.5323 12.374 18.5323 11.626 18.407 10.894L18.313 10.344L20.385 8.522L19.205 6.478L16.589 7.363L16.159 7.004C15.5895 6.52879 14.9428 6.1547 14.247 5.898L13.722 5.705L13.18 3H10.82ZM12 9C11.2043 9 10.4413 9.31607 9.87864 9.87868C9.31604 10.4413 8.99996 11.2044 8.99996 12C8.99996 12.7956 9.31604 13.5587 9.87864 14.1213C10.4413 14.6839 11.2043 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9ZM6.99996 12C6.99996 10.6739 7.52675 9.40215 8.46443 8.46447C9.40211 7.52678 10.6739 7 12 7C13.326 7 14.5978 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5978 16.4732 13.326 17 12 17C10.6739 17 9.40211 16.4732 8.46443 15.5355C7.52675 14.5979 6.99996 13.3261 6.99996 12Z"
                    fill="#868DF5"
                  />
                </svg>
              </span>
              Arquitectura de Tecnológica
            </h3>
            <img src="/arquitectura-tecnologica.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center gap-8">
            <h3 className="uppercase text-tt-blue text-2xl font-bold flex flex-col items-center justify-center gap-4 text-center">
              <span className="bg-white h-14 w-14  rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9.17997 1H14.82L15.467 4.237C16.0027 4.47701 16.5121 4.77192 16.987 5.117L20.116 4.058L22.936 8.942L20.455 11.122C20.515 11.7058 20.515 12.2942 20.455 12.878L22.935 15.058L20.116 19.942L16.987 18.884C16.512 19.2287 16.0026 19.5233 15.467 19.763L14.819 23H9.17997L8.53296 19.763C7.99726 19.523 7.48787 19.2281 7.01296 18.883L3.88397 19.942L1.06396 15.058L3.54496 12.878C3.48496 12.2942 3.48496 11.7058 3.54496 11.122L1.06496 8.942L3.88496 4.058L7.01296 5.116C7.4879 4.77127 7.99729 4.47669 8.53296 4.237L9.17997 1ZM10.82 3L10.278 5.705L9.75296 5.898C9.05713 6.15474 8.41044 6.52882 7.84096 7.004L7.41096 7.363L4.79596 6.478L3.61596 8.522L5.68796 10.343L5.59296 10.894C5.46756 11.626 5.46756 12.374 5.59296 13.106L5.68796 13.656L3.61496 15.478L4.79496 17.522L7.41096 16.637L7.84096 16.996C8.41076 17.4707 9.05737 17.8448 9.75296 18.102L10.278 18.295L10.82 21H13.18L13.722 18.295L14.247 18.102C14.9428 17.8452 15.5895 17.4711 16.159 16.996L16.589 16.637L19.205 17.522L20.385 15.478L18.313 13.657L18.407 13.106C18.5323 12.374 18.5323 11.626 18.407 10.894L18.313 10.344L20.385 8.522L19.205 6.478L16.589 7.363L16.159 7.004C15.5895 6.52879 14.9428 6.1547 14.247 5.898L13.722 5.705L13.18 3H10.82ZM12 9C11.2043 9 10.4413 9.31607 9.87864 9.87868C9.31604 10.4413 8.99996 11.2044 8.99996 12C8.99996 12.7956 9.31604 13.5587 9.87864 14.1213C10.4413 14.6839 11.2043 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9ZM6.99996 12C6.99996 10.6739 7.52675 9.40215 8.46443 8.46447C9.40211 7.52678 10.6739 7 12 7C13.326 7 14.5978 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5978 16.4732 13.326 17 12 17C10.6739 17 9.40211 16.4732 8.46443 15.5355C7.52675 14.5979 6.99996 13.3261 6.99996 12Z"
                    fill="#868DF5"
                  />
                </svg>
              </span>
              Arquitectura de Tecnológica
            </h3>
            <img src="/arquitectura-tecnologica(2).png" />
          </div>
        </SwiperSlide>
        <div className="py-8">
          <NextSlide />
        </div>
      </Swiper>
    </div>
  );
};

export default ArquitecturaSlider;

const NextSlide = () => {
  const swiper = useSwiper();

  return (
    <div className="flex justify-evenly">
      <button
        className="underline text-sm font-bold"
        onClick={() => swiper.slidePrev()}
      >
        {'<'} Ver tabla anterior
      </button>
      <button
        className="underline text-sm font-bold"
        onClick={() => swiper.slideNext()}
      >
        Ver siguiente tabla {'>'}
      </button>
    </div>
  );
};
