import { ITodo } from "../Types";

interface TodoFormProps {
  value: string;
  updateText: (str: string) => void;
  handelAction: () => void;
}

const Todoform: React.FC<TodoFormProps> = ({
  value,
  updateText,
  handelAction,
}) => {
  return (
    <label>
      <input
      className="p-[5px]"
        placeholder="введите задачу"
        value={value}
        onChange={(e) => updateText(e.target.value)}
      />
      <button className="ml-[10px] border border-gray-500 hover:bg-gray-600 p-[5px]" onClick={() => handelAction()}>Добавить задачу</button>
    </label>
  );
};

export default Todoform;
