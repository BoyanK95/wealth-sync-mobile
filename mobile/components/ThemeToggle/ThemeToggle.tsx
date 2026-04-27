import { TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "@/context/ThemeContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors } from "@/constants/theme";

const ThemeToggle = () => {
  const colorScheme = useColorScheme();
  const { toggleTheme } = useTheme();

  return (
    <TouchableOpacity onPress={toggleTheme} style={{ marginRight: 16 }}>
      <MaterialIcons
        name={colorScheme === "dark" ? "wb-sunny" : "brightness-2"}
        size={24}
        color={Colors[colorScheme ?? "light"].text}
      />
    </TouchableOpacity>
  );
};

export default ThemeToggle;
