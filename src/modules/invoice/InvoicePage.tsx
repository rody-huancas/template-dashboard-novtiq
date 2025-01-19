import TableInvoice from "@/components/modules/invoice/TableInvoice";
import { Title } from "@/components/ui/title/Title";
import { Button } from "@/components/ui/button/Button";
/* Icons */
import { BsSend } from "react-icons/bs";
import { RiPrinterCloudFill } from "react-icons/ri";

const InvoicePage = () => {
  const handlePrint = () => window.print();

  return (
    <div className="space-y-10">
      <Title level={3} size="h3">
        Facturas
      </Title>

      <div className="p-10 bg-light-100 rounded-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 xl:place-items-center gap-5 text-dark-100/80">
          <div className="flex flex-col md:gap-3">
            <p className="font-medium">Factura de:</p>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-xl">Lima</p>
              <span>174 La Victoria 412</span>
            </div>
          </div>
          <div className="flex flex-col md:gap-3">
            <p className="font-medium">Factura para:</p>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-xl">Joaquín Carrasco</p>
              <span>Administrador</span>
            </div>
          </div>
          <div className="flex flex-col md:gap-3">
            <p className="font-medium">
              Fecha de Factura: <span className="font-normal">12 Nov 2024</span>
            </p>
            <p className="font-medium">
              Fecha de Vencimiento:
              <span className="font-normal">12 Feb 2025</span>
            </p>
          </div>
        </div>

        <TableInvoice />

        <div className="flex items-center justify-end gap-5 px-5">
          <Button
            size="icon"
            variant="outline"
            className="text-primary hover:text-primary/80"
            onClick={handlePrint}
          >
            <RiPrinterCloudFill size={20} />
          </Button>

          <Button className="flex items-center justify-center gap-3 bg-primary hover:bg-primary/90">
            Enviar
            <BsSend />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;
