import PaginationBar from "../common/pagination-bar";

export default function AdvocatesPagination({
  searchString,
  currentPage,
  totalPages,
}: {
  searchString: string,
  currentPage: number,
  totalPages: number,
}) {

  let params: any = {};

  if (searchString) {
    params.search = searchString;
  }

  return (
    <div>
      <PaginationBar url="/" params={params} currentPage={currentPage} totalPages={totalPages} />
    </div>
  )
}
