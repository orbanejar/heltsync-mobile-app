import React from "react";
import { useRouter } from "expo-router";
import { Icons, Strings } from "@/config";
import GetStartedCard from "@/components/get-started-card";

const BusinessRegistration = () => {
  const router = useRouter();

  return (
    <GetStartedCard
      title={Strings.auth.busineesVerification}
      subtitle={Strings.auth.verificationMessage}
      image={Icons.businessVerification}
      buttonText={Strings.auth.getStarted}
      onPress={() => {
        console.log("Get Started Button Pressed");
      }}
    />
  );
};

export default BusinessRegistration;
