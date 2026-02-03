import "@/styles/globals.css";
import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/ui/input-with-label";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { LoginSchema, type LoginSchemaType } from "@/schemas/auth/login.schema";

function Login() {
    const {register, handleSubmit, formState: {errors}} = useForm({
      resolver: zodResolver(LoginSchema)
    })
    const onSubmit = (data: LoginSchemaType) => console.log(data)
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}
    className="flex flex-col items-center">      
      <h1 className="text-2xl text-gray-800 text-center p-2 font-semibold">
        Acesso ao sistema de estacionamento
      </h1>
      <p className="text-center text-sm text-muted-foreground mb-4">
        Insira suas credenciais para continuar
      </p>
      <div>
        <InputWithLabel
          id="email"
          label="Email"
          type="email"
          placeholder="email@email.com"
          error={errors.email?.message}
          {...register("email")}
        />
        <InputWithLabel
          id="password"
          label="Senha"
          type="password"
          placeholder="********"
          error={errors.password?.message}
          {...register("password")}
        />
        <Button className="w-full mt-8 h-12">Entrar</Button>
        <Button variant="link" className="w-full mt-4 ">
          Esqueci minha senha
        </Button>
        <Button variant="link" className="w-full">
          Não tem conta? Crie agora
        </Button>
      </div>
    </form>
  );
}

export default Login;
