<template>
  <div class="bg-[#a72cf9] py-8 px-12 rounded-lg text-white">
    <h3 class="text-white text-20px mb-8">Getting start</h3>
    <ul >
      <li
        v-for="(item, index) in checkList"
        :key="item.name"
        class="mt-4 border-b pb-4 flex justify-between items-center cursor-pointer"
        @click="onClick(index)"
      >
        <div class="flex justify-between items-center">
          <div class="rounded-full border-white border w-20px h-20px" v-if="!item.checked" />
          <CheckCircleOutlined class="text-20px" v-else />
          <span class="ml-2">{{ item.name }}</span>
        </div>
        <RightOutlined />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
  import { RightOutlined, CheckCircleOutlined } from '@ant-design/icons-vue'
  import { ref } from 'vue'
  interface CheckType {
    name: string
    checked: boolean
  }
  const checkList = ref<CheckType[]>([])
  checkList.value = [
    {
      name: 'watch tutorial',
      checked: false,
    },
    {
      name: 'generate a strategy',
      checked: false,
    },
    {
      name: 'generate new content',
      checked: false,
    },
    {
      name: 'connect socials',
      checked: false,
    },
    {
      name: 'create your first project',
      checked: false,
    },
  ]
  function onClick(index: number) {
    checkList.value.forEach((ele, i) => {
      if (i === index) {
        ele.checked = !ele.checked
      }
    })
  }
</script>
