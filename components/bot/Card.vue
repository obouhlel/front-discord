<template>
  <div class="relative w-full max-w-[600px] h-[300px] sm:h-[250px] mb-[120px] sm:mb-[100px]">
    <img
      src="~/assets/img/neko-banner.jpg"
      alt="Neko Banner"
      class="w-full h-full object-cover object-center rounded border-4 border-white shadow-lg"
    >
    <img
      src="~/assets/img/neko.jpg"
      alt="Neko"
      class="absolute left-3 sm:left-4 -bottom-[30%] rounded-full border-4 border-white shadow-lg" width="150" height="150"
    >
    <div
      class="flex flex-row justify-between items-center ml-[170px] sm:ml-[180px] my-3 px-3 py-2 gap-2 rounded-2xl bg-gray-400/50 dark:bg-black/50">
      <h1 class="text-2xl sm:text-4xl font-bold">
        Neko
      </h1>
      <div class="flex gap-2 pt-[8px] sm:pt-[10px]">
        <a href="https://discord.com/oauth2/authorize?client_id=1370139865555144704" target="_blank" rel="noopener">
          <UIcon name="i-ic:baseline-discord" class="icon-hover discord text-2xl sm:text-3xl cursor-pointer" />
        </a>
        <a href="https://github.com/obouhlel/discord-bot" target="_blank" rel="noopener">
          <UIcon name="i-mdi:github" class="icon-hover github text-2xl sm:text-3xl cursor-pointer" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.discord:hover {
  color: #7289da;
}

.github:hover {
  color: #555;
}

.icon-hover:hover {
  transition: color 0.2s;
}
</style>
