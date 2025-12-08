import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext } from "../../../components/ui/pagination";
import { PageLink, PageLinkType } from "../../data/types";
import { createUrl } from "../../lib/utils";

export default function PaginationBar({
  url,
  params,
  currentPage,
  totalPages,
}: {
  url: string,
  params: any,
  currentPage: number,
  totalPages: number,
}) {
  const getPageHref = (page: number): string => {
    if (page != 1) {
      params.page = page;
    }

    return createUrl(url, params);
  };

  const getPageClassname = (page: number, currentPage: number): string => {
    let className = "";

    if (page == currentPage) {
      className = "border border-gray-300 bg-emerald-800 text-white hover:bg-emerald-900 hover:text-white";
    } else {
      className = "border border-gray-300";
    }

    return className;
  }

  const getMinPage = (): number => {
    return Math.max(1, currentPage - (maxPages / 2));
  };

  const getMaxPage = (): number => {
    return Math.min(currentPage + ((maxPages / 2 - 1)), totalPages);
  };

  const getPageLinks = (): PageLink[] => {
    const pageLinks: PageLink[] = [];

    const minPage = getMinPage();
    const maxPage = getMaxPage();

    if (currentPage != 1) {
      pageLinks.push({
        type: PageLinkType.Previous,
        className: "border border-gray-300",
        href: getPageHref(currentPage - 1),
      });
    };

    for (let page = minPage; page <= maxPage; page++) {
      pageLinks.push({
        type: PageLinkType.Link,
        className: getPageClassname(page, currentPage),
        href: getPageHref(page),
        pageNumber: page,
      });
    }

    if (currentPage != totalPages) {
      pageLinks.push({
        type: PageLinkType.Next,
        className: "border border-gray-300",
        href: getPageHref(currentPage + 1),
      });
    }

    return pageLinks;
  }

  const maxPages = 10;
  const pageLinks = getPageLinks();

  return (
    <div>
      <Pagination className="m-6">
        <PaginationContent>
          {pageLinks.map((pageLink) => {
            switch (pageLink.type) {
              case PageLinkType.Previous:
                return (
                  <PaginationItem key={pageLink.href}>
                    <PaginationPrevious className={pageLink.className} href={pageLink.href} />
                  </PaginationItem>
                );
              case PageLinkType.Link:
                return (
                  <PaginationItem key={pageLink.href}>
                    <PaginationLink className={pageLink.className} href={pageLink.href}>{pageLink.pageNumber}</PaginationLink>
                  </PaginationItem>
                );

              case PageLinkType.Next:
                return (
                  <PaginationItem key={pageLink.href}>
                    <PaginationNext className={pageLink.className} href={pageLink.href} />
                  </PaginationItem>
                );
            }
          })}
        </PaginationContent>
      </Pagination>
    </div>
  );
}
