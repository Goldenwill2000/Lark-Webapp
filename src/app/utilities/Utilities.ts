export const debugPrint = (...args: any) => {
  if (process.env.NODE_ENV === "development") {
    console.log(...args);
  }
};

export const isDev = () => {
  return !process.env.NODE_ENV || process.env.NODE_ENV === "development";
};

export const getEndpoint = () => {
  if (isDev()) {
    return process.env.NEXT_PUBLIC_LOCAL_ENDPOINT;
  } else {
    return process.env.NEXT_PUBLIC_SERVER_ENDPOINT;
  }
};
