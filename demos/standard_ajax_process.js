    // PROCESS: the role of stringify and parse to send/post new data from client/browser to server via HTTP

    // 1. Have some data, maybe from some user input
    data_to_send = {
        name: "widget",
        price: 123.45
    }
    console.log(typeof data_to_send) //object
    
    // 2. Convert data to a string
    text_to_send = JSON.stringify(data_to_send)
    console.log(typeof text_to_send) //string
    
    // 3. Send using fetch() with POST options
    // (Mocking this for now. Echoing it back.)
    response = {text:text_to_send};

    // 4. Receive Response as JSON string
    received_text = response.text;
    console.log(typeof received_text) //string

    // 5. convert text into javascript data.
    // (Sometimes this is done using a response object's .json() method instead but its the new way)
    received_data = JSON.parse(received_text) //convert from string to binary javascript data types in memory
    console.log(typeof received_data) //object

    // 6. use response
    console.log(`
        NAME: ${received_data.name}
        PRICE: ${received_data.price}
    `)

    // END