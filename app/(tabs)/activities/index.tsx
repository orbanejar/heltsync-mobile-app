import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";

const ActivitiesPage = () => {
  return (
    <View>
      <StatusBar style="auto" />
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>
          Activities
        </Text>
      </View>
    </View>
  );
};

export default ActivitiesPage;

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