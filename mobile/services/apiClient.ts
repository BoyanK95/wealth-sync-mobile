import * as SecureStore from "expo-secure-store";
import { authService } from "./authService";

const API_URL = process.env.EXPO_PUBLIC_API_URL!;

async function refreshToken() {
  const refreshToken = await authService.getRefreshToken();

  if (!refreshToken) throw new Error("No refresh token available");

  const res = await fetch(`${API_URL}/api/auth/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refreshToken }),
  });

  if (!res.ok) throw new Error("Refresh failed");

  const { accessToken } = await res.json();

  await SecureStore.setItemAsync("accessToken", accessToken);

  return accessToken;
}

export async function apiFetch(url: string, options: any = {}) {
  let token = await authService.getAccessToken();

  let res = await fetch(`${API_URL}${url}`, {
    ...options,
    headers: {
      ...(options.headers || {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  if (res.status === 401) {
    token = await refreshToken();

    res = await fetch(`${API_URL}${url}`, {
      ...options,
      headers: {
        ...(options.headers || {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
  }

  return res;
}
