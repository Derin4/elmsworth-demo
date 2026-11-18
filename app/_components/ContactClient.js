"use client";

import { useState } from "react";

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className='mx-auto max-w-2xl px-6 py-16'>
      <h1 className='font-display text-4xl text-forest italic mb-3'>
        Get in touch
      </h1>
      <p className='font-body text-forest/60 mb-10'>
        Buying, selling, or just curious what your home might be worth — Elena
        typically replies within one business day.
      </p>

      {submitted ? (
        <div className='border border-line/15 p-6'>
          <p className='font-display text-xl text-forest mb-2 italic'>
            Message received
          </p>
          <p className='font-body text-sm text-forest/60'>
            This is a demo form — no message was actually sent.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className='space-y-4'>
          <input
            type='text'
            required
            placeholder='Full name'
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className='w-full border border-line/20 bg-transparent px-3 py-2.5 font-body text-sm'
          />
          <input
            type='email'
            required
            placeholder='Email'
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className='w-full border border-line/20 bg-transparent px-3 py-2.5 font-body text-sm'
          />
          <input
            type='tel'
            placeholder='Phone (optional)'
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className='w-full border border-line/20 bg-transparent px-3 py-2.5 font-body text-sm'
          />
          <textarea
            rows={4}
            required
            placeholder='How can Elena help?'
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className='w-full border border-line/20 bg-transparent px-3 py-2.5 font-body text-sm'
          />
          <button
            type='submit'
            className='w-full sm:w-auto bg-forest text-linen font-body text-sm px-8 py-3 hover:bg-forest/90 transition-colors'
          >
            Send message (demo)
          </button>
        </form>
      )}
    </div>
  );
}
