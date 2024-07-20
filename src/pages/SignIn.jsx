import { useForm } from "react-hook-form";
import classNames from "classnames";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { App } from "../layouts/App";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/button";
import { useState } from "react";
import { Spinner } from "../components/spinner";

export function SignIn() {
  const [authError, setAuthError] = useState(false);
  const [authenticating, setAuthenticating] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const auth = getAuth();

  const onSubmit = ({ email, password }) => {
    setAuthenticating(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("access-token", user.accessToken);
        navigate("/");
      })
      .catch((error) => {
        console.error(error.message);
        setAuthError(true);
      })
      .finally(() => setAuthenticating(false));
  };

  const defaultValue =
    "border text-custom-gray rounded-sm py-2.5 px-1.5 w-full focus:outline-none";
  const emailClass = classNames({
    [defaultValue]: true,
    "border-rose-500": errors.email,
    "border-custom-b-gray": !errors.email,
  });

  const passwordClass = classNames({
    [defaultValue]: true,
    "border-rose-500": errors.password,
    "border-custom-b-gray": !errors.password,
  });

  return (
    <App>
      <div className="flex items-center flex-col justify-center min-h-screen gap-4 bg-slate-50">
        <h1 className="font-medium text-custom-blue text-3xl">Aluritter</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 min-w-96 lg:w-1/4 md:w-1/3 sm:w-1/2"
        >
          <div className="flex items-center justify-center flex-col gap-2">
            <input
              type="email"
              className={emailClass}
              placeholder="email@exemplo.com"
              {...register("email", {
                required: true,
                maxLength: 255,
                minLength: 5,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              })}
            />
            {errors.email?.type === "required" ? (
              <span className="text-xs text-red-500 pl-1">
                Email é obrigatório
              </span>
            ) : null}
            {errors.email?.type === "minLength" ? (
              <span className="text-xs text-red-500 pl-1">
                O email precisa ter pelo menos cinco caracteres
              </span>
            ) : null}
            <input
              type="password"
              className={passwordClass}
              placeholder="senha"
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors.password?.type === "required" ? (
              <span className="text-xs text-red-500 pl-1">
                Senha é obrigatória
              </span>
            ) : null}
            {errors.password?.type === "minLength" ? (
              <span className="text-xs text-red-500 pl-1">
                A senha precisa ter pelo menos oito caracteres
              </span>
            ) : null}
          </div>
          {authError ? (
            <p className="text-xs text-red-500 text-center mt-3">
              Email ou senha inválidos
            </p>
          ) : null}
          <div className="flex flex-col gap-2">
            <Button type="submit" disabled={authenticating}>
              {authenticating ? (
                <div className="flex items-center justify-center gap-2">
                  <Spinner /> Acessando plataforma
                </div>
              ) : "Acessar plataforma"}
            </Button>
            <p className="font-normal text-custom-gray text-center">
              Não possui uma conta ?{" "}
              <span
                onClick={() => navigate("/sign-up")}
                className="text-custom-blue cursor-pointer hover:underline"
              >
                Crie uma agora!
              </span>
            </p>
          </div>
        </form>
      </div>
    </App>
  );
}
