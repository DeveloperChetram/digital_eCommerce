import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUserEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useSelector } from "react-redux";

const UserProfile = () => {
const user = useSelector((state) => state.users.data)
  const { register,reset } = useForm({

  });
if(user){
    useEffect(()=>{
    reset({

      username: user?.username,
      email: user?.email,
      password: user?.password,
      sellerCategory: "Currently Unavailable",
    },
    )
  },[user,reset])
}
  console.log(user)
  const [isEditable, setisEditable] = useState(true);
  const editHandler = () => {
    setisEditable(!isEditable);
    console.log(isEditable);
  };
  return (
    <div className="max-w-4xl mx-auto  p-6 text-center mt-10 border rounded-2xl border-[#bf40bf]">
      <div className="w-full relative">
      {user.isAdmin?<>  <h2 className="text-m font-bold text-gray-600 mb-8">
          User type - Seller (Admin)
        </h2></>:<>
         <h2 className="text-m font-bold text-gray-600 mb-8">
            User type - Consumer 
        </h2></>}
        <span
          className={
            isEditable
              ? "select-none absolute top-0 right-0 flex items-center gap-2 border-1 rounded-lg border-[#BF40BF] px-4 py-1 cursor-pointer"
              : "select-none absolute top-0 right-0 flex items-center gap-2 border-1 rounded-lg border-[#BF40BF] px-4 py-1 cursor-pointer bg-[#bf40bf] text-white"
          }
          onClick={editHandler}
        >
          {isEditable ? (
            <>
              Edit
              <FaUserEdit />
            </>
          ) : (
            <>
              Save
              <FaCheck />
            </>
          )}{" "}
        </span>
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* User Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              User Name
            </label>
            <input
              {...register("username", { disabled: isEditable })}
              type="text"
              placeholder="Enter Your Name"
              className={`w-full border rounded-lg px-4 py-2 focus:outline-none ${
                !isEditable ? "border-[#BF40BF]" : "border-gray-300"
              }`}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              {...register("email", { disabled: isEditable })}
              type="email"
              placeholder="your@gmail.com"
              className={`w-full border rounded-lg px-4 py-2 focus:outline-none ${
                !isEditable ? "border-[#BF40BF]" : "border-gray-300"
              }`}
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              {...register("password", { disabled: isEditable })}
              type={isEditable ? "password" : "text"}
              placeholder="Password"
              className={`w-full border rounded-lg px-4 py-2 focus:outline-none ${
                !isEditable ? "border-[#BF40BF]" : "border-gray-300"
              }`}
            />
          </div>

          {/* Seller Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Seller-Category
            </label>
            <input
              {...register("sellerCategory", { disabled: true })}
              type="text"
              placeholder="Currently Unavailable"
              className={`w-full border rounded-lg px-4 py-2 focus:outline-none ${
                !isEditable ? "border-[#FF8383]" : "border-gray-300"
              }`}
            />
          </div>
        </div>
        <button className=  "cursor-pointer border-red-500  border-2  px-6 py-2 rounded-lg text-sm font-medium">
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
