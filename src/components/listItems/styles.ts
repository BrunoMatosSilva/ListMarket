import { theme } from "@/libs/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 80
  },
  emptyList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80
  },
  emptyListText: {
    color: theme.colors.text,
    fontSize: theme.fonts.sizes.lg,
    fontFamily: theme.fonts.primary.regular,
    marginTop: 10
  },
  list: {
    gap: 20,
    
  },
  listContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderRadius: 6,
    gap: 10
  },
  listContentIconTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    maxWidth: '80%',
  },
  listText: {
    color: theme.colors.text,
    fontFamily: theme.fonts.primary.regular,
    fontSize: theme.fonts.sizes.lg
  }
})