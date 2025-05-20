<script setup lang="ts">
import type { Commands } from '~/types/command.type';

const { data, pending, error } = useFetch<{commands: Commands}>('https://api.neko.oustopie.xyz/commands');
</script>
<template>
  <div class="flex flex-col items-center justify-start mt-5 px-2">
    <BotCard />
    <div v-if="pending">Loading...</div>
    <div v-else-if="error" class="w-full max-w-[800px] px-2 py-3 text-red-500 text-center font-bold rounded bg-gray-400/50 dark:bg-black/50">
      Error: {{ error.message }}</div>
    <div v-else-if="data" class="w-full max-w-[800px] space-y-2">
      <div>
        <h1 class="text-3xl font-bold">Message interaction :</h1>
      </div>
      <div v-for="command in data.commands.messageCommands" :key="command.name">
        <BotCommand :command="command" />
      </div>
      <div>
        <h1 class="text-3xl font-bold">Slash commands :</h1>
      </div>
      <div v-for="command in data.commands.slashCommands" :key="command.name">
        <BotCommand :command="command" />
      </div>
    </div>
  </div>
</template>
