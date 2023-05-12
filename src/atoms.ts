import { atom, selector } from "recoil";

export interface IToDo {
  id: number;
  text: string;
  status: "TO_DO" | "DOING" | "DONE";
}

export const statusAtom = atom({
  key: "status",
  default: "TO_DO",
});

export const toDoAtom = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoAtom);
    const status = get(statusAtom);
    // return [
    //   toDos.filter((toDo) => toDo.status === "TO_DO"),
    //   toDos.filter((toDo) => toDo.status === "DOING"),
    //   toDos.filter((toDo) => toDo.status === "DONE"),
    // ];
    return toDos.filter((todo) => todo.status === status);
  },
});
