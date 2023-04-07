import { FC, ReactNode } from 'react'

import { DeepPartial } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import { createStore } from 'main/providers/StoreProvider/config/config'
import { StoreSchema } from 'main/providers/StoreProvider/config/StoreSchema'

interface StoreProviderProps {
  children: ReactNode
  initialState?: DeepPartial<StoreSchema>
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {
  const store = createStore(initialState as StoreSchema)

  return <Provider store={store}>{children}</Provider>
}
