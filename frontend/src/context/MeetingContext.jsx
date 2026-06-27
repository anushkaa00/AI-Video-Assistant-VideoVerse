import {
  createContext,
  useContext,
  useState,
} from "react";

const MeetingContext = createContext();

export const useMeeting = () => useContext(MeetingContext);

export default function MeetingProvider({ children }) {
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);

  const [analysisCompleted, setAnalysisCompleted] =
    useState(false);

  const [summary, setSummary] = useState("");

  const [transcript, setTranscript] = useState("");

  const value = {
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
  };

  return (
    <MeetingContext.Provider value={value}>
      {children}
    </MeetingContext.Provider>
  );
}