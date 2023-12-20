<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
    <div
        class="bg-white p-6 shadow-lg w-full h-auto py-10 rounded-3xl lg:py-20 relative before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0 before:rounded-3xl before:shadow-inner"
    >
        <button
            class="absolute top-0 right-0 p-3 bg-color-green flex justify-center items-center rounded-tr-3xl rounded-bl-3xl lg:hidden"
        >
            <Icon
                icon="heroicons:chat-bubble-bottom-center-text"
                class="w-7 h-7 sm:w-8 sm:h-8 text-white"
            />
        </button>
        <div
            class="flex flex-col sm:flex-row lg:flex-col space-y-3 sm:space-y-0 lg:space-y-3 space-x-0 sm:space-x-4 lg:space-x-0 items-center"
        >
            <img
                src="./../assets/images/President_Barack_Obama.jpg"
                alt="President obama photo"
                class="h-[17rem] object-cover bg-center border-4 border-blue-500 rounded-3xl"
            />
            <div
                class="flex flex-col items-center space-y-2 sm:items-start lg:items-center"
            >
                <h3
                    class="font-semibold text-xl md:text-2xl lg:text-3xl text-slate-700 capitalize"
                >
                    Barack Obama
                </h3>
                <p
                    class="text-slate-700 leading-8 text-base md:text-lg lg:text-xl max-w-md"
                >
                    American former politician who served as the 44th president
                    of the United States from 2009 to 2017
                </p>
            </div>
        </div>
    </div>
</template>
