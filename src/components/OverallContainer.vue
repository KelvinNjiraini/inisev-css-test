<script setup>
import { Icon } from '@iconify/vue';
import CardMain from './CardMain.vue';

import RatingBox from './RatingBox.vue';
</script>

<template>
    <div
        class="flex items-center justify-between w-full p-8 md:p-10 m-8 md:m-20 shadow-lg rounded-3xl relative before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0 before:rounded-3xl before:shadow-inner modal-bg"
    >
        <div class="flex flex-col space-y-4 w-full relative z-10">
            <div class="flex items-center justify-between">
                <!-- Action buttons -->
                <div class="flex items-center space-x-2">
                    <!-- quick rating mode -->

                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-10 h-10"
                    >
                        <path
                            d="M21.8894 9.60307C21.8129 9.43879 21.6481 9.33335 21.4666 9.33335H15.9366L21.3943 0.716352C21.4853 0.572633 21.4908 0.390633 21.4088 0.241773C21.3266 0.0924219 21.1698 0 20.9999 0H13.5333C13.3564 0 13.1949 0.0998594 13.1156 0.25807L6.11561 14.2581C6.04326 14.4023 6.05119 14.574 6.13612 14.7116C6.22154 14.8493 6.37133 14.9333 6.53326 14.9333H11.332L6.10298 27.3522C6.01384 27.5646 6.09319 27.8109 6.28963 27.9314C6.36521 27.9776 6.44921 27.9999 6.53277 27.9999C6.6667 27.9999 6.79877 27.9425 6.89026 27.8343L21.8236 10.1009C21.9407 9.96193 21.9659 9.76779 21.8894 9.60307Z"
                            fill="#E4B200"
                        />
                    </svg>
                    <span class="font-semibold text-3xl text-slate-900">
                        Quick rating mode
                    </span>
                </div>
                <span class="font-semibold text-2xl text-light-gray md:-ml-56"
                    ><span class="text-color-green">1</span>/50 topics</span
                >

                <Button class="outline-none">
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-10 h-10"
                    >
                        <path
                            d="M18.9676 18.9674L11.5002 11.5"
                            stroke="#ABBBCE"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M11.5026 18.9674L18.9699 11.5"
                            stroke="#ABBBCE"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <circle cx="15" cy="15" r="14.5" stroke="#D5DDE7" />
                    </svg>
                </Button>
            </div>
            <div class="flex items-center justify-between space-x-3">
                <Button
                    class="outline-none scale-100 hover:scale-[1.02] transition-all duration-75"
                >
                    <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-12 h-12"
                    >
                        <rect
                            x="-0.5"
                            y="0.5"
                            width="35"
                            height="35"
                            rx="9.5"
                            transform="matrix(-1 0 0 1 35 0)"
                            stroke="#D5DDE7"
                        />
                        <path
                            d="M19.25 22.5L14.75 18L19.25 13.5"
                            stroke="#ABBBCE"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </Button>
                <div
                    class="flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 lg:space-x-16 w-full p-5"
                >
                    <!-- <div class="md:w-3/5"> -->
                    <card-main />
                    <!-- </div> -->
                    <RatingBox />
                </div>
                <Button class="outline-none">
                    <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-12 h-12 scale-100 hover:scale-[1.02] transition-all duration-75"
                    >
                        <rect
                            x="0.5"
                            y="0.5"
                            width="35"
                            height="35"
                            rx="9.5"
                            stroke="#10A9A0"
                            stroke-opacity="0.3"
                        />
                        <path
                            d="M16.75 22.5L21.25 18L16.75 13.5"
                            stroke="#10A9A0"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </Button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal-bg {
    background-image: url('./../assets/modal-bg.svg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
