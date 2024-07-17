import { useForm } from "react-hook-form";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/button";

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const defaultValue =
    "border text-custom-gray rounded-sm py-2.5 px-1.5 w-full focus:outline-none";
  const emailClass = classNames({
    [defaultValue]: true,
    "border-rose-500": errors.email,
    "border-custom-b-gray": !errors.email,
  });

  const senhaClass = classNames({
    [defaultValue]: true,
    "border-rose-500": errors.password,
    "border-custom-b-gray": !errors.password,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center flex-col justify-center min-h-screen gap-4">
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
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            })}
          />
          {errors.email && (
            <span className="text-rose-500 text-sm">Email inválido</span>
          )}
          <input
            type="password"
            className={senhaClass}
            placeholder="senha"
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors.senha && (
            <span className="text-rose-500 text-sm">
              Senha deve ter pelo menos 6 caracteres
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Button type="submit">Criar uma conta nova</Button>
          <p className="font-normal text-custom-gray text-center">
            Já possui uma conta ?{" "}
            <span
              onClick={() => navigate("/sign-in")}
              className="text-custom-blue cursor-pointer"
            >
              Acesse agora!
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
