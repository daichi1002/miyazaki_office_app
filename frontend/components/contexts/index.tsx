import React from 'react'
import { CountStore } from '../../stores/countStore'

export const storesContext = React.createContext({
  countStore: new CountStore(),
})
