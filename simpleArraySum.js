function simpleArraySum(ar) {
    // Initialize a variable to store the sum
    let sum = 0;

    // Loop through each element in the array and add it to the sum
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }

    // Return the calculated sum
    return sum;
}

//function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    //const arCount = parseInt(readLine().trim(), 10);

    //const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    //const result = simpleArraySum(ar);

    //ws.write(result + '\n');

//    ws.end();
//}
const isha = [1,2,3,4,5,6,7,8];
SUM = simpleArraySum(isha)
console.log(SUM);
