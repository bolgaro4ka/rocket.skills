<script setup lang="ts">
import Popup from '../components/Base/Popup.vue'
import ColorPalete from '../components/Base/ColorPallete.vue'
import BlockContainer from '@/components/Base/BlockContainer.vue';
import ExampleFromServer from '../components/Blocks/ExampleFromServer.vue';

import type { Ref } from 'vue'


import { ref } from 'vue'

const popupOpen : Ref<boolean> = ref(false);
</script>

<template>
  <main>
    <BlockContainer title="Цвета">
      <ColorPalete/>
    </BlockContainer>
    <BlockContainer title="А тута Popup">
      <button @click="popupOpen = !popupOpen" class="warning">Открыть</button>
      <button @click="popupOpen = !popupOpen" class="error">Открыть</button>
      <button @click="popupOpen = !popupOpen" class="success">Открыть</button>
      <Popup v-if="popupOpen" @closePopup="popupOpen = !popupOpen" title="Попап" :btnCancel="true" @onOK="console.log('ok')" @onCancel="console.log('cancel')"><h2>Тута текст</h2><p>Тута текст</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere commodi, ducimus praesentium illo laborum consequuntur tempore magnam? Tenetur, quos quam! Consequatur eius soluta, aperiam odit error molestiae? Voluptatibus, earum aspernatur?</p></Popup>
    </BlockContainer>
    <BlockContainer>
      <Suspense>
        <ExampleFromServer/>
        <template #fallback>Загрузка...</template>
      </Suspense>
    </BlockContainer>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: flex-start; 
}
</style>
