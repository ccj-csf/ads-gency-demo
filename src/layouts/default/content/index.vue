<template>
  <main class="h-full">
    <RouterView>
      <template #default="{ Component, route }">
        <component :is="Component" :key="route.fullPath" />
      </template>
    </RouterView>
  </main>
</template>