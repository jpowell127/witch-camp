const About = () => {
  return (
    <div className='text-center'>
      <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
        About Witch Camp
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
  );
};

export default About;
