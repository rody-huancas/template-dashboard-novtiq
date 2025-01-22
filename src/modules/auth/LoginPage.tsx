import { Link, useNavigate } from "react-router-dom";
import { Title } from "@/components/ui/title/Title";
import { Input } from "@/components/ui/input/Input";
import { Button } from "@/components/ui/button/Button";
import Checkbox from "@/components/ui/checkbox/Checkbox";
import BackgroundLayout from "@/layouts/common/BackgroundLayout";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <BackgroundLayout>
      <div className="bg-white rounded-2xl shadow-xl w-[600px] p-8 z-10 flex flex-col gap-5 items-center">
        <Title size="h3">Inicia Sesión</Title>

        <p className="text-gray-600/80 text-lg text-center">
          Ingresa tus credenciales para acceder a tu cuenta
        </p>

        <div className="space-y-5 w-full">
          <Input label="Correo Electrónico" placeholder="Ejemplo: john@email.com" size="lg" />
          
          <Input
            label="Contraseña"
            type="password"
            placeholder="Ingresa tu contraseña"
            size="lg"
          />

          <div className="flex items-center justify-between">
            <Checkbox label="Recordar sesión" />

            <Link
              to="/forgot-password"
              className="text-primary font-bold text-lg underline whitespace-nowrap"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <Button className="w-full h-12 text-lg" size="lg" onClick={() => navigate("/")}>
            Iniciar Sesión
          </Button>

          <p className="text-center text-gray-600/80 text-lg mt-4">
            ¿No tienes cuenta?{" "}
            <Link to="/register" className="text-primary font-bold underline">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </BackgroundLayout>
  );
};

export default LoginPage;
