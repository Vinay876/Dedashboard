import React,{useState} from "react";
import { IoMdAdd } from "react-icons/io";
import Loading from "../components/loader/Loading";

export default function Clients() {
const [Load, setLoad] = useState(true);

React.useEffect(() => {
  const timer = setTimeout(() => {
    setLoad(false);
  }, 3000);

  return () => clearTimeout(timer);
}, []);

  return (
    <>
    {Load && <Loading />}
      <div className="flex justify-between items-center mt-4 md:mt-7 w-[95%] mx-auto">
        <h1 className="font-black text-3xl text-start text-black ">Clients</h1>
        <a
          href="/dashboard/users/new-clients"
          className="bg-[#002F53] text-white text-[16px] font-[600] leading-[20px] py-4 rounded-xl flex justify-center px-3 items-center"
        >
          <IoMdAdd className="mr-3 text-[20px]" />
          Create Client
        </a>
      </div>
      {/* <div className="flex flex-col md:flex-row mt-10">
        {
          data.length > 0 ? data.map((user, index) => {
            return <UserCard key={index} {...user} />;
          }) : <p>No Users</p>
        }
      </div> */}

      {/* <p className="ml-8 my-8 text-black font-extrabold">No Clients</p> */}
      {/* <div className="flex flex-col md:flex-row mt-10">
        {
          data.length > 0 ? data.map((user, index) => {
            return <UserCard key={index} {...user} />;
          }) : <p>No Users</p>
        }
      </div> */}
    </>
  );
}
