"use client";
const Recordmodal = ({ showModal, hideModal }) => {
  return (
    <dialog open={showModal} onClose={hideModal} className="modal">
      <div className="modal-box max-w-2xl">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg border-b-2">Add record</h3>
        <div className=" flex gap-5 mt-5 w-full">
          <div className="flex flex-col gap-4 w-1/2">
            <div className="flex gap-2 ">
              <button className="bg-blue-300 rounded-md px-10 py-2">
                Expense
              </button>
              <button className="bg-green-300 rounded-md px-10 py-2">
                Income
              </button>
            </div>
            <div className="">
              <p>Amount</p>
              <input
                type="number"
                placeholder="₮ 000.0"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <p>Category</p>
              <select className="border rounded-md px-3 py-3 w-full ">
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
          <div className="w-1/2 flex flex-col gap-4">
            <p>Payee</p>
            <input
              type="text"
              placeholder="Write here"
              className="input input-bordered w-full"
            />
            <p>Note</p>
            <input
              type="text"
              placeholder="Write here"
              className="input input-bordered w-full h-3/4"
            />
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Recordmodal;
