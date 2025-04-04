import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Colors, Icons } from "@/config";

interface AccountSelectionCardProps {
  title: string;
  description: string;
  description2?: string; // Optional second description
  buttonText: string;
  onPress: () => void;
}

const AccountSelectionCard: React.FC<AccountSelectionCardProps> = ({
  title,
  description,
  description2,
  buttonText,
  onPress,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      {description2 && <Text style={styles.description}>{description2}</Text>}

      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
        <Image
          source={Icons.forwardWithBorder}
          style={styles.icon}
          tintColor={Colors.brightSkyBlue}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.offWhite,
    padding: 20,
    borderRadius: 10,
    marginBottom: 32,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.gray,
    marginBottom: 8,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: Colors.gray,
    textAlign: "center",
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: Colors.brightSkyBlue,
    marginRight: 8,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});

export default AccountSelectionCard;
