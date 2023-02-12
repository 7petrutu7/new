from  PIL import Image

im = Image.open("/anunturi/casa 2.jpg")

im.save("output.webp", "WebP")