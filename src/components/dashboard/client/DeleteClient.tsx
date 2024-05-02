import React from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../../context/Context";
import { API_URL } from "../../../constants/data";
import Loading from "../../../components/loader/Loading";


export default function DeleteClient() {
    const { client: currentClient } = React.useContext(AppContext);
    const cId = useParams().cId || "";

    const [Load, setLoad] = React.useState(true);
    React.useEffect(() => {
        const timer = setTimeout(() => {
          setLoad(false);
        }, 3000);
      
        return () => clearTimeout(timer);
      }, []);

    async function deleteClient() {

    //     const tempClient = {
    //         clientId: cId,
    //         session: currentClient.session,
    //         access_token: currentClient.access_token,
    //         cid: currentClient.cid,
    //     };

    //     const response = await fetch(`${API_URL}/delete-client`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(tempClient),
    //     }).then((res) => res.json());

    //     alert(response.message);
    //     if (response.message === "User deleted") {
    //         window.location.href = "/dashboard/clients";
    //     }

    }
    return (
        <>
        {Load && <Loading />}
            <div className="flex justify-center items-center w-full h-full">
                <div className="w-[400px] bg-white p-4 rounded-md shadow-2xl">
                    <h1 className="text-2xl font-bold text-center text-black">
                        Delete Client
                    </h1>
                    <p className="text-center text-black my-4">
                        Are you sure you want to delete this client?
                    </p>
                    <div className="flex justify-between">
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded-md"
                            onClick={deleteClient}
                        >
                            Delete
                        </button>
                        <a
                            className="bg-blue-500 text-white px-4 py-2 rounded-md"
                            href="/dashboard/clients"
                        >
                            Cancel
                        </a>
                    </div>
                </div>
            </div>
        </>
    );







}