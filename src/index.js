module.exports = function toReadable(number) {
    let res = "";
    const simpleNumbers = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tenthsNumbers = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    number = ("000" + number).substr(-3).match(/^(\d{1})(\d{2})$/);
    res += number[0] == "000" ? "zero" : "";
    res +=
        number[1] != 0
            ? (simpleNumbers[Number(number[1])] + " " ||
                  tenthsNumbers[number[1][0]] +
                      " " +
                      simpleNumbers[number[1][1]]) + "hundred "
            : "";
    res +=
        number[2] != 0
            ? simpleNumbers[Number(number[2])] ||
              tenthsNumbers[number[2][0]] + " " + simpleNumbers[number[2][1]]
            : "";
    return res.trim();
};
