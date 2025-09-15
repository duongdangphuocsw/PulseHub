export const logger = {
  log: (message: any, ...args: any[]) => {
    console.log(message, ...args);
  },
  error: (error: any, ...args: any[]) => {
    console.error(error, ...args);
  },
};
