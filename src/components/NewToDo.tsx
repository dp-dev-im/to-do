import { useSetRecoilState } from "recoil";
import { IToDo, toDoAtom } from "../atoms";

function NewToDo(toDo: IToDo) {
  // console.log(toDo);

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

  return (
    <>
      <span>{toDo.text}</span>
      <>
        {toDo.status !== "TO_DO" && (
          <button onClick={() => onClick("TO_DO")}>TO DO</button>
        )}
        {toDo.status !== "DOING" && (
          <button onClick={() => onClick("DOING")}>Doing</button>
        )}
        {toDo.status !== "DONE" && (
          <button onClick={() => onClick("DONE")}>Done</button>
        )}
        <br />
      </>
    </>
  );
}

export default NewToDo;
