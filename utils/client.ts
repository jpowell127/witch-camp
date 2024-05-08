import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03';

console.log('<---------o0o--------->');
console.log('projectId:', projectId);
console.log('<---------o0o--------->');

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
