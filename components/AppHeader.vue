<script setup>
const colorMode = useColorMode()
const modes = [
  { value: 'system', icon: 'uil:monitor', label: 'System' },
  { value: 'light', icon: 'uil:sun', label: 'Light' },
  { value: 'dark', icon: 'uil:moon', label: 'Dark' }
]
</script>
<template>
  <header class="w-full h-12 bg-gray-400/50 dark:bg-black/50 flex items-center justify-between px-4">
    <h1 class="text-2xl font-bold">Neko</h1>
    <div class="flex gap-2">
      <button
        v-for="mode in modes"
        :key="mode.value"
        class="text-2xl font-bold transition-colors"
        :class="colorMode.preference === mode.value ? 'text-pink-500' : 'text-black dark:text-white'"
        :aria-label="mode.label"
        @click="colorMode.preference = mode.value"
      >
        <Icon :name="mode.icon" />
      </button>
    </div>
  </header>
</template>