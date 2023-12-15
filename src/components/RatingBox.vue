<script setup>
import { Icon } from '@iconify/vue';
import BaseButton from './BaseButton.vue';
</script>
<template>
    <div class="flex flex-col space-y-5">
        <BaseButton type="double-like">
            <img src="./../assets/icons/double-like.svg" alt="double-like" />
            <span class="text-xl">Double like</span>
        </BaseButton>

        <BaseButton type="like">
            <img src="./../assets/icons/single-like.svg" alt="single-like" />
            <span class="text-xl">Single like</span>
        </BaseButton>
        <BaseButton type="mixed">
            <img
                src="./../assets/icons/mixed-reaction.svg"
                alt="mixed reaction"
                class="-ml-3"
            />
            <span class="text-xl">Mixed rating</span>
        </BaseButton>
        <BaseButton type="dislike">
            <img
                src="./../assets/icons/single-dislike.svg"
                alt="single-dislike"
            />
            <span class="text-xl">Single dislike</span>
        </BaseButton>
        <BaseButton type="double-dislike">
            <img
                src="./../assets/icons/double-dislike.svg"
                alt="double-dislike"
            />
            <span class="text-xl">Double dislike</span>
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
