import { useContext, useState } from "react";
import { ExpenseContext } from "../expense-context";

const AddEntry = () => {
  const { handleAdd } = useContext(ExpenseContext);
 
  const [description, setdescription] = useState("");
  const handler = (event) => {
    setdescription(event.target.value);
    //console.log(description)
  };

  const [amount, setamount] = useState("");
  const handler1 = (event) => {
    setamount(Number(event.target.value));
    //console.log(amount)
  };
  
 
  return (
    <div className="border border-info rounded p-4 mt-3">
      <form action="" className="form-group">
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            className="form-control"
            value={description}
            onChange={handler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Amount</label>
          <input
            type="text"
            id="Amount"
            className="form-control"
            value={amount}
            onChange={handler1}
          />
        </div>
      </form>
      <button
        className="btn btn-primary mt-3"
        onClick={() => {
          handleAdd({description:description,amount:amount},setamount(''),setdescription(''))
      }}
      >
        Add Entry
      </button>
    </div>
  );
};
export default AddEntry;
