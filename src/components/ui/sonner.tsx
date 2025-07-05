"use client"

import { Toaster as Sonner } from "sonner"

const Toaster = () => {
  return (
    <Sonner
      theme="dark"
      position="top-right"
      richColors
      closeButton
      duration={4000}
      className="toaster group"
    />
  )
}

export { Toaster }
