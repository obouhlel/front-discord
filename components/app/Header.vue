<script setup lang="ts">
import { ref, onMounted } from 'vue';
const colorMode = useColorMode();
const modes = [
  { value: 'system', icon: 'uil:monitor', label: 'System' },
  { value: 'light', icon: 'uil:sun', label: 'Light' },
  { value: 'dark', icon: 'uil:moon', label: 'Dark' }
];
const mounted = ref<boolean>(false);
const { user, login, logout, fetchUser } = useAuth();

fetchUser().then(() => console.log("Fetch end, user = ", user.value));

const handleLogin = () => {
  login()
}

const handleLogout = async () => {
  await logout()
}

onMounted(() => {
  mounted.value = true;
})

watch(user, (val) => {
  console.log(val)
})
</script>

<template>
  <header class="w-full h-16 bg-gray-400/50 dark:bg-black/50 flex items-center justify-between px-4">
    <h1 class="text-2xl font-bold">Neko</h1>
    <h1 class="text-2xl font-bold">{{ user?.name }}</h1>
    <div class="flex gap-2 mr-5">
      <UiButton v-if="!user" @click="handleLogin">Login</UiButton>
      <UiButton v-else @click="handleLogout">Logout</UiButton>
      <button 
        v-for="mode in modes" :key="mode.value" class="text-2xl font-bold transition-colors"
        :class="mounted && colorMode.preference === mode.value ? 'text-pink-500' : 'text-black dark:text-white'"
        :aria-label="mode.label" @click="colorMode.preference = mode.value">
        <Icon :name="mode.icon" />
      </button>
    </div>
  </header>
</template>