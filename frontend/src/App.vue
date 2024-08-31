<script setup lang="ts">
import { Layout  } from 'ant-design-vue';
import Sider from '@/components/Sider.vue';
import { ref } from 'vue';
import { watch } from 'vue';

import { useRoute } from 'vue-router';
import BreadCrumb from '@/components/BreadCrumb.vue';

const route = useRoute();
const showSider = ref(true);

const paths = [/^\/auth/]

watch(route, (newRoute) => {
  showSider.value = !['/register', '/login'].includes(newRoute.path);
  if (showSider.value) {
    for (let path of paths) {
      if (newRoute.path.match(path)) {
        showSider.value = false
        break
      }
    }
  }
}, { immediate: true });

</script>

<template>
    <Layout style="display: flex;">
      <Sider theme="light" v-if="showSider"></Sider>
      <div class="wrapper-global">
        <BreadCrumb/>
        <div class="content">
          <RouterView/>
        </div>
      </div>
    </Layout>
</template>

<style scoped>
  .wrapper-global {
    height: 100dvh;
    width: 100%;
  }


</style>
