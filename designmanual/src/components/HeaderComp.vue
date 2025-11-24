<script setup>
import { useRouter, useRoute } from 'vue-router'
import { getNextView, getPreviousView } from '../helpers/navigation.js'

defineOptions({ name: 'RouterView1' })

const router = useRouter()
const route = useRoute()

function handleForward() {
  const nextViewName = getNextView(route.name)

  if (nextViewName) {
    router.push({ name: nextViewName })
  }
}

function handleBack() {
  const previousViewName = getPreviousView(route.name)

  if (previousViewName) {
    router.push({ name: previousViewName })
  }
}
</script>

<template>
  <header>
    <h1>Titel</h1>
    <div class="header-controls">
      <button class="control-btn--back" @click="handleBack">Back</button>
      <button class="control-btn--forward" @click="handleForward">Forward</button>
    </div>
  </header>
</template>

<style lang="scss">
@import '../assets/main.scss';

header {
  padding: 2rem;
  background-color: red;
}

.header-controls {
  display: flex;
}





</style>