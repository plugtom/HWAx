/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import axios from 'axios'
import Dashboard from "./Dashboard"
import FormAddTodo from "./FormAddTodo"
import TodoContainer from "./TodoContainer"

function TodoApp() {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [trigger, setTrigger] = useState(false)
  const apiUrl = 'http://localhost:8000/todos'

  useEffect( ()=>{
    setIsLoading(true)
    axios.get(apiUrl).then( res=>{
      setData(res.data)
      setIsLoading(false)
    })
  }, [trigger] )

  const hdlAdd = (newJob) => {
    // fetch(apiUrl, {
    //   method: 'POST',
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newJob)
    // }).then(res => res.json())
    // .then(rs => {
    //   console.log(rs)
    //   // setData([...data, {id: rs.id, ...newJob}])
    //   setTrigger(prv=>!prv)
    // })

    axios.post(apiUrl,newJob).then(res=>{
      console.log(res)
      setTrigger(prv=>!prv)
    })
  }
 


  if (isLoading) {
    return ( <h1>Loading...</h1> )
  }

  return (
    <div className="todo-app" >
      <Dashboard task={data.length}/>
      <FormAddTodo hdlAdd={hdlAdd}/>
      <TodoContainer todos={data} setTrigger={setTrigger} />
    </div>
  )
}

export default TodoApp