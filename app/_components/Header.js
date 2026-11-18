"use client";

import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/listings", label: "Listings" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile panel automatically on navigation. Adjusted during
  // render (not in an effect) by tracking the last pathname we've seen —
  // this is React's recommended pattern for "reset state when a prop
  // changes": it avoids an extra render-after-mount and the lint warning
  // that comes with calling setState unconditionally inside an effect.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setIsOpen(false);
  }

  return (
    <header className='border-b border-line/15 bg-linen/95 backdrop-blur sticky top-0 z-40'>
      <div className='mx-auto max-w-6xl px-6 py-5 flex items-center justify-between'>
        <Link href='/' className='font-display text-2xl text-forest italic'>
          Elmsworth Properties
        </Link>

        <nav className='hidden sm:flex items-center gap-8 font-body text-sm text-forest/70'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='hover:text-forest transition-colors'
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href='/contact'
          className='hidden sm:inline-block font-body text-sm border border-forest px-5 py-2 hover:bg-forest hover:text-linen transition-colors'
        >
          Get in touch
        </Link>

        <button
          type='button'
          className='sm:hidden text-forest'
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <XIcon className='h-7 w-7' />
          ) : (
            <MenuIcon className='h-7 w-7' />
          )}
        </button>
      </div>

      {isOpen && (
        <div className='fixed inset-0 z-50 sm:hidden'>
          {/* Dimmed background — click to close */}
          <div
            className='absolute inset-0 bg-forest/40'
            onClick={() => setIsOpen(false)}
          />

          {/* Slide-down panel — light background at 60% opacity with a
              blur behind it, so it reads clearly over any page content
              (including a hero photo) rather than relying on a fully
              opaque fill. Inline backgroundColor is a deliberate
              fallback alongside the Tailwind class: rgba() guarantees
              the translucency renders even if a Tailwind opacity
              modifier on a custom color token ever fails to generate. */}
          <div
            className='relative bg-linen/60 backdrop-blur-md shadow-xl'
            style={{ backgroundColor: "rgba(244, 241, 234, 0.6)" }}
          >
            <div className='flex items-center justify-between px-6 py-5 border-b border-line/15'>
              <span className='font-display text-2xl text-forest italic'>
                Elmsworth Properties
              </span>
              <button
                type='button'
                onClick={() => setIsOpen(false)}
                aria-label='Close menu'
                className='text-forest'
              >
                <XIcon className='h-7 w-7' />
              </button>
            </div>
            <nav className='flex flex-col px-6 py-4 font-body text-base text-forest'>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className='py-3 border-b border-line/15 last:border-b-0 hover:text-forest/70 transition-colors'
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href='/contact'
                onClick={() => setIsOpen(false)}
                className='mt-4 border border-forest px-5 py-2.5 text-center text-forest hover:bg-forest hover:text-linen transition-colors'
              >
                Get in touch
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
// "use client";

// import Link from "next/link";
// import { useState } from "react";

// export default function Header() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className='border-b border-line/15 bg-linen/95 backdrop-blur sticky top-0 z-40'>
//       <div className='mx-auto max-w-6xl px-6 py-5 flex items-center justify-between'>
//         <Link
//           href='/'
//           className='font-display text-2xl text-forest italic'
//           onClick={() => setOpen(false)}
//         >
//           Elmsworth Properties
//         </Link>

//         <nav className='hidden sm:flex items-center gap-8 font-body text-sm text-forest/70'>
//           <Link href='/' className='hover:text-forest transition-colors'>
//             Home
//           </Link>
//           <Link
//             href='/listings'
//             className='hover:text-forest transition-colors'
//           >
//             Listings
//           </Link>
//           <Link href='/about' className='hover:text-forest transition-colors'>
//             About
//           </Link>
//           <Link href='/contact' className='hover:text-forest transition-colors'>
//             Contact
//           </Link>
//         </nav>

//         <Link
//           href='/contact'
//           className='hidden sm:inline-block font-body text-sm border border-forest px-5 py-2 hover:bg-forest hover:text-linen transition-colors'
//         >
//           Get in touch
//         </Link>

//         {/* Mobile menu toggle */}
//         <button
//           type='button'
//           onClick={() => setOpen((v) => !v)}
//           aria-label={open ? "Close menu" : "Open menu"}
//           aria-expanded={open}
//           className='sm:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-[5px]'
//         >
//           <span
//             className={`block w-6 h-0.5 bg-forest transition-transform duration-300 ${
//               open ? "translate-y-[7px] rotate-45" : ""
//             }`}
//           />
//           <span
//             className={`block w-6 h-0.5 bg-forest transition-opacity duration-300 ${
//               open ? "opacity-0" : "opacity-100"
//             }`}
//           />
//           <span
//             className={`block w-6 h-0.5 bg-forest transition-transform duration-300 ${
//               open ? "-translate-y-[7px] -rotate-45" : ""
//             }`}
//           />
//         </button>
//       </div>

//       {/* Mobile panel */}
//       <div
//         className={`sm:hidden overflow-hidden transition-[max-height] duration-300 ease-out border-t border-line/15 ${
//           open ? "max-h-80" : "max-h-0 border-t-0"
//         }`}
//       >
//         <nav className='flex flex-col px-6 py-4 font-body text-base text-forest/70'>
//           <Link
//             href='/'
//             onClick={() => setOpen(false)}
//             className='py-3 border-b border-line/10 hover:text-forest transition-colors'
//           >
//             Home
//           </Link>
//           <Link
//             href='/listings'
//             onClick={() => setOpen(false)}
//             className='py-3 border-b border-line/10 hover:text-forest transition-colors'
//           >
//             Listings
//           </Link>
//           <Link
//             href='/about'
//             onClick={() => setOpen(false)}
//             className='py-3 border-b border-line/10 hover:text-forest transition-colors'
//           >
//             About
//           </Link>
//           <Link
//             href='/contact'
//             onClick={() => setOpen(false)}
//             className='py-3 hover:text-forest transition-colors'
//           >
//             Contact
//           </Link>
//           <Link
//             href='/contact'
//             onClick={() => setOpen(false)}
//             className='mt-4 border border-forest px-5 py-2.5 text-center text-forest hover:bg-forest hover:text-linen transition-colors'
//           >
//             Get in touch
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// }
