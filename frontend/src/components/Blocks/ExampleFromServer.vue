<script setup lang="ts">
import axios from 'axios';
import { ref, type Ref } from 'vue';
import {type User} from '@/interfaces/index';



const data : Ref<User[]> = ref(await axios.get('/auth/all').then((response) => response.data).catch((error) => console.log(error)));

</script>

<template>
    <div>
        <h1>Example From Server</h1>
        <p>{{ data[0].email }}</p>
        <img src="http://localhost:3000/static/client/pashalko.jpg"
    </div>
</template>

<style scoped lang="scss">
img {
    width: 200px;
}
</style>