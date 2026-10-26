import LocationPage, { locationMetadata } from "@/components/locations/LocationPage";
import { ottawaCounty } from "@/components/locations/data";

export const metadata = locationMetadata(ottawaCounty);

export default function Page() {
  return <LocationPage data={ottawaCounty} />;
}
