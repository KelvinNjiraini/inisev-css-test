<script setup>
import { Icon } from '@iconify/vue';
import CardMain from './CardMain.vue';
import BaseButton from './BaseButton.vue';
</script>

<template>
    <div class="flex items-center justify-between w-full">
        <Icon
            icon="solar:square-alt-arrow-left-outline"
            class="w-14 h-14 text-slate-500"
        />
        <div
            class="flex flex-col md:flex-row items-center justify-center md:space-x-16 w-full p-5"
        >
            <div class="md:w-3/5">
                <card-main />
            </div>
            <div class="flex flex-col space-y-3">
                <BaseButton type="double-like">
                    <Icon
                        icon="gravity-ui:thumbs-up-2"
                        class="w-10 h-10 text-green-300"
                    />
                    <span class="text-xl">Double like</span>
                </BaseButton>

                <BaseButton type="like">
                    <Icon
                        icon="fa6-regular:thumbs-up"
                        class="w-10 h-10 text-green-300"
                    />
                    <span class="text-xl">Single like</span>
                </BaseButton>
                <BaseButton type="mixed">
                    <Icon
                        icon="fluent:thumb-like-dislike-24-regular"
                        class="w-10 h-12 text-green-300"
                    />
                    <span class="text-xl ms-auto">Mixed rating</span>
                </BaseButton>
                <BaseButton type="dislike">
                    <Icon
                        icon="fa6-regular:thumbs-down"
                        class="w-10 h-10 text-red-300"
                    />

                    <span class="text-xl">Single dislike</span>
                </BaseButton>
                <BaseButton type="double-dislike">
                    <Icon
                        icon="gravity-ui:thumbs-up-2"
                        class="w-10 h-10 text-red-300"
                        rotate="180deg"
                    />

                    <span class="text-xl">Double dislike</span>
                </BaseButton>
                <BaseButton>No rating (skip)</BaseButton>
                <BaseButton type="review">
                    <Icon
                        icon="heroicons:chat-bubble-bottom-center-text"
                        class="w-8 h-8"
                    />
                    <span class="text-xl">Write a review</span>
                </BaseButton>
            </div>
        </div>
        <Icon
            icon="solar:square-alt-arrow-right-outline"
            class="w-14 h-14 text-green-300/60"
        />
    </div>
</template>
