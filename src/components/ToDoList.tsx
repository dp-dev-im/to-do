import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import { statusAtom, toDoAtom, toDoSelector } from "../atoms";
import NewToDo from "./NewToDo";

function ToDoList() {
  const toDoList = useRecoilValue(toDoAtom);
  // console.log(toDoList);
  const selectorOutput = useRecoilValue(toDoSelector);
  const [toDo, doing, done] = useRecoilValue(toDoSelector);
  // console.log(selectorOutput);
  console.log([toDo, doing, done]);

  const [status, setStatus] = useRecoilState(statusAtom);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setStatus(event.currentTarget.value);
  };

  return (
    <>
      <h1>ToDos</h1>
      <CreateToDo />
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
      <select value={status} onInput={onInput}>
        <option value="TO_DO">To Do</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>
    </>
  );
}

export default ToDoList;
