import { theme } from "@/libs/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingTop: 10,
    marginBottom: 20
  },
  logo: {
    color: theme.colors.text,
    fontSize: theme.fonts.sizes.xl,
    fontFamily: theme.fonts.primary.bold
  },
  buttonResetItem: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 5,
    padding: 5
  },
})