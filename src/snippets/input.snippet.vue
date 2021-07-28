<template>
    <label
        class="input"
        :class="`${ type !== '' ? 'input--' + type : '' }`"
    >
        <!-- Label -->
        <span
            v-if="label"
            class="input__label"
        >
            {{ label }}
        </span>
        <!-- ./Label -->

        <!-- Input -->
        <input
            :type="`${ type ? type : 'text' }`"
            :name="`${ name ? name : '' }`"
            :placeholder="`${ placeholder ? placeholder : '' }`"
            :value="`${ value ? value : '' }`"
            class="input__element"
            :class="`${ value !== '' ? 'input__element--has-value' : '' }`"
            max="9999-12-31"
            @input="onChange( $event )"
        />
        <!-- ./Input -->

        <!-- Icon -->
        <span
            v-if="icon"
            class="input__icon"
        >
            <img
                :src="icon"
                alt=""
                class="icon__element image--contain"
            />
        </span>
        <!-- ./Icon -->
    </label>
</template>

<script>
export default {
	name: 'SnippetInput',
    props: [
        'type', // String e.g. 'text' || 'email' || 'tel' || 'number'
        'name', // String e.g. 'name-input'
        'placeholder', // String e.g. 'Your name here'
        'value', // String e.g. 'John Doe'
        'onChange', // Function e.g. ( event ) => { console.log( event ) }
        'label', // String e.g. 'Your full name'
        'icon' // require() method
    ]
}
</script>
