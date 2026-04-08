export interface Video {
  VideoName: string
  VideoUpload: string
  Category: string
  id: number
}

export interface SettingState {
  isSettingLoading: boolean
  settingFailedToLoad: boolean
  siteSettings: any
  error: string | null
}

export interface VideoState {
  videos: []
  error: string
  isVideoLoading: boolean
  failedToLoadvideo: boolean
  currentVideo: Video | null
}

export interface UIState {
  menuOpen: boolean
  loading: boolean
}

export interface RootState {
  videos: VideoState
  ui: UIState
  siteSettings: SettingState
}

export interface FormInfo {
  name: string
  email: string
  message: string
}

export interface SectionRefs {
  musicVideo: React.RefObject<HTMLElement | null>
  narrative: React.RefObject<HTMLElement | null>
  commercial: React.RefObject<HTMLElement | null>
}
