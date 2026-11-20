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
    <span className="mt-1 block text-sm font-semibold text-red-600" id={`${name}-error`} role="alert">{errors[name]}</span>
  )

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="Contact"
        title="Let’s start a conversation."
        description="Send an inquiry using the form below. This demo does not send or store messages."
      />
      <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
        <aside className="rounded-2xl bg-emerald-900 p-6 text-white sm:p-8">
          <p className="text-xs font-black uppercase tracking-widest text-emerald-200">Get in touch</p>
          <h2 className="mt-3 text-3xl font-bold">We’d love to hear from you.</h2>
          <p className="mt-4 leading-7 text-emerald-100">Share a question, an idea, or what you would like to learn more about.</p>
          <div className="mt-8 rounded-xl border border-emerald-700 bg-emerald-950/30 p-4">
            <strong className="block">Demo form</strong>
            <span className="mt-1 block text-sm text-emerald-100/80">Your message stays in this browser session; no backend service is connected.</span>
          </div>
        </aside>
        <form className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8" noValidate onSubmit={handleSubmit}>
          {submitted && (
            <div className="mb-5 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800" role="status">
              Thank you. Your form was validated in this demo; no message was sent or stored.
            </div>
          )}
          <label className="mb-5 block text-sm font-bold text-slate-800">
            Full name
            <input className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500" autoComplete="name" name="fullName" onChange={handleChange} value={form.fullName} aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? 'fullName-error' : undefined} />
            {fieldError('fullName')}
          </label>
          <label className="mb-5 block text-sm font-bold text-slate-800">
            Email address
            <input className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500" autoComplete="email" name="email" onChange={handleChange} type="email" value={form.email} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
            {fieldError('email')}
          </label>
          <label className="mb-5 block text-sm font-bold text-slate-800">
            Subject
            <input className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500" name="subject" onChange={handleChange} value={form.subject} aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? 'subject-error' : undefined} />
            {fieldError('subject')}
          </label>
          <label className="mb-5 block text-sm font-bold text-slate-800">
            Message
            <textarea className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500" name="message" onChange={handleChange} rows="5" value={form.message} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />
            {fieldError('message')}
          </label>
          <button className="inline-flex min-h-11 items-center justify-center rounded-lg border border-emerald-700 bg-emerald-700 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2" type="submit">Submit inquiry</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
