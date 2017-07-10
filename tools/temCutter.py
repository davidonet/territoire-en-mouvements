from moviepy.editor import *
import json

with open('audiocut.json', 'r') as f:
  tem = json.load(f)

clip = AudioFileClip("./restinclieres.flac")
metadata = ["-metadata", "track=1",
            "-metadata", "title=Intro",
            "-metadata", "author=Patrice Barthès",
            "-metadata", "album=TEM " + tem["town"],
            "-metadata", "year=2017"]

subclip = clip.subclip(0, tem["cues"][0]["pos"])
filename = '{:02d}-{}-{}-TEM.mp3'.format(1, "Intro", tem["town"])
subclip.write_audiofile(filename, codec="mp3",
                        bitrate="320k", ffmpeg_params=metadata)
for i in range(len(tem["cues"])):
  start = tem["cues"][i]["pos"]
  if i < (len(tem["cues"]) - 1):
    stop = tem["cues"][i + 1]["pos"]
    subclip = clip.subclip(start, stop)
  else:
    subclip = clip.subclip(start, tem["length"])
  title = tem["cues"][i]["title"].replace(' ', '-')
  metadata[1] = "track=" + str(i + 2)
  metadata[3] = "title=" + tem["cues"][i]["title"]
  filename = '{:02d}-{}-{}-TEM.mp3'.format(i + 2, title, tem["town"])
  subclip.write_audiofile(filename, codec="mp3",
                          bitrate="320k", ffmpeg_params=metadata)
