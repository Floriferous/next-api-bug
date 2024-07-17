import { apiRoute } from "../helpers";

export const GET = apiRoute(async () => {
  console.log('wut?');
  
  return new Response({ hello: 'world' });
})