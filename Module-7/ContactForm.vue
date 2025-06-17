import Modal from './Modal.vue'

export default {
  name: 'ContactForm',
  components: { Modal },
  props: ['namePlaceholder', 'emailPlaceholder', 'messagePlaceholder', 'submitLabel'],
  data() {
    return {
      name: '',
      email: '',
      message: '',
      errors: {},
      showModal: false
    }
  },
  computed: {
    isValid() {
      return (
        this.name.trim().match(/^[A-Za-z\s]+$/) &&
        this.email.trim().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) &&
        this.message.trim().length >= 10
      )
    }
  },
  methods: {
    validate() {
      this.errors = {}
      if (!/^[A-Za-z\s]+$/.test(this.name.trim())) {
        this.errors.name = 'Name must only contain letters.'
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email.trim())) {
        this.errors.email = 'Enter a valid email.'
      }
      if (this.message.trim().length < 10) {
        this.errors.message = 'Message must be at least 10 characters.'
      }
    },
    submitForm() {
      this.validate()
      if (Object.keys(this.errors).length === 0) {
        this.showModal = true
      }
    },
    closeModal() {
      this.showModal = false
    }
  },
  template: `
    <form @submit.prevent="submitForm">
      <label>Name:</label>
      <input v-model="name" :placeholder="namePlaceholder" @input="validate" />
      <p v-if="errors.name" class="error">{{ errors.name }}</p>

      <label>Email:</label>
      <input v-model="email" :placeholder="emailPlaceholder" @input="validate" />
      <p v-if="errors.email" class="error">{{ errors.email }}</p>

      <label>Message:</label>
      <textarea v-model="message" :placeholder="messagePlaceholder" @input="validate"></textarea>
      <p v-if="errors.message" class="error">{{ errors.message }}</p>

      <button type="submit" :disabled="!isValid">{{ submitLabel }}</button>

      <Modal
        v-if="showModal"
        :name="name"
        :email="email"
        :message="message"
        @close="closeModal"
      />
    </form>
  `
}