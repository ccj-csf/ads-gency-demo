<template>
  <header
    class="box-border px-2 py-2 md:px-4 md:leading-10 md:py-2 flex gap-2 align-middle items-center border-b border-b-2 border-b-theme"
  >
    <div class="flex items-center">
      <Trigger class="text-xl hidden md:flex" />
      <h4 class="mb-0">
        <b class="ml-2 text-neutral-800 text-2xl vertical--3">AdsGency</b>
        <span class="text-gradient">AI</span>
      </h4>
    </div>
    <div class="hidden lg:flex-1 lg:flex">
      <HeaderMenu />
    </div>
    <div class="hidden actions ml-auto md:flex items-center gap-4">
      <router-link
        to="CreateNewProject"
        :class="[
          'px-2 xl:px-6 leading-8 duration-300 bg-gradient-theme-right text-white rounded-md hover-gradient-theme-right hover:text-theme hover:text-white',
        ]"
        >Create New Project</router-link
      >
      <span
        class="bg-gradient-theme-right w-8 h-8 rounded-md text-center leading-8 text-white cursor-pointer"
      >
        <Notification />
      </span>
      <UserDropdown />
    </div>
    <div class="md:hidden ml-auto">
      <MenuOutlined class="text-xl" @click="toggleMobileCollapsed" />
      <a-drawer
        height="100%"
        :visible="getMobileCollapsed"
        @close="toggleMobileCollapsed"
        placement="bottom"
      >
        <UserOverlay />
        <div>
          <router-link
            to="CreateNewProject"
            :class="[
              'px-2 block leading-8 mb-4 duration-300 rounded-md hover-gradient-theme-right text-neutral-600 hover:text-theme hover:text-white',
              route.name === 'CreateNewProject' ? 'bg-gradient-theme-right text-white' : '',
            ]"
            >Create New Project</router-link
          >
        </div>
        <HeaderMenu />
      </a-drawer>
    </div>
  </header>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import { useRoute } from 'vue-router'

  import { MenuOutlined } from '@ant-design/icons-vue'

  import Trigger from '../trigger/index.vue'
  import HeaderMenu from './components/menu/HeaderMenu.vue'
  import UserDropdown from './components/UserDropdown/index.vue'
  import UserOverlay from './components/UserDropdown/UserOverlay/index.vue'
  import Notification from './components/Notification/idnex.vue'

  import { useMenuSetting } from '@/hooks/useMenuSetting'

  export default defineComponent({
    components: {
      Notification,
      MenuOutlined,

      Trigger,
      HeaderMenu,
      UserDropdown,
      UserOverlay,
    },
    setup() {
      const route = useRoute()

      const { getMobileCollapsed, toggleMobileCollapsed } = useMenuSetting()
      return {
        route,

        getMobileCollapsed,

        toggleMobileCollapsed,
      }
    },
  })
</script>

<style lang="less" scoped>
  @import url('./index.less');
</style>
