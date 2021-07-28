<template>
    <button
        class="button"
        :class="`
            ${ icon ? 'button--icon' : '' }
            ${ ( icon && icon.position ) ? 'button--icon-' + icon.position : '' }
        `"
        @click="onClick"
    >
        <!-- Label -->
        <span
            v-if="label"
            class="button__label"
        >
            {{ label }}
        </span>
        <!-- ./Label -->

        <!-- Icon -->
        <span
            v-if="icon"
            class="button__icon"
        >
            <img
                :src="icon.src"
                alt=""
                class="icon__element"
                v-svg
            />
        </span>
        <!-- ./Icon -->
    </button>
</template>

<script>
export default {
	name: 'SnippetButton',
    props: [
        'label', // String e.g. 'Click me'
        'icon', // Object e.g. { src: '~/assets/icons/icon.svg', position: 'left' },
        'onClick' // Function e.g. ( event ) => { console.log(event) }
    ]
}
</script>
