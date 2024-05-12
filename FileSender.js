// Folder where images are kept
MAIN_FOLDER_ID = "GOOGLE_DRIVE_FOLDER_ID";

// URL of the chatbot webhook
CHATBOT_WH_URL =
  "https://chat.googleapis.com/v1/spaces/XXXXXXXX/messages?key=XXXXXXXXXXXXXXXXXX";

// Checks the main folder for new ID files
function processIDFolder() {
  var folder = DriveApp.getFolderById(MAIN_FOLDER_ID);
  checkFolder(folder);
}

// Checks for new ID files in the main folder
function checkFolder(folder) {
  var files = folder.getFiles();
  var location = folder.getDescription();

  while (files.hasNext()) {
    var theFile = files.next();

    // Checks the file description for "sent to chat"
    if (theFile.getDescription() !== "sent to chat") {
      // Sets the description of the file so it will not be sent more than once
      var notSentFile = theFile.getUrl();
      theFile.setDescription("sent to chat");
      sendMessage(notSentFile, location);
    }
  }
}

// Sends the message to the Google Space from the Chatbot webhook
function sendMessage(message, location) {
  //These are the parameters of the message
  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    payload: JSON.stringify({
      //This is the text of the message =
      //Location of folder
      //Date when function is ran
      //URL
      text: "*" + location + "*\n" + Date() + "\n" + message,
    }),
  };

  //This line actually sends the message to the chat
  const response = UrlFetchApp.fetch(CHATBOT_WH_URL, options);
}
