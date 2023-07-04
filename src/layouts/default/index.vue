<template>
  <Layout class="h-full">
    <LayoutHeader fixed />
    <Layout>
      <LayoutSider class="hidden md:flex" :width="224" v-model:collapsed="collapsed">
        <ASlider collapsed={collapsed} />
      </LayoutSider>
      <LayoutContent class="box-border px-2 md:px-10 md:py-4 py-2 overflow-y-auto">
        <RouterView>
          <template #default="{ Component, route }">
            <component :is="Component" :key="route.fullPath" />
          </template>
        </RouterView>
      </LayoutContent>
    </Layout>
  </Layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { UserOutlined } from '@ant-design/icons-vue'

import { Layout, LayoutSider, LayoutContent } from 'ant-design-vue';

import LayoutHeader from './header/index.vue';
import ASlider from './sider/index.vue';

import { useMenuSetting } from '@/hooks/useMenuSetting'


export default defineComponent({
  name: 'DefaultLayout',
  components: {
    UserOutlined,

    LayoutHeader,
    LayoutSider,
    LayoutContent,
    Layout,

    ASlider,
  },
  setup() {
    const { getCollapsed } = useMenuSetting();
    return {
      collapsed: getCollapsed,
    };
  },
})
</script>
