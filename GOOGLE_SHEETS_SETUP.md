# Google Sheets Integration Setup Guide

This guide explains how to connect your Contact Us form to a Google Sheet so that submissions are automatically saved.

## Prerequisites
- A Google Account.
- Access to your website's source code.

## 1. Create your Google Sheet
1. Open [Google Sheets](https://sheets.new).
2. Create a new sheet named **"Contact Form Leads"**.
3. (Optional) You can add headers to the first row: `Timestamp`, `Name`, `Company`, `Email`, `Phone`, `Employees`, `Service`, `Message`.

## 2. Set Up the Apps Script
1. In your sheet, go to **Extensions** > **Apps Script**.
2. Replace everything in the script editor with this code:

```javascript
/**
 * Google Apps Script to handle form submissions from the website
 */
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = e.parameter;
    
    // Append the form data to the next available row
    sheet.appendRow([
      new Date(), 
      data.name || "N/A", 
      data.company || "N/A", 
      data.email || "N/A", 
      data.phone || "N/A", 
      data.employeeCount || "N/A", 
      data.serviceNeeded || "N/A", 
      data.message || "N/A"
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "error", "error": err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## 3. Deploy as a Web App
1. Click **Deploy** > **New deployment**.
2. Click the gear icon (Select type) and choose **Web app**.
3. **Description**: `Contact Form API`.
4. **Execute as**: `Me`.
5. **Who has access**: `Anyone`.
6. Click **Deploy**.
7. Copy the **Web App URL** (it should look like `https://script.google.com/macros/s/.../exec`).

## 4. Link the Website
1. Open `app/contact/page.tsx`.
2. Find the constant `SCRIPT_URL` at the top of the component (around line 18).
3. Replace the placeholder with your copied URL:

```tsx
const SCRIPT_URL = "PASTE_YOUR_URL_HERE";
```

## Testing
- Fill out the form on your local development site.
- Click "Send Message".
- Check your Google Sheet — a new row should appear instantly!

## Troubleshooting
- **CORS Errors**: Ensure you selected **"Anyone"** in the "Who has access" section during deployment.
- **Data missing**: Check that the `name` attributes in the HTML `<input>` tags exactly match the names used in the script (e.g., `data.email` requires `name="email"`).
