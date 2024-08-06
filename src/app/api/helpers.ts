"use server";

import { NextRequest } from "next/server";

const logStuff = () => {
  console.log('yooo');
};

export const makeApiRoute =
  (handler: any) => async (request: NextRequest, context) => {
    logStuff();
    return handler(request, context);
  };
