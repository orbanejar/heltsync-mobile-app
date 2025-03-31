import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { Icons } from "@/config";

type HeaderRightProps = {
  notificationCount: number;
  onHomePress: () => void;
};

const HeaderRight: React.FC<HeaderRightProps> = ({ notificationCount, onHomePress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={Icons.bell} style={styles.icon} resizeMode="contain" />
        {notificationCount > 0 && (
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>
              {notificationCount > 9 ? "9+" : notificationCount}
            </Text>
          </View>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={onHomePress}>
        <Image source={Icons.home} style={styles.icon} resizeMode="contain" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={Icons.chat} style={styles.icon} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: 16,
    width: 30,
    height: 30,
  },
  notificationBadge: {
    position: "absolute",
    right: 1,
    top: 1,
    borderRadius: 10,
    width: 12,
    height: 12,
    justifyContent: "center",
    alignItems: "center"
  },
  notificationText: {
    color: "white",
    fontSize: 7,
    fontWeight: "bold",
  },
});