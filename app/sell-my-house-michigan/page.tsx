import LocationPage, { locationMetadata } from "@/components/locations/LocationPage";
import { michigan } from "@/components/locations/data";

export const metadata = locationMetadata(michigan);

export default function Page() {
  return <LocationPage data={michigan} />;
}
