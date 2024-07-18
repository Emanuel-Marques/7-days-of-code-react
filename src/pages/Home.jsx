import { Button } from "../components/button";
import { CardPost } from "../components/card-post";
import { App } from "../layouts/App";




export const Home = () => {

  return (
    <App>
      <header className="flex items-center justify-between bg-slate-50 shadow-md py-2 px-5">
        <div className="">
          <p className="text-custom-blue cursor-pointer">aluritter</p>
        </div>
        <div className="flex items-center gap-3">
          <p className="font-normal text-custom-gray text-center">johndoe@example.com</p>
          <Button
            color={"red"}
            padding={"sm"}
            onClick={() => {
              console.log("Saindo...");
            }}
          >
            Sair
          </Button>
        </div>
      </header>
      <main className="mx-16 max-sm:mx-2 max-lg:mx-5">
          <div className="flex flex-col gap-4">
            <form className="flex flex-col gap-4">
              <label htmlFor="post" className="">Alurite agora mesmo...</label>
              <textarea
                name="post"
                rows="4"
                cols="50" 
                id=""
                className="rounded-md border border-custom-b-gray resize-none"
              ></textarea>
              <div className="flex items-start justify-between">
                <p className="text-green-500">Você ainda pode digitar 255 caracteres</p>
                <Button
                  color={"blue"}
                  padding={"sm"}
                  onClick={() => {
                    console.log("Publicando...");
                  }}
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
}
