import { Routes } from "@/constants/routes";
import { Link, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

const SubscritptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>SubscritptionDetails: {id}</Text>
      <Link href={Routes.HOME}>Go back to Home</Link>
    </View>
  );
};

export default SubscritptionDetails;
