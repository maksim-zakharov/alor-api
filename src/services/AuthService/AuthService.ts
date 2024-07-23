import axios, { AxiosInstance } from "axios";

/**
 * Сервис авторизации
 */
export class AuthService {
  constructor(private readonly http: AxiosInstance) {}

  /**
   * refreshToken
   */
  async refreshToken({
    refreshToken,
    type = "dev",
  }: {
    refreshToken: string;
    type?: "dev" | "lk";
  }): Promise<{ AccessToken: string }> {
    if (type === "dev")
      return axios
        .post<{ AccessToken: string }>(
          `https://oauth.alor.ru/refresh?token=${refreshToken}`,
        )
        .then((r) => r.data);
    else
      return axios
        .post<{ jwt: string }>(`https://lk-api.alor.ru/auth/actions/refresh`, {
          refreshToken,
        })
        .then((r) => ({ AccessToken: r.data.jwt }));
  }

  /**
   * twoFactorLogin
   */
  async twoFactorLogin({ login }: { login: string }): Promise<boolean> {
    return axios
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
      return axios
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
    return axios
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
