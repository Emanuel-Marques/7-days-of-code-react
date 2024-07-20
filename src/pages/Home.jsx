import PropTypes from "prop-types";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { jwtDecode } from "jwt-decode";
import { Button } from "../components/button";
import { CardPost } from "../components/card-post";
import { App } from "../layouts/App";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as uuid from "uuid";

export const Home = ({ app }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();
  const user = jwtDecode(localStorage.getItem("access-token"));

  useEffect(() => {
    onValue(ref(getDatabase(app), "alurites"), (snapshot) => {
      const data = [];
      snapshot.forEach((registry) => {
        data.push({
          ...registry.val(),
          id: registry.key,
        });
      });
      setMessages(data);
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access-token");
    navigate("/sign-in");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const db = getDatabase(app);
    set(ref(db, `alurites/${uuid.v4()}`), {
      message,
      by: user.email,
      when: new Date().getTime(),
    }).then(() => setMessage(""));
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
          {
          messages.length === 0 ? <p className="text-center text-custom-gray ">Sem tweets recentes</p> : messages
              .sort((m1, m2) => m2.when - m1.when)
              .map((m) => (
                <CardPost 
                  key={m.id}
                  message={m.message}
                  by={m.by}
                  when={m.when}
                />
              ))
          }
        </div>
      </main>
    </App>
  );
};

Home.propTypes = {
  app: PropTypes.any.isRequired,
};
