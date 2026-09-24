import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RetreatDetailExperience from "../../../components/RetreatDetailExperience";
import { getRetreat, retreats } from "../../../lib/retreats";

type RetreatPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return retreats.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: RetreatPageProps): Promise<Metadata> {
  const { slug } = await params;
  const retreat = getRetreat(slug);

  return {
    title: retreat ? `${retreat.title} — Altai Retreat` : "Altai Retreat",
    description: retreat?.body,
  };
}

export default async function RetreatDetailPage({ params }: RetreatPageProps) {
  const { slug } = await params;
  const retreat = getRetreat(slug);

  if (!retreat) notFound();

  return <RetreatDetailExperience retreat={retreat} />;
}
