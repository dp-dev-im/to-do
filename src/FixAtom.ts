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

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key);
    // setSelf -> Callbacks to set or reset the value of the atom.
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    // onSet -> Subscribe to changes in the atom value.
    onSet((newValue: any, _: any, isReset: boolean) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects: [localStorageEffect("toDo")],
});

export const minutesState = atom({
  key: "minutes",
  default: 0,
});

export const hoursSelector = selector({
  key: "hours",
  get: ({ get }) => {
    const minutes = get(minutesState);
    return minutes / 60;
  },
  set: ({ set }, newValue) => {
    // console.log(newValue);
    const minutes = Number(newValue) * 60;
    set(minutesState, minutes);
  },
});

export const mileState = atom({
  key: "mile",
  default: 0,
});

export const KmSelector = selector({
  key: "km",
  get: ({ get }) => {
    const mile = get(mileState);
    return mile * 1.609;
  },
  set: ({ set }, newValue) => {
    console.log(newValue);
    const mile = Number(newValue) / 1.609;
    set(mileState, mile);
  },
});
