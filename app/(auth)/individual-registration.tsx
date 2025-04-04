import React from "react";
import { useRouter } from "expo-router";
import { Colors, Icons, Strings } from "@/config";
import GetStartedCard from "@/components/get-started-card";

const IndividualRegistration = () => {
  const router = useRouter();

  return (
    <GetStartedCard
      title={Strings.auth.identityVerification}
      subtitle={Strings.auth.verificationMessage}
      image={Icons.identityVerification}
      buttonText={Strings.auth.getStarted}
      buttonColor={Colors.brightSkyBlue}
      onPress={() => {
        console.log("Get Started Button Pressed");
      }}
    />
  );
};

export default IndividualRegistration;
