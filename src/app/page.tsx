import { advocateData } from "../db/seed/advocates";
import AdvocatesSearchSection from "./ui/advocates/advocates-search-section";

async function getAdvocates() {
  return advocateData;
}

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string;
  }>
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  const advocates = await getAdvocates();

  const filteredAdvocates = advocates.filter((advocate) => {
    return (
      advocate.firstName.includes(query) ||
      advocate.lastName.includes(query) ||
      advocate.city.includes(query) ||
      advocate.degree.includes(query) ||
      advocate.specialties.some((specialty) => {
        return specialty.includes(query);
      }) ||
      advocate.yearsOfExperience.toString().includes(query)
    );
  });

  return (
    <main style={{ margin: "24px" }}>
      <h1>Solace Advocates</h1>
      <br />
      <br />
      <AdvocatesSearchSection />
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City</th>
            <th>Degree</th>
            <th>Specialties</th>
            <th>Years of Experience</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredAdvocates.map((advocate) => {
            return (
              <tr>
                <td>{advocate.firstName}</td>
                <td>{advocate.lastName}</td>
                <td>{advocate.city}</td>
                <td>{advocate.degree}</td>
                <td>
                  {advocate.specialties.map((s) => (
                    <div>{s}</div>
                  ))}
                </td>
                <td>{advocate.yearsOfExperience}</td>
                <td>{advocate.phoneNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
