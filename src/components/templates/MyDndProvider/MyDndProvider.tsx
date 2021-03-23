import React, { useMemo } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'

// ___________
//
const MyDndProvider: React.FC = ({ children }) => {
  const isTouchable = useMemo(() => {
    const ua = window.navigator.userAgent.toLowerCase()
    if (ua.match(/iphone/) || ua.match(/ipad/) || ua.match(/android/)) {
      return true
    }
    return false
  }, [])
  return (
    <DndProvider backend={isTouchable ? TouchBackend : HTML5Backend}>
      {children}
    </DndProvider>
  )
}

// __________
//
export default MyDndProvider
