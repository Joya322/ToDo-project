import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  let [item, setItem] = useState("");
  let [list, setList] = useState([]);

  const AddToList = () => {
    if (item != '') {
      list.push(item);
      setList([...list]);
    }
  };

  const RemoveFromList = (index) => {
    list.splice(index, 1);
    setList([...list])
  }
  return (
    <div>
      <div className="container w-full md:w-3/4 md:mx-auto bg-amber-50 mt-8 pb-6 flex flex-col justify-center items-center border-0 rounded">
        {/* input section */}

        <div className="inputSection md:w-2/3 mx-5 pt-5">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">My Tasks</h1>

          <input
            onChange={(e) => {
              setItem(e.target.value);
            }}
            className="border border-gray-300 rounded mr-3 px-3 py-2 md:text-2xl shadow bg-white font-medium md:w-[290px] lg:w-[420px] xl:w-[670px]"
            placeholder="New task"
            type="text"
          />
          <button
            onClick={AddToList}
            className="border rounded px-4 py-2 bg-blue-400 md:text-2xl font-medium text-white"
            type="submit"
          >
            Add
          </button>
        </div>
        {/* todo list table section */}
        <div className="todoTableSection w-2/3">
          <ul
            className={`my-5 ${
              list.length != 0 && "border border-gray-300 rounded shadow"
            }`}
          >
            {list.length != 0 ?
              list.map((item, index) => {
                return (
                  <li className="border-b border-gray-300 flex items-center py-2 px-2">
                    <input className="w-7 h-7 mr-2" type="checkbox" />
                    <div className="w-full flex items-center justify-between">
                      <span>{item}</span>
                      <FontAwesomeIcon onClick={()=>{RemoveFromList(index)}} icon={faTrashCan} />
                    </div>
                  </li>
                );
              }): ""}
          </ul>
          {/* <table className="rounded-sm border border-separate border-red-500 shadow mt-5 font-medium text-2xl p-1">
            <tbody className="">
              {list.length != 0 ? (
                list.map((item, i) => {
                  return (
                    <tr className="">
                      <td className="border-b border-red-500 flex justify-between items-center p-1">
                        <input className="w-7 h-7" type="checkbox" />

                        <span>{item}</span>

                        <FontAwesomeIcon icon={faTrashCan} />
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr></tr>
              )}
            </tbody>
          </table> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
