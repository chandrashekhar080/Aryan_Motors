import { useState } from 'react'
import { businessEmail } from './dealerData'

const initialForm = {
  name: '',
  mobile: '',
  interest: '',
  message: '',
}

function LeadForm({ onSubmitted }) {
  const [form, setForm] = useState(initialForm)

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = `Aryan Motors enquiry - ${form.interest || 'General'}`
    const body = [
      `Name: ${form.name}`,
      `Mobile number: ${form.mobile}`,
      `Interested in: ${form.interest || 'Not selected'}`,
      '',
      'Message:',
      form.message || 'No message added.',
    ].join('\n')

    window.location.href = `${businessEmail.href}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setForm(initialForm)
    onSubmitted?.()
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={updateField}
          required
        />
      </label>
      <label>
        Mobile number
        <input
          type="tel"
          name="mobile"
          placeholder="Your mobile number"
          value={form.mobile}
          onChange={updateField}
          required
        />
      </label>
      <label>
        Interested in
        <select name="interest" value={form.interest} onChange={updateField} required>
          <option value="" disabled>Select enquiry type</option>
          <option>New tractor</option>
          <option>Implement</option>
          <option>Finance</option>
          <option>Parts or service</option>
        </select>
      </label>
      <label>
        Message
        <textarea
          name="message"
          placeholder="Model, village, budget or service need"
          value={form.message}
          onChange={updateField}
        ></textarea>
      </label>
      <button type="submit">Send enquiry</button>
    </form>
  )
}

export default LeadForm
