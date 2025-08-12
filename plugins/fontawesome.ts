import { config, library } from '@fortawesome/fontawesome-svg-core'
import { defineNuxtPlugin } from 'nuxt/app'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faBars,
  faCalendar,
  faBell,
  faChevronRight,
  faUser,
  faCalendarCheck,
  faCreditCard,
  faFileMedical,
  faGear,
  faArrowRightFromBracket
} from '@fortawesome/free-solid-svg-icons'

// Nuxt handles CSS via nuxt.config.ts; prevent auto injection by Font Awesome
config.autoAddCss = false

// Register a small starter set; add more icons as needed
library.add(
  faBars,
  faCalendar,
  faBell,
  faChevronRight,
  faUser,
  faCalendarCheck,
  faCreditCard,
  faFileMedical,
  faGear,
  faArrowRightFromBracket
)

export default defineNuxtPlugin((nuxtApp) => {
  // Use the standard tag name
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})


