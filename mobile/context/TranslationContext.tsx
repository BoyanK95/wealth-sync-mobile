import { useEffect, useState, ReactNode } from "react";
import { View, ActivityIndicator } from "react-native";
import "@/i18n";
import { i18nReady } from "@/i18n";

export default function AppWrapper({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      await i18nReady;
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
