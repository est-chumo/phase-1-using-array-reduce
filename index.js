const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// Use reduce to sum all batteries
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

// totalBatteries now holds the sum of all batteries
console.log(totalBatteries); // Output: 31
