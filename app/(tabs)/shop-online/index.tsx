import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";

const ShopOnlinePage = () => {
  return (
    <View>
      <StatusBar style="auto" />
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>
          Shop Online
        </Text>
      </View>
    </View>
  );
};

export default ShopOnlinePage;

const styles = StyleSheet.create({
  greetingContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  greetingText: {
    color: Colors.primary,
    fontSize: 16,
  },
});
