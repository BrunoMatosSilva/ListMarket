import { theme } from "@/libs/theme";
import { StyleSheet, Platform, StatusBar } from "react-native";

const isAndroid = Platform.OS === 'android';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: theme.colors.background,
    paddingTop: isAndroid ? StatusBar.currentHeight : 0 ,
  },
  text: {
    fontFamily: theme.fonts.primary.regular,
    color: theme.colors.text,
  }
});