<script setup lang="ts">
import Block from './Block.vue';
import BlockContainer from './BlockContainer.vue';



    function changeColor(color: string) {
        const root = document.querySelector(":root") as HTMLElement;
        const style = getComputedStyle(root);

        const variables : string[] = [
            '--primary-clr',
            '--primary-text-clr',
            '--on-primary-clr',
            '--on-primary-text-clr',
            '--primary-container-clr',
            '--on-primary-container-clr',
            '--primary-container-text-clr',
            '--on-primary-container-text-clr',

            '--secondary-clr',
            '--secondary-text-clr',
            '--on-secondary-clr',
            '--on-secondary-text-clr',
            '--secondary-container-clr',
            '--on-secondary-container-clr',
            '--secondary-container-text-clr',
            '--on-secondary-container-text-clr',
        ]

        for (let i of variables) {
            root.style.setProperty(i, style.getPropertyValue(i.replace('--', `--${color}-`)));
        }
    }

</script>

<template>
    <Block title="Выбери свой вайб">
        <div class="color-pallete">

            <div class="color-pallete__container">
                <div class="color-pallete__btn" id="red" @click="changeColor('red')"></div>
                <div class="color-pallete__btn" id="green" @click="changeColor('green')"></div>
                <div class="color-pallete__btn" id="blue" @click="changeColor('blue')"></div>
                <div class="color-pallete__btn" id="red"></div>
                <div class="color-pallete__btn" id="red"></div>
            </div>
        </div>
    </Block>

</template>

<style scoped >

    .color-pallete__btn {
        width: 20px;
        height: 20px;
        border: 1px solid black;
        border-radius: 432423423px;
    }

    .color-pallete__container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 15px;
        gap: 10px;
    }
    #red {
        background-color: var(--red-primary-clr);
    }

    #green {
        background-color: var(--green-primary-clr);
    }

    #blue {
        background-color: var(--blue-primary-clr);
    }
</style>