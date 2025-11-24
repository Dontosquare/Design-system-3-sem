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
  <div>
    <h1>This is View 1</h1>
    <button @click="handleBack">Back</button>
    <button @click="handleForward">Forward</button>
  </div>
</template>

<style lang="scss"></style>