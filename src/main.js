import './styles/styles.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './helpers/router'

const app = createApp(App)


////////// DIRECTIVES //////////
// Change inline images to inline svgs
app.directive('svg', {
    beforeMount: ( el ) => {
        setTimeout(function() {
            var imgID = el.id,
                imgClass = el.className,
                imgURL = el.src,
                parent = el.parentElement,
                prevSibling = el.previousElementSibling,
                nextSibling = el.nextElementSibling

            var xhr = new XMLHttpRequest()
            xhr.open('GET', imgURL)
            xhr.onreadystatechange = function(data) {
                var svg = data.target.response

                if ( prevSibling != null && nextSibling != null ) {
                    parent.innerHTML = prevSibling.outerHTML + svg + nextSibling.outerHTML
                } else if ( prevSibling != null &&  nextSibling === null ) {
                    parent.innerHTML = prevSibling.outerHTML + svg
                } else if ( prevSibling === null &&  nextSibling != null ) {
                    parent.innerHTML = svg + nextSibling.outerHTML
                } else {
                    parent.innerHTML = svg
                }
                
                if (xhr.readyState == 4) {
                    if (typeof imgID !== undefined) {
                        parent.querySelectorAll('svg')[0].setAttribute('id', imgID)
                    }

                    if (typeof imgClass !== undefined) {
                        parent.querySelectorAll('svg')[0].setAttribute('class', imgClass)
                    }
                }
            }
            xhr.send()
        }, 0)
    }
})

// Split text
app.directive('split', {
    beforeMount: ( el ) => {
        var splitText = el.innerText.trim().split(''),
            spanText = []
        for (var i = 0; i < splitText.length; i++) {
            var singleText = '<span style="--span-index: ' + i + '">' + splitText[i] + '</span>'

            spanText.push(singleText)
        }
        el.innerHTML = ''
        el.innerHTML = spanText.join('')
    }
})

app.use(router)
    .mount('#app')
