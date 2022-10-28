<template>
  <div>
    <OSignup user-type="manager" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'auth-not' })
</script>
