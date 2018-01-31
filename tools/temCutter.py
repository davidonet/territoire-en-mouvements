from moviepy.editor import *
import json

with open('audiocut.json', 'r') as f:
  tem = json.load(f)

#clip = AudioFileClip(    "/opt/data/CurrentProjects/TerritoiresEnMouvement/originaux/flac/tem_cournonsec.flac")
clip = AudioFileClip(
    "/home/dolivari/dev/termvt/static/audio/tem_saintdrezery.mp3")


metadata = ["-metadata", "track=1",
            "-metadata", "title=01 intro",
            "-metadata", "author=Patrice Barthès",
            "-metadata", "album=TEM " + tem["town"],
            "-metadata", "year=2017"]
#"-af","volume=6dB"]

subclip = clip.subclip(0, tem["cues"][0]["pos"])
filename = '{:02d}-{}-{}-TEM.mp3'.format(1, "intro", tem["town"])
subclip.write_audiofile(filename, codec="mp3",
                        bitrate="320k", ffmpeg_params=metadata)
m3u = open(tem["town"] + ".m3u", 'w')
m3u.write("#EXTM3U\n\n")
m3u.write(
    "#EXTINF:{},{} - {}\n".format(tem["cues"][0]["pos"], "Patrice Barthès", "intro"))
m3u.write(filename + "\n\n")
for i in range(len(tem["cues"])):
  start = tem["cues"][i]["pos"]
  if i < (len(tem["cues"]) - 1):
    stop = tem["cues"][i + 1]["pos"]
    subclip = clip.subclip(start, stop)
    m3u.write("#EXTINF:{},{} - {}\n".format(stop - start,
                                            "Patrice Barthès", tem["cues"][i]["title"]))
  else:
    subclip = clip.subclip(start, tem["length"])
    m3u.write("#EXTINF:{},{} - {}\n".format(tem["length"] - start,
                                            "Patrice Barthès", tem["cues"][i]["title"]))
  title = tem["cues"][i]["title"].replace(' ', '-')
  metadata[1] = "track=" + str(i + 2)
  metadata[3] = "title=" + '{:02d} {}'.format(i + 2, tem["cues"][i]["title"])
  #metadata[3] = "title=" + tem["cues"][i]["title"]
  filename = '{:02d}-{}-{}-TEM.mp3'.format(i + 2, title, tem["town"])

  m3u.write(filename + "\n\n")
  subclip.write_audiofile(filename, codec="mp3",
                          bitrate="320k", ffmpeg_params=metadata)
m3u.close()
