import { configureStore, combineReducers } from "@reduxjs/toolkit"
import videoReducer from "./features/video/videoSlice"
import uiReducer from "./features/ui/uiSlice"
import settingsReducer from "./features/siteSettings/siteSettingSlice"

const rootReducer = combineReducers({
  videos: videoReducer,
  ui: uiReducer,
  siteSettings: settingsReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const makeStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = typeof store.dispatch
export const store = makeStore()
