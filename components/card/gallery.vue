<template>
  <div class="card bg-gray-100 h-80">
    <div>
      <div>
        <h2 class="inline-flex">Projects</h2>
        <lib-badge class="ml-2">coming soon, chill</lib-badge>
      </div>
      <p>Currently I’m working as a Community Manager and Freelancer</p>
    </div>
    <div class="relative w-full h-52 mt-16">
      <img src="@/assets/img/gallery/people.jpg" />
      <img src="@/assets/img/gallery/hill.jpg" />
    </div>
  </div>
</template>

<style scoped>
.card:hover img:first-child{
    @apply -rotate-8;
}

.card:hover img:last-child{
    @apply rotate-8;
}

img {
  @apply w-5/6 absolute shadow-sm transition-transform rounded-md select-none;
}

img:first-child {
  @apply left-2 -rotate-6;
}

img:last-child {
  @apply right-2 rotate-6;
}
</style>