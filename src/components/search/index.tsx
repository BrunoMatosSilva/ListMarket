import { View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { SearchProps } from '@/types/searchProps';

export function Search({handleChangeItem}: SearchProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View>
      <TextInput 
      style={[
        styles.searchInput,
        isFocused && styles.inputFocused
      ]}
      placeholder='Pesquisar Item...'
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onChangeText={handleChangeItem}
      autoCapitalize='words'
      clearButtonMode='always'
      />
    </View>
  )
}