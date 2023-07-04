<template>
  <div>
    <a-dropdown>
      <div class="flex items-center gap-2 cursor-pointer">
        <img width="24" height="24" class="rounded-full object-cover" src="https://picsum.photos/200/200" alt="A">
        Carter Studios
        <DownOutlined />
      </div>
      <template #overlay>
        <UserOverlay />
      </template>
    </a-dropdown>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { DownOutlined } from '@ant-design/icons-vue'

import UserOverlay from './UserOverlay/index.vue'

export default defineComponent({
  components: {
    DownOutlined,

    UserOverlay,
  },
  setup() {
    
  },
})
</script>
