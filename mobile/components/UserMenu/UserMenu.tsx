import React from "react";
import { TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useAuth } from "@/hooks/use-auth";
import { Routes } from "@/constants/routes";

interface UserMenuProps {
  style?: any;
}

export default function UserMenu({ style }: UserMenuProps) {
  const router = useRouter();
  const { logout } = useAuth();

  const handlePress = () => {
    Alert.alert("User Menu", "Choose an option", [
      {
        text: "Profile",
        onPress: () => {
          // TODO: Navigate to profile screen
          Alert.alert("Profile", "Profile screen not implemented yet");
        },
      },
      {
        text: "Settings",
        onPress: () => {
          router.push("/settings");
        },
      },
      {
        text: "Logout",
        onPress: async () => {
          await logout();
          router.replace(Routes.LOGIN);
        },
        style: "destructive",
      },
      {
        text: "Cancel",
        style: "cancel",
      },
    ]);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={style}>
      <IconSymbol name="person.circle.fill" size={34} color={"green"} />
    </TouchableOpacity>
  );
}
