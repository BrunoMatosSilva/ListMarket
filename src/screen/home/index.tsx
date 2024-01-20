import { View, SafeAreaView } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Header } from '@/components/header'
import { ListItems } from '@/components/listItems'
import Toast from 'react-native-toast-message'

export function Home() {

  return (
    <SafeAreaView style={{backgroundColor: '#1A1A2F'}}>
      <View style={styles.container}>
        <Header />
        <ListItems />
        <Toast />
      </View>
    </SafeAreaView>
   
  )
}