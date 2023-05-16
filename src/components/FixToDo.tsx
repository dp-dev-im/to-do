import { useSetRecoilState } from "recoil";
import { IToDo, Statuses, toDoAtom } from "../FixAtom";

function FixToDo(toDo: IToDo) {
  // console.log(toDo);
  const setToDos = useSetRecoilState(toDoAtom);
  const onClick = (getStatus: IToDo["status"]) => {
    // console.log(getStatus);
    setToDos((oldToDos) => {
      const statusIndex = oldToDos.findIndex((aToDo) => aToDo.id === toDo.id);
      //   console.log(statusIndex);
      const newToDo: IToDo = {
        id: toDo.id,
        text: toDo.text,
        status: getStatus,
      };
      //   console.log(newToDo);
      //   const newToDos = [...oldToDos];
      //  newToDos.splice(statusIndex, 1, newToDo);

      return [
        ...oldToDos.slice(0, statusIndex),
        newToDo,
        ...oldToDos.slice(statusIndex + 1),
      ];
    });
  };

  // const onDelete = (getDelete: string) => {
  //   setToDos((oldToDos) => {
  //     const statusIndex = oldToDos.findIndex((aToDo) => aToDo.id === toDo.id);
  //     return [
  //       ...oldToDos.slice(0, statusIndex),
  //       ...oldToDos.slice(statusIndex + 1),
  //     ];
  //   });
  // };

  const onDelete = () => {
    setToDos((oldToDos) => {
      return oldToDos.filter((aToDo) => aToDo.id !== toDo.id);
    });
  };
  // console.log(toDo);

  return (
    <li>
      <span>{toDo.text}</span>
      {toDo.status !== "TO_DO" && (
        <button onClick={() => onClick(Statuses.TO_DO)}>ToDo</button>
      )}
      {toDo.status !== "DOING" && (
        <button onClick={() => onClick(Statuses.DOING)}>Doing</button>
      )}
      {toDo.status !== "DONE" && (
        <button onClick={() => onClick(Statuses.DONE)}>Done</button>
      )}
      {/* <button onClick={() => onDelete("DELETE")}>Delete</button> */}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default FixToDo;
