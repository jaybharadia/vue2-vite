<template>
  <div>
    BOOKS PAGE

    <slot name="title" :book="book"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      book: {
        title: "Attitude is everything.",
        isbn: "2203939303",
      },
    };
  },
};
</script>

<style></style>
