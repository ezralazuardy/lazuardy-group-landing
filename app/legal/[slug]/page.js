import NotFound from "@/app/not-found";
import LegalContent from "@/components/block/legal/legal-content";
import { getLegalByUuid } from "@/lib/services/legal-service";

export default async function LegalDetail({ params }) {
  const { slug } = await params;
  const legal = await getLegalByUuid(slug);

  if (!legal) return <NotFound />;

  return (
    <div className="w-full h-full py-12 md:py-16">
      <LegalContent legal={legal} />
    </div>
  );
}
