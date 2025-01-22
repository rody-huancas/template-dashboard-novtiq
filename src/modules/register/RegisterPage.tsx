import { Link } from "react-router-dom";
import { Title } from "@/components/ui/title/Title";
import { Input } from "@/components/ui/input/Input";
import { Button } from "@/components/ui/button/Button";
import Checkbox from "@/components/ui/checkbox/Checkbox";
import BackgroundLayout from "@/layouts/common/BackgroundLayout";

const RegisterPage = () => {
  return (
    <BackgroundLayout>
      <div className="bg-white rounded-2xl shadow-xl w-[600px] p-8 z-10 flex flex-col gap-5 items-center">
        <Title size={"h3"}>Regístrate</Title>

        <p className="text-gray-600/80 text-lg">
          Complete los siguientes campos para crear una cuenta
        </p>

        <div className="space-y-5 w-full">
          <Input label="Nombre Completo" placeholder="John Doe" size="lg" />
          <Input label="Correo Electrónico" placeholder="john@email.com" size="lg" />
          <Input
            label="Contraseña"
            type="password"
            placeholder="Ingrese una contraseña segura"
            size="lg"
          />
          <Input
            label="Confirmar Contraseña"
            type="password"
            placeholder="Confirme su contraseña"
            size="lg"
          />

          <div className="flex items-center justify-between">
            <Checkbox label="Acepto los términos y condiciones" />

            <p className="flex items-center justify-center gap-2 whitespace-nowrap my-3">
              ¿Ya tienes cuenta?
              <Link to="/login" className="text-primary font-bold text-lg underline">
                Inicia Sesión
              </Link>
            </p>
          </div>

          <Button className="w-full h-12 text-lg" size="lg">
            Registrarse
          </Button>
        </div>
      </div>
    </BackgroundLayout>
  );
};

export default RegisterPage;
