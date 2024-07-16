import { App } from "../layouts/App";
import { useForm } from "react-hook-form"
import classNames from 'classnames';



export const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const defaultValue = 'border text-custom-gray rounded-sm py-2.5 px-1.5 w-full focus:outline-none';
  const emailClass = classNames({
    [defaultValue]: true,
    'border-rose-500': errors.email,
    'border-custom-b-gray': !errors.email,
  });

  const senhaClass = classNames({
    [defaultValue]: true,
    'border-rose-500': errors.senha,
    'border-custom-b-gray': !errors.senha,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
  
    <App>
      <div className="flex items-center flex-col justify-center min-h-screen gap-4">
        <h1 className="font-medium text-custom-blue text-3xl">Aluritter</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 min-w-96">
          <div className="flex items-center justify-center flex-col gap-2">
            <input
              type="email"
              className={emailClass}
              placeholder="email@exemplo.com"
              {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}
            />
            {errors.email && <span className="text-rose-500 text-sm">Email inválido</span>}
            <input
              type="password"
              className={senhaClass}
              placeholder="senha"
              {...register("senha", { required: true, minLength: 6 })}
            />
            {errors.senha && <span className="text-rose-500 text-sm">Senha deve ter pelo menos 6 caracteres</span>}
          </div>
          <div className="flex flex-col gap-2">
            <button type="submit" className="bg-custom-green rounded-sm w-full py-2 px-28.5 text-custom-text-button-color cursor-pointer hover:bg-green-600">
              Criar uma conta nova
            </button>
            <p className="font-normal text-custom-gray text-center">
              Já possui uma conta ?{" "}
              <span className="text-custom-blue cursor-pointer">
                Acesse agora!
              </span>
            </p>
          </div>
        </form>
      </div>
    </App>
  );
}
