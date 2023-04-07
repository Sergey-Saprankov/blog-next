import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'

import { StoreSchema } from 'main/providers/StoreProvider/config/StoreSchema'

export const createStore = (initialState?: StoreSchema) => {
  const rootReducer: ReducersMapObject<StoreSchema> = {}

  return configureStore<StoreSchema>({
    reducer: rootReducer,
    devTools: true,
    preloadedState: initialState,
  })
}
