import { useSetRecoilState } from "recoil";
import { IToDo, Statuses, toDoAtom } from "../atoms";

function NewToDo(toDo: IToDo) {
  const setToDoList = useSetRecoilState(toDoAtom);
  const onClick = (status: IToDo["status"]) => {
    // console.log(status);
    setToDoList((oldToDos) => {
      // console.log("old", oldToDos);
      const idIndex = oldToDos.findIndex((toDoInfo) => toDoInfo.id === toDo.id);
      const oldToDo = oldToDos[idIndex];
      const newToDo = { id: toDo.id, text: toDo.text, status };
      // console.log(newToDo);

      return [
        ...oldToDos.slice(0, idIndex),
        newToDo,
        ...oldToDos.slice(idIndex + 1),
      ];
    });
  };

  console.log(toDo.text);

  return (
    <>
      <button>test</button>
      <li>
        <span>{toDo.text}</span>
        {toDo.status !== Statuses.TO_DO && (
          <button onClick={() => onClick(Statuses.TO_DO)}>TO DO</button>
        )}
        {toDo.status !== Statuses.DOING && (
          <button onClick={() => onClick(Statuses.DOING)}>Doing</button>
        )}
        {toDo.status !== Statuses.DONE && (
          <button onClick={() => onClick(Statuses.DONE)}>Done</button>
        )}
        <br />
      </li>
    </>
  );
}

export default NewToDo;
