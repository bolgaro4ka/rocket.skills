<script setup lang="ts">

const props = defineProps({
    title: String
})
</script>

<template>
    <div class="block" v-bind="$attrs">
        <div class="block__content">
            <h2>{{ props?.title }}</h2>
            <div class="block__content-slot">
                <slot/>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
    .block {
        background-color: var(--primary-clr);
        color: var(--primary-text-clr);
        padding: 10px;
        border-radius: 10px;
    }

    .block__content > h2 {
        text-align: center;
        color: var(--primary-text-clr);
    }

</style>