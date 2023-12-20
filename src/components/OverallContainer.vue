<script setup>
import { ref } from 'vue';
import CardMain from './CardMain.vue';
import RatingBox from './RatingBox.vue';

const ratingsComplete = ref(true);
</script>

<template>
    <div
        class="flex items-center justify-between w-full min-h-screen md:min-h-full p-8 md:p-10 md:m-8 lg:m-20 lg:max-w-6xl md:shadow-lg md:rounded-3xl relative before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0 md:before:rounded-3xl md:before:shadow-inner modal-bg"
    >
        <div class="flex flex-col items-center space-y-6 w-full relative z-10">
            <div class="flex items-center justify-between w-full">
                <!-- Action buttons -->
                <div class="flex items-center space-x-2">
                    <!-- quick rating mode -->

                    <img
                        src="./../assets/icons/lightning-bolt.svg"
                        alt="Ligtning bolt"
                        class="w-8 h-8 md:w-10 md:h-10"
                    />
                    <span
                        class="font-semibold text-2xl lg:text-3xl text-slate-900"
                    >
                        Quick rating mode
                    </span>
                </div>
                <span
                    class="font-semibold hidden sm:inline text-xl lg:text-2xl text-light-gray lg:-ml-56"
                    ><span class="text-color-green">1</span>/50 topics</span
                >

                <Button class="outline-none inline-block">
                    <img
                        src="./../assets/icons/cross.svg"
                        alt="cross"
                        class="w-8 h-8 md:w-10 md:h-10"
                    />
                </Button>
            </div>

            <!-- prev and next button on mobile screens -->
            <div class="grid grid-cols-3 items-center w-full xs:hidden">
                <Button
                    class="outline-none scale-100 hover:scale-[1.02] transition-all duration-75 justify-self-start"
                >
                    <img
                        src="./../assets/icons/chevron-left.svg"
                        alt="Chevron left"
                        class="w-10 h-10"
                    />
                </Button>
                <span
                    class="font-semibold text-lg text-light-gray justify-self-center"
                    ><span class="text-color-green">1</span>/50 topics</span
                >
                <Button
                    class="outline-none scale-100 hover:scale-[1.02] transition-all duration-75 justify-self-end"
                    v-if="!ratingsComplete"
                >
                    <img
                        src="./../assets/icons/chevron-right.svg"
                        alt="Chevron left"
                        class="w-10 h-10"
                    />
                </Button>
            </div>
            <!-- prev and next button on larger screens -->
            <div
                class="grid grid-cols-1 xs:grid-cols-[repeat(3,auto)] gap-x-2 sm:gap-x-4 items-center w-full"
            >
                <Button
                    class="outline-none scale-100 hover:scale-[1.02] transition-all duration-75 hidden xs:inline-block justify-self-start"
                >
                    <img
                        src="./../assets/icons/chevron-left.svg"
                        alt="Chevron left"
                        class="w-12 h-12"
                    />
                </Button>
                <div
                    class="justify-self-stretch flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 lg:space-x-16 w-full"
                    v-if="!ratingsComplete"
                >
                    <!-- <div class="md:w-3/5"> -->
                    <card-main />
                    <!-- </div> -->
                    <RatingBox />
                </div>
                <div
                    class="justify-self-stretch flex flex-col items-center space-y-4 w-full md:py-5"
                    v-if="ratingsComplete"
                >
                    <!-- Completion screen -->
                    <img
                        src="./../assets/celebrate-symbol.svg"
                        alt="celebrate symbol"
                        class="h-[9rem]"
                    />
                    <h2
                        class="text-3xl text-slate-900 font-semibold text-center max-w-sm"
                    >
                        You rated all topics that could be rated – hurray!
                    </h2>
                    <button
                        class="rounded-xl bg-color-green px-4 py-3 text-white font-semibold hover:bg-color-green/80"
                    >
                        Close quick rating mode
                    </button>
                    <button
                        class="rounded-xl outline-none px-4 py-3 text-color-green hover:text-color-green/80 font-semibold"
                    >
                        Start from beginning
                    </button>
                </div>
                <Button
                    class="outline-none scale-100 hover:scale-[1.02] transition-all duration-75 hidden xs:inline-block justify-self-end"
                    v-if="!ratingsComplete"
                >
                    <img
                        src="./../assets/icons/chevron-right.svg"
                        alt="chevron right"
                        class="w-12 h-12"
                    />
                </Button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal-bg {
    background-image: url('./../assets/modal-bg.svg');
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
