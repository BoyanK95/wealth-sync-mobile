import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

export default function App() {
  const t = useTranslation('home').t;
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-green-500">
        {t("welcome")}
      </Text>
    </View>
  );
}
