import  {TodoList}  from "@/features/TodoList";
import { TodoNew } from "@/features/TodoNew";

export default function Todo() {
  return (
    <div className="flex items-center flex-col justify-center p-10 gap-5 ">
            <TodoNew/>
            <TodoList/>
        </div>
  );
}
