<template>
    <SnippetSection
        identifier="hero"
    >
        <!-- Image -->
        <div class="image">
            <img
                :src="image"
                alt="User icon"
                class="image__element image--cover"
            />
        </div>
        <!-- ./Image -->

        <!-- Text -->
        <div class="text">
            <h1 class="text__element text__element--title bold">
                {{ title }}
            </h1>
            <p class="text__element text__element--paragraph">
                {{ paragraph }}
            </p>
        </div>
        <!-- ./Text -->

        <!-- Actions -->
        <div class="actions">
            <SnippetButton
                :icon="{
                    src: require('./../../assets/icons/arrow.svg')
                }"
                class="button--tertiary"
                :class="`${ showForm ? 'button--rotate' : '' }`"
                :onClick="toggleShowHideForm"
            />
        </div>
        <!-- ./Actions -->
    </SnippetSection>
</template>

<script>
// Snippets
import SnippetSection from './../../snippets/section.snippet.vue'
import SnippetButton from './../../snippets/button.snippet.vue'

export default {
	name: 'HomeHero',
    props: [
        'title', // String e.g. 'Hello world'
        'paragraph', // String e.g. 'Hello world'
        'image', // require() method e.g. 'require('./../assets/images/image.svg')'
        'toggleShowHideForm', // mMethod
        'showForm' // Boolean
    ],
	components: {
        SnippetSection,
        SnippetButton
	}
}
</script>
