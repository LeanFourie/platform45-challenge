<template>
    <div class="layout layout--dashboard">
        <!-- Page -->
        <div
            class="page"
            v-bind:class="`page--${ identifier ? identifier : 'default' }`"
        >
            <slot></slot>
        </div>
        <!-- ./Page -->
    </div>
</template>

<script>
export default {
	name: 'LayoutDefault',
    props: [
        'identifier'
    ]
}
</script>
