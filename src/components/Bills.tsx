import { useSelector } from "react-redux";
import { RootState } from "../store";
import AddBill from "./AddBill";
const Bills = () => {
  const bills = useSelector((state: RootState) => state.bills.bills);
  return (
    <div>
      <AddBill />
    </div>
  );
};

export default Bills;
