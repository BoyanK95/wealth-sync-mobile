import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useTranslation } from "react-i18next";
import { ArrowRight, Shield, Zap, Smartphone } from "lucide-react-native";
import { useAuth } from "@/hooks/use-auth";
import { Routes } from "@/constants/routes";

export default function IntroductionSection() {
  const { t } = useTranslation();
  const router = useRouter();
  const { user } = useAuth();

  return (
    <View className="w-full px-4 py-10">
      {/* Welcome */}
      {user && (
        <Text className="mb-4 text-base">
          {t("IntroductionSection.welcomeBack")} [user.email ?
          <Text className="font-bold text-green-700">{user.email}</Text> : null]
        </Text>
      )}
      {/* Image */}
      <View className="items-center justify-center">
        <Image
          source={require("@/assets/images/calculatior.png")}
          className="h-[250px] w-full"
          resizeMode="contain"
        />
      </View>

      <View className="flex flex-col gap-6">
        {/* Text Content */}
        <View className="gap-4">
          <Text className="text-3xl font-bold">
            {t("IntroductionSection.title")}
          </Text>

          <Text className="text-base text-gray-500">
            {t("IntroductionSection.description")}
          </Text>

          {/* CTA */}
          <Pressable
            onPress={() => router.push(user ? Routes.DASHBOARD : Routes.LOGIN)}
            className="mt-2 flex-row items-center justify-center rounded-lg bg-green-700 px-5 py-3"
          >
            <Text className="text-white text-base font-semibold">
              {user
                ? t("IntroductionSection.goToDashboard")
                : t("IntroductionSection.getStarted")}
            </Text>
            <ArrowRight size={18} color="white" style={{ marginLeft: 8 }} />
          </Pressable>

          {/* Features */}
          <View className="mt-4 flex-row justify-between">
            <View className="flex-row items-center gap-1">
              <Shield size={16} color="#15803d" />
              <Text className="text-xs">
                {t("IntroductionSection.features.secure")}
              </Text>
            </View>

            <View className="flex-row items-center gap-1">
              <Zap size={16} color="#15803d" />
              <Text className="text-xs">
                {t("IntroductionSection.features.realtime")}
              </Text>
            </View>

            <View className="flex-row items-center gap-1">
              <Smartphone size={16} color="#15803d" />
              <Text className="text-xs">
                {t("IntroductionSection.features.mobile")}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
