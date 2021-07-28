<template>
    <section
        class="section"
        v-bind:class="`section--${ identifier }`"
    >
        <slot></slot>
    </section>
</template>

<script>
export default {
	name: 'SnippetSection',
    props: [
        'identifier'
    ]
}
</script>
