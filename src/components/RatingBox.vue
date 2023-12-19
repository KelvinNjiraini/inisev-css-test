<script setup>
import { Icon } from '@iconify/vue';
import BaseButton from './BaseButton.vue';
</script>
<template>
    <div
        class="flex flex-row items-center space-x-5 lg:space-x-0 lg:flex-col lg:space-y-5"
    >
        <BaseButton type="double-like">
            <img src="./../assets/icons/double-like.svg" alt="double-like" />
            <span class="text-xl hidden lg:inline">Double like</span>
        </BaseButton>

        <BaseButton type="like">
            <img src="./../assets/icons/single-like.svg" alt="single-like" />
            <span class="text-xl hidden lg:inline">Single like</span>
        </BaseButton>
        <BaseButton type="mixed">
            <img
                src="./../assets/icons/mixed-reaction.svg"
                alt="mixed reaction"
                class="lg:-ml-3"
            />
            <span class="text-xl hidden lg:inline">Mixed rating</span>
        </BaseButton>
        <BaseButton type="dislike">
            <img
                src="./../assets/icons/single-dislike.svg"
                alt="single-dislike"
            />
            <span class="text-xl hidden lg:inline">Single dislike</span>
        </BaseButton>
        <BaseButton type="double-dislike">
            <img
                src="./../assets/icons/double-dislike.svg"
                alt="double-dislike"
            />
            <span class="text-xl hidden lg:inline">Double dislike</span>
        </BaseButton>
        <BaseButton type="review">
            <Icon
                icon="heroicons:chat-bubble-bottom-center-text"
                class="w-8 h-8"
            />
            <span class="text-xl">Write a review</span>
        </BaseButton>
        <BaseButton
            ><span class="text-xl font-semibold"
                >No rating (skip)</span
            ></BaseButton
        >
    </div>
</template>
