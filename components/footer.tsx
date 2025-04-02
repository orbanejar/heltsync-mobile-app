import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Colors } from "@/config";

interface FooterItem {
  label: string;
  icon: any;
  link: string;
}

interface FooterProps {
  items: FooterItem[];
}

const Footer: React.FC<FooterProps> = ({ items }) => {
  const router = useRouter();

  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerBackground}>
        {items.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.footerItem}
            // onPress={() => router.push(item.link)}
          >
            <Image source={item.icon} style={styles.icon} />
            <Text style={styles.label} numberOfLines={2}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 140,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: Colors.lightGray,
    alignItems: "center",
    justifyContent: "center",
  },
  footerBackground: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 16,
    padding: 10,
    borderRadius: 16,
    backgroundColor: Colors.lightGray,
    width: "90%",
  },
  footerItem: {
    alignItems: "center",
    width: 90,
  },
  icon: {
    width: 40,
    height: 40,
  },
  label: {
    color: Colors.darkGray,
    fontSize: 13,
    marginTop: 5,
    textAlign: "center",
  },
});

export default Footer;