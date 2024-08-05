<script setup lang="ts">
import { watch, ref, type Ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import { replaceAll } from '@/common/index';


const viewer : Ref<HTMLElement | null> = ref(null);

const route = useRoute();
const router = useRouter();

const time = ref(new Date().toLocaleTimeString());

const url = ref(replaceAll(route.path, '/', '<span class="urlViewer__span" style="color: var(--primary-clr); font-weight: bold; font-size: 20px; margin: 0 5px;">/</span>'));

watch(route, () => {
    console.log(route.path);
    url.value = replaceAll(route.path, '/', '<span class="urlViewer__span" style="color: var(--primary-clr); font-weight: bold; font-size: 20px; margin: 0 5px;">/</span>');
    router.push({ path: route.path });
})

const ITime = setInterval(() => {
    time.value=new Date().toLocaleTimeString();
}, 1000);


onBeforeUnmount(() => {
    time.value=new Date().toLocaleTimeString() 
    clearInterval(ITime);
})


</script>

<template>
    <div class="urlViewer">
        <h2 ref="viewer" v-html="url"></h2>
        <RouterLink to="/cabinet">
            <div class="urlViewer__info">
                <img src="http://http.cat/200" alt="">
                <div class="urlViewer__info-text">
                    <p>Пользователь: x</p>
                    <p>Время: {{ time }}</p>
                </div>
            </div>
        </RouterLink>
    </div>
</template>

<style scoped>
.urlViewer {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
h2, p {
    color: var(--surface-clr-alternate);
}

.urlViewer__span {
    font-size: 5px;
}

.urlViewer__info-text {
    align-items: center;
    display: flex;
    flex-direction: column;
}

.urlViewer__info {
    display: flex;
    gap: 5px;
}

img {
    width: 50px;
}
</style>