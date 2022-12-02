// 1. Find the Account Number of the first customer with duplicate accounts
// from customers array given below.

const customers = [
  {
    AccountNo: 1001,
    Name: "John",
    City: "Bangalore",
  },
  {
    AccountNo: 1003,
    Name: "Kate",
    City: "Pune",
  },
  {
    AccountNo: 1002,
    Name: "Tom",
    City: "Mysore",
  },
  {
    AccountNo: 1005,
    Name: "Kate",
    City: "Mumbai",
  },
  {
    AccountNo: 1004,
    Name: "Tom",
    City: "Delhi",
  },
];

// const unique = new Set();

// const findDuplicate = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (unique.has(arr[i].Name)) {
//       return arr[i];
//     }
//     unique.add(arr[i].Name);
//   }
// };

// console.log("Duplicate found", findDuplicate(customers));



// 1st method
function findFirstDuplicateAccount(){

  let uniqueCustomers=[]
  let duplicate ={}
  for(let customer of customers){
    let existingCustomerIndex = uniqueCustomers.findIndex(item=>item.Name===customer.Name)
    if(existingCustomerIndex>-1){
      duplicate = uniqueCustomers[existingCustomerIndex]
      break
    }
    else uniqueCustomers.push(customer)
  }
  console.log(duplicate?.AccountNo||"No duplicates Found")
}
findFirstDuplicateAccount()


//2nd method

//let customerCounts={}