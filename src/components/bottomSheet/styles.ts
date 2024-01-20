import { theme } from "@/libs/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: theme.colors.background,
    borderWidth: 2,
    borderTopColor: theme.colors.secondary
  },
  text: {
    color: theme.colors.text,
    fontFamily: theme.fonts.primary.extraBold,
    fontSize: theme.fonts.sizes.xl,
    marginHorizontal: 20,
  },
  addInput: {
    backgroundColor: theme.colors.text,
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: theme.fonts.sizes.base,
    fontFamily: theme.fonts.primary.regular,
    height: 48,
  },
  inputFocused: {
    borderColor: theme.colors.secondary,
    borderWidth: 2
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    gap: 16,
    marginHorizontal: 20
  },
  buttonCancel: {
    backgroundColor: '#F44A7F',
    padding: 10,
    borderRadius: 5,
  },
  buttonTextAction: {
    color: theme.colors.text,
    fontFamily: theme.fonts.primary.bold,
    fontSize: theme.fonts.sizes.lg
  },
  buttonDone: {
    backgroundColor: '#4E9451',
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer:{
    alignItems: 'center',
    position: 'absolute',
    height: 52,
    width: '90%',
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: theme.colors.secondary,
    borderRadius: 5,
    bottom: 10
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    padding: 4
  },
  buttonText: {
    color: theme.colors.text,
    fontFamily: theme.fonts.primary.extraBold,
    fontSize: theme.fonts.sizes.lg
  }
})