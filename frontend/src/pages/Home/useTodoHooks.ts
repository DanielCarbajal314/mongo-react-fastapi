import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Enviroment } from '../../config'
import { httpGet, httPost, httpDelete } from '../../shared/Http';

export type CreateTodo = {
    description: string,
    date: Date
}

export type TodoItem = {
    id: string,
    description: string,
    date: Date
}

export function useTodoHooks(){
    const queryClient = useQueryClient();
    const path = `${Enviroment.apiUrl}/todo`;
    const queryFn = () => httpGet<TodoItem[]>(path)
    const queryKey = [path];
    const { data, isLoading: listIsLoading } = useQuery<TodoItem[]>({
        queryKey, queryFn
    })
    const { mutate: AddToDoMutation, isPending: addIsPending } = useMutation<TodoItem, null, CreateTodo>({
        mutationFn: (todo:CreateTodo) => httPost<CreateTodo, TodoItem>(path, todo),
        onSuccess: (response: TodoItem ) => {
            queryClient.setQueryData(
                queryKey,
                (oldData: TodoItem[]): TodoItem[] => [...oldData, response]
            );
        }
    })
    const { mutate: deleteTodoMutation, isPending: deleteIsPending } = useMutation<unknown, null, string>({
        mutationFn: (id:string) => httpDelete(`${path}/${id}`),
        onSuccess: (_: unknown, id: string) => {
            queryClient.setQueryData(
                queryKey,
                (oldData: TodoItem[]): TodoItem[] => oldData.filter(x => x.id !== id)
            );
        }
    })
    return {
        isLoading: listIsLoading || deleteIsPending || addIsPending,
        todos: data,
        addTodo: AddToDoMutation,
        deleteTodo: deleteTodoMutation
    }
}