import { useState } from "react";
import { useDispatch } from "react-redux";
import { add, categoryType } from "../features/bills/bilsSlice";

const AddBill = () => {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState<Date>();
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState<categoryType>("Select Category");
  const dispatch = useDispatch();
  return (
    <div className="m-2 flex flex-col">
      <div className="text-3xl m-2 mb-4 text-white font-bold">Add Bill</div>
      <input
        placeholder="description"
        type="text"
        className="p-2 m-2 outline-none w-72 h-10 border-2 rounded-sm"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        placeholder="amount"
        type="number"
        className="p-2 m-2 outline-none w-72 h-10 border-2 rounded-sm"
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <input
        placeholder="Date"
        type="date"
        className="p-2 m-2 outline-none w-72 h-10 border-2 rounded-sm"
        onChange={() => setDate(new Date())}
      />
      <select
        placeholder="category"
        className="p-2 m-2 outline-none w-72 h-10 border-2 rounded-sm"
        defaultValue={category}
        onChange={(e) => setCategory(e.target.value as categoryType)}
      >
        <option disabled>{"Select Category"}</option>
        <option>{"Utility"}</option>
        <option>{"Food"}</option>
        <option>{"Education"}</option>
      </select>
      <button
        className="p-1 m-2 border border-blue-700 bg-blue-500 hover:bg-blue-700
                  text-white text-xl rounded-md transition duration-200 ease-in-out"
        onClick={() =>
          dispatch(
            add({
              id: Math.random().toString(),
              category,
              date: date ? date.getTime() : undefined,
              description,
              amount,
            })
          )
        }
      >
        Add Bill
      </button>
    </div>
  );
};

export default AddBill;
