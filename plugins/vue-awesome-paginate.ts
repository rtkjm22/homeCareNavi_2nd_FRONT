/**
 * @see
 * https://github.com/peshanghiwa/vue-awesome-paginate
 */

// import the package
import VueAwesomePaginatePlugin from 'vue-awesome-paginate'

// import the necessary css file
import 'vue-awesome-paginate/dist/style.css'

// Register the package
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueAwesomePaginatePlugin)
})
