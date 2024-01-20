import { theme } from "@/libs/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: theme.colors.text,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: theme.fonts.sizes.base,
    fontFamily: theme.fonts.primary.regular,
    height: 48,
  },
  inputFocused: {
    borderColor: theme.colors.secondary,
    borderWidth: 2
  }
});