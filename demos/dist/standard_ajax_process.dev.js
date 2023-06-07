"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// PROCESS: the role of stringify and parse to send/post new data from client/browser to server via HTTP
// 1. Have some data, maybe from some user input
data_to_send = {
  name: "widget",
  price: 123.45
};
console.log(typeof data_to_send === "undefined" ? "undefined" : _typeof(data_to_send)); //object
// 2. Convert data to a string

text_to_send = JSON.stringify(data_to_send);
console.log(typeof text_to_send === "undefined" ? "undefined" : _typeof(text_to_send)); //string
// 3. Send using fetch() with POST options
// (Mocking this for now. Echoing it back.)

response = {
  text: text_to_send
}; // 4. Receive Response as JSON string

received_text = response.text;
console.log(typeof received_text === "undefined" ? "undefined" : _typeof(received_text)); //string
// 5. convert text into javascript data.
// (Sometimes this is done using a response object's .json() method instead but its the new way)

received_data = JSON.parse(received_text); //convert from string to binary javascript data types in memory

console.log(typeof received_data === "undefined" ? "undefined" : _typeof(received_data)); //object
// 6. use response

console.log("\n        NAME: ".concat(received_data.name, "\n        PRICE: ").concat(received_data.price, "\n    ")); // END
//# sourceMappingURL=standard_ajax_process.dev.js.map
