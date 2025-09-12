import axios, { Axios, AxiosInstance } from "axios";
import { AuthEndpoint } from "../../types";

/**
 * Сервис авторизации
 */
export class AuthService {
  constructor(private readonly http: Axios) {}

  /**
   * refreshToken
   */
  async refreshToken({
    refreshToken,
    endpoint = AuthEndpoint.PROD,
    type = "dev",
  }: {
    refreshToken: string;
    endpoint?: AuthEndpoint;
    type?: "dev" | "lk";
  }): Promise<{ AccessToken: string }> {
    if (type === "dev")
      return this.http
        .post<{ AccessToken: string }>(
          `${endpoint}/refresh?token=${refreshToken}`,
        )
        .then((r) => r.data);
    else
      return this.http
        .post<{ jwt: string }>(`https://lk-api.alor.ru/auth/actions/refresh`, {
          refreshToken,
        })
        .then((r) => ({ AccessToken: r.data.jwt }));
  }

  /**
   * twoFactorLogin
   */
  async twoFactorLogin({ login }: { login: string }): Promise<boolean> {
    return this.http
      .post<boolean>(
        `https://lk-api.alor.ru/auth/actions/2factor/?login=${login}`,
      )
      .then((r) => r.data);
  }

  /**
   * login
   */
  async login({
    login,
    password,
    type = "lk",
  }: {
    login: string;
    password: string;
    type?: "lk" | "sso";
  }): Promise<{ jwt: string; refreshToken: string }> {
    if (type === "lk") {
      return this.http
        .post<{ jwt: string; refreshToken: string }>(
          "https://lk-api.alor.ru/auth/actions/login",
          {
            credentials: {
              login,
              password,
              twoFactorPin: null,
            },
            requiredServices: ["clientApi", "Warp"],
          },
        )
        .then((res) => res.data);
    }
    return this.http
      .post<{ jwt: string; refreshToken: string }>(
        "https://lk-api.alor.ru/sso-auth/client",
        {
          credentials: {
            login,
            password,
            twoFactorPin: null,
          },
          client_id: "SingleSignOn",
          redirect_url: "//lk.alor.ru/",
        },
      )
      .then((res) => res.data);
  }
}
