<template>
    <SnippetSection
        identifier="form"
        :class="`${ showForm ? 'section--active' : '' }`"
    >
        <div
            ref="formElement"
            class="form"
        >
            <!-- Name -->
            <div class="form__row form__row--name">
                <span class="row__label">
                    Name
                </span>
                <SnippetInput
                    type="text"
                    name="customer-name"
                    placeholder="e.g. John Doe"
                    :value="form.name"
                    :onChange="( event ) => setValue(event, 'value', 'name')"
                />
            </div>
            <!-- ./Name -->
            <!-- Gender -->
            <div class="form__row form__row--gender">
                <span class="row__label">
                    Gender
                </span>
                <SnippetRadioList
                    :items="genderList"
                    collectionName="gender"
                />
            </div>
            <!-- ./Gender -->
            <!-- Date of Birth -->
            <div class="form__row form__row--birth">
                <span class="row__label">
                    Date of Birth
                </span>
                <SnippetInput
                    type="date"
                    name="customer-birth"
                    placeholder="e.g. 01/02/1983"
                    :value="form.date_of_birth"
                    :onChange="( event ) => setValue(event, 'value', 'date_of_birth')"
                    :icon="require('./../../assets/icons/calendar.svg')"
                />
            </div>
            <!-- ./Date of Birth -->
            <!-- Email -->
            <div class="form__row form__row--email">
                <span class="row__label">
                    Email
                </span>
                <SnippetInput
                    type="email"
                    name="customer-email"
                    placeholder="e.g. janedoe@address.com"
                    :value="form.email"
                    :onChange="( event ) => setValue(event, 'value', 'email')"
                />
            </div>
            <!-- ./Email -->
            <!-- Mobile -->
            <div class="form__row form__row--mobile">
                <span class="row__label">
                    Mobile
                </span>
                <SnippetInput
                    type="tel"
                    name="customer-tel"
                    placeholder="e.g. +27 12 345 6789"
                    :value="form.mobile"
                    :onChange="( event ) => setValue(event, 'value', 'mobile')"
                />
            </div>
            <!-- ./Mobile -->
            <!-- ID -->
            <div class="form__row form__row--id">
                <span class="row__label">
                    Customer ID
                </span>
                <SnippetInput
                    type="text"
                    name="customer-id"
                    placeholder="e.g. 123AFA-3545-AD-12"
                    :value="form.customer_id"
                    :onChange="( event ) => setValue(event, 'value', 'customer_id')"
                />
            </div>
            <!-- ./ID -->
            <!-- Membership -->
            <div class="form__row form__row--membership">
                <span class="row__label">
                    Membership
                </span>
                <SnippetRadioList
                    :items="membershipList"
                    collectionName="membership"
                />
            </div>
            <!-- ./Membership -->
            <!-- Actions -->
            <div class="form__row form__row--actions">
                <SnippetButton
                    label="Cancel"
                    class="button--secondary"
                    :onClick="clearForm"
                />
                <SnippetButton
                    label="Save"
                    class="button--success"
                    :onClick="submitForm"
                />
            </div>
            <!-- ./Actions -->
        </div>
    </SnippetSection>
</template>

<script>
// Snippets
import SnippetSection from './../../snippets/section.snippet.vue'
import SnippetButton from './../../snippets/button.snippet.vue'
import SnippetInput from './../../snippets/input.snippet.vue'
import SnippetRadioList from './../../snippets/radio-list.snippet.vue'

export default {
	name: 'HomeForm',
    props: [
        'showForm' // Boolean
    ],
	components: {
        SnippetSection,
        SnippetButton,
        SnippetInput,
        SnippetRadioList
	},
    data() {
        return {
            form: {
                name: '',
                gender: '',
                date_of_birth: '',
                email: '',
                mobile: '',
                customer_id: '',
                membership_type: ''
            },
            genderList: [
                {
                    label: 'Male',
                    icon: require('./../../assets/icons/mars-symbol.svg')
                },
                {
                    label: 'Female',
                    icon: require('./../../assets/icons/venus-symbol.svg')
                }
            ],
            membershipList: [
                {
                    label: 'Classic',
                    icon: require('./../../assets/icons/card.svg')
                },
                {
                    label: 'Silver',
                    icon: require('./../../assets/icons/card.svg')
                },
                {
                    label: 'Gold',
                    icon: require('./../../assets/icons/card.svg')
                }
            ]
        }
    },
    methods: {
        setValue( event, valueType, key ) {
            valueType === 'value'
                ? this.form[key] = event.target.value
                : this.form[key] = event.target.querySelector('.label__element').innerText
        },

        submitForm() {
            console.log(this.form)
        },

        clearForm() {
            // Get the form values from the data object
            let form = this.form,
                keys = Object.keys(form)

            // Clear all values
            for ( let key of keys ) {
                form[key] = ''
            }

            // Get all checked radio inputs
            let radioInputs = this.$refs.formElement.querySelectorAll('input[type=radio]:checked')

            // Remove checked attribute from inputs
            for ( let input of radioInputs ) {
                input.checked = false
            }

            // Return the empty form values
            this.form = form
        }
    }
}
</script>
