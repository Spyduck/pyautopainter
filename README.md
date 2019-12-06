# pyautopainter
Python script to paint an image on a blank canvas from a reference image

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

Put extra brushes in "brushes" -- they will load the next run or iteration. Brushes can be any size, but need some space at the edge of the image to be rotated correctly when running.

Put extra palettes in "palettes" (note: these don't autoload yet).

The canvas will be saved to output/out.png when it finishes, or you can save the JPEG version from your browser.
