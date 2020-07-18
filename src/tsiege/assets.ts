export function loadAssets(): Map<string, HTMLImageElement> {
  const images = new Map<string, HTMLImageElement>();
  images.set("catgirl-forward", newImage("/assets/tsiege/catgirl-forward.png"));
  

  return images;
}

function newImage(path: string): HTMLImageElement {
  const image = new Image();
  image.src = path;
  return image;
}