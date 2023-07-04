import { withInstall } from '@/utils'
import baseButton from './BaseButton/index.vue'
import baseSlot from './BaseSlot/index.vue'
import iconLoader from './IconLoader/index.vue'
export const BaseButton = withInstall(baseButton)
export const BaseSlot = withInstall(baseSlot)
export const IconLoader = withInstall(iconLoader)
