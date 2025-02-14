import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import config from "@/config";

class ApiClient {
  private static instance: ApiClient;
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: config("VITE_API_BASE_URL"),
      timeout: 100000,
      headers: {
        "Content-type": "application/json",
        "x-api-key": config("VITE_API_KEY"),
      },
    });
  }

  public static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient();
    }

    return ApiClient.instance;
  }

  async get<T>(path: string, config?: AxiosRequestConfig) {
    const response = await this.axiosInstance.get<T>(path, config);
    return response.data;
  }

  async post<T>(
    path: string,
    data: Record<string, unknown>,
    config?: AxiosRequestConfig
  ) {
    const response = await this.axiosInstance.post<T>(path, data, config);
    return response.data;
  }

  async put<T>(
    path: string,
    data: Record<string, unknown>,
    config?: AxiosRequestConfig
  ) {
    const response = await this.axiosInstance.put<T>(path, data, config);
    return response.data;
  }

  async delete<T>(
    path: string,
    data: Record<string, unknown>,
    config?: AxiosRequestConfig
  ) {
    const response = await this.axiosInstance.put<T>(path, data, config);
    return response.data;
  }
}

export default ApiClient.getInstance();
