import './styles.css'
import { Todo, Actions } from './model'
import SingleTodo from './SingleTodo'

interface Props {
    todos: Todo[]
    setTodos: React.Dispatch<Actions>
}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
    return(
        <div className="todos">
            {todos.map(todo => (
                <SingleTodo  
                    todo={todo} 
                    key={todo.id}
                    todos={todos}
                    setTodos={setTodos}
                />
            ))}
        </div>
    )
}

export default TodoList