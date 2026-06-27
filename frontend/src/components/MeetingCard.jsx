import { useState } from "react";
import { useMeeting } from "../context/MeetingContext";
import GlassCard from "./common/GlassCard";
import {
  FolderOpen,
  Globe,
  Link2,
  ArrowRight
} from "lucide-react";


function MeetingCard() {
const {
  youtubeUrl,
  setYoutubeUrl,

  selectedFile,
  setSelectedFile,

  analysisCompleted,
  setAnalysisCompleted,

  summary,
  setSummary,

  transcript,
  setTranscript,
} = useMeeting();
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("English");
  const [showDropdown, setShowDropdown] = useState(false);
  const handleAnalyze = async () => {

  // Check if user entered anything
  if (!youtubeUrl && !selectedFile) {
    alert("Please paste a YouTube URL or upload a local file first.");
    return;
  }

  setLoading(true);

  console.log("URL:", youtubeUrl);
  console.log("File:", selectedFile);
  console.log("Language:", language);

  // Temporary simulation of backend processing
  setTimeout(() => {

    setLoading(false);

    // Mark meeting as analyzed
    setAnalysisCompleted(true);

    // Temporary data (later backend will send this)
    setSummary(
      "This meeting discussed the project roadmap, frontend development and upcoming tasks."
    );

    setTranscript(
      "This is a temporary transcript. Later it will come from the backend."
    );

    console.log("Analysis Completed!");

  }, 3000);
};
  return (
    <>
      <input
        type="file"
        id="fileUpload"
        hidden
        accept=".mp3,.wav,.mp4,.mkv,.webm,.pdf,.txt"
        onChange={(e) => {
          if (e.target.files.length > 0) {
            setSelectedFile(e.target.files[0]);
    }
  }}
/>
    <section
      id="analysis"
      className="w-[92%] mx-auto mt-12"
    >
<GlassCard
  className="
    relative
    overflow-visible
    p-10
  "
>
        {/* Glow*/ }
        <div
          className="
          absolute

          top-0
          left-1/2

          -translate-x-1/2

          w-[450px]
          h-[180px]

          bg-indigo-500/20

          blur-[120px]
          pointer-events-none
          "
        />

        {/* Heading */}
        <div className="flex items-center gap-6 mb-10">

          <div className="h-px flex-1 bg-indigo-500/20" />

          <h2 className="text-5xl font-bold">
            Analyze A Video
          </h2>

          <div className="h-px flex-1 bg-indigo-500/20" />

        </div>

        {/* Row */}
        <div className="flex items-center gap-4">

          <button
            className="
            flex
            items-center
            gap-3

            px-6
            py-4

            rounded-2xl

            bg-indigo-500/20

            border
            border-indigo-400/40

            shadow-[0_0_25px_rgba(99,102,241,0.25)]
            "
          >
            <Link2 size={18} />
            YouTube URL
          </button>

          <button
          onClick={() =>
    document.getElementById("fileUpload").click()}
            className="
            flex
            items-center
            gap-3

            px-6
            py-4

            rounded-2xl

            bg-white/[0.03]

            border
            border-white/10
            "
          >
            {
  selectedFile && (
    <p className="mt-4 text-green-400">
      Selected: {selectedFile.name}
    </p>
  )
}
            <FolderOpen size={18} />
            Local File
          </button>

          <div
            className="
            flex
            items-center

            flex-1

            bg-white/[0.03]

            border
            border-white/10

            rounded-2xl

            px-5
            py-4
            "
          >
            <Link2
              size={18}
              className="text-gray-400 mr-3"
            />

            <input
              type="url"
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
              placeholder="Paste YouTube link here..."
             
              className="
              bg-transparent

              outline-none

              w-full

              text-white
              "
            />
          </div>

        <div
  className="
    relative
    z-[100]
    flex
    items-center
    gap-3
    bg-white/5
    backdrop-blur-xl
    border
    border-white/10
    rounded-2xl
    px-5
    py-4
    min-w-[180px]
  "
>
          <div className="relative w-full z-[100]">

  <button
    type="button"
    onClick={() => setShowDropdown(!showDropdown)}
    className="
      w-full
      flex
      items-center
      justify-between
      bg-transparent
      text-white
    "
  >
    <div className="flex items-center gap-3">
      <Globe size={18} />
      <span>{language}</span>
    </div>

    <span>⌄</span>
  </button>

  {showDropdown && (
    <div
      className="
        absolute
        top-14
        left-0

        w-full

        bg-[#151A2E]/95

        backdrop-blur-xl

        border
        border-white/10

        rounded-xl

        shadow-[0_10px_40px_rgba(0,0,0,0.4)]

        z-[999]
      "
    >
      <button
        className="
          w-full
          text-left
          px-4
          py-3
          text-white
          hover:bg-indigo-500/20
          transition
        "
        onClick={() => {
          setLanguage("English");
          setShowDropdown(false);
        }}
      >
        English
      </button>

      <button
        className="
          w-full
          text-left
          px-4
          py-3
          text-white
          hover:bg-indigo-500/20
          transition
        "
        onClick={() => {
          setLanguage("Hinglish");
          setShowDropdown(false);
        }}
      >
        Hinglish
      </button>
    </div>
  )}
</div>
          </div>

          <button
          onClick={handleAnalyze}
           className="
relative
z-10
flex
items-center
gap-3
px-8
py-4
rounded-2xl
font-semibold
bg-gradient-to-r
from-indigo-500
via-violet-500
to-blue-500
shadow-[0_0_35px_rgba(99,102,241,0.45)]
hover:scale-105
transition-all
"
          >

            {loading ? "Analyzing..." : "Analyze Video"}
            <ArrowRight size={18} />
          </button>

        </div>
      </GlassCard>
    </section></>
  );
}

export default MeetingCard;