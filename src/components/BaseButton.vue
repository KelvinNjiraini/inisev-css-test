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
    @apply text-slate-600 text-xl text-center justify-center;
}

.like,
.double-like {
    @apply shadow-lg shadow-green-200 border-2 border-green-200;
}

.mixed {
    @apply shadow-lg shadow-green-200 border-2 border-l-green-200 border-b-green-200 border-t-red-200 border-red-200;
}
.dislike,
.double-dislike {
    @apply shadow-lg shadow-red-200 border-2 border-red-200;
}

.review {
    @apply text-green-300 text-xl text-center justify-center border border-green-300 h-[3rem];
}
</style>
