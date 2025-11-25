<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useRouter, useRoute } from 'vue-router'
import { getNextView, getPreviousView } from '../helpers/navigation.js'
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

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

const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <header>
    <h1>{{ title }}</h1>
    <div class="header-controls">
      <button class="control-btn--back" @click="handleBack">
        <FontAwesomeIcon class="icon-left-arrow" :icon="faAngleLeft"></FontAwesomeIcon>
      </button>
      <button class="control-btn--forward" @click="handleForward">
        <FontAwesomeIcon class="icon-right-arrow" :icon="faAngleRight"></FontAwesomeIcon>
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '../assets/main.scss';

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: $color-pharaos-gold;
  background-image: url('../assets/image/faraos-logo-2.webp');
  background-repeat: no-repeat;
  background-position: 0 0rem;
}

header h1 {
  font-family: $font-boogaloo;
  text-transform: uppercase;
  font-size: 2.5rem;
  padding-left: 4rem;
  color: $color-newspaper-white;
  -webkit-text-stroke: 0.5px $color-anubis-black;
}

.header-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.control-btn--back,
.control-btn--forward {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $color-anubis-black;
  border: none;
  width: 3.5rem;
  padding: 1rem;
  color: $color-pharaos-gold;
  text-align: center;
}

.icon-left-arrow,
.icon-right-arrow {
  font-size: 1.5rem;
}

@media (max-width: 800px) {
  header h1 {
    padding-left: 0rem;
  }
}
</style>