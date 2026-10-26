import LocationPage, { locationMetadata } from "@/components/locations/LocationPage";
import { kentCounty } from "@/components/locations/data";

export const metadata = locationMetadata(kentCounty);

export default function Page() {
  return <LocationPage data={kentCounty} />;
}
