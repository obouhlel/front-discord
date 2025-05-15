<template>
  <div class="w-screen min-h-screen flex flex-col">
    <AppHeader />
    <div class="flex-1">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>