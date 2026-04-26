import { useContext, useState } from "react";
import { View, TextInput, Button } from "react-native";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "expo-router";

export default function Login() {
  const { login } = useContext(AuthContext);
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
      router.replace("/"); // goes to (tabs)
    } catch {
      alert("Login failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button
        title={submitting ? "Logging in..." : "Login"}
        disabled={submitting}
        onPress={handleLogin}
      />
    </View>
  );
}
