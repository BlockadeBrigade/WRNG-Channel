import { configureStore } from "@reduxjs/toolkit"
import videoReducer from "./features/video/videoSlice"
import uiReducer from "./features/ui/uiSlice"
import settingsReducer from "./features/siteSettings/siteSettingSlice"

export const store = configureStore({
  reducer: {
    videos: videoReducer,
    ui: uiReducer,
    siteSettings: settingsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
