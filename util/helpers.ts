export function downloadFile(filePath: string) {
  var link = document.createElement("a");
  link.href = filePath;
  link.target = "_blank";
  link.download = filePath.substring(filePath.lastIndexOf("/") + 1);
  link.click();
}
