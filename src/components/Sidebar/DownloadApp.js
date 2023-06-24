import { Icon } from 'Icons'
import React from 'react'

const DownloadApp = () => {
  return (
    <a href='#' className='h-10 flex flex-shrink-0 items-center text-sm font-semibold text-link hover:text-white  px-6 gap-x-4'>
        <Icon name="download" size={20}/>
        Download the app
    </a>
  )
}

export default DownloadApp