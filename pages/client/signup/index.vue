<template>
  <div>
    <OSignup user-type="client" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'auth-not' })
</script>
