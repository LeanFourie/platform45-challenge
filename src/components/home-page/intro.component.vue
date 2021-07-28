<template>
    <SnippetSection
        identifier="intro"
    >
        <!-- Text -->
        <div class="text">
            <h1 class="text__element text__element--title bold">
                {{ title }}
            </h1>
            <p
                v-html="paragraph"
                class="text__element text__element--paragraph"
            ></p>
        </div>
        <!-- ./Text -->
    </SnippetSection>
</template>

<script>
import SnippetSection from './../../snippets/section.snippet.vue'

export default {
	name: 'HomeIntro',
    props: [
        'title', // String e.g. 'Hello world'
        'paragraph' // String e.g. 'Hello world'
    ],
	components: {
        SnippetSection
	}
}
</script>
