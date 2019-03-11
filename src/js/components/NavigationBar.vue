<script>

    import NavigationBarLink from './NavigationBarLink';

    /**
     *
     */
    export default {

        components: {
            NavigationBarLink,
        },


        props: {
            options: {
                type: Array,
                required: true,
            },
            value: {
                type: String,
                default: '',
            },
        },


        methods: {
            input(value) {
                this.$emit('input', value);
            },
        },
    };

</script>

<template>

    <div class="navigationBar">
        <navigation-bar-link
            v-for="option in options"
            :key="option.value"
            :value="option.value"
            :is-selected="option.value === value"
            :label="option.label"
            @input="input"
        ></navigation-bar-link>
    </div>

</template>
