<script setup lang="ts">
// import TheWelcome from '@/components/TheWelcome.vue'
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->

    <button class="button" @click="$router.push('/bar#anchor')" style="display: block">Go to /bar#anchor</button>

    <!-- <button class="button" @click="$router.push('/bar#anchor2')" style="display: block">Go to /bar#anchor2</button> -->

    <router-link to="/bar#anchor2">/bar#anchor2</router-link>

    <button class="button" @click="$router.push('/bar#1number')" style="display: block">Go to /bar#1number</button>

    <h2>Home View Page</h2>
  </main>
</template>
