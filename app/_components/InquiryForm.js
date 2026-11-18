"use client";

import { useState } from "react";

export default function InquiryForm({ listingAddress }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className='border border-line/15 p-6'>
        <p className='font-display text-xl text-forest mb-2 italic'>
          Thank you
        </p>
        <p className='font-body text-sm text-forest/60'>
          This is a demo form — no message was actually sent, but on a live site
          Elena would follow up within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className='border border-line/15 p-6'>
      <p className='font-display text-xl text-forest mb-5 italic'>
        Ask about {listingAddress}
      </p>
      <div className='space-y-4'>
        <input
          type='text'
          required
          placeholder='Your name'
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className='w-full border border-line/20 bg-transparent px-3 py-2 font-body text-sm'
        />
        <input
          type='email'
          required
          placeholder='Email'
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className='w-full border border-line/20 bg-transparent px-3 py-2 font-body text-sm'
        />
        <textarea
          rows={3}
          placeholder="I'd like to schedule a showing..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className='w-full border border-line/20 bg-transparent px-3 py-2 font-body text-sm'
        />
      </div>
      <button
        type='submit'
        className='mt-5 w-full bg-forest text-linen font-body text-sm py-3 hover:bg-forest/90 transition-colors'
      >
        Send inquiry (demo)
      </button>
    </form>
  );
}
