import { atom, selector } from "recoil";

export enum Statuses {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  id: number;
  text: string;
  status: Statuses;
}

export const statusAtom = atom<Statuses>({
  key: "status",
  default: Statuses.TO_DO,
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
    return toDos.filter((toDo) => toDo.status === status);
  },
});
