<script setup lang="ts">

</script>

<template>
    <div class="notFound">
        <div class="notFound__content">
            <h2 class="error">404 Not Found</h2>
            <p>Страница не найдена</p>
            
            <RouterLink to="/">На главную</RouterLink>
        </div>
        <img src="http://http.cat/404" alt="404">
    </div>
</template>

<style scoped lang="scss">
.notFound {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 20px;
    justify-content: center;

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
    }
}

.notFound p {
    color: var(--primary-text-clr);
}

.notFound h2 {
    padding: 10px;
    border-radius: 10px;
    
}

.notFound img {
    height: 60vh;
}
</style>