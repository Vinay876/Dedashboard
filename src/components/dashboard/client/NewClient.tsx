import React from "react";
import InputName from "../../input/InputName";
import UserErrorInterface from "../../../interface/Error";
import InputEmail from "../../input/InputEmail";
import InputSelect from "../../input/InputSelect";
import { AppContext } from "../../../context/Context";
import { API_URL } from "../../../constants/data";
import InputPass from "../../input/InputPass";
import Loading from "../../../components/loader/Loading";


export default function NewClient() {

    const [Load, setLoad] = React.useState(true);
React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 3000);
  
    return () => clearTimeout(timer);
  }, []);

  const { client: currentClient } = React.useContext(AppContext);

  const [clientNew, setClientNew] = React.useState({
    email: "",
    name: "",
    username: "",
    role: "client",
    password: "",
  });

  const [error, setError] = React.useState<UserErrorInterface>({
    message: "",
    hasError: false,
    field: "",
  });

  function handleChanges(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) {
    setClientNew({ ...clientNew, [e.target.name]: e.target.value });
  }

  return (
    <>
      {Load && <Loading />}
      <div className=" mt-4 md:mt-7 w-[95%] mx-auto">
        <h1 className="font-black text-3xl text-start text-black my-2">
          {" "}
          Create Client
        </h1>
        <div className="w-full md:w-8/12 mx-auto my-8">
          <div className="flex justify-between">
            <InputName
              defValue=""
              onChangeHandler={handleChanges}
              placeholder="First Name"
              inputClassName="w-[49%]"
              name="name"
              error={
                error.field === "name" && error.hasError ? error.message : ""
              }
            />
            <InputName
              defValue=""
              onChangeHandler={handleChanges}
              placeholder="Last Name"
              inputClassName="w-[49%]"
              name="lastname"
              error={
                error.field === "lastname" && error.hasError
                  ? error.message
                  : ""
              }
            />
          </div>
          <InputName
            defValue=""
            onChangeHandler={handleChanges}
            placeholder="Enter Username"
            name="username"
            error={
              error.field === "username" && error.hasError
                ? error.message
                : ""
            }
          />
          <InputEmail
            defValue=""
            onChangeHandler={handleChanges}
            placeholder="Enter Email"
            name="email"
            error={
              error.field === "email" && error.hasError ? error.message : ""
            }
          />
          <InputSelect
            defValue=""
            onChangeHandler={handleChanges}
            placeholder="Select Your Designer"
            name="lawer"
            error={
              error.field === "designer" && error.hasError ? error.message : ""
            }
          />
          <InputPass
            defValue=""
            onChangeHandler={handleChanges}
            name="password"
            error={
              error.field === "password" && error.hasError ? error.message : ""
            }
          />
          <button
            // onClick={createClient}
            className="w-full bg-[#002F53] text-white text-[16px] font-[600] leading-[20px] py-4 rounded-xl mt-4 flex justify-center items-center"
          >
            Create Client
          </button>
        </div>
      </div>
    </>
  );
}