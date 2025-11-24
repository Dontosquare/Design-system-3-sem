<script setup>
import { useRoute } from 'vue-router'
import { getPageInfo } from '../helpers/navigation.js'
import { computed } from 'vue'

const route = useRoute()

// This will automatically update when the route changes
const pageInfo = computed(() => {
    return getPageInfo(route.name)
})
</script>

<template>
    <footer>
        <p>Dato for sidst opdatering: d. 28 / 11 - 2025</p>
        <p>{{ pageInfo.currentPage }} ud af {{ pageInfo.totalPages }}</p>
    </footer>
</template>

<style lang="scss" scoped>
@import '../assets/main.scss';

footer {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    background-color: $color-pharaos-gold;
}

footer p {
    color: $color-anubis-black;
    margin: 0;
    font-size: 1.2rem;
}
</style>