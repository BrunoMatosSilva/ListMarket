import { View, Text, Pressable, Platform } from 'react-native'
import { PlusSquareIcon } from 'lucide-react-native'
import React, { useCallback, useRef, useState } from 'react'
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetTextInput,
  BottomSheetView,
  TouchableOpacity,
} from '@gorhom/bottom-sheet';
import { styles } from './styles'
import uuid from 'react-native-uuid'
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import { ListProps } from '@/types/listProps';

export function Modal() {
  const [title, setTitle] = useState("");
  const [existingItems, setExistingItems] = useState<ListProps[]>([]);

  const { setItem, getItem } = useAsyncStorage("@listmarket:listitems")

  async function loadExistingItems() {
    try {
      const response = await getItem();
      const previeousData = response ? JSON.parse(response) : [];
      setExistingItems(previeousData);
    } catch (error) {
      console.log(error);
    }
  }

  function onChangeTextTitle(value: string) {
    setTitle(value);
  }

  async function handleNewItem() {
    try {

      const trimmedTitle = title.trim();

      if (!trimmedTitle.trim()) {
        Toast.show({
          type: 'error',
          text1: 'Por favor, digite um nome para o item.',
        });
        return;
      }

      if (existingItems && existingItems.find((item) => item.title.toLowerCase() === trimmedTitle.toLowerCase())) {
        Toast.show({
          type: 'error',
          text1: 'Este item já existe na lista.',
        });
        return;
      }

      const id = uuid.v4();
      const isCompleted = false;

      const newData = {
        id,
        title: trimmedTitle,
        isCompleted,
      };

      const response = await getItem();
      const previeousData = response ? JSON.parse(response) : [];

      const data = [...previeousData, newData];

      await setItem(JSON.stringify(data));
      Toast.show({
        type: 'success',
        text1: 'Item criado com sucesso!!👏',
      });
    } catch (error) {
      console.log(error);
      Toast.show({
        type: 'error',
        text1: 'Não foi possível cadastrar item!',
      });
  } finally {
    loadExistingItems();
  }
  };

  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const handleCloseModal = useCallback(() => {
    bottomSheetRef.current?.close()
  }, [])

  const handleOpenModal = useCallback(() => {
    bottomSheetRef.current?.present();
    loadExistingItems()
  }, [loadExistingItems]);

  return (
    <BottomSheetModalProvider>
    <Pressable
    onPress={handleOpenModal}
    style={({ pressed }) => [
      styles.buttonContainer,
      pressed && {
        opacity: 0.5,
      },
    ]}>
      <View style={styles.buttonContent}>
        <PlusSquareIcon color="#fff" size={24} />
        <Text style={styles.buttonText}>Criar Novo Item</Text>
      </View>
    </Pressable>

    <BottomSheetModal
      ref={bottomSheetRef}
      enablePanDownToClose={true}
      snapPoints={['25%', '40%']}
      index={Platform.OS === 'ios' ? 0 : 1}
      backgroundStyle={styles.container}
      handleIndicatorStyle={{ backgroundColor: "#fff"}}
      keyboardBehavior='interactive'
      keyboardBlurBehavior='restore'
      android_keyboardInputMode='adjustResize'
    >
      <BottomSheetView>
        <Text style={styles.text}>Novo Item</Text>
        <BottomSheetTextInput
        style={styles.addInput} 
        placeholder='Nome do item'
        onChangeText={onChangeTextTitle}
        autoCapitalize='words'
        clearButtonMode='always'
        />
          <View style={styles.buttonWrapper}>
            <TouchableOpacity 
            style={styles.buttonCancel}
            onPress={handleCloseModal}
            >
              <Text style={styles.buttonTextAction}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.buttonDone}
            onPress={handleNewItem}
            >
              <Text style={styles.buttonTextAction}>Criar</Text>
            </TouchableOpacity>
          </View>
      </BottomSheetView>
    </BottomSheetModal>

    </BottomSheetModalProvider>
  )
}