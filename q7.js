// Observe the following two lists of hospitals:

let hospitals = ["VGH", "Burnaby General", "Childrens Hospital"];
let hList = ["California Hospital", "Edmonton Hospital", "VGH"];

// Your program must `filter` `hList` and have the following test:
// - If the hospital in `hList` is also inside the `hospitals` list, it passes the test.
// - If the hospital in `hList` is not inside the `hospitals` list, it does not pass the test.
// As you can see, `"California Hospital", "Edmonton Hospital"` are ***not*** in the hospitals list...so they do not pass the test. Only `"VGH"` passes the test.
// So the new list that is returned should only have:

// `["VGH"]`

const testHospital = (list1, list2) => {
    const validHospital = list1.filter((hospital) => {
        for (let hospitalMatch of list2) {
            if (hospital === hospitalMatch) {
                return hospitalMatch;
            }
        }
    });
    return validHospital;
};

console.log(testHospital(hList, hospitals));
console.log(testHospital(hospitals, hList));
