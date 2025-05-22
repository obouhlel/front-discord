<script setup>
import { useAttrs, computed } from 'vue'

const attrs = useAttrs()
const attrsWithoutClass = computed(() => {
  const { class: _class, ...rest } = attrs
  return rest
})
</script>

<template>
  <button
    :class="[
      'text-xl text-pink-50 hover:text-pink-950 font-bold transition-colors px-2 py-1 rounded bg-pink-500 hover:bg-pink-200 cursor-pointer',
      $attrs.class
    ]"
    type="button"
    v-bind="attrsWithoutClass"
  >
    <slot />
  </button>
</template>