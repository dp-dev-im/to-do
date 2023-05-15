import { atom, selector } from "recoil";

export enum Statuses {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export const statusState = atom({
  key: "status",
  default: Statuses.TO_DO,
});

export interface IToDo {
  id: number;
  text: string;
  status: Statuses;
}

export const toDoAtom = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const fixToDoSelector = selector({
  key: "fixToDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoAtom);
    const status = get(statusState);
    // return [
    //   toDos.filter((toDo) => toDo.status === "TO_DO"),
    //   toDos.filter((toDo) => toDo.status === "DOING"),
    //   toDos.filter((toDo) => toDo.status === "DOING"),
    // ];
    return toDos.filter((toDo) => toDo.status === status);
  },
});
