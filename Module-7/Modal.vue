export default {
  name: 'Modal',
  props: ['name', 'email', 'message'],
  emits: ['close'],
  template: `
    <div class="modal">
      <div class="modal-content">
        <span class="close" @click="$emit('close')">&times;</span>
        <h2>Thank you!</h2>
        <p><strong>Name:</strong> {{ name }}</p>
        <p><strong>Email:</strong> {{ email }}</p>
        <p><strong>Message:</strong> {{ message }}</p>
      </div>
    </div>
  `
}