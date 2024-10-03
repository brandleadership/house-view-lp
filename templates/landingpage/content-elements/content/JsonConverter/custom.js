// import * as XLSX from "xlsx";

// document.getElementById("convert_btn").addEventListener("click", function () {
//   const fileInput = document.getElementById("excel_file");
//   const file = fileInput.files[0];

//   if (!file) {
//     alert("Please select an Excel file first!");
//     return;
//   }

//   const reader = new FileReader();

//   reader.onload = function (e) {
//     const data = new Uint8Array(e.target.result);
//     const workbook = XLSX.read(data, { type: "array" });

//     // Convert the first sheet to JSON array
//     const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
//     const jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });

//     // Assuming first row contains headers, we skip it and format the rest
//     const dataObject = {
//       data: {
//         datasets: [
//           {
//             label: "Text test",
//             backgroundColor: "rgb(20, 30, 85)",
//             data: jsonData.slice(1).map((row) => ({
//               x: row[0], // Date
//               y: row[1], // Value
//             })),
//           },
//         ],
//       },
//     };

//     // Display the JSON object in the textarea
//     document.getElementById("json_data").value = JSON.stringify(dataObject, null, 2);
//   };

//   reader.readAsArrayBuffer(file);
// });

// // Download the JSON data as a file
// document.getElementById("download_btn").addEventListener("click", function () {
//   const jsonData = document.getElementById("json_data").value;

//   if (!jsonData) {
//     alert("Please convert an Excel file to JSON first!");
//     return;
//   }

//   const blob = new Blob([jsonData], { type: "application/json" });
//   const url = URL.createObjectURL(blob);

//   // Create a temporary anchor element and click it to trigger download
//   const a = document.createElement("a");
//   a.href = url;
//   a.download = "data.json";
//   a.click();

//   // Release the object URL after download
//   URL.revokeObjectURL(url);
// });
