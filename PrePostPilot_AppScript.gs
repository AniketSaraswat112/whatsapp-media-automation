// ============================================================
// PrePost Pilot - Status Change Trigger for n8n + WhatsApp
// ============================================================
// HOW TO SET UP:
//   1. Open your Google Sheet
//   2. Go to Extensions > Apps Script
//   3. Paste this entire script
//   4. Replace N8N_WEBHOOK_URL with your actual n8n webhook URL
//   5. Save the script (Ctrl+S)
//   6. Run setupTrigger() ONCE manually to register the onChange trigger
//      (Run > Run function > setupTrigger)
//   7. Authorize the script when prompted
// ============================================================

// ✏️ REPLACE THIS with your actual n8n webhook URL
var N8N_WEBHOOK_URL = "https://your-n8n-instance.com/webhook/your-webhook-id";

// The sheet name inside your Google Sheets file
var SHEET_NAME = "Sheet1"; // ✏️ Change this if your sheet has a different name

// Column B = index 2
var STATUS_COLUMN = 2;

// ============================================================
// MAIN TRIGGER FUNCTION
// This fires whenever any edit is made in the spreadsheet
// ============================================================
function onEdit(e) {
  try {
    var sheet = e.range.getSheet();

    // Only act on the correct sheet
    if (sheet.getName() !== SHEET_NAME) return;

    // Only act if the edit is in Column B (Status)
    if (e.range.getColumn() !== STATUS_COLUMN) return;

    // Ignore header row (row 1)
    var editedRow = e.range.getRow();
    if (editedRow === 1) return;

    var newStatus = e.value ? e.value.toString().trim() : "";
    var oldStatus = e.oldValue ? e.oldValue.toString().trim() : "";

    // Only trigger if the value actually changed
    if (newStatus === oldStatus) return;

    // Collect full row data to send to n8n
    var rowData = getRowData(sheet, editedRow);

    // Send to n8n webhook
    triggerN8nFlow(rowData, newStatus, oldStatus, editedRow);

  } catch (err) {
    Logger.log("Error in onEdit: " + err.message);
  }
}


// ============================================================
// Reads all data from the edited row and returns an object
// ============================================================
function getRowData(sheet, rowNumber) {
  var lastCol = sheet.getLastColumn();
  var headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
  var rowValues = sheet.getRange(rowNumber, 1, 1, lastCol).getValues()[0];

  var rowData = {};
  for (var i = 0; i < headers.length; i++) {
    var header = headers[i] ? headers[i].toString().trim() : "Column" + (i + 1);
    rowData[header] = rowValues[i];
  }

  rowData["_rowNumber"] = rowNumber;
  return rowData;
}


// ============================================================
// Sends a POST request to the n8n webhook
// ============================================================
function triggerN8nFlow(rowData, newStatus, oldStatus, rowNumber) {
  var payload = {
    event: "status_changed",
    rowNumber: rowNumber,
    oldStatus: oldStatus,
    newStatus: newStatus,
    timestamp: new Date().toISOString(),
    rowData: rowData
  };

  var options = {
    method: "POST",
    contentType: "application/json",
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  var response = UrlFetchApp.fetch(N8N_WEBHOOK_URL, options);
  var statusCode = response.getResponseCode();

  Logger.log("n8n webhook triggered for row " + rowNumber + " | Status: " + newStatus + " | HTTP " + statusCode);

  if (statusCode !== 200) {
    Logger.log("Warning: n8n returned non-200 status: " + statusCode + " | Body: " + response.getContentText());
  }
}


// ============================================================
// RUN THIS ONCE to register the installable onEdit trigger
// (Required for UrlFetchApp to work — simple onEdit doesn't allow it)
// ============================================================
function setupTrigger() {
  // Remove any existing onEdit triggers to avoid duplicates
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === "onEdit") {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }

  // Create a new installable onEdit trigger
  ScriptApp.newTrigger("onEdit")
    .forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet())
    .onEdit()
    .create();

  Logger.log("✅ Trigger set up successfully.");
}
