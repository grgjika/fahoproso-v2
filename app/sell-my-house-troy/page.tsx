import LocationPage, { locationMetadata } from "@/components/locations/LocationPage";
import { troy } from "@/components/locations/data";

export const metadata = locationMetadata(troy);

export default function Page() {
  return <LocationPage data={troy} />;
}
