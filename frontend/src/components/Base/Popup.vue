<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { type Ref } from 'vue';

const emit = defineEmits(['closePopup', 'onOK', 'onCancel']);


const popup : Ref<HTMLElement | null> = ref(null);

const props = defineProps({
    title: String,
    btnOK: Boolean,
    btnCancel: Boolean
})

onMounted(() => {
    document.body.style.overflow = 'hidden';
})

/**
 * Closes the popup when the user clicks outside of it.
 *
 * @param {MouseEvent} e - The mouse event triggered by the user.
 * @return {void} This function does not return a value.
 */
function closePopup (e : MouseEvent) : void {
    if (e.target === e.currentTarget) {
        document.body.style.overflow = 'auto';
        document.getElementsByTagName('main')[0].style.filter = 'none';
        popup.value = popup.value as HTMLElement;
        popup.value.style.display = 'none';

        emit('closePopup');
    }

}

/**
* Handles the OK button click event.
*
* @param {MouseEvent} e - The mouse event triggered by the user.
* @return {void} This function does not return a value.
*/

function handleOK (e: MouseEvent) : void {
    closePopup(e);
    emit('onOK');
}


/**
* Handles the cancel button click event.
*
* @param {MouseEvent} e - The mouse event triggered by the user.
* @return {void} This function does not return a value.
*/
function handleCancel (e: MouseEvent) : void {
    closePopup(e);
    emit('onCancel');
}
</script>

<template>
    <div class="popup__background" @click="closePopup">
        <div class="popup" ref="popup">
            <div class="popup__header">
                <p>{{props?.title}}</p>
                <div @click="(e) => {closePopup(e)}">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="popup__container">
                <slot/>
            </div>

            <div class="popup__footer">
                <button v-if="props.btnCancel" @click="handleCancel">Отмена</button>
                <button v-if="props.btnOK || props.btnCancel" @click="handleOK">OK</button>
            </div>
        </div>
    </div>
</template>

<style scoped>

.popup__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.popup__header svg, .popup__header > p {
    fill: var(--on-primary-text-clr);  
    color: var(--on-primary-text-clr);  
}

.popup {
    background-color: var(--surface-clr-current);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: 10px;
    border-radius: 10px;
    
    align-items: center;
    
}

.popup__background {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 10;
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


.popup__container {
    background-color: var(--primary-clr);
    padding: 5px;
    display: flex;
    max-width: 800px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

* {
    color: aliceblue;
}

.popup__footer {
    display: flex;
    justify-content: end;
    gap: 10px;
    padding-right: 10px;
    width: 100%;
}






</style>