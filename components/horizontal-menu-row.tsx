import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Colors, Icons } from "@/config";

export type MenuItem = {
  id: number;
  label: string;
  icon: any;
};

type HorizontalMenuRowProps = {
  title: string;
  items: MenuItem[];
  showArrow?: boolean;
};

const HorizontalMenuRow: React.FC<HorizontalMenuRowProps> = ({
  title,
  items,
  showArrow = false,
}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.menuRow}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {items.map((item) => (
            <TouchableOpacity key={item.id} style={styles.menuItem}>
              <View style={styles.iconContainer}>
                <Image source={item.icon} style={styles.icon} />
              </View>
              <Text style={styles.label} numberOfLines={2}>
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        {showArrow && (
          <View style={styles.floatingArrow}>
            <Image
              source={Icons.arrowLeft}
              style={styles.floatingIcon}
            />
          </View>
        )}
      </View>
      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 12,
    color: Colors.primary,
  },
  menuRow: {
    flexDirection: "row",
    position: "relative",
  },
  menuItem: {
    alignItems: "center",
    marginRight: 12,
    width: 60,
  },
  iconContainer: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    padding: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
  label: {
    fontSize: 10,
    textAlign: "center",
    marginTop: 8,
  },
  floatingArrow: {
    position: "absolute",
    right: 0,
    transform: [{ translateY: 15 }],
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  floatingIcon: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
  separator: {
    height: 0.5,
    backgroundColor: Colors.black,
    marginTop: 12,
    width: "100%",
  },
});

export default HorizontalMenuRow;
