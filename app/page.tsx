import Image from 'next/legacy/image';
import witchesPic from '../public/witches.webp';

export default function Home() {
  return (
    <>
      <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
        <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20 bg-black'>
          Announcing our next Witch Camp Session.{' '}
          <a href='#' className='font-semibold text-white'>
            <span className='absolute inset-0' aria-hidden='true' />
            Read more <span aria-hidden='true'>&rarr;</span>
          </a>
        </div>
      </div>
      <div className='text-center'>
        <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
          Witch Camp
        </h1>
        <p className='mt-6 text-lg leading-8 text-gray-300'>
          Join us under the moonlit skies for nightly rituals that celebrate the
          cycles of the earth and the magic within us all. Connect with a
          community of like-minded souls as we weave spells, share stories, and
          revel in the mystical energies that bind us.
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <a href='#' className='text-sm font-semibold leading-6 text-white'>
            Learn more <span aria-hidden='true'>→</span>
          </a>
        </div>
      </div>
    </>
  );
}
