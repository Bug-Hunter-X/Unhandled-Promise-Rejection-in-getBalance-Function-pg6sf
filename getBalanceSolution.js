async function getBalance(address) {
  try {
    const balance = await web3.eth.getBalance(address);
    return balance;
  } catch (error) {
    console.error("Error getting balance:", error);
    return null; // Or throw the error, depending on your needs
  }
}

//This improved version includes a try...catch block. If any error occurs during the balance retrieval, it will be caught, logged, and handled gracefully, preventing a silent failure.