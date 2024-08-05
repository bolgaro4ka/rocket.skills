<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SidePanel from './components/SidePanel.vue'
import UrlViewer from './components/Base/UrlViewer.vue'


function toggleTheme () {
    const root = document.querySelector(":root") as HTMLElement;

    //Получаем свойства стиля в root
    const style = getComputedStyle(root);

    //Получаем значение свойства стиля из root
    const BGcurrentColor = style.getPropertyValue("--background-clr-current");
    const BGalternateColor = style.getPropertyValue("--background-clr-alternate");

    const SFcurrentColor = style.getPropertyValue("--surface-clr-current");
    const SFalternateColor = style.getPropertyValue("--surface-clr-alternate");

    root.style.setProperty("--background-clr-current", BGalternateColor);
    root.style.setProperty("--background-clr-alternate", BGcurrentColor);

    root.style.setProperty("--surface-clr-current", SFalternateColor);
    root.style.setProperty("--surface-clr-alternate", SFcurrentColor);
}


</script>

<template>
  <main class="mainApp">
    <SidePanel @toggleTheme="toggleTheme"/>
    <div class="routerView">
      <UrlViewer/>
      <RouterView/>
    </div>
  </main>
</template>

<style scoped>
.routerView {
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
}
</style>
