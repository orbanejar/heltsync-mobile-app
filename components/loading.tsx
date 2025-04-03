import React from "react";
import { Modal, View, ActivityIndicator, Text, StyleSheet } from "react-native";
import { Strings, Colors } from "@/config";

interface LoadingProps {
  visible: boolean;
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({
  visible,
  message = Strings.general.loading,
}) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.loadingOverlay}>
        <View style={styles.loadingContent}>
          <ActivityIndicator size="large" color={Colors.brightSkyBlue} />
          <Text style={styles.loadingText}>{message}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  loadingOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingContent: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: Colors.gray,
  },
});

export default Loading;
