import * as SecureStore from "expo-secure-store";

const API_URL = process.env.EXPO_PUBLIC_API_URL!;

if (!API_URL) {
  throw new Error(
    "Missing EXPO_PUBLIC_API_URL in your environment variables.",
  );
}

export const authService = {
  async login(email: string, password: string) {
    const res = await fetch(`${API_URL}/api/auth/mobile-login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) throw new Error("Login failed");

    const data = await res.json();

    if (!data.accessToken || !data.refreshToken) {
      throw new Error("Invalid login response");
    }

    await SecureStore.setItemAsync("accessToken", data.accessToken);
    await SecureStore.setItemAsync("refreshToken", data.refreshToken);

    return data.user;
  },

  async register(name: string, email: string, password: string) {
    const res = await fetch(`${API_URL}/api/auth/mobile-register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (!res.ok) {
      throw new Error("Registration failed");
    }

    const data = await res.json();

    if (!data.accessToken || !data.refreshToken) {
      throw new Error("Invalid registration response");
    }

    await SecureStore.setItemAsync("accessToken", data.accessToken);
    await SecureStore.setItemAsync("refreshToken", data.refreshToken);

    return data.user;
  },

  async logout() {
    await SecureStore.deleteItemAsync("accessToken");
    await SecureStore.deleteItemAsync("refreshToken");
  },

  async getAccessToken() {
    return SecureStore.getItemAsync("accessToken");
  },

  async getRefreshToken() {
    return SecureStore.getItemAsync("refreshToken");
  },
};
