import { getAllAdvocates, getFilteredAdvocates } from "./data/data";
import AdvocatesSearchSection from "./ui/advocates/advocates-search-section";

export default async function Home(
  props: {
    searchParams?: Promise<{
      search?: string;
    }>
  }
) {
  const searchParams = await props.searchParams;
  const searchString = searchParams?.search || "";
  const advocates = searchString ? await getFilteredAdvocates(searchString) : await getAllAdvocates();

  return (
    <main style={{ margin: "24px" }}>
      <h1>Solace Advocates</h1>
      <br />
      <br />
      <AdvocatesSearchSection searchInputText={searchString}/>
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
          {advocates.map((advocate) => {
            return (
              <tr key={advocate.id}>
                <td>{advocate.firstName}</td>
                <td>{advocate.lastName}</td>
                <td>{advocate.city}</td>
                <td>{advocate.degree}</td>
                <td>
                  {(advocate.specialties).map((specialty) => (
                    <div key={specialty}>{specialty}</div>
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
