export const config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api",
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000",
} as const;
