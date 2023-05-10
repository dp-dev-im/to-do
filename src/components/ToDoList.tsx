import { useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import { toDoAtom, toDoSelector } from "../atoms";
import NewToDo from "./NewToDo";

function ToDoList() {
  const toDoList = useRecoilValue(toDoAtom);
  // console.log(toDoList);
  const selectorOutput = useRecoilValue(toDoSelector);
  console.log(selectorOutput);
  return (
    <>
      <h1>ToDos</h1>
      <CreateToDo />
      <ul>
        {toDoList.map((toDo) => (
          // <ToDo key={toDo.id} {...toDo} />
          <NewToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </>
  );
}

export default ToDoList;
