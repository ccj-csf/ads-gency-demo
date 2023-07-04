import { computed, unref, ref } from 'vue'

import { useAppStore } from '@/store/modules/app'

export function useMenuSetting() {
  const appStore = useAppStore();

  const getCollapsed = computed(() => appStore.getCollapsed);
  const getMobileCollapsed = computed(() => appStore.getMobileCollapsed);


  const toggleCollapsed = () => {
    appStore.setCollapsed(!unref(getCollapsed))
  }
  const toggleMobileCollapsed = () => {
    appStore.setMobileCollapsed(!unref(getMobileCollapsed))
  }
  
  return {

    getCollapsed,
    getMobileCollapsed,

    toggleCollapsed,
    toggleMobileCollapsed
  }
}