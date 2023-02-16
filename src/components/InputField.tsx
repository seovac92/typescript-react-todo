import './styles.css'
import { useRef } from 'react'

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void
}

const InputField: React.FC<Props> = ({todo,setTodo,handleAdd}) => {
    const inputRef = useRef<HTMLInputElement>(null)
    return(
        <form className="input" onSubmit={(e)=>{
            handleAdd(e)
            inputRef.current?.blur()
        }}>
            <input ref={inputRef} type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder="Enter a task" className="input-box" />
            <button className="input-submit" type="submit">Go</button>
        </form>
    )
}

export default InputField