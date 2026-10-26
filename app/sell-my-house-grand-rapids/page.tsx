import LocationPage, { locationMetadata } from "@/components/locations/LocationPage";
import { grandRapids } from "@/components/locations/data";

export const metadata = locationMetadata(grandRapids);

export default function Page() {
  return <LocationPage data={grandRapids} />;
}
