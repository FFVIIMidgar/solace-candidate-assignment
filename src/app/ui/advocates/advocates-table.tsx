import { Advocate } from "../../data/types";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../../../components/ui/table";
import { formatPhoneNumber } from "../../lib/utils";

export default function AdvocatesTable({
  advocates,
}: {
  advocates: Advocate[],
}) {
  return (
    <div className="overflow-scroll shadow-md rounded-lg">
      <Table className="table-fixed">
        <TableHeader>
          <TableRow className="bg-gray-200 hover:bg-gray-300">
            <TableHead className="w-[10%] text-gray-700 font-bold">First Name</TableHead>
            <TableHead className="w-[10%] text-gray-700 font-bold">Last Name</TableHead>
            <TableHead className="w-[10%] text-gray-700 font-bold">City</TableHead>
            <TableHead className="w-[8%] text-gray-700 font-bold">Degree</TableHead>
            <TableHead className="w-[40%] text-gray-700 font-bold">Specialties</TableHead>
            <TableHead className="w-[12%] text-gray-700 font-bold">Years of Experience</TableHead>
            <TableHead className="w-[10%] text-gray-700 font-bold">Phone Number</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {advocates.map((advocate) => {
            return (
              <TableRow className="even:bg-gray-50 hover:even:bg-gray-100" key={advocate.id}>
                <TableCell>{advocate.firstName}</TableCell>
                <TableCell>{advocate.lastName}</TableCell>
                <TableCell>{advocate.city}</TableCell>
                <TableCell>{advocate.degree}</TableCell>
                <TableCell>
                  {(advocate.specialties).map((specialty) => (
                    <div key={specialty}>{specialty}</div>
                  ))}
                </TableCell>
                <TableCell>{advocate.yearsOfExperience}</TableCell>
                <TableCell>{formatPhoneNumber(advocate.phoneNumber)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
