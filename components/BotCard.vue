<template>
  <div class="relative w-[600px] h-[300px]">
    <img
      src="~/assets/img/neko-banner.jpg"
      alt="Neko Banner"
      class="w-full h-full object-cover object-center rounded border-4 border-white shadow-lg"
    >
    <img
      src="~/assets/img/neko.jpg"
      alt="Neko"
      class="absolute left-5 -bottom-[35%] rounded-full border-4 border-white shadow-lg"
      width="220"
      height="220"
    >
    <div class="ml-[250px] mt-4 mb-4 flex justify-between rounded-2xl px-2 py-3">
      <h1 class="text-4xl font-bold">Neko</h1>
      <div class="pt-[10px] space-x-1">
        <a href="https://discord.gg/etDaKurrXM" target="_blank" rel="noopener">
          <UIcon name="i-ic:baseline-discord" class="icon-hover discord text-3xl font-bold cursor-pointer" />
        </a>
        <a href="https://github.com/obouhlel/discord-bot" target="_blank" rel="noopener">
          <UIcon name="i-mdi:github" class="icon-hover github text-3xl font-bold cursor-pointer" />
        </a>
        <a href="https://discord.com/oauth2/authorize?client_id=1370139865555144704" target="_blank" rel="noopener">
          <UIcon name="i-dashicons:admin-links" class="icon-hover link text-3xl font-bold cursor-pointer" />
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
  color: #000;
}
.link:hover {
  color: #7b79c5;
}
.icon-hover:hover {
  transition: color 0.2s;
}
</style>