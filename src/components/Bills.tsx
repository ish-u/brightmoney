import { useState } from "react";
import AddBill from "./AddBill";
import BillTable from "./BillTable";
import Modal from "./Modal";
const Bills = () => {
  const [addBillOpen, setAddBillOpen] = useState(false);
  return (
    <div>
      <Modal isOpen={addBillOpen} setIsOpen={setAddBillOpen} title="Add Bill">
        <AddBill />
      </Modal>
      <BillTable />
    </div>
  );
};

export default Bills;
