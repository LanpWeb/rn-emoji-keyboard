import * as React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { KeyboardContext } from '../contexts/KeyboardContext'
import type { CategoryNavigationItem, CategoryTypes } from '../types'
import { Icon } from './Icon'

type CategoryItemProps = {
  item: CategoryNavigationItem
  index: number
  handleScrollToCategory: (category: CategoryTypes) => void
}

export const CategoryItem = ({ item, index, handleScrollToCategory }: CategoryItemProps) => {
  const { activeCategoryIndex, theme, setActiveCategoryIndex } = React.useContext(KeyboardContext)

  const handleSelect = () => {
    handleScrollToCategory(item.category)
    setActiveCategoryIndex(index)
  }
  const style = item.icon === 'Search' ? styles.hidden : styles.container

  return (
    <TouchableOpacity onPress={handleSelect}>
      <View style={style}>
        <Icon
          iconName={item.icon}
          isActive={activeCategoryIndex === index}
          normalColor={theme.category.icon}
          activeColor={theme.category.iconActive}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  hidden: {
    position: 'absolute',
    zIndex: -1,
  },
  container: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
    borderRadius: 6,
  },
  icon: { textAlign: 'center' },
})
