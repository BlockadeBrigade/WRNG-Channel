import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Video, VideoState } from "../../types/index"
import client from "../../../studio-Wrng-Channel/client"

export const fetchVideoFromApi = createAsyncThunk(
  "videos/fetchVideoFromApi",
  async () => {
    console.log("thunk begun")
    const res = await client.fetch(`
    *[_type == "VideoUpload"]{
      VideoName,
      Category,
      "VideoUpload": VideoUpload.asset->url,
    }
`)
    return res
  },
)

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    videos: [],
    error: "",
    isVideoLoading: false,
    failedToLoadvideo: false,
    currentVideo: null,
  } as VideoState,
  reducers: {
    setCurrentVideo: (state, action: PayloadAction<Video>) => {
      state.currentVideo = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchVideoFromApi.pending, state => {
        state.isVideoLoading = true
        state.failedToLoadvideo = false
      })
      .addCase(fetchVideoFromApi.fulfilled, (state, action) => {
        state.isVideoLoading = false
        state.failedToLoadvideo = false
        state.videos = action.payload
      })
      .addCase(fetchVideoFromApi.rejected, (state, action) => {
        state.isVideoLoading = false
        state.failedToLoadvideo = true
        state.error = action.error.message || "failed to Fetch Data"
      })
  },
})

export const { setCurrentVideo } = videoSlice.actions
export default videoSlice.reducer
