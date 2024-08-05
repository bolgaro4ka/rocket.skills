<script setup lang="ts">
import BlockContainer from '@/components/Base/BlockContainer.vue';
import SimpleForm from '../components/Blocks/SimpleForm.vue';
import Block from '../components/Base/Block.vue';
</script>

<template>
  <main class="about">
    <BlockContainer title="Пример формы">
      <Block>
        <SimpleForm />
      </Block>
    </BlockContainer>

  </main>
</template>

<style scoped lang="scss">

main {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
