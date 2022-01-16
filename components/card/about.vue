<template>
  <div class="card bg-gray-100 h-60 justify-between">
    <img src="@/assets/img/about/memoji.png" class="w-7" />
    <div>
      <h2>About Moses Max</h2>
      <p>Learn more about me</p>
    </div>
  </div>
</template>

<style scoped>

.card:hover img {
    @apply rotate-3 scale-110;
}

img {
    @apply transition-all select-none;
}
</style>