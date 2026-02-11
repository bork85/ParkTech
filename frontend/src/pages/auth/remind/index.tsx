import "@/styles/globals.css";
import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/ui/input-with-label";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { LoginSchema, type LoginSchemaType } from "@/schemas/auth/login.schema";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/providers/authProvider";
import { loginUsers } from "@/services/users/loginUser.service";

function Remind() {
  const {login} = useAuth()
  const navigate = useNavigate()
  
  const handleLogin = async (userData: LoginSchemaType) => {
    try {
      const response = await loginUsers(userData)
      login(response.data.name, response.data.email)
      navigate("/vehicles")
    } catch (error) {
      console.error("Erro no login:", error)
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
        Esqueci minha senha
      </h1>
      <p className="text-center text-sm text-muted-foreground mb-4">
        Informe seu email para continuar
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
        
        <Button className="w-full mt-8 h-12">Solicitar dados de acesso</Button>
      </div>
    </form>        
        <a href="/register">
        <Button variant="link" className="w-full mt-4">
          Não tem conta? Crie agora
        </Button></a>
        <a href="/login">
        <Button variant="link" className="w-full">
          Já possui uma conta? Faça login aqui
        </Button>
      </a>
    </div>
  );
}

export default Remind;
