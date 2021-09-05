import React from 'react';
import { Provider} from 'mobx-react'
import countStore from './src/components/stores/countStore'
// eslint-disable-next-line react/display-name,react/prop-types
export default({element})=><provider store={countStore}>{element}</provider>