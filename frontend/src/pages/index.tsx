import React from 'react'
import GenericTemplate from '../components/templates/GenericTemplates'
const HomePage: React.FC = () => {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    document.title = `${count}回クリックされました`
    console.log(`再レンダーされました`)
  }, [])

  return (
    <GenericTemplate title="トップページ">
      <>トップページ内容</>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>++</button>
    </GenericTemplate>
  )
}

export default HomePage
