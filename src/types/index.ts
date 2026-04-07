export interface Video {
  VideoName: string
  VideoUpload: string
  Category: string
}

export interface SettingState {
  isSettingLoading: boolean
  settingFailedToLoad: boolean
}

export interface VideoState {
  videos: []
  error: string
  isVideoLoading: boolean
  failedToLoadvideo: boolean
  currentVideo: Video | null
}

export interface UIState {
  currentPage:
    | "landing"
    | "home"
    | "portfolio"
    | "narrative"
    | "about"
    | "contact"
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
