import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { DataProvider } from "../states/UseContext";

/*
@types
*/
type adminType = {
  name: String;
  email: String;
  password: String;
};

export const AddNewAdmin = () => {
  const [admin, setAdmin] = useState<adminType>({
    name: "",
    email: "",
    password: "",
  });
  const { registerAdmin } = useContext(DataProvider);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    registerAdmin(admin);
    setAdmin({
      name: "",
      email: "",
      password: "",
    });

    alert(`Great you're signed in as ${admin.name}`)
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white flex flex-col gap-12">
      <div className="bg-transparent flex flex-row items-center justify-center">
        <button
          onClick={() => navigate("/")}
          className="py-2 px-2"
        >
          <img
            width="50"
            height="50"
            className="bg-transparent rounded-lg"
            src="https://img.icons8.com/ios-filled/50/000000/circled-left-2.png"
            alt="circled-left-2"
          />
        </button>
        <h2 className="text-black uppercase bg-transparent font-bold py-4 text-center  text-2xl">
          Sign Up
        </h2>
      </div>
      <div className="flex  flex-col gap-2 bg-white px-4 h-[100vh]">
        <form onSubmit={handleSubmit} className="bg-white flex flex-col gap-3">
          <div className="flex flex-col bg-transparent">
            <label className="text-black font-semibold uppercase bg-white">
              Name:
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Enter your name"
              className="bg-white border-2 border-black rounded-sm py-2 text-center"
            />
          </div>
          <div className="flex flex-col bg-transparent">
            <label className="text-black font-semibold bg-white">Email:</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter an email address"
              className="bg-white border-2 border-black rounded-sm py-2 text-center"
            />
          </div>
          <div className="flex flex-col bg-transparent">
            <label className="text-black font-semibold bg-white">
              Password:
            </label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Create a password"
              className="bg-white border-2 border-black rounded-sm py-2 text-center"
            />
          </div>
          <div className="bg-transparent flex justify-start items-start py-2">
            <button
              type="submit"
              className="bg-black px-4 py-2 rounded-sm text-white font-semibold shadow-lg"
            >
             Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
