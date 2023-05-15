import { useRecoilState, useRecoilValue } from "recoil";
import FixCreateToDo from "./FixCreateToDo";
import { toDoAtom, toDoSelector } from "../atoms";
import FixToDo from "./FixToDo";
import { Statuses, fixToDoSelector, statusState } from "../FixAtom";
import React from "react";

function FixToDoList() {
  // const toDos = useRecoilValue(toDoAtom);
  const toDos = useRecoilValue(fixToDoSelector);
  const [status, setStatus] = useRecoilState(statusState);
  // console.log(status);

  const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
    setStatus(
      e.currentTarget.value as Statuses.TO_DO | Statuses.DOING | Statuses.DONE
    );
    // console.log(e.currentTarget.value);
  };
  return (
    <>
      <h1>Fix</h1>
      <hr />
      <form>
        <select value={status} onInput={onInput}>
          <option value={Statuses.TO_DO}>To Do</option>
          <option value={Statuses.DOING}>Doing</option>
          <option value={Statuses.DONE}>Done</option>
        </select>
      </form>
      <hr />
      <FixCreateToDo />
      <ul>
        {toDos?.map((toDo) => (
          <FixToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
    </>
  );
}

export default FixToDoList;
