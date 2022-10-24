import { useRouter } from "next/router";
import { useState } from "react";

export default function Todo() {
  const router = useRouter();
  const { id } = router.query;

  const [tasks, setTasks] = useState([
    {
      title: "Grab some Pizza",
    },
    {
      title: "Do your workout",
    },
    {
      title: "Hangout with friends",
    },
  ]);

  console.log(tasks);
  const [title, setTitle] = useState([]);

  return (
    <div>
      <h1>{id}</h1>
      <input placeholder="list" onChange={(e) => setTitle(e.target.value)} />
      <button onClick={() => setTasks([...tasks, { title }])}>Add</button>

      {tasks?.map((item) => (
        <p key={item.title}>{item.title}</p>
      ))}
    </div>
  );
}
