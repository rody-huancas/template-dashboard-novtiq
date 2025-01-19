import { Input } from "@/components/ui/input/Input";
import { Button } from "@/components/ui/button/Button";
import { Title } from "@/components/ui/title/Title";
import Textarea from "@/components/ui/textarea/Textarea";
import Checkbox from "@/components/ui/checkbox/Checkbox";
import InputSelect from "@/components/ui/select/InputSelect";
import RadioButton from "@/components/ui/radio-button/RadioButton";

const SettingsPage = () => {
  return (
    <div className="space-y-7">
      <Title size="h3">Ajustes</Title>

      <div className="space-y-6">
        <div className="space-y-6">
          <h4 className="text-xl font-semibold">Configuración de perfil</h4>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Input label="Nombre" placeholder="Tu nombre" />
              <Input label="Correo electrónico" type="email" placeholder="tu.email@dominio.com"/>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Input label="Contraseña" type="password" placeholder="******" />
              <Input label="Confirmar contraseña" type="password" placeholder="******"/>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Input label="Teléfono" type="tel" placeholder="(+51) 987 654 321"/>
              <Input label="Dirección" placeholder="Ingrese su dirección"/>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <h4 className="text-xl font-semibold">
            Preferencias de notificación
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pb-3">
            <Checkbox label="Notificaciones por correo" id="notification-email" />
            <Checkbox label="Notificaciones push" id="notification-push" />
            <Checkbox label="Notificaciones por WhatsApp" id="notification-whatsapp" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <InputSelect
              label="Frecuencia de notificación por correo"
              options={["Inmediata", "Diaria", "Semanal", "Mensual"]}
              selectedValue="Inmediata"
            />

            <InputSelect
              label="Frecuencia de notificación por Push"
              options={["Inmediata", "Diaria", "Semanal", "Mensual"]}
              selectedValue="Mensual"
            />

            <InputSelect
              label="Frecuencia de notificación WhatsApp"
              options={["Inmediata", "Diaria", "Semanal", "Mensual"]}
              selectedValue="Semanal"
              className="sm:col-span-2 md:col-span-1"
            />
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-xl font-semibold">Preferencias de idioma</h4>
          <div className="grid grid-cols-4 gap-5">
            <RadioButton label="Español" id="spanish" />
            <RadioButton label="Inglés" id="english" />
            <RadioButton label="Francés" id="french" />
            <RadioButton label="Alemán" id="german" />
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-xl font-semibold">Detalles adicionales</h4>
          <div className="space-y-4">
            <Textarea placeholder="Ingrese los detalles" />
          </div>
        </div>

        <div className="flex justify-end">
          <Button className="w-full sm:w-auto">Guardar cambios</Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
