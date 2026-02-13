import "@/styles/globals.css";
import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/ui/input-with-label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegisterSchema,
  type RegisterSchemaType,
} from "@/schemas/auth/register.schema";
import { useNavigate } from "react-router-dom";
import { registerUser } from "@/services/auth/register.service";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import { sleep } from "@/utils/sleep";
import { AxiosError } from "axios";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });
  const navigate = useNavigate();
  const onSubmit = async (data: RegisterSchemaType) => {
    try {
      await registerUser(data);
      toast.success("Account created successfully!");
      await sleep();
      navigate("/login");
    } catch (err){
      if (err instanceof AxiosError) {
        const messageError = err.response?.data.error;
        toast.error(messageError || "Error creating account, please try again")
      }
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center"
      >
        <h1 className="text-2xl text-gray-800 text-center p-2 font-semibold">
          Crie uma nova conta
        </h1>
        <p className="text-center text-sm text-muted-foreground mb-4">
          Informe seus dados para criar uma nova conta
        </p>
        <div className="w-100">
          <InputWithLabel
            id="name"
            label="Nome"
            type="text"
            placeholder="Seu nome aqui"
            className="text-sm"
            error={errors.name?.message}
            {...register("name")}
          />
          <InputWithLabel
            id="email"
            label="Email"
            type="email"
            placeholder="Seu e-mail aqui"
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

          <Button type="submit" className="w-full mt-8 h-12" disabled={isSubmitting}>
            {isSubmitting ? (
              <> 
              <Spinner />
              "Processando..."
            </>) : ("Criar Conta")}
            
          </Button>
        </div>
      </form>
      <a href="/login">
        <Button variant="link" className="w-full mt-4">
          Já possui uma conta? Faça login aqui
        </Button>
      </a>
    </div>
  );
}

export default Register;
