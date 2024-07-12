import axios, { AxiosInstance } from "axios";

/**
 * Сервис авторизации
 */
export class AuthService {
  constructor(private readonly http: AxiosInstance) {}

  /**
   * Создание рыночной заявки
   */
  async refreshToken({refreshToken}: {refreshToken: string}): Promise<{AccessToken: string}> {
    return axios.post<{AccessToken: string}>(
        `https://oauth.alor.ru/refresh?token=${refreshToken}`).then(r => r.data);
  }
}
