import { useEffect, useState, ReactNode } from "react";
import { View, ActivityIndicator } from "react-native";
import "@/i18n";

export default function AppWrapper({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
      setReady(true);
    };
    init();
  }, []);

  if (!ready) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return children;
}
