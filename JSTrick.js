// this trick work for Object count 
// Object = {
//     a: 2,
//     b: 3,
//     c: 1
// }
// For example: 
// instead of writing 4 line 
if (count[i]) {
    count++;
}
else {
    count[i] = 1;
}
// we have this 
count[i] = (count[i] || 0) + 1
// this same thing as we saying if we saw that character already then we + 1
// otherwise we have first count so that why we have 0 THEN + 1

