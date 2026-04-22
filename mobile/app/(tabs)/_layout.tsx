import { Redirect, Tabs, useRouter } from "expo-router";
import React, { useContext } from "react";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { AuthContext } from "@/context/AuthContext";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <ThemedView>
        <ThemedText>Loading...</ThemedText>
      </ThemedView>
    );
  }

  // if (!user) {
  //   return <Redirect href="/login" />;
  // }
  console.log(user);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
