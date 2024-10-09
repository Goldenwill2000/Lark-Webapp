import { isDev } from "./Utilities";

export const APIPaths = {
  //LARK API
  larkEndpoint: "https://open.larksuite.com/open-apis/",
  larkOAuth2Endpoint: `https://open.larksuite.com/open-apis/authen/v1/authorize?app_id=${
    process.env.LARK_APP_ID
  }&redirect_uri=${
    !isDev()
      ? process.env.LARK_REDIRECT_URI
      : process.env.LARK_REDIRECT_URI_MOCK
  }&state=test`,

  //TALENOX API
  talenoxEndpoint: "https://api.talenox.com/api/v2/",
  talenoxOAuth2Endpoint: `https://app.talenox.com/oauth/authorize?client_id=${
    process.env.TALENOX_CLIENT_UID
  }&response_type=code&redirect_uri=${
    isDev()
      ? process.env.TALENOX_REDIRECT_URI_MOCK
      : process.env.TALENOX_REDIRECT_URI
  }&scope=profile&response_type=code`,

  talenoxGetEmployees: "employees",
  talenoxGetAccessToken: "access_token",

  //==================================================================

  //Middleware TALENOX
  getEmployees: "Talenox/GetEmployees",
  getAccessToken: "Talenox/GetAccessToken",
} as const;

export type APIPaths = (typeof APIPaths)[keyof typeof APIPaths];
