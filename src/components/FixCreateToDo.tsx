import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { Statuses, toDoAtom } from "../FixAtom";

interface IForm {
  toDo: string;
}

function FixCreateToDo() {
  const setToDo = useSetRecoilState(toDoAtom);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = (data: IForm) => {
    setToDo((oldToDos) => [
      {
        id: Date.now(),
        text: data.toDo,
        status: Statuses.TO_DO,
      },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  return (
    <>
      <h1>create</h1>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "requried",
          })}
          placeholder="write a to do"
        />
        <button>add</button>
      </form>
    </>
  );
}

export default FixCreateToDo;
