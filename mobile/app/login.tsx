import { useState } from "react";
import { View, TextInput, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@/hooks/use-auth";
import { useTheme } from "@/context/ThemeContext";

export default function Login() {
  const { login } = useAuth();
  const { theme, colorScheme, toggleTheme } = useTheme();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleLogin = async () => {
    if (submitting) return;
    if (!email.trim() || !password.trim()) {
      alert("Please fill in all fields");
      return;
    }
    setSubmitting(true);
    try {
      await login(email, password);
      router.replace({ pathname: "/" } as any);
    } catch {
      alert("Login failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View className="flex-1 bg-slate-50 px-6 py-10 dark:bg-slate-950">
      <View className="mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40 dark:border-slate-700 dark:bg-slate-900 dark:shadow-black/20">
        <Text className="text-3xl font-bold text-slate-900 dark:text-white">Welcome back</Text>
        <Text className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Secure login to continue to your dashboard.
        </Text>

        <View className="mt-6 space-y-4">
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            className="h-14 rounded-2xl border border-slate-300 bg-white px-4 text-slate-900 shadow-sm dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            autoCapitalize="none"
            keyboardType="email-address"
            placeholderTextColor="#8b95a1"
          />
          <TextInput
            placeholder="Password"
            value={password}
            secureTextEntry
            onChangeText={setPassword}
            className="h-14 rounded-2xl border border-slate-300 bg-white px-4 text-slate-900 shadow-sm dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            placeholderTextColor="#8b95a1"
          />
        </View>

        <Pressable
          onPress={handleLogin}
          disabled={submitting}
          className="mt-6 rounded-2xl bg-slate-900 px-4 py-4 items-center justify-center disabled:opacity-50 dark:bg-white"
          style={{ opacity: submitting ? 0.6 : 1 }}
        >
          <Text className="text-base font-semibold text-white dark:text-slate-950">
            {submitting ? "Logging in..." : "Login"}
          </Text>
        </Pressable>

        <View className="mt-5 flex-row justify-center gap-1">
          <Text className="text-sm text-slate-600 dark:text-slate-400">Don’t have an account?</Text>
          <Pressable onPress={() => router.replace({ pathname: "/register" } as any)}>
            <Text className="text-sm font-semibold text-slate-900 dark:text-white">Register</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
