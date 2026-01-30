import { Logo } from "../../components/commom/logo"
import '../../styles/globals.css'

function Login() {
  return (
    <div className="bg-gray-200 min-h-screen min-w-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl max-w-[90%] w-200 flex flex-col items-center shadow-lg"
                    style={{fontFamily: 'Poppins'}} >
            <Logo size="lg"/>
            <h1 className="text-2xl text-black text-center p-2 font-semibold">Acesso ao sistema de estacionamento</h1>
            <p className="text-gray-500 text-center">Insira suas credenciais para continuar</p>
        </div>
    </div>
  )
}

export default Login
