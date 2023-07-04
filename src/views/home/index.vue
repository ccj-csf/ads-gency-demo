<template>
  <section>
    <!-- Grid items -->
    <h3 class="md:text-3xl text-lg pt-4 pb-6 text-center">What agency tasks do you have today?</h3>
    <ul class="flex lg:justify-center items-center gap-2 md:gap-4 flex-wrap lg:gap-3 xl:gap-8">
      <li
        @click="handleGridItem(item)"
        class="box-border w-full md:w-auto border border-2 border-gray-200 px-2 md:px-3 lg:px-6 xl:px-12 py-4 rounded-lg shadow-gray-400 cursor-pointer text-center"
        v-for="item in gridList"
        :key="item.name"
      >
        <img class="mb-2 mx-auto" width="56" height="56" :src="item.icon" >
        <p class="text-md text-neutral-600">{{ item.name }}</p>
      </li>
    </ul>
    <!-- RecentProiects -->
    <div class="pt-8 pb-10">
      <h4 class="flex justify-between items-center text-xl text-neutral-600">
        <div>Recent Proiects <span>(18)</span></div>
        <router-link
          class="font-normal text-sm text-neutral-600 hover:text-theme underline hover:underline"
          to="/"
          >More</router-link
        >
      </h4>
      <ul class="flex items-center md:gap-9 flex-wrap gap-4">
        <li
          class="w-full bg-cover md:w-auto md:flex-1 justify-center rounded-md overflow-hidden box-border w-full md:w-auto border border-2 border-gray-200 aspect-video overflow-hidden shadow-gray-400 cursor-pointer"
          v-for="item in recentList"
          :key="item.title"
          :style="{ background: `url(${item.url}) no-repeat center`, backgroundSize: 'cover' }"
        >
          <router-link
            :to="item.url"
            class="flex box-border px-2 items-center justify-center w-full h-full"
          >
            <p class="xl:text-xl lg:text-lg text-md text-white mb-0">{{ item.title }}</p>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- From the community -->
    <div class="community-wrap">
      <h4 class="flex justify-between items-center text-xl text-neutral-600">
        <div>Recent Proiects <span>(18)</span></div>
        <router-link
          class="font-normal text-sm text-neutral-600 hover:text-theme underline hover:underline"
          to="/"
          >More</router-link
        >
      </h4>
      <a-tabs v-model:activeKey="activeCommunity" type="card" @change="onTabChange">
        <a-tab-pane :tab="value" v-for="(value, key) in communityTypes" :key="key">
          <ul class="flex items-stretch md:gap-9 flex-wrap gap-2 md:gap-4">
            <li
              class="w-full md:w-auto md:flex-1 justify-center rounded-md overflow-hidden box-border w-full md:w-auto border border-2 border-gray-200 overflow-hidden shadow-gray-400 cursor-pointer"
              v-for="item in recentList"
              :key="item.title"
            >
              <router-link :to="item.url" class="flex flex-col items-stretch w-full h-full">
                <img
                  :src="item.image"
                  class="md:aspect-square aspect-video w-full"
                  alt=""
                  srcset=""
                >
                <p
                  class="px-2 md:px-2 xl:px-4 py-2 flex-grow-1 xl:text-xl text-md lg:text-lg leading-6 text-neutral-600 xl:leading-9 mb-0"
                  >{{ item.title }}</p
                >
              </router-link>
            </li>
          </ul>
        </a-tab-pane>
      </a-tabs>
      <section class="fixed bottom-[20px] right-[60px]">
        <Check />
      </section>
    </div>
  </section>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import IconStrategyPlanning from '@/assets/images/icon-strategy-planning.png'
  import IconContentCreation from '@/assets/images/icon-content-creation.png'
  import IconSocialAnalytics from '@/assets/images/icon-social-analytics.png'
  import IconAdsManagement from '@/assets/images/icon-ads-management.png'
  import Check from './components/Check.vue';
  interface BannerItem {
    name: string
    icon: any
    link: string
  }
  interface ProjectsItem {
    title: string
    image: any
    url: string
  }

  enum CommunityTypes {
    All = 'All',
    Popular = 'Popular',
    Recent = 'Recent',
    Object = 'Object',
    Portrait = 'Portrait',
    Service = 'Service',
  }

  export default defineComponent({
    components: { Check },
    setup() {
      const gridList = ref<BannerItem[]>([])
      const recentList = ref<ProjectsItem[]>([])
      const communityList = ref<ProjectsItem[]>([])
      const activeCommunity = ref<CommunityTypes>(CommunityTypes.All)

      const handleGridItem = (item: BannerItem): void => {
        // todo link other page
        console.log(item, '')
      }

      const onTabChange = (activeKey: CommunityTypes) => {
        // get data and render
        communityList.value = []

        setTimeout(() => {
          communityList.value = recentList.value = [
            {
              title: 'Green velvet sofa',
              image: 'https://picsum.photos/500/500',
              url: 'https://picsum.photos/428/190',
            },
            {
              title: 'NYFW 2023 Ads',
              image: 'https://picsum.photos/500/500',
              url: 'https://picsum.photos/428/190',
            },
            {
              title: 'Pbawn shop brandir',
              image: 'https://picsum.photos/500/500',
              url: 'https://picsum.photos/428/190',
            },
            {
              title: 'Green velvet sofa',
              image: 'https://picsum.photos/500/500',
              url: 'https://picsum.photos/428/190',
            },
          ]
        }, 600)
      }

      const getGridList = () => {
        //
        gridList.value = [
          {
            name: 'Strategy Planning',
            icon: IconStrategyPlanning,
            link: '',
          },
          {
            name: 'Content Creation',
            icon: IconContentCreation,
            link: '',
          },
          {
            name: 'Social Analytics',
            icon: IconSocialAnalytics,
            link: '',
          },
          {
            name: 'Ads Management',
            icon: IconAdsManagement,
            link: '',
          },
        ]
      }

      const getRecentProiects = () => {
        recentList.value = [
          {
            title: 'Green velvet sofa',
            image: 'https://picsum.photos/532/204',
            url: 'https://picsum.photos/428/190',
          },
          {
            title: 'NYFW 2023 Ads',
            image: 'https://picsum.photos/532/204',
            url: 'https://picsum.photos/428/190',
          },
          {
            title: 'Pbawn shop brandir',
            image: 'https://picsum.photos/532/204',
            url: 'https://picsum.photos/428/190',
          },
          {
            title: 'Green velvet sofa',
            image: 'https://picsum.photos/532/204',
            url: 'https://picsum.photos/428/190',
          },
        ]
      }
      onMounted(() => {
        getGridList()
        getRecentProiects()
        onTabChange(CommunityTypes.All)
      })
      return {
        handleGridItem,
        onTabChange,

        activeCommunity,
        communityTypes: CommunityTypes,
        gridList,
        recentList,
        communityList,
      }
    },
  })
</script>
<style lang="less" scoped>
  :deep(.community-wrap) {
    .ant-tabs-tab {
      line-height: 32px;
      height: 32px;
      background: transparent;
      overflow: hidden;
      border-radius: 8px;
      color: #525252;
      &:hover {
        color: #a72cf9;
      }
    }
    .ant-tabs-tab.ant-tabs-tab-active {
      // padding: 0 24px;
      background: linear-gradient(to right, #555cf2, #a72cf9);
      border-radius: 8px;
      color: white;
      .ant-tabs-tab-btn {
        color: white;
      }
    }
  }
</style>
