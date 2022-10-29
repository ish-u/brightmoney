import { useState } from "react";
import { useDispatch } from "react-redux";
import { Bill, categoryType, edit } from "../features/bills/bilsSlice";

const EditBill = ({
  bill,
  setOpenEditBill,
}: {
  bill: Bill;
  setOpenEditBill: (value: boolean) => void;
}) => {
  const [description, setDescription] = useState(bill.description);
  const [date, setDate] = useState<Date>(
    bill.date ? new Date(bill.date) : new Date()
  );
  const [amount, setAmount] = useState(bill.amount);
  const [category, setCategory] = useState<categoryType>(bill.category);
  const dispatch = useDispatch();
  return (
    <div className="m-2 flex flex-col">
      <div className="text-3xl m-2 mb-4 text-white font-bold">Edit Bill</div>
      <input
        placeholder="description"
        type="text"
        className="p-2 m-2 outline-none w-72 h-10 border-2 rounded-sm"
        onChange={(e) => setDescription(e.target.value)}
        defaultValue={bill.description}
      />
      <input
        placeholder="amount"
        type="number"
        className="p-2 m-2 outline-none w-72 h-10 border-2 rounded-sm"
        onChange={(e) => setAmount(parseInt(e.target.value))}
        defaultValue={bill.amount}
      />
      <input
        placeholder="Date"
        type="date"
        className="p-2 m-2 outline-none w-72 h-10 border-2 rounded-sm"
        onChange={() => setDate(new Date())}
        defaultValue={date.toISOString().split("T")[0]}
      />
      <select
        placeholder="category"
        className="p-2 m-2 outline-none w-72 h-10 border-2 rounded-sm"
        onChange={(e) => setCategory(e.target.value as categoryType)}
        defaultValue={bill.category}
      >
        <option disabled>{"Select Category"}</option>
        <option>{"Utility"}</option>
        <option>{"Food"}</option>
        <option>{"Education"}</option>
      </select>
      <button
        className="p-1 m-2 border border-blue-700 bg-blue-500 hover:bg-blue-700
                  text-white text-xl rounded-md transition duration-200 ease-in-out"
        onClick={() => {
          dispatch(
            edit({
              id: bill.id,
              category,
              date: date ? date.getTime() : undefined,
              description,
              amount,
            })
          );
          setOpenEditBill(false);
        }}
      >
        Edit Bill
      </button>
    </div>
  );
};

export default EditBill;
