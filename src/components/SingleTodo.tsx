import { useState, useRef, useEffect } from 'react';
import { Todo, Actions } from './model';
import './styles.css'
import { AiFillEdit,AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

interface Props {
    todo: Todo
    todos: Todo[]
    setTodos: React.Dispatch<Actions>
}

const SingleTodo: React.FC<Props> = ({todo,todos,setTodos}) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)



    const handleDone = (id: number) => {
        setTodos({type: 'done', payload: id})
    }

    const handleDelete = (id: number) => {
        setTodos({type: 'remove', payload: id})
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault()

        setTodos({type:'edit',payload:{id:id, text:editTodo}})
        setEdit(false)
    }
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(()=>{
        inputRef.current?.focus()
    },[edit])

    

    return ( 
        <form className="todos-single" onSubmit={(e)=>handleEdit(e,todo.id)}>
            {
                edit ? (
                    <input ref={inputRef} type="text" value={editTodo} onChange={(e)=> setEditTodo(e.target.value)} className='todos-single-text'/>
                ): (
                     todo.isDone ? (
                        <s className="todos-single-text">{todo.todo}</s>
                    ):(
                        <span className="todos-single-text">{todo.todo}</span>
                    )
                )
            }

            
            <div>
                <span className="icon" onClick={()=>{
                    if(!edit && !todo.isDone){
                        setEdit(!edit)
                    }
                }}>
                    <AiFillEdit />
                </span>
                <span className="icon" onClick={()=>handleDelete(todo.id)}>
                    <AiFillDelete />
                </span>
                <span className="icon" onClick={()=>handleDone(todo.id)}>
                    <MdDone />
                </span>
            </div>
        </form>
     );
}

export default SingleTodo;