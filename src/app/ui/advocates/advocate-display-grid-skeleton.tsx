import { Spinner } from "../../../components/ui/spinner";

export default function AdvocateDisplayGridSkeleton() {
  return (
    <div>
      <div className="flex justify-center items-center gap-2 m-16">
        <Spinner className="size-10" />
        <div className="text-xl font-bold">Please wait while we fetch advocates...</div>
      </div>
    </div>
  );
}
