import "@/styles/globals.css";
import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/ui/input-with-label";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { LoginSchema, type LoginSchemaType } from "@/schemas/auth/login.schema";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/providers/authProvider";
import { loginUsers } from "@/services/users/loginUser.service";
import { toast } from "sonner";
import { sleep } from "@/utils/sleep";

function Login() {
  const {login} = useAuth()
  const navigate = useNavigate()
  
  const handleLogin = async (userData: LoginSchemaType) => {
    try {
      const response = await loginUsers(userData)
      console.log(response)
      toast.success("Login successfully")
      await sleep()
      login(response.data.user.name, response.data.user.email, response.data.user.role, response.data.token)
      navigate("/vehicles")
    } catch (error) {
      toast.error("Login error, please try again")
    }
  }
  
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: zodResolver(LoginSchema)
  })
  const onSubmit = (data: LoginSchemaType) => {
    handleLogin(data)
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}
    className="flex flex-col items-center">      
      <h1 className="text-2xl text-gray-800 text-center p-2 font-semibold">
        Acesso ao sistema de estacionamento
      </h1>
      <p className="text-center text-sm text-muted-foreground mb-4">
        Insira suas credenciais para continuar
      </p>
      <div className="w-100">
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
      </div>
    </form>
        <a href="/remind-login">
        <Button variant="link" className="w-full mt-4 ">
          Esqueci minha senha
        </Button></a>
        <a href="/register">
        <Button variant="link" className="w-full">
          Não tem conta? Crie agora
        </Button></a>
    </div>
  );
}

export default Login;
