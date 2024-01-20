import { Alert, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Trash2Icon } from 'lucide-react-native'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message';

export function Header(){
  const { removeItem } = useAsyncStorage("@listmarket:listitems")

  async function handleRemoveAllItems() {
    try {
    await removeItem()
    
    Toast.show({
      type: 'success',
      text1: 'Lista deletada com sucesso!!👏'
    })

    } catch (error) {
      console.log(error)
      Toast.show({
        type: 'error',
        text1: 'Não foi possivel deletar a lista!'
      })
    }
  }

  function handleItemAlertDelete() {
    Alert.alert(
      "Excluir",
      "Deletar toda a lista?",
      [
        {
          text: "Cancelar",
          style: 'cancel'
        },
        {
          text: "Confirmar",
          onPress: () => handleRemoveAllItems()
        }
      ]
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>ListMarket</Text>
      <TouchableOpacity
      onPress={handleItemAlertDelete}
      style={styles.buttonResetItem}
      >
        <Trash2Icon color="#fff" size={22} />
      </TouchableOpacity>
    </View>
  )
}
