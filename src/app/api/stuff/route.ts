import { makeApiRoute } from "../helpers";

// export const GET = apiRoute(async () => {
//   console.log('wut?');
  
//   return new Response({ hello: 'world' });
// })

const handler = () => {
  console.log('wut?');
  return new Response({ hello: 'world' });
}

// export async function GET(request: Request) {
//   return apiRoute(handler, request)
// }

export const GET = makeApiRoute(() => {
  console.log('wut?');
  return new Response({ hello: 'world' });
})