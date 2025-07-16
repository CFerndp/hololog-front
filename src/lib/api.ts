import { config } from "./config";

export const apiClient = {
  baseURL: config.apiUrl,

  async get(endpoint: string) {
    const response = await fetch(`${this.baseURL}${endpoint}`);
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
