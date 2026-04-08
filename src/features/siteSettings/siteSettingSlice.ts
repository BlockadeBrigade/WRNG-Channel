import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import client from "../../../studio-Wrng-Channel/client"
import { SettingState } from "../../types"

export const fetchSettingsFromApi = createAsyncThunk(
  "siteSettings",
  async () => {
    const res = await client.fetch(`*[_type == "siteSettings"]{
  AboutBlurb,
  "AboutProfile": AboutProfile.asset->url,
  "landingPageVideo": landingPageVideo.asset->url,
  "logo": logo.asset->url,
  skills}`)
    return res
  },
)

const settingSlice = createSlice({
  name: "siteSettings",
  initialState: {
    siteSettings: [],
    isSettingLoading: false,
    settingFailedToLoad: false,
    error: null,
  } as SettingState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchSettingsFromApi.pending, state => {
        state.isSettingLoading = true
        state.settingFailedToLoad = false
      })
      .addCase(fetchSettingsFromApi.fulfilled, (state, action) => {
        state.isSettingLoading = false
        state.settingFailedToLoad = false
        state.siteSettings = action.payload
      })
      .addCase(fetchSettingsFromApi.rejected, (state, action) => {
        state.isSettingLoading = false
        state.settingFailedToLoad = true
        state.error = action.error.message || "failed to Fetch Data"
      })
  },
})

export default settingSlice.reducer
