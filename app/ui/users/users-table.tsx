import {  UsersTableType } from "@/app/lib/definitions";
import { LastTableHeaderCell, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, LastTableCell } from "../tablefunctions";
import { DeleteCustomer, DeleteUser, UpdateCustomer, UpdateUser } from "../buttons";



export default function UsersListTable ({
  data,
}: {
  data: UsersTableType[];
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
                <div className="flex items-center gap-3">
                  <p>{item.name}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                {item.email}
              </p>
            </div>
            <div className="flex justify-end gap-2">
                    <UpdateUser id={item.id} />
                    <DeleteUser id={item.id} />
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
              <LastTableHeaderCell>Acciones</LastTableHeaderCell>
            </>
          </TableRow>
        </TableHead>
        <TableBody>
          <>
          {data.map((item) => (
            <TableRow key={item.name}>
              <>
              <TableCell>
                {item.name}
              </TableCell>
              <TableCell>
                {item.email}
              </TableCell>           
              <LastTableCell>
                <UpdateUser id={item.id} />
                <DeleteUser id={item.id} />
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