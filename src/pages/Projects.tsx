import React from "react";
import Loading from "../components/loader/Loading";

export default function Projects() {

  const data = [
    {
      id: 1,
      photo: "https://via.placeholder.com/50", // Placeholder image URL
      ProjectName: "John",
      DesignerName: "Doe",
      status: "Active",
    },
    {
      id: 2,
      photo: "https://via.placeholder.com/50", // Placeholder image URL
      ProjectName: "Jane",
      DesignerName: "Smith",
      status: "Inactive",
    },
    {
      id: 3,
      photo: "https://via.placeholder.com/50", // Placeholder image URL
      ProjectName: "Michael",
      DesignerName: "Johnson",
      status: "Active",
    },
    {
      id: 4,
      photo: "https://via.placeholder.com/50", // Placeholder image URL
      ProjectName: "Emily",
      DesignerName: "Brown",
      status: "Active",
    },
    {
      id: 5,
      photo: "https://via.placeholder.com/50", // Placeholder image URL
      ProjectName: "David",
      DesignerName: "Williams",
      status: "Inactive",
    },
    {
      id: 6,
      photo: "https://via.placeholder.com/50", // Placeholder image URL
      ProjectName: "Emma",
      DesignerName: "Taylor",
      status: "Active",
    },
    {
      id: 7,
      photo: "https://via.placeholder.com/50", // Placeholder image URL
      ProjectName: "Olivia",
      DesignerName: "Anderson",
      status: "Inactive",
    },
    {
      id: 8,
      photo: "https://via.placeholder.com/50", // Placeholder image URL
      ProjectName: "James",
      DesignerName: "Martinez",
      status: "Active",
    },
    {
      id: 9,
      photo: "https://via.placeholder.com/50", // Placeholder image URL
      ProjectName: "Sophia",
      DesignerName: "Garcia",
      status: "Active",
    },
  ];

  const [Load, setLoad] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 3000);
  
    return () => clearTimeout(timer);
  }, []);
  

  return (
    <>
       {Load && <Loading />}
    <h2 className="text-xl font-bold mb-2">User Information</h2>
  <div className="flex justify-between">
      {/* Left section */}
      <div className="w-[75.5%]  h-[80vh] mt-8 p-[15px] rounded-3xl">
      <div className="container mx-auto mt-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead  className='bg-blue-100 border-2'>
            <tr>
              <th className="px-2 py-1 text-left">Photo</th>
              <th className="px-2 py-1 text-left">First Name</th>
              <th className="px-2 py-1 text-left">Last Name</th>
              <th className="px-2 py-1 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="mt-4">
            {data.map((item) => (
              <tr key={item.id}>
                <td className="border-t border-gray-200 px-2 py-1">
                  <img src={item.photo} alt={`${item.ProjectName} ${item.DesignerName}`} className="h-8 w-8 rounded-full" />
                </td>
                <td className="border-t border-gray-200 px-2 py-1">{item.ProjectName}</td>
                <td className="border-t border-gray-200 px-2 py-1">{item.DesignerName}</td>
                <td className="border-t border-gray-200 px-2 py-1">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      </div>

      {/* Right section */}
      <div className="w-[24%] bg-blue-200 h-[80vh] mt-8 rounded-3xl">
        {/* Content for right section */}
      </div>
    </div>
    </>
  );
}
