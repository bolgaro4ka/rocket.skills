<template>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li v-for="(crumb, index) in computedCrumbs" :key="index" class="breadcrumb-item">
          <router-link v-if="index !== computedCrumbs.length - 1" :to="crumb.path">{{ crumb.name }}</router-link>
          <span v-else>{{ crumb.name }}</span>
        </li>
      </ol>
    </nav>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  
    const route = useRoute();
  
    const computedCrumbs = computed(() => {
        const pathArray = route.path.split('/').filter(path => path);
        const crumbs = pathArray.map((path, index) => {
          return {
            name: path.charAt(0).toUpperCase() + path.slice(1),
            path: '/' + pathArray.slice(0, index + 1).join('/')
          };
        });
        return [{ name: 'Главная', path: '/' }, ...crumbs];
      });
      

  </script>
  
  <style scoped>
  .breadcrumb {
    display: flex;
    flex-wrap: wrap;
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
    list-style: none;
    background-color: #e9ecef;
    border-radius: 0.25rem;
  }
  .breadcrumb-item + .breadcrumb-item::before {
    content: "/";
    padding: 0 0.5rem;
    color: #6c757d;
  }
  .breadcrumb-item a {
    color: #007bff;
    text-decoration: none;
  }
  .breadcrumb-item a:hover {
    text-decoration: underline;
  }
  </style>