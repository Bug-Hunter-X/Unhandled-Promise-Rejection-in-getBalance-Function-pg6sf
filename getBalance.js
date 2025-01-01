function getBalance() {
  const balance = await web3.eth.getBalance(address);
  return balance;
}

//The above code will cause an error if the address is not a valid Ethereum address, or if the web3 library is not properly configured.