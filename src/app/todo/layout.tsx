"use client"
import { StoreProvider } from "@/helpers/store-provider";
import { TodoList } from "@/stores/todo-list";
const todoList = new TodoList([
    'Should Starting Writing in React',
    'Should Learn MobX',
    'Should Watch Once Piece :)'
]);

export default function TodoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    
  return (
    <StoreProvider value={todoList}>
        {children}
        </StoreProvider>
  );
}
