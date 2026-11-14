import { useState } from 'react'
import PageHeader from '../components/PageHeader'

const initialForm = { fullName: '', email: '', subject: '', message: '' }

// TASK 7: Frontend-only controlled inquiry form with required-field and email validation.
function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
    setSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = {}
    Object.entries(form).forEach(([name, value]) => {
      if (!value.trim()) nextErrors[name] = 'This field is required.'
    })
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Enter a valid email address.'
    }

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false)
      return
    }

    setForm(initialForm)
    setSubmitted(true)
  }

  const fieldError = (name) => errors[name] && (
    <span className="form-error" id={`${name}-error`} role="alert">{errors[name]}</span>
  )

  return (
    <div className="inner-page">
      <PageHeader
        eyebrow="Contact"
        title="Let’s start a conversation."
        description="Send an inquiry using the form below. This demo does not send or store messages."
      />
      <div className="contact-layout">
        <aside className="contact-aside portal-panel">
          <p className="portal-eyebrow">Get in touch</p>
          <h2>We’d love to hear from you.</h2>
          <p>Share a question, an idea, or what you would like to learn more about.</p>
          <div className="contact-aside__note">
            <strong>Demo form</strong>
            <span>Your message stays in this browser session; no backend service is connected.</span>
          </div>
        </aside>
        <form className="contact-form portal-panel" noValidate onSubmit={handleSubmit}>
          {submitted && (
            <div className="form-success" role="status">
              Thank you. Your form was validated in this demo; no message was sent or stored.
            </div>
          )}
          <label>
            Full name
            <input autoComplete="name" name="fullName" onChange={handleChange} value={form.fullName} aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? 'fullName-error' : undefined} />
            {fieldError('fullName')}
          </label>
          <label>
            Email address
            <input autoComplete="email" name="email" onChange={handleChange} type="email" value={form.email} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
            {fieldError('email')}
          </label>
          <label>
            Subject
            <input name="subject" onChange={handleChange} value={form.subject} aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? 'subject-error' : undefined} />
            {fieldError('subject')}
          </label>
          <label>
            Message
            <textarea name="message" onChange={handleChange} rows="5" value={form.message} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />
            {fieldError('message')}
          </label>
          <button className="portal-button portal-button--primary" type="submit">Submit inquiry</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
