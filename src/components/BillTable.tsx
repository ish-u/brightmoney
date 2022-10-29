import { Bill, remove } from "../features/bills/bilsSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import Modal from "./Modal";
import EditBill from "./EditBill";
import { useState } from "react";
const BillTable = () => {
  const bills = useSelector((state: RootState) => state.bills.bills);
  const [openEditBill, setOpenEditBill] = useState(false);
  const [selectedBill, setSelectedBill] = useState<Bill>({} as Bill);
  const dispatch = useDispatch();

  return (
    <div>
      <table className="mx-2 w-full">
        <tr className="text-left">
          <th className="w-1/6">Date</th>
          <th className="w-1/6">Category</th>
          <th className="w-1/6">Amount</th>
          <th className="w-2/6">Description</th>
          <th className="w-1/6">Edit</th>
        </tr>
        <tbody>
          {bills.map((bill) => (
            <tr key={bill.id}>
              <td>{bill.date && new Date(bill.date).toLocaleDateString()}</td>
              <td>{bill.category}</td>
              <td>{bill.amount}</td>
              <td>{bill.description}</td>
              <td>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                    onClick={() => {
                      setSelectedBill(bill);
                      setOpenEditBill(true);
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                    onClick={() => {
                      dispatch(remove(bill.id));
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={openEditBill} setIsOpen={setOpenEditBill}>
        <EditBill bill={selectedBill} setOpenEditBill={setOpenEditBill} />
      </Modal>
    </div>
  );
};

export default BillTable;
