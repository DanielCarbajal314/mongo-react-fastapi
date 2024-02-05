import { useTodoHooks } from "./useTodoHooks";
import { Loader } from "../../shared/Loader";
import { TodoTable } from './TodoTable'
import { TodoForm } from './TodoForm'

export function Home() {
  const { todos, isLoading, addTodo, deleteTodo } = useTodoHooks();
  return (
    <Loader {...{isLoading: isLoading}}>
        <>
            <div className="p-4">
                <TodoForm onCreateClicked={ addTodo }/>
            </div>
            <TodoTable dataSource={todos??[]} onDeleteClicked={({id}) => deleteTodo(id)}/>
        </>
    </Loader>
  )
}
