import * as z from "zod";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState{
    todos:Todo[],
    length:number,
    completed:number,
    pending:number


}

export type TaskAction=
{type:'ADD_TODO',payload:string} |
{type:'TOGGLE_TODO',payload:number} |
{type:'DELETE_TODO',payload:number} 

//Validadores de estados
const TodoSchema=z.object({
    id: z.number(),
    text: z.string(),
    completed: z.boolean()
})
const TackStateScheme=z.object({
     todos:z.array(TodoSchema),
     length:z.number(),
     completed:z.number(),
     pending:z.number()
})

export const getTaskInitialState=()=>{
    const localStorageState=localStorage.getItem('task-state')
    if (!localStorageState){
        return {
            todos:[],
            completed:0,
            pending:0,
            length:0
        }      
    }

    // Validar mediante ZOD
    const result=TackStateScheme.safeParse(JSON.parse(localStorageState))
    if (result.error){
        console.log(result.error)
        return {
            todos:[],
            completed:0,
            pending:0,
            length:0
        }      
    }
    // ! Cuidado, que el objeto puede haber sido manipulado
    return result.data
}

export const taskReducer=(state:TaskState,action:TaskAction):TaskState=>{
    switch(action.type){
        case "ADD_TODO":{
        const  newTodo:Todo={
            id:Date.now(),
            text:action.payload,
            completed:false
        }
            return {
                    ...state,
                    length:state.todos.length+1,
                    pending:state.pending+1,
                    todos:[...state.todos,newTodo]
            }
        }
        case "DELETE_TODO":{
            const currentTodos=state.todos.filter(todo=>todo.id!==action.payload)
            return {
                ...state,
                todos:currentTodos,
                length:currentTodos.length,
                completed:currentTodos.filter((todo)=>todo.completed).length,
                pending:currentTodos.filter((todo)=>!todo.completed).length
            }
        }
        case "TOGGLE_TODO":{
            const updateTodos=state.todos.map(todo=>{
                        if (todo.id===action.payload){
                            return {...todo,completed:!todo.completed}
                        }
                        else{
                            return todo
                        }

                    })
           
            return {
                ...state,
                todos:updateTodos,
                completed:updateTodos.filter((todo)=>todo.completed).length,
                pending:updateTodos.filter((todo)=>!todo.completed).length
            }
        }
        default:
            return state
    }
    
}