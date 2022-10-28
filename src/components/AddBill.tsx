const AddBill = () => {
  return (
    <div className="m-2 flex flex-col">
      <div className="text-2xl m-2">Add Bill</div>

      <input
        placeholder="description"
        type="text"
        className="p-1 m-2 outline-none w-56 h-10 border-2"
      />
      <input
        placeholder="amount"
        type="number"
        className="p-1 m-2 outline-none w-56 h-10 border-2"
      />
      <input
        placeholder="Date"
        type="date"
        className="p-1 m-2 outline-none w-56 h-10 border-2"
      />
      <input
        placeholder="category"
        type="select"
        className="p-1 m-2 outline-none w-56 h-10 border-2"
      />
    </div>
  );
};

export default AddBill;
