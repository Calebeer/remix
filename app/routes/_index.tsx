import { LoaderFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react";
import { prisma } from "~/db.server";

export let loader: LoaderFunction = async({ request }) => { 
  const url = new URL(request.url);
    const queryParams = url.searchParams;

    const nome_cliente = queryParams.get('nome_cliente');
    const nome_remedio = queryParams.get('nome_remedio');
    const fabricacao = queryParams.get('fabricacao');
    const nome_funcionario = queryParams.get('nome_funcionario');

    if(!nome_cliente){
        return{error:'Não foi fornecido um nome'}
    }

    if(!nome_remedio){
        return{error:'Não foi fornecido uma idade'}
    }

    if(!fabricacao){
        return{error:'Não foi fornecido um nome'}
    }

    if(!nome_funcionario){
        return{error:'Não foi fornecido um nome'}
    }

    await prisma.farmacia.create({
        data: {
          nome_pessoa:nome_cliente,
          fabricacao:fabricacao,
          nome_remedio:nome_remedio,
          funcionario:nome_funcionario

          
        }
      })

      

   

    return{sucess:true}

}

export default function Example() {
    return (
      <>
        {/*
          This example requires updating your template:
  
          
          <html class="h-full bg-white">
          <body class="h-full">
          
        */}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Cadastro
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="get">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Nome Cliente
                </label>
                <div className="mt-2">
                  <input name="nome_cliente" type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Nome Remédio hhh
                </label>
                <div className="mt-2">
                  <input name="nome_remedio" type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Fabricação
                  </label>
                </div>
                <div className="mt-2">
                  <input name="fabricacao" type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Funcionário
                </label>
                <div className="mt-2">
                  <input name="nome_funcionario" type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }