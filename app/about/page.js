export const metadata = { title: "About — Elmsworth Properties" };

export default function AboutPage() {
  return (
    <div className='mx-auto max-w-6xl px-6 py-16 grid sm:grid-cols-2 gap-14 items-start'>
      <div
        className='w-full aspect-[4/5]'
        style={{
          background: "linear-gradient(160deg, #C7B899 0%, #1F2B24 100%)",
        }}
      />
      <div className='sm:pt-4 max-w-prose'>
        <p className='font-body text-sm text-forest/50 mb-3'>
          Licensed Realtor
        </p>
        <h1 className='font-display text-4xl text-forest italic mb-6'>
          Elena Marsh
        </h1>
        <p className='font-body text-forest/70 leading-relaxed mb-4'>
          Elena has worked exclusively in Maple Ridge, Ashford, and Millbrook
          for the past eleven years, after starting her career in a larger
          regional brokerage covering half the state.
        </p>
        <p className='font-body text-forest/70 leading-relaxed mb-4'>
          She keeps her client list small on purpose — usually no more than six
          active buyers or sellers at once — so that showings get scheduled
          quickly and questions get answered the same day.
        </p>
        <p className='font-body text-forest/70 leading-relaxed'>
          Outside of showings, she can usually be found at the Saturday farmers
          market on Linden Ave, which is also where half her past clients seem
          to find her again.
        </p>
      </div>
    </div>
  );
}
