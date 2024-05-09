import { client } from '@/utils/client';

type AboutPage = {
  title: string;
  text: string;
};

export default async function About() {
  const [{ title, text }] = await client.fetch<AboutPage[]>(
    `*[_type == "page" && slug.current == "about"] {
    title,
    "text": content[0].children[0].text
  }`,
    {},
    {
      next: {
        revalidate: 60,
      },
    },
  );

  return (
    <div className='text-center'>
      <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
        {title}
      </h1>
      <p className='mt-6 text-lg leading-8 text-gray-300'>{text}</p>
      <div className='mt-10 flex items-center justify-center gap-x-6'>
        <a href='#' className='text-sm font-semibold leading-6 text-white'>
          Learn more <span aria-hidden='true'>→</span>
        </a>
      </div>
    </div>
  );
}
