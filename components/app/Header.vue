<script setup lang="ts">
import { ref, onMounted } from 'vue';
const showModal = ref<boolean>(false);
const colorMode = useColorMode();
const modes = [
  { value: 'system', icon: 'uil:monitor', label: 'System' },
  { value: 'light', icon: 'uil:sun', label: 'Light' },
  { value: 'dark', icon: 'uil:moon', label: 'Dark' }
];
const mounted = ref<boolean>(false);
const { user, login, logout, fetchUser } = useAuth();

await fetchUser();

const handleLogin = () => {
  login();
}

const handleLogout = async () => {
  await logout();
}

onMounted(() => {
  mounted.value = true;
})
</script>

<template>
  <header class="w-full h-16 bg-gray-400/50 dark:bg-black/50 flex items-center justify-between px-4">
    <h1 class="text-2xl font-bold">Neko</h1>
    <div>
      <Icon
        name="i-material-symbols:settings-rounded"
        class="text-pink-500 hover:text-pink-700 font-bold text-2xl cursor-pointer transition-transform duration-300 hover:rotate-90"
        @click="showModal = !showModal" />
    </div>
    <div
      v-if="showModal"
      class="z-50 absolute right-0 top-16 flex items-center justify-center bg-gray-400/50 dark:bg-black/50 min-w-full sm:min-w-[320px] py-4">
      <button
        class="absolute top-2 right-2 text-2xl font-bold text-gray-500 hover:text-pink-500 cursor-pointer"
        @click="showModal = false">&times;</button>
      <div class="flex flex-col items-center gap-4">
        <div class="flex gap-2 mt-4">
          <button 
            v-for="mode in modes" :key="mode.value" class="cursor-pointer text-2xl font-bold transition-colors"
            :class="mounted && colorMode.preference === mode.value ? 'text-pink-500' : 'text-black dark:text-white'"
            :aria-label="mode.label" @click="colorMode.preference = mode.value">
            <Icon :name="mode.icon" />
          </button>
        </div>
        <div v-if="user" class="flex flex-col col-1 justify-center items-center space-y-4">
          <img :src="`https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatarId}.png`" class="rounded-full" width="100" height="100">
          <h1 class="text-2xl font-bold">{{ user.username }}</h1>
          <UiButton @click="handleLogout">Logout</UiButton>
        </div>
        <UiButton v-else @click="handleLogin">Login</UiButton>
      </div>
    </div>
  </header>
</template>