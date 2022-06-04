function callTheCoinmarketCapApiAndGetTheBitcoinPrice() {
  // 1. Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();
  // 2. Configure it to send a GET request to the CoinMarketCap API
  xhr.open("GET", "https://api.coinmarketcap.com/v1/ticker/bitcoin");
  // 3. Configure it to handle the response
  xhr.onload = function() {
    // 4. Check if the request was successful
    if (xhr.status === 200) {
      // 5. Parse the response
      const bitcoinPrice = JSON.parse(xhr.responseText)[0].price_usd;
      // 6. Update the DOM
      document.getElementById("bitcoin-price").innerHTML = bitcoinPrice;
    }
  };
  // 7. Send the request
  xhr.send();
}
