import { config } from "./config";

export const apiClient = {
  baseURL: config.apiUrl,

  async get(endpoint: string, params?: Record<string, string>) {
    const url = new URL(`${this.baseURL}${endpoint}`);
    Object.entries(params || {}).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  },

  async post(endpoint: string, data: unknown) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  },
};
