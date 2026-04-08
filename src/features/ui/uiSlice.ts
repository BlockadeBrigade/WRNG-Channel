import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { UIState } from "../../types"

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    menuOpen: false,
    loading: false,
  } as UIState,
  reducers: {
    setPage: (state, action: PayloadAction<UIState["currentPage"]>) => {
      state.currentPage = action.payload
      state.menuOpen = false
    },
    toggleMenu: state => {
      state.menuOpen = !state.menuOpen
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
})

export const { setPage, toggleMenu, setLoading } = uiSlice.actions
export default uiSlice.reducer
