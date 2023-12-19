<script setup>
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
        class="outline-none p-3 rounded-full lg:px-6 lg:py-2 flex lg:space-x-4 items-center justify-center lg:justify-start lg:rounded-xl h-[4rem] w-[4rem] lg:h-[4rem] lg:w-[15rem] scale-100 hover:scale-[1.02] transition-all duration-75 group"
        :class="btnStyles"
    >
        <slot />
    </button>
</template>

<style scoped>
.default {
    @apply text-light-gray text-xl text-center justify-center hover:scale-100 hidden lg:inline-block;
}

.like {
    @apply active:bg-color-green/60;
}

.double-like {
    @apply active:bg-color-green;
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
    @apply text-color-green text-xl border border-color-green h-[3rem] hover:scale-100 hidden lg:inline-block;
}
</style>
