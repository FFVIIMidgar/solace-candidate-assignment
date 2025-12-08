export type Advocate = {
  id: number;
  firstName: string;
  lastName: string;
  city: string;
  degree: string;
  specialties: string[];
  yearsOfExperience: number;
  phoneNumber: number;
  createdAt: Date | null;
};

export type SearchParams = {
  search?: string;
  page?: string;
}

export type PageLink = {
  type: PageLinkType;
  className?: string;
  href: string;
  pageNumber?: number;
}

export enum PageLinkType {
  Previous,
  Link,
  Next,
}
