acctData = [ {
    "acctNum": "AAA - 1234",
    "user": "Alice"
  },
  {
    "acctNum": "AAA - 5231",
    "user": "Bob"
}, {
    "acctNum": "AAA - 9921",
    "user": "Alice"
  },
  {
    "acctNum": "AAA - 8191",
    "user": "Alice"
} ];

balance = {
  "AAA - 1234": 4593.22,
  "AAA - 9921": 0,
  "AAA - 5231": 232142.5,
  "AAA - 8191": 4344
};

function account (user, sortBy, sortDirection){

  let accountNumbers = [];
  if( account.arguments.length === 0) {
    return Object.keys(balance)
  }
  
  for(i of acctData) {
    i['balance'] = balance[i.acctNum]
  }

  acctData.sort((a,b) => (a[sortBy] > b[sortBy]) ? 1 : -1 );

  if(sortBy === null) {
    acctData.sort((a,b) => (a['acctNum'] > b['acctNum']) ? 1 : -1 );
  }
  gi
  if(sortDirection === 'desc') {
    acctData.reverse();
  }

  for(i of acctData) {
    if(user) {
       if(i.user === user) {
        accountNumbers.push(i.acctNum)
      } 
    } else {
      accountNumbers.push(i.acctNum)
    }
  }
  
  return accountNumbers;
}

console.log(account('Bob'));
console.log(account('Charlie'));
console.log(account('null','acctNum','null'));
console.log(account('Alice','asc'));
console.log(account('Alice','dsc'));)


