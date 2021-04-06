let messages = ["The best way to get started is to quit talking and begin doing. -Walt Disney",
 "To see what is right and not do it is a lack of courage. -Confucius", 
 "The greatest teacher, failure is. -Yoda", 
 "Success is not final, failure is not fatal: it is the courage to continue that counts. -Winston Churchill", 
 "Life is like riding a bicycle. To keep your balance, you must keep moving. -Albert Einstein", 
 "If I cannot do great things, I can do small things in a great way. -Martin Luther King Jr.", 
 "If you don’t take risks, you can’t create a future. -Monkey D. Luffy", 
 "People's dreams never end! -Marshall D. Teach"];

let randomNumber = message => {
    let randomNumber = Math.floor(Math.random()*messages.length);
    return randomNumber;
}

let randomMessage = randomNumber(messages);

console.log("Welcome, your random message of the day is the next one: \n");
console.log(messages[randomMessage] + "\n");
console.log("Have a nice day!");