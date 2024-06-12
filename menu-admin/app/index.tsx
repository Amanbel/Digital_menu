import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Platform,
  TextInput,
  Pressable,
} from "react-native";
// import Link from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";

export default function Index() {
  const navigation = useNavigation();
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <View>
              <Text style={styles.portalTitle}>Easy Menus Admin</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Phone number" />
              <TextInput style={styles.input} placeholder="password" />
            </View>
            <Link href="(restaurants)" style={styles.signinButton}>
              SignIn
            </Link>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    marginTop: 140,
    alignItems: "center",
    // borderWidth: 2,
    // marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
  contentContainer: {
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    // borderWidth: 2,
  },
  inputContainer: {
    gap: 14,
  },
  input: {
    height: 45,
    width: 270,
    backgroundColor: "#D1D8C5",
    borderRadius: 20,
    paddingLeft: 15,
    fontSize: 15,
  },
  portalTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  signinButton: {
    borderWidth: 2,
    borderColor: "black",
    width: 140,
    height: 40,
    borderRadius: 20,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
  },
});
