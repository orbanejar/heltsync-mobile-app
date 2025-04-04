import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useAuth } from "../../context/auth-context";
import { Colors, Strings, Icons } from "@/config";
import Loading from "@/components/loading";

export default function LoginScreen() {
  const router = useRouter();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSignIn = () => {
    setLoading(true);
    // Simulate the login delay for now...
    setTimeout(() => {
      login();
      setLoading(false);
    }, 2000);
  };

  const handleAccountCreation = () => {
    router.push("/account-creation");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar style="auto" />

      <View style={styles.content}>
        <Image source={Icons.logoWithTagline} style={styles.logo} />

        <View style={styles.card}>
          <View style={styles.avatarContainer}>
            <Image source={Icons.person} style={styles.avatarIcon} />
          </View>

          <View style={styles.inputWrapper}>
            <Image source={Icons.person} style={styles.inputIcon} />
            <TextInput
              style={[styles.textInput, { flex: 1 }]}
              placeholder={Strings.auth.username}
              placeholderTextColor={Colors.gray}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Image source={Icons.lock} style={styles.inputIcon} />
            <TextInput
              style={[styles.textInput, { flex: 1 }]}
              placeholder={Strings.auth.password}
              placeholderTextColor={Colors.gray}
              secureTextEntry
            />
          </View>

          <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
            <Text style={styles.signInButtonText}>{Strings.auth.signin}</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>
              {Strings.auth.forgotPassword}
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.signUpInfo}>{Strings.auth.createAccountMessage}</Text>

        <TouchableOpacity onPress={handleAccountCreation}>
          <Text style={styles.createAccountText}>
            {Strings.auth.createAccount}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {Strings.auth.allRightsReserved} {new Date().getFullYear()}
        </Text>
        <Text style={styles.footerText}>
          {Strings.auth.appVersion} 1.0.0
        </Text>
      </View>

      <Loading visible={loading} message={Strings.general.signingIn} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 32,
    position: "relative", // Enables absolute positioning for footer
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 80, // Extra padding so content doesn't overlap footer
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: "contain",
    marginBottom: 60,
  },
  card: {
    width: "100%",
    backgroundColor: Colors.whiteSmoke,
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 32,
    alignItems: "center",
    marginBottom: 30,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: Colors.silverGray,
  },
  avatarIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    tintColor: Colors.silverGray,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: Colors.platinum,
    borderRadius: 20,
    marginVertical: 6,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: Colors.platinum,
  },
  inputIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    tintColor: Colors.gray,
    marginRight: 10,
  },
  textInput: {
    height: 40,
    fontSize: 14,
    color: Colors.gray,
  },
  signInButton: {
    backgroundColor: Colors.brightSkyBlue,
    width: "100%",
    borderRadius: 30,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 16,
    marginBottom: 16,
  },
  signInButtonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: "600",
  },
  forgotPasswordText: {
    color: Colors.gray,
    fontSize: 14,
    marginTop: 4,
  },
  signUpInfo: {
    textAlign: "center",
    fontSize: 14,
    color: Colors.gray,
    marginBottom: 8,
  },
  createAccountText: {
    fontSize: 16,
    color: Colors.brightSkyBlue,
    marginBottom: 30,
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
    color: Colors.gray,
  },
});
