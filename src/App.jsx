import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import todo from './component/todoitems/index'
import Todoitems from './component/todoitems/index'
import style from './style.module.css'
import Todoinput from './component/input/input'
function App() {
  const [arr, setarr] = useState([])
  function savetodo(todo){
    console.log(todo);
    let id=Math.random();
    let ob={
      id:id,
      todo:todo,
      status:false
    }
    setarr([...arr,ob]);
  }
  return (
    <div className={style.container}>
      <div>
        {arr.map(value => <Todoitems data={value} key={value.id} />)}
      </div>
      <div>
        {/* <h1>C</h1> */}
        <Todoinput savetodo={savetodo}/>
      </div>
    </div>
  )
}

export default App