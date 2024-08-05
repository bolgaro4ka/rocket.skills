<script setup lang="ts">

    import { onMounted, type Ref } from 'vue';
    import { ref } from 'vue';
    import { RouterLink, RouterView } from 'vue-router'

    const emit = defineEmits(['changeTheme']);
    const isMaxSize : Ref<boolean> = ref(false);
    const navigationEl : Ref<HTMLElement | null> = ref(null);

    /**
    * Handles the click event on the burger menu icon. Toggles the navigation between maximized and compact states.
    *
    * @param {MouseEvent} e - The click event triggered by the user.
    * @return {void} This function does not return anything.
    */
    function handleClickBurger (e: MouseEvent) {
        const navElClassList = navigationEl.value?.classList as DOMTokenList;
        if (!isMaxSize.value && navigationEl.value) {
            navElClassList.add('nav-maximized');
            navElClassList.remove('nav-compact');
            for (let i of document.querySelectorAll('.navigation__btn')) {
                i.classList.add('navigation__btn-maximized');
            }
            isMaxSize.value = !isMaxSize.value
        } else if (isMaxSize.value && navigationEl.value) {
            navElClassList.add('nav-compact');
            navElClassList.remove('nav-maximized');
            for (let i of document.querySelectorAll('.navigation__btn')) {
                i.classList.remove('navigation__btn-maximized');
            }
            isMaxSize.value = !isMaxSize.value
        }
    }

    /**
     * Updates the current navigation button by removing the 'navigation__btn-current' class from all buttons and adding it to the clicked button.
     *
     * @param {Event} e - The click event triggered by the user.
     * @return {void} This function does not return anything.
     */
    function changeAddress (e: Event) {
        for (let i of document.querySelectorAll('.navigation__btn')) {
            i.classList.remove('navigation__btn-current');
        }
        (e.currentTarget as HTMLElement).classList.add('navigation__btn-current');
        
    }

    function handleLogout() {
        console.log('logout');
    }
</script>

<template>
    <div class="navigation nav-compact" ref="navigationEl">
        <div class="navigation__container">
            <div class="navigation__burger-btn" @click="handleClickBurger">
                <svg v-if="!isMaxSize" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
            </div>

            <div class="navigation__btns">
                <div class="navigation__btn" @click="changeAddress">
                    <RouterLink to="/" class="navigation__a">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
                        <p>Главная</p>
                    </RouterLink>
                </div>
                <div class="navigation__btn" @click="changeAddress">
                    <RouterLink to="/about" class="navigation__a">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q56 0 105.5-17.5T676-227L543-360h113l76 76q32-41 50-90.5T800-480q0-133-93.5-226.5T480-800q-56 0-105.5 18T284-732l133 132H304l-76-76q-32 41-50 90.5T160-480q0 133 93.5 226.5T480-160ZM200-400l60-80-60-80h60l30 40 30-40h60l-60 80 60 80h-60l-30-40-30 40h-60Zm190 0 60-80-60-80h60l30 40 30-40h60l-60 80 60 80h-60l-30-40-30 40h-60Zm190 0 60-80-60-80h60l30 40 30-40h60l-60 80 60 80h-60l-30-40-30 40h-60Z"/></svg>
                        <p>Другое</p>
                    </RouterLink>
                </div>
                <div class="navigation__btn" @click="changeAddress">
                    <RouterLink to="/about" class="navigation__a">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-7-.5-14.5T799-507q-5 29-27 48t-52 19h-80q-33 0-56.5-23.5T560-520v-40H400v-80q0-33 23.5-56.5T480-720h40q0-23 12.5-40.5T563-789q-20-5-40.5-8t-42.5-3q-134 0-227 93t-93 227h200q66 0 113 47t47 113v40H400v110q20 5 39.5 7.5T480-160Z"/></svg>
                        <p>Третье</p>
                    </RouterLink>
                </div>
            </div>
        </div>

        <div class="navigation__service-btns">
            <div class="navigation__btn navigation_toggleTheme" @click="$emit('toggleTheme')"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm40-83q119-15 199.5-104.5T800-480q0-123-80.5-212.5T520-797v634Z"/></svg><p>Сменить тему</p></div>
            <div class="navigation__btn navigation_logout" @click="handleLogout()"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg><p>Выйти из аккаунта</p></div>
        </div>
        
    </div>
</template>

<style>
.navigation {
    background-color:var(--surface-clr-current);
    color: var(--teriary-text-clr);
    
    border-radius: 0 10px 10px 0;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 1s;
    
}

.navigation__service-btns {
    margin-bottom: 10px;
    gap: 5px;
}

.navigation__container, .navigation__service-btns {
    padding: 30px 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.navigation__a {
    width: 100%;
    height: 100%;
}

.nav-compact {
    width: 60px;
    height: 100vh;
}

.nav-maximized {
    width: 200px;
    height: 100vh;
}

a {
    text-decoration: none;
    color: var(--primary-clr);
}
.navigation__btn {
    width: 100%;
    padding: 2px;
    font-size: 10px;
    background-color: var(--primary-clr);
    color: var(--primary-text-clr);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 1s;
}

.navigation__btn p {
    display: none;
}

.navigation__btn a {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

}

.navigation__btns {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    padding-top: 30px;
}

.navigation__btn-current svg {
    box-sizing: content-box;
    background-color: var(--clr-white);
    width: 24px;
    height: 24px;
    fill: var(--clr-black);
    border-radius: 10px;
    padding: 2px 10px;
    margin-bottom: 5px;
    
}

.navigation__btn-current p {
    display: block;
}


.navigation__btn * {
    color: var(--primary-text-clr);
}

.navigation__btn-maximized a {
    flex-direction: row;
    
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.navigation__btn-maximized svg {
    margin: 0;
}

.navigation__btn-maximized p {
    display: block;
}

.navigation__burger-btn svg {
    fill: var(--background-clr-alternate);
}

.navigation_toggleTheme, .navigation_logout {
    gap: 10px;
}

</style>