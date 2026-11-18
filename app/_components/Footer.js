export default function Footer() {
  return (
    <footer className='bg-forest text-linen mt-24'>
      <div className='mx-auto max-w-6xl px-6 py-12 grid gap-8 sm:grid-cols-3 font-body text-sm text-linen/60'>
        <div>
          <p className='font-display text-xl text-linen mb-2 italic'>
            Elmsworth Properties
          </p>
          <p>Elena Marsh, Licensed Realtor — Maple Ridge & surrounding areas</p>
        </div>
        <div>
          <p className='text-linen mb-2'>Contact</p>
          <p>
            elena@elmsworthproperties.example
            <br />
            (555) 014-2277
          </p>
        </div>
        <div>
          <p className='text-linen mb-2'>Notes</p>
          <p>
            This is a demo site built for the MyClickAid gallery. Listings,
            pricing, and the mortgage calculator here are illustrative only.
          </p>
        </div>
      </div>
      <div className='border-t border-linen/10 px-6 py-4 text-center font-body text-xs text-linen/40'>
        &copy; {new Date().getFullYear()} Elmsworth Properties — demo site
      </div>
    </footer>
  );
}
