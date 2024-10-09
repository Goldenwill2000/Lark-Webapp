export const debugPrint = (...args: any) => {
  if (process.env.NEXT_PUBLIC_NODE_ENV === "development") {
    console.log(...args);
  }
};

export const isDev = () => {
  console.log(process.env.NODE_ENV);

  return (
    !process.env.NEXT_PUBLIC_NODE_ENV ||
    process.env.NEXT_PUBLIC_NODE_ENV === "development"
  );
};

export const getEndpoint = () => {
  if (isDev()) {
    return process.env.NEXT_PUBLIC_LOCAL_ENDPOINT;
  } else {
    return process.env.NEXT_PUBLIC_SERVER_ENDPOINT;
  }
};
