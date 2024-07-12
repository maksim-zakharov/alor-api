import { AxiosInstance, AxiosRequestConfig } from "axios";

export const refreshTokenMiddleware = ({
  axios,
  refreshTokenCallback,
  callback,
}: {
  axios: AxiosInstance;
  refreshTokenCallback: () => Promise<string>;
  callback?: (token: string) => void;
}) => {
  let isRefreshing = false;
  let failedQueue: any[] = [];

  const processQueue = (error, token?: string) => {
    failedQueue.forEach((prom) => {
      if (error) {
        prom.reject(error);
      } else {
        prom.resolve(token);
      }
    });

    failedQueue = [];
  };

  const refreshTokenRequest = (
    originalRequest?: AxiosRequestConfig,
    resolve?: any,
    reject?: any,
  ) =>
    refreshTokenCallback()
      .then((AccessToken) => {
        if (callback) {
          callback(AccessToken);
        }
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + AccessToken;
        if (originalRequest && originalRequest.headers)
          originalRequest.headers["Authorization"] = "Bearer " + AccessToken;
        processQueue(null, AccessToken);
        if (originalRequest && resolve) resolve(axios(originalRequest));
      })
      .catch((err) => {
        processQueue(err, null);

        if (reject) reject(err);
      })
      .then(() => {
        isRefreshing = false;
      });

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (err) => {
      const originalRequest = err.config as AxiosRequestConfig & {
        _retry: boolean;
      };

      if (
        err.response &&
        err.response.status === 401 &&
        !originalRequest._retry
      ) {
        if (isRefreshing) {
          return new Promise(function (resolve, reject) {
            failedQueue.push({ resolve, reject });
          })
            .then((token) => {
              originalRequest.headers &&
                (originalRequest.headers["Authorization"] = "Bearer " + token);
              return axios(originalRequest);
            })
            .catch((err) => {
              return Promise.reject(err);
            });
        }

        originalRequest._retry = true;
        isRefreshing = true;

        return new Promise(function (resolve, reject) {
          refreshTokenRequest(originalRequest, resolve, reject);
        });
      }

      if (
        err.response &&
        (err.response.status > 401 || err.response.status === 400)
      ) {
        return Promise.reject({
          status: err.response.status,
          message: err.response.data.message,
        });
      }

      return Promise.reject(err);
    },
  );

  return refreshTokenRequest;
};
