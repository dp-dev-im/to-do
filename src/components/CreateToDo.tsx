import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoAtom } from "../atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDoList = useSetRecoilState(toDoAtom);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = (data: IForm) => {
    // console.log(data);
    setToDoList((allToDoList) => [
      { id: Date.now(), text: data.toDo, status: "TO_DO" },
      ...allToDoList,
    ]);

    setValue("toDo", "");
  };
  return (
    <>
      <h1>Create to do</h1>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", { required: "!!!!!" })}
          placeholder="write a to do"
        />
        <button>Add</button>
      </form>
    </>
  );
}

export default CreateToDo;
