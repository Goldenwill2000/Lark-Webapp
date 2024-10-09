import { APIPaths } from "./Paths";
import { debugPrint, getEndpoint } from "./Utilities";

export const TokenType = {
  NONE: "",
  TALENOX: "Talenox",
  LARK: "Lark",
};

const callAPI = async (
  url: string,
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" = "GET",
  headers: Record<string, string> = {},
  body?: any,
  responseType: "json" | "text" | "blob" = "json"
) => {
  const requestOptions: any = {
    method: method,
    headers: headers,
  };

  if (body) requestOptions.body = JSON.stringify(body);

  try {
    const result = await fetch(url, requestOptions);
    console.log(result);

    if (!result.ok) {
      throw new Error(`Request failed with status ${result.status}`);
    }

    if (responseType === "json") {
      try {
        return await result.json();
      } catch (err) {
        return null;
      }
    } else if (responseType === "text") {
      return await result.text();
    } else if (responseType === "blob") {
      return await result.blob();
    }
    return result;
  } catch (error) {
    throw error;
  }
};

// Function to construct headers
const constructHeader = (
  auth: boolean = false,
  tokenType: string = TokenType.NONE,
  contentType: string = "application/json"
) => {
  const headers: Record<string, string> = {};

  // Add authorization header if auth is true
  if (auth) {
    const accessToken =
      tokenType === TokenType.TALENOX
        ? sessionStorage.getItem("talendoxAccessToken")
        : sessionStorage.getItem("larkAccessToken");
    headers["Authorization"] = `Bearer ${accessToken}`;
  }

  // Conditionally set the Content-Type header
  if (contentType && contentType !== "auto")
    headers["Content-Type"] = contentType;

  return headers;
};

const constructTarget = (
  path: APIPaths,
  params?: string | string[],
  query?: Record<string, any> | string
) => {
  let target = `${process.env.LOCAL_ENDPOINT}${path}`;
  console.log(target);

  if (params) {
    if (typeof params === "string") {
      target = `${target}/${params}`;
    } else if (Array.isArray(params)) {
      target = `${target}/${params.join("/")}`;
    }
  }

  if (query) {
    if (typeof query === "string") {
      target = `${target}?${query}`;
    } else if (typeof query === "object") {
      target = `${target}?${new URLSearchParams(query).toString()}`;
    }
  }

  return target;
};

export const getEmployees = () => {
  return callAPI(
    constructTarget(APIPaths.getEmployees),
    "GET",
    constructHeader(false)
  );
};

export const getTalenoxAccessToken = (code: string) => {
  return callAPI(
    constructTarget(APIPaths.getAccessToken),
    "POST",
    constructHeader(true),
    { code: code }
  );
};

// export const getEmergencyCentres = () => {
//   return callAPI(
//     constructTarget(APIPaths.emergencyCenterGet),
//     "POST",
//     constructHeader(false),
//     {}
//   );
// };

// export const ambulaceBookingCheck = (payload: any) => {
//   return callAPI(
//     constructTarget(APIPaths.ambulanceBookingCheck),
//     "POST",
//     constructHeader(false),
//     payload
//   );
// };
