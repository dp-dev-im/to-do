import { useSetRecoilState } from "recoil";
import { IToDo, toDoAtom } from "../atoms";

function ToDo(toDo: IToDo) {
  const setToDos = useSetRecoilState(toDoAtom);
  const onClick = (getStatus: IToDo["status"]) => {
    // console.log(getStatus);
    setToDos((oldToDos) => {
      console.log("oldToDos", oldToDos);
      const idIndex = oldToDos.findIndex(
        (oldToDosArray) => oldToDosArray.id === toDo.id
      );
      console.log("index", idIndex);

      const oldToDo = oldToDos[idIndex];
      console.log("old", oldToDo);

      const newToDo = { id: toDo.id, text: toDo.text, status: getStatus };
      console.log("new", newToDo);

      return [
        ...oldToDos.slice(0, idIndex),
        newToDo,
        ...oldToDos.slice(idIndex + 1)
      ];
    });
  };

  const onName = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = e;
    console.log(name);
  };
  return (
    <>
      <span>
        <li>{toDo.text}</li>
      </span>
      {toDo.status !== "TO_DO" && (
        <button onClick={() => onClick("TO_DO")}>To Do</button>
      )}
      {toDo.status !== "DOING" && (
        <button onClick={() => onClick("DOING")}>Doing</button>
      )}
      {toDo.status !== "DONE" && (
        <button onClick={() => onClick("DONE")}>Done</button>
      )}
      <>
        <span>
          <li>{toDo.text}</li>
        </span>
        {toDo.status !== "TO_DO" && (
          <button name="TO_DO" onClick={onName}>
            NTo Do
          </button>
        )}
        {toDo.status !== "DOING" && (
          <button name="DOING" onClick={onName}>
            NDoing
          </button>
        )}
        {toDo.status !== "DONE" && (
          <button name="DONE" onClick={onName}>
            NDone
          </button>
        )}
      </>
    </>
  );
}

export default ToDo;
