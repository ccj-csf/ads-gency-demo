<template>
  <aside class="box-border py-6 h-full w-full coustom-aside-wrap flex flex-col justify-between">
    <div class="flex-1 overflow-auto">
      <a-menu
        @select="hanldeSelectMenu"
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="inline"
      >
        <template v-for="item in sliderRoutes">
          <a-menu-item :key="item.name" v-if="!item.children">
            <IconLoader :iconName="item.meta.icon" v-if="item.meta.icon" />
            <UserOutlined v-else />
            <span>{{ item.meta.title }}</span>
          </a-menu-item>
          <a-sub-menu :key="item.name" v-else>
            <template #title>
              <span>
                <IconLoader :iconName="item.meta.icon" v-if="item.meta.icon" />
                <UserOutlined v-else />
                {{ item.meta.title }}
              </span>
            </template>
            <a-menu-item v-for="subItem in item.children" :key="subItem.name">
              {{ subItem.meta.title }}
            </a-menu-item>
          </a-sub-menu>
        </template>
      </a-menu>
    </div>
    <footer class="hidden md:block text-white px-4" v-if="!getCollapsed">
      <a class="mb-4 block cursor-pointer" href="https://google.com" target="_block">
        <img class="w-full rounded-md" src="https://picsum.photos/428/190" alt="Adv.png" >
      </a>
      <div class="flex gap-4 mb-4 cursor-pointer" @click="handleSignOut">
        <span>
          <LogoutOutlined />
        </span>
        <span>Log out</span>
      </div>
      <p class="text-xs">Made with 💗 in San Francisco</p>
    </footer>
  </aside>
</template>
<script lang="tsx">
  import { defineComponent, ref } from 'vue'
  import { useRouter } from 'vue-router'

  import { UserOutlined, LogoutOutlined } from '@ant-design/icons-vue'

  import { useMenuSetting } from '@/hooks/useMenuSetting'

  import { SliderRoutes } from '@/router/routes/index'
  import { IconLoader } from '@/components/index'

  // import advImage from '@/assets/images/adv.png'

  export default defineComponent({
    components: {
      UserOutlined,
      LogoutOutlined,

      IconLoader,
    },

    setup() {
      const { getCollapsed } = useMenuSetting()

      const router = useRouter()

      console.log(SliderRoutes, 'SliderRoutes')
      const handleSignOut = (): void => {
        // todo remove cookies and login out
      }

      const hanldeSelectMenu = ({ key }) => {
        router.push({
          name: key,
        })
      }
      return {
        // advImg: advImage,
        sliderRoutes: ref(SliderRoutes),

        handleSignOut,
        hanldeSelectMenu,

        getCollapsed,
        selectedKeys: ref<string[]>(['Home']),
      }
    },
  })
</script>
<style lang="less" scoped>
  @import url('./index.less');
</style>
