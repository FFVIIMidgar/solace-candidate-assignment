import { Item, ItemMedia, ItemContent, ItemTitle } from "../../../components/ui/item";
import { Avatar, AvatarImage, AvatarFallback } from "../../../components/ui/avatar";
import { Advocate } from "../../data/types";
import { MapPin, Phone, CircleChevronRight, CircleCheckBig, Check } from "lucide-react";
import { formatPhoneNumber, pluralize, getAdvocateInitials } from "../../lib/utils";
import { Separator } from "../../../components/ui/separator";
import { ScrollArea } from "../../../components/ui/scroll-area";
import { Popover, PopoverTrigger, PopoverContent } from "../../../components/ui/popover";

export default function AdvocateItem({
  advocate,
}: {
  advocate: Advocate,
}) {
  return (
    <div>
      <Item className="w-full h-full bg-gray-50 border-gray-300 hover:bg-gray-100">
        <ItemMedia>
          <Avatar className="size-24 drop-shadow-lg">
            <AvatarImage src={advocate.imageUrl} />
            <AvatarFallback className="text-3xl font-medium">{getAdvocateInitials(advocate.firstName, advocate.lastName)}</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent className="w-full h-full">
          <div className="flex justify-between items-center text-emerald-800">
            <ItemTitle className="text-lg font-bold">{advocate.firstName} {advocate.lastName}</ItemTitle>
            <div className="flex items-center gap-1">
              <CircleCheckBig size="16px" />
              <div className="text-emerald-800 font-semibold">{advocate.yearsOfExperience} {pluralize("year", advocate.yearsOfExperience)} of experience</div>
            </div>
          </div>
          <div className="text-base font-bold">{advocate.degree}</div>
          <div className="flex items-center gap-1">
            <MapPin size="16px" />
            <div>{advocate.city}</div>
          </div>
          <div className="flex items-center gap-1">
            <Phone size="16px" />
            <div>{formatPhoneNumber(advocate.phoneNumber)}</div>
          </div>
          <Separator className="my-2" />
          <div className="flex justify-between items-center">
            <div className="w-full">
              <div className="flex gap-1 items-center text-emerald-800 font-bold">
                <div>Specializes in {advocate.specialties.length} {pluralize("field", advocate.specialties.length)}</div>
                <Popover>
                  <PopoverTrigger>
                    <CircleChevronRight size="16px" />
                  </PopoverTrigger>
                  <PopoverContent className="w-full h-full text-sm drop-shadow-lg">
                    <ul>
                      {advocate.specialties.map((specialty) => {
                        return (
                          <li key={specialty}>
                            <div className="flex items-center gap-1">
                              <Check size="16px" />
                              <div>{specialty}</div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </PopoverContent>
                </Popover>
              </div>
              <ScrollArea className="w-full h-24 mt-2">
                <ul className="ml-4">
                  {advocate.specialties.map((specialty) => {
                    return (
                      <li key={specialty}>
                        <div className="flex items-center gap-1">
                          <Check size="16px" />
                          <div>{specialty}</div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </div>
          </div>
        </ItemContent>
      </Item>
    </div>
  );
}
