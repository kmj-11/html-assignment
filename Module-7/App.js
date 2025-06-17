import ContactForm from './ContactForm.js'

const { createApp } = Vue 

createApp({
    components: {
        ContactForm
    },
    template: `
        <main>
            <h1>Contact Me</h1>
            <ContactForm
                namePlaceholder="Enter your name"
                emailPlaceholder="Enter your email"
                messagePlaceholder="Write your message"
                submitLabel="Send"
            />
        </main>
    `
}).mount('#app')