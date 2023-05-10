import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

// function ToDoList() {
//   const [toDo, setToDo] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     // setToDo(event.currentTarget.value);
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDo(value);
//   };

//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//   };

//   return (
//     <>
//       <h1>To Do List</h1>
//       <form onSubmit={onSubmit}>
//         <input
//           onChange={onChange}
//           value={toDo}
//           type="text"
//           placeholder="Write a to do"
//         />
//         <button>Add</button>
//       </form>
//     </>
//   );
// }

// interface IFormData {
//   toDoaa: string;
//   toDo: string;
//   toDoa: string;
//   toDoaaa: string;
//   password: string;
//   password1: string;
// }

// function ToDoList() {
//   const {
//     register,
//     watch,
//     handleSubmit,
//     formState: { errors },
//     setError,
//   } = useForm<IFormData>();
//   //   console.log(watch());
//   const onValid = (data: IFormData) => {
//     console.log(data);
//     if (data.password !== data.password1) {
//       setError("password1", { message: "passwords are not the same" });
//     }
//   };
//   console.log(errors);
//   return (
//     <>
//       <h1>to do list</h1>
//       <form
//         style={{ display: "flex", flexDirection: "column" }}
//         onSubmit={handleSubmit(onValid)}
//       >
//         <input
//           {...register("toDo", { required: true })}
//           placeholder="Write a to do"
//         />
//         <hr />
//         <input {...register("toDoa")} placeholder="Write a to do" />
//         <hr />
//         {/* <span>{errors?.toDo?.message}</span> */}
//         <span>{errors?.toDoaa?.message}</span>
//         <input
//           {...register("toDoaa", {
//             required: "requried error",
//             minLength: {
//               value: 5,
//               message: "ahahaha",
//             },
//           })}
//           placeholder="Write a to do"
//         />
//         <hr />
//         <input {...register("toDoaaa")} placeholder="Write a to do" />
//         <hr />
//         <input
//           {...register("password", {
//             required: true,
//             minLength: {
//               value: 5,
//               message: "password 5",
//             },
//           })}
//           placeholder="password"
//         />
//         <input
//           {...register("password1", {
//             required: true,
//             minLength: {
//               value: 5,
//               message: "dsjflksjflkas",
//             },
//           })}
//           placeholder="password1"
//         />
//         <span>{errors?.password1?.message}</span>
//         <button>Add</button>
//       </form>
//     </>
//   );
// }

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

interface IForm {
  toDo: string;
  email: string;
}

interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

function ToDoList() {
  const [toDoList, setToDoList] = useRecoilState(toDoState);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<IForm>();
  const handleValid = (data: IForm) => {
    console.log("add to do", data.toDo);
    setToDoList((oldToDoList) => [
      { id: Date.now(), text: data.toDo, category: "TO_DO" },
      ...oldToDoList,
    ]);
    setValue("toDo", "");
  };

  return (
    <>
      <h1>to do list</h1>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "please write a To Do",
            minLength: {
              value: 3,
              message: "333333",
            },
          })}
          placeholder="write a to do"
        />
        <span>{errors?.toDo?.message}</span>
        <input
          {...register("email", { required: "required" })}
          placeholder="email"
        />
        <input
          type="button"
          onClick={() => reset()}
          // onClick={() => reset({ email: "" })}
          value="Custom Reset Field Values & Errors"
        />
        <button>Add</button>
      </form>
      <ol></ol>
    </>
  );
}

export default ToDoList;
