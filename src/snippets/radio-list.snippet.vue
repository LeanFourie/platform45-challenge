<template>
    <div
        class="radio-list"
    >
        <label
            v-for="( item, index ) in items"
            :key="index"
            :for="`${ lowercaseText(collectionName) }-item--${ index }`"
            class="radio-list__item"
        >
            <!-- Input -->
            <input
                type="radio"
                :name="collectionName"
                :id="`${ lowercaseText(collectionName) }-item--${ index }`"
                class="item__input"
            />
            <!-- ./Input -->

            <!-- Icon -->
            <span
                v-if="item.icon"
                class="item__icon"
            >
                <img
                    :src="item.icon"
                    alt=""
                    class="icon__element image--contain"
                    v-svg
                />
            </span>
            <!-- ./Icon -->

            <!-- Label -->
            <span class="item__label">
                {{ item.label }}
            </span>
            <!-- ./Label -->
        </label>
    </div>
</template>

<script>
// Helpers
import { lowercaseText } from './../helpers/functions'

export default {
	name: 'SnippetRadioList',
    props: [
        'items', // Array of objects e.g. [{ label: 'Radio 1', icon: require('/images/image.svg') }, { label: 'Radio 2', icon: require('/images/image.svg') }]
        'collectionName', // String e.g. 'Cars'
        'onClick' // Function e.g. ( event ) => { console.log(event) }
    ],
    methods: {
        lowercaseText( value ) {
            return lowercaseText( value )
        }
    }
}
</script>
