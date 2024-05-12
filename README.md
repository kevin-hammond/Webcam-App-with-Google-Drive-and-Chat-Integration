# Google Apps Script for a Webcam Capture Application

This project contains the code for a webcam capture application that allows users to capture an image, save it to Google Drive, and send it to a Google Chat space.

## Code Overview

### Code.gs

This file contains utility functions and the main web app entry point.

- `getSiteTitle()`: Returns the title of the web app.
- `getFaviconUrl()`: Returns the URL of the web app's favicon.
- `doGet()`: Configures and returns the HTML service for the web app.
- `saveImage(dataString, filename)`: Saves an image to Google Drive from a base64-encoded string.

### filesender.gs

This file contains functions for processing the Google Drive folder and sending messages to a Google Chat space.

- `processIDFolder()`: Processes the main folder for new image files.
- `checkFolder(folder)`: Checks for new image files in a folder.
- `sendMessage(message, location)`: Sends a message to a Google Chat space with the given message and location.

### index.html

This file contains the user interface for the web app, including HTML, CSS, and JavaScript.

- The user interface includes a webcam view, captured image view, and buttons for capturing, retaking, and saving images.
- JavaScript functions handle webcam access, image capture, image saving, and user interaction.

## Setup

1. Replace `XXXXXXXX-XXXX` and `GOOGLE_DRIVE_FOLDER_ID` placeholders with your Google Drive folder ID.
2. Replace `XXXXXXXX` and `XXXXXXXXXXXXXXXXXX` placeholders with your Google Chat webhook URL.
3. Deploy the project as a web app with the access level set to "Anyone, even anonymous."
4. Copy the web app URL and use it in your application.

## Usage

1. Open the web app URL in a browser.
2. Grant necessary permissions for webcam access and Google Drive access.
3. Click "Capture Image" to capture an image.
4. Click "Retake Photo" to capture another image.
5. Click "Save to Drive" to save the captured image to Google Drive.

The image will be automatically sent to the configured Google Chat space.
