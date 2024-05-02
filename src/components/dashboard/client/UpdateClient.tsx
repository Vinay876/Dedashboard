import React from "react";
import InputName from "../../input/InputName";
import UserErrorInterface, { ClientErrorInterface } from "../../../interface/Error";
import InputEmail from "../../input/InputEmail";
import { AppContext } from "../../../context/Context";
import { API_URL } from "../../../constants/data";
import Loading from "../../../components/loader/Loading";
import InputStatus from "../../input/InputStatus";
import ClientInterface from "../../../interface/NewClient";

export default function UpdateClient(props: ClientInterface) {
    const{client: currentClient} = React.useContext(AppContext);

    const [Load, setLoad] = React.useState(true);
    React.useEffect(() => {
        const timer = setTimeout(() => {
          setLoad(false);
        }, 3000);
      
        return () => clearTimeout(timer);
      }, []);

    const [cid, setCid] = React.useState("");
    const [clientUpdate, setClientUpdate] = React.useState({
        cid: cid,
        email:"",
        name: "",
        username:"",
        lawyer:"",
        password: "",
        status: "active",
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
        setClientUpdate({ ...clientUpdate, [e.target.name]: e.target.value });
    }

    async function update() {
   
        setError({ message: "", hasError: false, field: "" });


        const tmpclient = {
            ...clientUpdate,
            session: currentClient.session,
            access_token: currentClient.access_token,
            cid: currentClient.cid,
        };

        console.log(tmpclient);

        const response = await fetch(`${API_URL}/update-client`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(tmpclient),
        }).then((res) => res.json());
         
        alert(response.message);
        if(response.message === "Client updated successfully"){
            window.location.href = "/dashboard/clients";
        }
        }

        return (
            <>
              {Load && <Loading />}
              <div className=" mt-4 md:mt-7 w-[95%] mx-auto">
                <h1 className="font-black text-3xl text-start text-black my-2">
                  {" "}
                  Update Client
                </h1>
        
                <div className="w-full md:w-8/12 mx-auto my-8">
                  <InputName
                    defValue={clientUpdate.name}
                    onChangeHandler={handleChanges}
                    placeholder="Enter Name"
                    name="name"
                    error={
                      error.field === "name" && error.hasError ? error.message : ""
                    }
                  />
                  <InputName
                    defValue={clientUpdate.username}
                    onChangeHandler={handleChanges}
                    placeholder="Enter Username"
                    name="username"
                    error={
                      error.field === "username" && error.hasError ? error.message : ""
                    }
                  />
                  <InputEmail
                    defValue={clientUpdate.email}
                    onChangeHandler={handleChanges}
                    placeholder="Enter Email"
                    name="email"
                    error={
                      error.field === "email" && error.hasError ? error.message : ""
                    }
                  />
        
                  {/* <InputRole
                    defValue={clientUpdate.lawyer}
                    onChangeHandler={handleChanges}
                    name="role"
                    error={
                      error.field === "role" && error.hasError ? error.message : ""
                    }
                  /> */}
                  <InputStatus
                    defValue={clientUpdate.status}
                    onChangeHandler={handleChanges}
                    name="status"
                    error={
                      error.field === "status" && error.hasError ? error.message : ""
                    }
                  />
                  <button
                    onClick={update}
                    className="w-full bg-[#002F53] text-white text-[16px] font-[600] leading-[20px] py-4 rounded-xl mt-4 flex justify-center items-center"
                  >
                    Update User
                  </button>
                </div>
              </div>
            </>
          );








    }