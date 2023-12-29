import { CustomersTableType } from "@/app/lib/definitions";
import { LastTableHeaderCell, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, LastTableCell } from "../tablefunctions";
import { DeleteCustomer, UpdateCustomer } from "../buttons";
import Image from "next/image";
import { formatCurrency } from "@/app/lib/utils";



export default function CustomersListTable ({
  data,
}: {
  data: CustomersTableType[];
}) {
  
  return (
    <>
    <div className="md:hidden">
                {data?.map((item) => (
                  <div
                    key={item.id}
                    className="mb-2 w-full rounded-md bg-white dark:bg-gray-800 dark:text-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <div className="flex items-center gap-3">
                            <Image
                              src={item.image_url}
                              className="rounded-full"
                              alt={`${item.name}'s profile picture`}
                              width={28}
                              height={28}
                            />
                            <p>{item.name}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">
                          {item.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between border-b py-3">
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Pending</p>
                        <p className="font-medium">{item.total_pending}</p>
                      </div>
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Paid</p>
                        <p className="font-medium">{item.total_paid}</p>
                      </div>
                    </div>
                    <div className="pt-4 text-sm">
                      <p>{item.total_invoices} invoices</p>
                    </div>
                    <div className="flex justify-end gap-2">
                    <UpdateCustomer id={item.id} />
                    <DeleteCustomer id={item.id} />
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
            <TableHeaderCell>Total de facturas</TableHeaderCell>
            <TableHeaderCell>Pagado</TableHeaderCell>
            <TableHeaderCell>Pendiente</TableHeaderCell>
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
            <TableCell>
              <Text>{item.email}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.total_invoices}</Text>
            </TableCell>
            <TableCell>
              <Text>{formatCurrency(item.total_paid)}</Text>
            </TableCell>
            <TableCell>
              <Text>{formatCurrency(item.total_pending)}</Text>
            </TableCell>
            <LastTableCell>
              <UpdateCustomer id={item.id} />
              <DeleteCustomer id={item.id} />
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

