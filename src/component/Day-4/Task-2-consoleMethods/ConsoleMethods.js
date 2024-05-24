let arrNum = [8, 7, 6, 5, 4, 3, 2, 1];
console.log("Using log:\n ", arrNum);
console.log("Using Table:");
console.table(arrNum);
// Increase Count as per calling
console.count(arrNum); // 1
console.count(arrNum); // 2

// dir: display list
console.dir(arrNum);

// To display error messege
console.error(arrNum);

// time methods
console.time("answer time");
console.log("This is console time methods: ");
console.log("Display Start Time:");
console.timeLog("answer time");
// alert("Do a bunch of other stuff…");
console.log("Display End Time: ");
console.timeEnd("answer time");

function trashDemo() {
    console.log("This is trashDemo function");
    console.trace();
}
trashDemo();

console.warn("This is Warning messege");

console.info(arrNum); // Printing data