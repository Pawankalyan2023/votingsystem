// require('dotenv').config();


const {REACT_APP_CONTRACT} = process.env;

const contractAddress = REACT_APP_CONTRACT;


const contractAbi = [
    {
      "inputs": [
        {
          "internalType": "string[]",
          "name": "_candidateNames",
          "type": "string[]"
        },
        {
          "internalType": "uint256",
          "name": "_durationInMinutes",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "addCandidate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "candidates",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "voteCount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllVotesOfCandiates",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "voteCount",
              "type": "uint256"
            }
          ],
          "internalType": "struct Voting.Candidate[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getRemainingTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getVotingStatus",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_candidateIndex",
          "type": "uint256"
        }
      ],
      "name": "vote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "voters",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "votingEnd",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "votingStart",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];


  const reportsdata = [
    { "key": 0, "Party": "DMK", "Location": "Chennai", "Age": 69, "Alliance": "UPA", "Symbol": "🌞", "Ward": "South Chennai" }, // Rising Sun
    { "key": 1, "Party": "AIADMK", "Location": "Coimbatore", "Age": 70, "Alliance": "NDA", "Symbol": "🍃🍃", "Ward": "West Coimbatore" }, // Two Leaves
    { "key": 2, "Party": "BJP", "Location": "Madurai", "Age": 46, "Alliance": "NDA", "Symbol": "🌸", "Ward": "Central Madurai" }, // Lotus
    { "key": 3, "Party": "INC", "Location": "Trichy", "Age": 52, "Alliance": "UPA", "Symbol": "✋", "Ward": "East Trichy" }, // Hand
    { "key": 4, "Party": "CPI", "Location": "Salem", "Age": 58, "Alliance": "Left Front", "Symbol": "⚒️", "Ward": "North Salem" }, // Hammer & Sickle
    { "key": 5, "Party": "PMK", "Location": "Erode", "Age": 55, "Alliance": "NDA", "Symbol": "🥭", "Ward": "South Erode" }, // Mango
    { "key": 6, "Party": "MDMK", "Location": "Tirunelveli", "Age": 80, "Alliance": "UPA", "Symbol": "🔝", "Ward": "West Tirunelveli" }, // Top
    { "key": 7, "Party": "NTK", "Location": "Vellore", "Age": 58, "Alliance": "Independent", "Symbol": "🎋", "Ward": "Central Vellore" } // Sugarcane
  ];
  

  export {contractAbi, contractAddress , reportsdata};