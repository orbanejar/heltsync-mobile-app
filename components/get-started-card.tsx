import { Colors, Strings } from "@/config";
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

interface GetStartedCardProps {
  title: string;
  subtitle: string;
  image: any;
  buttonText: string;
  buttonColor?: string;
  onPress: () => void;
}

const GetStartedCard: React.FC<GetStartedCardProps> = ({
  title,
  subtitle,
  image,
  buttonText,
  buttonColor,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      {/* Title and subtitle */}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>

      {/* Display image */}
      <Image source={image} style={styles.image} resizeMode="contain" />

      {/* Action button */}
      <TouchableOpacity style={[styles.button, { backgroundColor: buttonColor || Colors.slateBlue }]} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>

      {/* Terms and conditions message */}
      <View style={styles.termsContainer}>
        <Text style={styles.termsText}>{Strings.auth.getStartedMessage} </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={[styles.termsText, { color: Colors.brightSkyBlue }]}>
            {Strings.auth.termsAndConditions}
          </Text>
        </TouchableOpacity>
        <Text style={styles.termsText}> and </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={[styles.termsText, { color: Colors.brightSkyBlue }]}>
            {Strings.auth.privacyPolicy}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GetStartedCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 2,
    color: Colors.gray,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: Colors.gray,
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 400,
    marginBottom: 30,
  },
  button: {
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 10,
    width: 300,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: "600",
  },
  termsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  termsText: {
    fontSize: 12,
    color: Colors.gray,
  },
});
