import React from 'react'
import { storesContext } from '../components/contexts'

export const useStores = () => React.useContext(storesContext)