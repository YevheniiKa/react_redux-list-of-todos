/* eslint-disable @typescript-eslint/no-unused-vars */
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Loader, TodoFilter, TodoList, TodoModal } from './components';
import { useAppSelector } from './hooks/useAppSelector';

export const App = () => {
  const todos = useAppSelector(state => state.todos.todos);
  const todo = useAppSelector(state => state.currentTodo);

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="box">
            <h1 className="title">Todos:</h1>

            <div className="block">
              <TodoFilter />
            </div>

            <div className="block">
              <TodoList />
              {todos.length === 0 && <Loader />}
            </div>
          </div>
        </div>
      </div>

      {todo && <TodoModal isOpen={true} />}
    </>
  );
};
