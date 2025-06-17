import { createApp } from 'vue'
import ContactForm from './ContactForm.vue'
createApp({
    components: {
        ContactForm
    },
    template: `
        <main>
            <h1>Contact Me</h1>
            <ContactForm
                namePlaceholder="Enter your name"
                emailPlaceholder="ENter your email"
                messagePlaceholder="Write your message"
                submitLabel="Send"
            />
        </main>
    `
}).mount('#app')