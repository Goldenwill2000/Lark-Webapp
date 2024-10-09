export const debugPrint = (...args: any) => {
  if (process.env.NODE_ENV === "development") {
    console.log(...args);
  }
};

export const isDev = () => {
  console.log(process.env.NODE_ENV);
  return !process.env.NODE_ENV || process.env.NODE_ENV === "development";
};

export const getEndpoint = () => {
  if (isDev()) {
    return process.env.LOCAL_ENDPOINT;
  } else {
    return process.env.SERVER_ENDPOINT;
  }
};
