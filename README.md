# pyautopainter
A Python script to paint a copy of a reference image on a blank canvas using brushstrokes.

![example gif at 2x speed](https://github.com/Spyduck/pyautopainter/raw/master/examples/example.gif)

Runs a Flask app on port 8001.

## Installation:

```
pip install -r requirements.txt
```

## Running:
```
python pyautopainter.py
```
Then open your browser to http://localhost:8001/

Put new images in the "input" directory and refresh the browser window to load them in.

The ``color_distance_threshold`` setting is the distance between the color on the image and the color to paint a brush stroke at that spot. If lower, the brush stroke will be skipped. I recommend experimenting with this but 10-40 can get good results.

![color_distance_threshold examples](https://github.com/Spyduck/pyautopainter/raw/master/examples/color_distance_threshold.jpg)

Put extra brushes in "brushes" -- they will load the next run or iteration. Brushes can be any size, but need some space at the edge of the image to be rotated correctly when running.

Put extra palettes as .png in "palette"

The canvas will be saved to output/out.png when it finishes, or you can save the JPEG version from your browser.
