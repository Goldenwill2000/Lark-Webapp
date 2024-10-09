import { isDev } from "./Utilities";
console.log(process.env.NEXT_PUBLIC_TALENOX_REDIRECT_URI_MOCK);
export const APIPaths = {
  //LARK API
  larkEndpoint: "https://open.larksuite.com/open-apis/",
  larkOAuth2Endpoint: `https://open.larksuite.com/open-apis/authen/v1/authorize?app_id=${
    process.env.NEXT_PUBLIC_LARK_APP_ID
  }&redirect_uri=${
    !isDev()
      ? process.env.NEXT_PUBLIC_LARK_REDIRECT_URI
      : process.env.NEXT_PUBLIC_LARK_REDIRECT_URI_MOCK
  }&state=test`,

  //TALENOX API
  talenoxEndpoint: "https://api.talenox.com/api/v2/",
  talenoxOAuth2Endpoint: `https://app.talenox.com/oauth/authorize?client_id=${
    process.env.NEXT_PUBLIC_TALENOX_CLIENT_UID
  }&response_type=code&redirect_uri=${
    isDev()
      ? process.env.NEXT_PUBLIC_TALENOX_REDIRECT_URI_MOCK
      : process.env.NEXT_PUBLIC_TALENOX_REDIRECT_URI
  }&scope=profile&response_type=code`,

  talenoxGetEmployees: "employees",
  talenoxGetAccessToken: "access_token",

  //==================================================================

  //Middleware TALENOX
  getEmployees: "Talenox/GetEmployees",
  getAccessToken: "Talenox/GetAccessToken",
} as const;

export type APIPaths = (typeof APIPaths)[keyof typeof APIPaths];
