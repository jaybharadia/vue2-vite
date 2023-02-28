<template>
  <div>
    User Details {{ $route.params.id }}
    <button
      @click="$router.replace({ name: 'user-details', params: { id: 360 } })"
    >
      Update USer
    </button>
  </div>
</template>

<script>
export default {
  created() {
    console.log("inside created lifeclycle", this.$route.params);
  },
  mounted() {
    console.log("inside mounted lifecycle", this.$route.params);
  },
};
</script>

<style></style>
