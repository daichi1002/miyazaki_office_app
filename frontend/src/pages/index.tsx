import React from 'react'
import GenericTemplate from '../components/templates/GenericTemplates'
const HomePage: React.FC = () => {
  const [count, setCount] = React.useState(0)
  return (
    <GenericTemplate title="トップページ">
      <>トップページ内容</>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>++</button>
    </GenericTemplate>
  )
}

export default HomePage
