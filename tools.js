function sendEmails() {
 var sheet = SpreadsheetApp.getActiveSheet(); // connecting sheet
 var startRow = 2; // first row
 var numRows = sheet.getLastRow(); // last row
 var dataRange = sheet.getRange(startRow, 1, numRows, sheet.getLastColumn()); // get data in range
 var data = dataRange.getValues();
 var yourName = "Caitlyn Tjahjadi"
 
 for(i in data){
   var row = data[i]; // one data row
   var date = new Date(); // today's date
   var sheetDate = new Date(row[3]); // actual date
   Sdate = Utilities.formatDate(date,Session.getScriptTimeZone(),'yyyy/MM/dd')
   SsheetDate = Utilities.formatDate(sheetDate,Session.getScriptTimeZone(), 'yyyy/MM/dd')
 
   if(Sdate === SsheetDate){
     console.log("accurate")
     var email = row[0];
     var name = row[1];      
     var actualdate = Utilities.formatDate(row[2],Session.getScriptTimeZone(),'MM/dd');
     var event = row[4];
     var subject = 'Special day reminder';
     var todaysDate = Sdate;
     var message = "Hey " + yourName + "!" + " Today is the "+ Sdate+ ". It is " + name + "'s " + event + " on " + actualdate;
     console.log(message)
     MailApp.sendEmail(email, subject, message);
   }
 }
}
