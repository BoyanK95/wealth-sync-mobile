import IntroductionSection from "@/components/IntroductionSection/IntroductionSection";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

export default function App() {
  const { t } = useTranslation();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <IntroductionSection />
    </View>
  );
}
