import type { AppRouteRecordRaw } from 'vue-router'

export const LAYOUT = () => import('@/layouts/default/index.vue')

export const GeneratorsRoute: AppRouteRecordRaw = {
  path: '/generators',
  name: 'Generators',
  component: () => import('@/views/generators/index.vue'),
  meta: {
    title: 'Generators',
  },
}

export const DiscoverRoute: AppRouteRecordRaw = {
  path: '/discover',
  name: 'Discover',
  component: () => import('@/views/discover/index.vue'),
  meta: {
    title: 'DiscoverRoute',
  },
}

export const CreateNewProject: AppRouteRecordRaw = {
  path: '/create-newProject',
  name: 'CreateNewProject',
  component: () => import('@/views/createNewProject/index.vue'),
  meta: {
    title: 'Create New Project',
  },
}

export const Home: AppRouteRecordRaw = {
  path: '/home',
  name: 'Home',
  component: () => import('@/views/home/index.vue'),
  meta: {
    icon: 'HomeOutlined',
    title: 'Home',
  },
}
export const YourProjects: AppRouteRecordRaw = {
  path: '/your-projects',
  name: 'YourProjects',
  component: () => import('@/views/your-projects/index.vue'),
  meta: {
    title: 'Your Projects',
    icon: 'PictureOutlined',
  },
}
export const Planning: AppRouteRecordRaw = {
  path: '/planning',
  name: 'Planning',
  component: () => import('@/views/planning/index.vue'),
  meta: {
    title: 'Planning',
    icon: 'CalendarOutlined',
  },
}

export const GenerateTextToImage: AppRouteRecordRaw = {
  path: 'text-to-image',
  name: 'TextToImage',
  component: () => import('@/views/generate/text-to-image/index.vue'),
  meta: {
    title: 'Text To Image',
  },
}

export const Generate: AppRouteRecordRaw = {
  path: '/generate',
  name: 'Generate',
  component: () => import('@/views/generate/index.vue'),
  meta: {
    title: 'Generate',
    icon: 'BorderOutlined',
  },
  children: [GenerateTextToImage],
}

export const SliderRoutes = [Home, YourProjects, Planning, Generate]

export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  component: LAYOUT,
  meta: {
    title: 'Layout',
  },
  redirect: '/home',
  children: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home/index.vue'),
      meta: {
        title: 'AdsGency AI',
      },
    },
    GeneratorsRoute,
    DiscoverRoute,
    CreateNewProject,
    ...SliderRoutes,
  ],
}

export const routes = [RootRoute]
