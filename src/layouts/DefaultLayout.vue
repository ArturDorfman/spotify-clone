<template>
  <div class="flex flex-col h-full overflow-hidden">
    <header class="">
      <PortalTarget :name="$portalNames.header" />
    </header>

    <div class="flex-grow overflow-auto p-4">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { defaultLayoutRoutes } from '@/router/routes'
// const { $routeNames } = useGlobalProperties()
// const { t } = useI18n()

// todo: you can import your default layout routes and map them with your navigation needs
// const navigation = [
//   ...defaultLayoutRoutes.children?.map(route => ({
//     name: route.name as string,
//     label: route.meta?.label || ''
//   })) || []
// ]
</script>
