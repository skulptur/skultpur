export const downloadPng = (canvas: HTMLCanvasElement, name: string) => {
  const canvasImage = canvas.toDataURL("image/png");

  // this can be used to download any image from webpage to local disk
  const xhr = new XMLHttpRequest();
  xhr.responseType = "blob";
  xhr.onload = function() {
    const a = document.createElement("a");
    a.href = window.URL.createObjectURL(xhr.response);
    a.download = `${name}.png`;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };
  xhr.open("GET", canvasImage); // This is to download the canvas Image
  xhr.send();
};
