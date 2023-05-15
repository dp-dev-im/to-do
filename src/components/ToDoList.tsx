import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import { Statuses, statusAtom, toDoAtom, toDoSelector } from "../atoms";
import NewToDo from "./NewToDo";

function ToDoList() {
  // const toDoList = useRecoilValue(toDoAtom);
  const toDoList = useRecoilValue(toDoSelector)
  // console.log(toDoList);
  const selectorOutput = useRecoilValue(toDoSelector);
  const [toDo, doing, done] = useRecoilValue(toDoSelector);
  // console.log(selectorOutput);
  // console.log([toDo, doing, done]);

  const [status, setStatus] = useRecoilState(statusAtom);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setStatus(event.currentTarget.value as any);
  };

  // console.log(status);
  return (
    <>
      <h1>ToDos</h1>
      {/* <ul>
        {toDoList.map((toDo) => (
          // <ToDo key={toDo.id} {...toDo} />
          <NewToDo key={toDo.id} {...toDo} />
          ))}
        </ul> */}
      {/* <h1>To Do</h1>
      <ul>
      {toDo.map((aToDo) => (
        <NewToDo {...aToDo} />
        ))}
        </ul>
        <h1>doing</h1>
        <ul>
        {doing.map((aToDo) => (
          <NewToDo {...aToDo} />
          ))}
          </ul>
          <h1>Done</h1>
          <ul>
          {done.map((aToDo) => (
            <NewToDo {...aToDo} />
            ))}
          </ul> */}
      <h1>To Dos</h1>
      <hr />
      <form>
        <select value={status} onInput={onInput}>
          <option value={Statuses.TO_DO}>To Do</option>
          <option value={Statuses.DOING}>Doing</option>
          <option value={Statuses.DONE}>Done</option>
        </select>
      </form>
      <CreateToDo />

      {toDoList.map((toDo) => {
        <NewToDo key={toDo.id} {...toDo} />;
      })}
    </>
  );
}

export default ToDoList;
