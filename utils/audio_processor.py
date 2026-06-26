import yt_dlp 
import os
from pydub import AudioSegment

DOWNLOAD_DIR = "downloades" #created directory for downloading imports
os.makedirs(DOWNLOAD_DIR, exist_ok= True)

def download_youtube_audio(url :str) ->str:
    output_path = os.path.join(DOWNLOAD_DIR, "%(title)s.%(ext)s")
    ydl_opts = {
        "format": "bestaudio/best",
        "extractor_args":{
            "youtube":{
                "player_client": ["android"]
            }
        },
        "outtmpl": output_path,
        "postprocessors": [
            {
                "key": "FFmpegExtractAudio",
                "preferredcodec": "wav",
                "preferredquality": "192",
            }
        ],
        "quiet": True,
    }
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        info = ydl.extract_info(url, download=True)
        base_name = os.path.splitext(ydl.prepare_filename(info))[0]
        filename = base_name + ".wav"
    return filename


# function to convert any audio into WAV format
def convert_to_wav(input_path: str) -> str:
    """Convert any audio/video file to WAV format using pydub."""
    output_path = os.path.splitext(input_path)[0] + "_converted.wav" #splits the path into 2, the url or name and 2nd part the extension and convert it to WAV.
    audio = AudioSegment.from_file(input_path) #automatically decides the type of file mp3, mp4, etc
    audio = audio.set_channels(1).set_frame_rate(16000) #16khz. sets audio to monoaudio
    audio.export(output_path, format="wav")
    return output_path


#convert audio into chunks
def chunk_audio(wav_path: str, chunk_minutes: int= 10) -> list:
    audio = AudioSegment.from_wav(wav_path)
    chunk_ms = chunk_minutes * 60 * 1000

    chunks = [] #returns a list

    for i, start in enumerate(range(0, len(audio), chunk_ms)): #0= start, len(audio)= stop, chunk_ms = steps
        chunk = audio[start: start + chunk_ms]
        chunk_path = f"{wav_path}_chunk_{i}.wav" 
        chunk.export(chunk_path, format = "wav")

        chunks.append(chunk_path)

    return chunks


#triggers when url or local file
def process_input(source: str) -> list:
    if source.startswith("http://") or source.startswith("https://"):
        print("Detected YouTube URL. Downloading audio...")
        wav_path = download_youtube_audio(source)
    else:
        print("Detected local file. Converting to WAV...")
        wav_path = convert_to_wav(source)

    # after wav file we do the chunking
    print("Chunking audio...")
    chunks = chunk_audio(wav_path)
    print(f"Audio ready — {len(chunks)} chunk(s) created.")
    return chunks

