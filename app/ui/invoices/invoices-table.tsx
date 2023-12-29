import { InvoicesTable } from "@/app/lib/definitions";
import { LastTableHeaderCell, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, LastTableCell } from "../tablefunctions";
import { DeleteInvoice, UpdateInvoice } from "../buttons";
import { formatCurrency, formatDateToLocal } from "@/app/lib/utils";
import InvoiceStatus from "./status";
import Image from "next/image";



export default function InvoicesListTable ({
  data,
}: {
  data: InvoicesTable[];
}) {
  
  return (
    <>
    <div className="md:hidden">
            {data?.map((item) => (
              <div
                key={item.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={item.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${item.name}'s profile picture`}
                      />
                      <p>{item.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{item.email}</p>
                  </div>
                  <InvoiceStatus status={item.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(item.amount)}
                    </p>
                    <p>{formatDateToLocal(item.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={item.id} />
                    <DeleteInvoice id={item.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
      <Table>
        <>
        <TableHead>
          <TableRow>
            <>
              <TableHeaderCell>Nombre Completo</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
              <TableHeaderCell>Monto</TableHeaderCell>
              <TableHeaderCell>Fecha</TableHeaderCell>
              <TableHeaderCell>Estado</TableHeaderCell>
              <LastTableHeaderCell>Acciones</LastTableHeaderCell>
            </>
          </TableRow>
        </TableHead>
        <TableBody>
          <>
          {data.map((item) => (
            <TableRow key={item.name}>
              <>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>
                <Text>{formatCurrency(item.amount)}</Text>
              </TableCell>
              <TableCell>
                <Text>{formatDateToLocal(item.date)}</Text>
              </TableCell>
              <TableCell>
                <Text><InvoiceStatus status={item.status} /></Text>
              </TableCell>
              <LastTableCell>
                <UpdateInvoice id={item.id} />
                <DeleteInvoice id={item.id} />
              </LastTableCell>
              </>
            </TableRow>
          ))} 
          </>
        </TableBody>
        </>
      </Table>
    </>
)
}