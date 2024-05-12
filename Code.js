function getSiteTitle() {
  return "Webcam > Google Drive / Chat";
}

function getFaviconUrl() {
  return "https://avatars.githubusercontent.com/u/76543318?v=4.png";
}

function doGet() {
  return HtmlService.createHtmlOutputFromFile("index")
    .addMetaTag("viewport", "width=device-width, initial-scale=1")
    .setTitle(getSiteTitle())
    .setFaviconUrl(getFaviconUrl());
}

function saveImage(dataString, filename) {
  var folder = DriveApp.getFolderById("XXXXXXXX-XXXX"); // Replace with your Google Drive Folder ID
  var decodedData = Utilities.base64Decode(dataString);
  var blob = Utilities.newBlob(decodedData, "image/png", filename);
  folder.createFile(blob);
}
