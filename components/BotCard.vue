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
    <div class="ml-[250px] mt-4 mb-4 flex justify-between">
      <h1 class="text-4xl font-bold">Neko</h1>
      <div class="pt-[10px] space-x-1">
        <UIcon name="i-ic:baseline-discord" class="text-3xl font-bold" />
        <UIcon name="i-mdi:github" class="text-3xl font-bold" />
        <UIcon name="i-dashicons:admin-links" class="text-3xl font-bold" />
      </div>
    </div>
  </div>
</template>
