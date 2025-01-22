import { Link } from "react-router-dom";
import { Title } from "@/components/ui/title/Title";
import { Input } from "@/components/ui/input/Input";
import { Button } from "@/components/ui/button/Button";
import BackgroundLayout from "@/layouts/common/BackgroundLayout";

const ForgotPassword = () => {
  return (
    <BackgroundLayout>
      <div className="bg-white rounded-2xl shadow-xl w-[600px] p-8 z-10 flex flex-col gap-5 items-center">
        <Title size="h3">Recupera tu Contraseña</Title>

        <p className="text-gray-600/80 text-lg text-center">
          Ingresa tu correo electrónico para restablecer tu contraseña. Te
          enviaremos un enlace a tu bandeja de entrada.
        </p>

        <div className="space-y-5 w-full">
          <Input
            label="Correo Electrónico"
            placeholder="Ejemplo: john@email.com"
            size="lg"
          />

          <Button className="w-full h-12 text-lg" size="lg">
            Enviar Enlace
          </Button>

          <p className="text-center text-gray-600/80 text-lg mt-4">
            ¿Recuerdas tu contraseña?{" "}
            <Link to="/login" className="text-primary font-bold underline">
              Inicia Sesión
            </Link>
          </p>
        </div>
      </div>
    </BackgroundLayout>
  );
};

export default ForgotPassword;
