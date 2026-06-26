import Badge from "../assets/components/common/Badge";
import Button from "../assets/components/common/Button";
import GlassCard from "../assets/components/common/GlassCard";
import SectionHeading from "../assets/components/common/SectionHeading";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] p-10">

      <Badge>🚀 VideoVerse AI</Badge>

      <div className="mt-8">

        <SectionHeading
          title="Understand Any YouTube Video with AI"
          subtitle="Generate transcripts, summaries and chat with any video in seconds."
        />

      </div>

      <GlassCard className="mx-auto mt-12 max-w-2xl p-10">

        <h3 className="mb-6 text-2xl font-semibold">
          Glass Card
        </h3>

        <Button>
          Analyze Video
        </Button>

      </GlassCard>

    </main>
  );
}