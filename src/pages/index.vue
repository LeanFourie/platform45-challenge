<template>
    <LayoutDefault
        identifier="home"
    >
        <!-- Hero -->
        <HomeHero
            :title="hero.title"
            :paragraph="hero.paragraph"
            :image="require('./../assets/images/face.svg')"
            :toggleShowHideForm="toggleShowHideForm"
            :showForm="form.showForm"
        />
        <!-- Hero -->

        <!-- Intro -->
        <HomeIntro
            :title="intro.title"
            :paragraph="intro.paragraph"
            ref="introSection"
        />
        <!-- Intro -->

        <!-- Form -->
        <HomeForm
            :showForm="form.showForm"
        />
        <!-- Form -->
    </LayoutDefault>
</template>

<script>
// Helpers
import { checkWindowWidth } from './../helpers/functions'

// Layout
import LayoutDefault from './../layouts/default.layout.vue'

// Sections
import HomeHero from './../components/home-page/hero.component.vue'
import HomeIntro from './../components/home-page/intro.component.vue'
import HomeForm from './../components/home-page/form.component.vue'

export default {
	name: 'Home',
	components: {
		LayoutDefault,
        HomeHero,
        HomeIntro,
        HomeForm,
	},
    data() {
        return {
            hero: {
                title: 'Front-end challenge!',
                paragraph: 'This is a design that you will need to code up to impress us.'
            },
            intro: {
                title: 'My world today',
                paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, <a href="#" class="link">View all days</a> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
            },
            form: {
                showForm: false
            },
            screenSizeSmall: false
        }
    },
    methods: {
        toggleShowHideForm() {
            this.form.showForm = !this.form.showForm

            this.addMarginForForm()
        },

        getScreenSize() {
            this.screenSizeSmall = checkWindowWidth(950)

            window.addEventListener('resize', () => {
                this.screenSizeSmall = checkWindowWidth(950)
            })
        },

        addMarginForForm() {
            // Get required sections
            let introSection = this.$el.children[0].children[1],
                formSection = this.$el.children[0].children[2]

            if ( this.screenSizeSmall && this.form.showForm ) {
                // Get the height from the required sections
                let introSectionHeight = introSection.offsetHeight,
                    formSectionHeight = formSection.offsetHeight

                // Calculate the margin needed
                let heightDiffrence = formSectionHeight - introSectionHeight
                
                // Set the required amount to the margin
                introSection.style.marginBottom = `${ heightDiffrence }px`

                // Scroll the page to the form
                window.scrollTo(0, window.innerHeight)
            } else {
                introSection.style.marginBottom = '0px'
            }
        }
    },
    mounted() {
        this.getScreenSize()
    }
}
</script>
