<script setup lang="ts">
import type { Command } from '~/types/command.type';
import capitalize from '~/utils/capitalize'

const props = defineProps<{command: Command}>()
const command = props.command
</script>
<template>
  <div class="w-full h-auto px-2 py-3 rounded bg-gray-400/50 dark:bg-black/50">
    <h1 class="text-xl font-bold mb-2">{{ capitalize(command.name) }}</h1>
    <p>{{ command.description }}</p>
  </div>
</template>