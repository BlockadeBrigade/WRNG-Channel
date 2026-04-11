import {Studio} from 'sanity'
import config from './sanity.config'
import React from 'react'

const StudioRoute: React.FC = () => {
  return (
    <div className="h-screen w-screen">
      <Studio config={config} />
    </div>
  )
}
export default StudioRoute
