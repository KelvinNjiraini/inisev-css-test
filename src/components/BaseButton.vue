<script setup>
import { Icon } from '@iconify/vue';
import { computed } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'default',
        validator: (value) =>
            [
                'default',
                'like',
                'double-like',
                'mixed',
                'dislike',
                'double-dislike',
                'review',
            ].includes(value),
    },
});

const btnStyles = computed(() => {
    return `${props.type}`;
});
</script>

<template>
    <button
        class="outline-none px-6 py-2 flex space-x-4 items-center rounded-xl h-[4rem] w-[15rem]"
        :class="btnStyles"
    >
        <slot />
    </button>
</template>

<style scoped>
.default {
    @apply text-light-gray text-xl text-center justify-center;
}

.like,
.double-like {
    @apply shadow-lg shadow-color-green/30 border-2 border-color-green/30;
}

.mixed {
    @apply shadow-lg shadow-color-green/50 border-2 border-l-color-green/50 border-b-color-green/50 border-t-color-red/50 border-color-red/50;
}
.dislike,
.double-dislike {
    @apply shadow-lg shadow-color-red/30 border-2 border-color-red/30;
}

.review {
    @apply text-color-green text-xl text-center justify-center border border-color-green h-[3rem];
}
</style>
