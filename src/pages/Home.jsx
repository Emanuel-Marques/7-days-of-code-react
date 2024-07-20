import { jwtDecode } from "jwt-decode";
import { Button } from "../components/button";
import { CardPost } from "../components/card-post";
import { App } from "../layouts/App";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const user = jwtDecode(localStorage.getItem("access-token"));

  const handleLogout = () => {
    localStorage.removeItem("access-token");
    navigate("/sign-in");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("PUBLICANDO UM NOVO TWEET");
  };

  return (
    <App>
      <header className="flex items-center justify-between bg-slate-50 shadow-md py-2 px-5">
        <div className="">
          <p className="text-custom-blue cursor-pointer">aluritter</p>
        </div>
        <div className="flex items-center gap-3">
          <p className="font-normal text-custom-gray text-center">
            {user?.email}
          </p>
          <Button color={"red"} padding={"sm"} onClick={handleLogout}>
            Sair
          </Button>
        </div>
      </header>
      <main className="mx-16 max-sm:mx-2 max-lg:mx-5">
        <div className="flex flex-col gap-4 my-16 max-sm:my-5 max-lg:my-6">
          <form onSubmit={(event)=> handleFormSubmit(event)} className="flex flex-col gap-4">
            <label htmlFor="post" className="text-custom-gray">
              Alurite agora mesmo...
            </label>
            <textarea
              name="post"
              rows="4"
              cols="50"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="rounded-md border border-custom-b-gray resize-none"
            ></textarea>
            <div className="flex items-start justify-between">
              {message.length < 255 ? (
                <p className="text-sm text-green-600">
                  Você ainda pode digitar {255 - message.length} caracteres
                </p>
              ) : (
                <p className="text-sm text-red-600">
                  Você esgotou a quantidade de caracteres
                </p>
              )}
              <Button
                type="submit"
                color={"blue"}
                padding={"sm"}
              >
                Aluritar
              </Button>
            </div>
          </form>
          <CardPost />
        </div>
      </main>
    </App>
  );
};
