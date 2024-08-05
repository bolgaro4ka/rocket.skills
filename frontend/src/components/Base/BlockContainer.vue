<script setup lang="ts">

const props = defineProps({
    title: String
})
</script>

<template>
    <div class="block__container" v-bind="$attrs">
        <h2 v-if="props?.title">{{ props?.title }}</h2>
        <div class="block__content">
            <slot/>
        </div>
    </div>
</template>

<style scoped>
    .block__container {
        background-color: var(--primary-container-clr);
        color: var(--primary-container-text-clr);
        padding: 10px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        
    }

    .block__container > h2 {
        text-align: center;
        margin-bottom: 10px;
        
    }

    .block__content {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
    }
</style>