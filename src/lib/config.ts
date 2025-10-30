// src/lib/config.ts
const isLocalTesting = process.env.NEXT_PUBLIC_LOCAL_TESTING === "true";

export const API_URL = isLocalTesting
  ? process.env.NEXT_PUBLIC_TEST_API_URL ?? "http://localhost:5020/api"
  : process.env.NEXT_PUBLIC_PROD_API_URL ?? "https://api.savants.cc/api";
