import React, { useRef } from "react"
import { Provider, useSelector } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router"
import { store } from "./store"
import { RootState } from "./types"
import MainContent from "./pages/MainContent"
import AboutPage from "./pages/About"
import ContactPage from "./pages/Contact"
import ErrorPage from "./error/ErrorPage"
import Shop from "./pages/Shop"
import RootLayout from "./pages/RootLayout"
import StudioRoute from "../studio-Wrng-Channel/StudioRoute"

const App: React.FC = () => {
  const router = createBrowserRouter([
    { path: "/studio", Component: StudioRoute, ErrorBoundary: ErrorPage },
    {
      path: "/",
      Component: RootLayout,
      ErrorBoundary: ErrorPage,
      children: [
        {
          index: true,
          Component: MainContent,
        },
        {
          path: "/about",
          Component: AboutPage,
          ErrorBoundary: ErrorPage,
        },
        {
          path: "/shop",
          Component: Shop,
          ErrorBoundary: ErrorPage,
        },
        {
          path: "/contact",
          Component: ContactPage,
          ErrorBoundary: ErrorPage,
        },
      ],
    },
  ])

  return (
    <Provider store={store}>
      <RouterProvider router={router}>
        <App>
          <div className="min-h-screen bg-black"></div>
        </App>
      </RouterProvider>
    </Provider>
  )
}

export default App
