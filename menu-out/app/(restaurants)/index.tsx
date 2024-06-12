import { View, Text, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function () {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Restaurants</Text>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.buttons}>
          <Text style={styles.insideText}>Remove Restaurant</Text>
        </Pressable>
        <Link href="" style={{ ...styles.buttons, ...styles.insideText }}>
          Add Restaurant
        </Link>
      </View>
      <View style={styles.listContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  pageTitle: {
    fontSize: 30,
    marginHorizontal: "auto",
    fontWeight: "bold",
    marginTop: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  insideText: {
    // fontSize: 13,
    fontWeight: "bold",
  },
  buttons: {
    borderWidth: 2,
    borderColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  listContainer: {
    marginHorizontal: 20,
    borderWidth: 2,
    // flex: 1,
    height: "80%",
    borderRadius: 20,
    marginTop: 15,
  },
});
