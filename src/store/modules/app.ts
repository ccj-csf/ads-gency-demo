import { defineStore } from 'pinia'
import { store } from '@/store'

interface AppState {
  collapsed: boolean
  mobileCollapsed: boolean
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    collapsed: false,
    mobileCollapsed: false,
  }),
  getters: {
    getCollapsed(state): boolean {
      return state.collapsed
    },
    getMobileCollapsed(state): boolean {
      return state.mobileCollapsed
    },
  },
  actions: {
    setCollapsed(collapsed:boolean):void {
      this.collapsed = collapsed
    },
    setMobileCollapsed(collapsed:boolean):void {
      this.mobileCollapsed = collapsed
    },
  },
})

export function useAppStoreWithOut() {
  return useAppStore(store)
}
