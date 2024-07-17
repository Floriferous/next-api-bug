
const logStuff = () => {
  console.log('yooo');
};

export const apiRoute =
  async (handler: any) =>
  async (...args) => {
    logStuff();
    return handler(...args);
  };
