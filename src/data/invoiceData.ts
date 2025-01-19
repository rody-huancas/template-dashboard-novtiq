import { formatMoney } from "@/utils/general.util";

type Props = {
  serial     : number;
  description: string;
  quantity   : number;
  baseCost   : string;
  totalCost  : string;
};

export const invoiceData: Props[] = [
  {
    serial     : 1001,
    description: "Monitor LED 24' Dell Professional",
    quantity   : 3,
    baseCost   : formatMoney(249.99),
    totalCost  : formatMoney(749.97),
  },
  {
    serial     : 1002,
    description: "Teclado Mecánico Logitech G Pro",
    quantity   : 5,
    baseCost   : formatMoney(129.99),
    totalCost  : formatMoney(649.95),
  },
  {
    serial     : 1003,
    description: "Mouse Inalámbrico Microsoft Surface",
    quantity   : 8,
    baseCost   : formatMoney(59.99),
    totalCost  : formatMoney(479.92),
  },
  {
    serial     : 1004,
    description: "Disco SSD Samsung 1TB",
    quantity   : 4,
    baseCost   : formatMoney(149.99),
    totalCost  : formatMoney(599.96),
  },
  {
    serial     : 1005,
    description: "Memoria RAM Corsair 16GB DDR4",
    quantity   : 6,
    baseCost   : formatMoney(89.99),
    totalCost  : formatMoney(539.94),
  }
];
