"use client";
const Modal = ({ showModal, hideModal }) => {
  return (
    <dialog open={showModal} onClose={hideModal} className="modal">
      <div className="modal-box w-[1000px]">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg border-b-2">Add record</h3>
        <div className=" flex gap-5 mt-5 w-full">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <button>Expense</button>
              <button>Income</button>
            </div>
            <div>
              <p>Amount</p>
              <input
                type="number"
                placeholder="₮ 000.0"
                className="input input-bordered"
              />
            </div>
            <div>
              <p>Category</p>
              <select className="border rounded-md px-[61px] py-3 ">
                <option value="" disabled selected>
                  Choose
                </option>
                <option value="">Shopping</option>
                <option value="">Food</option>
              </select>
            </div>
            <div className="flex gap-2">
              <div>
                <p>Date</p>
                <input type="date" className="input input-bordered" />
              </div>
              <div>
                <p>Time</p>
                <input type="time" className="input input-bordered" />
              </div>
            </div>
            <button className="btn btn-primary">Add record</button>
          </div>
          <div>
            <p>Payee</p>
            <input
              type="text"
              placeholder="Write here"
              className="input input-bordered"
            />
            <p>Note</p>
            <input
              type="text"
              placeholder="Write here"
              className="input input-bordered"
            />
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
