import SwiperClass, { Navigation, Pagination } from "Swiper";
import VueAwesomeSwiper, { Swiper, SwiperSlide } from "vue-awesome-swiper";

// import swiper module styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperClass.use([Navigation, Pagination]);
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueAwesomeSwiper, SwiperClass, Swiper, SwiperSlide);
});
