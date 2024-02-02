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
  onArchiveTask,
  onPinTask,
}: TaskProps): JSX.Element {
  return (
    <div className={styles.list_item}>
      <label htmlFor="title" aria-label={title}>
        <input type="text" value={title} readOnly={true} name="title" />
      </label>
    </div>
  );
}
