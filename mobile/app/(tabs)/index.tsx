import IntroductionSection from "@/components/IntroductionSection/IntroductionSection";
import { View } from "react-native";

export default function HomeTabScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-gray-900">
      <IntroductionSection />
    </View>
  );
}
