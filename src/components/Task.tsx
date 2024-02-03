import { useState } from "react";
import styles from "./task.module.css";

type Task = {
  id: number;
  title: string;
  state: "PINNED" | "NORMAL" | "DONE" | "ARCHIVED";
};

interface TaskProps {
  task: Task;
  onArchiveTask: (id: number) => void;
  onPinTask: (id: number) => void;
}

export default function Task({
  task: { id, title, state = "NORMAL" },
}: TaskProps): JSX.Element {

  const [titleState, setTitleState] = useState(title);
  
  return (
    <div className={styles.list_item}>
      <label htmlFor="title" aria-label={titleState}></label>
      <span className={styles.id_text}>{`#${id}`}</span>
      <input
        className={styles.task_input}
        type="text"
        value={titleState}
        readOnly={false}
        name="title"
        onChange={(e) => setTitleState(e.target.value)}
      />
      <span>{state}</span>
    </div>
  );
}
