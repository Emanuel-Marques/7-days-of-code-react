import { App } from "../layouts/App";

export const Home = () => (
  <App>
    <div className="flex items-center flex-col justify-center min-h-screen gap-4">
      <h1 className="font-medium text-custom-blue text-3xl">Aluritter</h1>
      <form action="" className="flex flex-col gap-5 min-w-96">
        <div className="flex items-center justify-center flex-col gap-2">
          <input
            type="email"
            className="border border-custom-b-gray text-custom-gray rounded-sm py-2.5 px-1.5 w-full focus:outline-none"
            placeholder="email@exemplo.com"
            name="name"
            id="name"
          />
          <input
            type="password"
            className="border border-custom-b-gray text-custom-gray rounded-sm py-2.5 px-1.5 w-full focus:outline-none"
            placeholder="senha"
            name=""
            id=""
          />
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
