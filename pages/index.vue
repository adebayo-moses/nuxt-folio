<template>
  <main>
    <h1>out of the ordinary software developer &amp; designer</h1>
    <p class="mt-7">
      I help people and brands reach their goals by designing
&amp; building user-centric digital products and interactive experiences
    </p>
    <div class="flex items-center mt-10">
      <lib-button>Follow Me <lib-link :href="'https://twitter.com/mosessmax'"></lib-link></lib-button>
    </div>
    <div class="flex flex-wrap gap-6 mt-20">
      <div class="flex flex-col flex-1 gap-6">
        <card-about></card-about>
        <card-gallery></card-gallery>
      </div>
      <div class="flex flex-col flex-1 gap-6">
        <card-command></card-command>
      </div>
    </div>

    <!--
    <template v-for="article of articles">
      <h1>
        <nuxt-link :to="{ name: 'slug', params: { slug: article.slug } }">
          {{ article.title }}
        </nuxt-link>
      </h1>
      <nuxt-content :document="article" />
      <div class="flex items-center mt-9">
        <lib-link-block
          :title="'Read on a seperate Page'"
          :href="'/'"
          class="mr-2"
        ></lib-link-block>
        <span class="mr-2 text-gray-300 font-normal text-base">-</span>
        <span class="text-gray-700 font-normal text-base"
          >Posted on {{ formatDate(article.createdAt) }}</span
        >
      </div>
    </template>
    -->

  </main>
</template>

<script>
export default {
  // gets markdown files from /content
  async asyncData({ $content, params }) {
    const articles = await $content(params.slug)
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      articles,
    };
  },

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>