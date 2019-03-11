<script>

    /**
     *
     */
    export default {

        props: {
            value: {
                type: String,
                required: true,
            },
            label: {
                type: String,
                required: true,
            },
            isSelected: {
                type: Boolean,
                default: false,
            },
        },

        computed: {
            classes() {
                return {
                    'navigationBar-link-isSelected': this.isSelected,
                };
            },
        },

    };

</script>

<template>
    <a
        class="navigationBar-link"
        :class="classes"
        @click="$emit('input', value)"
    >
        {{ label }}
    </a>
</template>
