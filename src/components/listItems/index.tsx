import { View, Text, FlatList, Pressable, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { Square, CheckSquareIcon, Trash2Icon } from 'lucide-react-native'
import { styles } from './styles'
import { Modal } from '../bottomSheet'
import EmptyList from '../../assets/empty.svg'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message'
import { Search } from '../search'
import { ListProps } from '@/types/listProps'

export function ListItems() {
  const [listItems, setListItems] = useState<ListProps[]>([]);
  const [searchItem, setSearchItem] = useState('');
  
  const { getItem, setItem } = useAsyncStorage("@listmarket:listitems");

  const filteredItems = useMemo(() => {
    return listItems.filter((item) => item.title.toLowerCase().includes(searchItem.toLowerCase()))
  },[listItems, searchItem])

  function handleChangeItemSearch(titleItem:string) {
    setSearchItem(titleItem)
  }

  async function getAllList() {
    const response = await getItem();
    const data = response ? JSON.parse(response) : [];
    setListItems(data)
  }

  useEffect(() => {
    getAllList()
  },[searchItem, filteredItems])
  
  async function handleCompletedItem(itemId: string) {
    const response = await getItem();
    const previousData = response ? JSON.parse(response) : [];

    const updateList = previousData.map((item: ListProps) => {
      if (item.id === itemId) {
          return {
             ...item,
              isCompleted: !item.isCompleted,
          }
     }
      return item;
  });
  setItem(JSON.stringify(updateList));
  }

  async function handleRemoveItem(itemId: string) {
    try {
    const response = await getItem();
    const previousData = response ? JSON.parse(response) : [];

    const updateList = previousData.filter((item: ListProps) => item.id !== itemId)
    setItem(JSON.stringify(updateList))
    Toast.show({
      type: 'success',
      text1: 'Item deletado com sucesso!!👏'
    })

    } catch (error) {
      console.log(error)
      Toast.show({
        type: 'error',
        text1: 'Não foi possivel deletar!'
      })
    }
  }

  function handleItemAlertDelete(itemId: string) {
    Alert.alert(
      "Excluir",
      "Deletar item?",
      [
        {
          text: "Cancelar",
          style: 'cancel'
        },
        {
          text: "Confirmar",
          onPress: () => handleRemoveItem(itemId)
        }
      ]
    )
  }

  

  return (
    <>
    <View style={styles.container}>
    <Search handleChangeItem={handleChangeItemSearch} />
    {filteredItems.length < 1 && (
    <View style={styles.emptyList}>
      <EmptyList  width={200} height={200} />
      <Text style={styles.emptyListText}>Nenhum item foi encontrado ou cadastrado.</Text>
    </View>
    ) }

      <FlatList
      contentContainerStyle={styles.list}
      data={filteredItems}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
      <>
        <View style={styles.listContent}>
          <View key={item.id} style={styles.listContentIconTitle}>
            <Pressable
              onPress={() => {handleCompletedItem(item.id)}}
            >
              {item.isCompleted ? (<CheckSquareIcon color="#4E9451" size={28} />) : (
                <Square color="#fff" size={28} />
              )}
              
            </Pressable>
              <Text 
              style={[
                styles.listText, 
                { 
                  textDecorationLine: item.isCompleted ? 'line-through' : 'none'
                }
              ]}
              numberOfLines={1}
              ellipsizeMode='tail'
              >{item.title}
              </Text>
          </View>
        <TouchableOpacity>
          <Trash2Icon
          onPress={() => {handleItemAlertDelete(item.id)}}
          color="#F44A7F" 
          size={28}
          />
        </TouchableOpacity>
        </View>
      </>
      )}
      />
      </View>
      <Modal />
    </>
  )
}