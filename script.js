function convertToWord(e) {
  algo(Number(e.target.value))
}

function algo(num) {
  let word = ""
  if (String(num).length == 1) {
    word = getUnitNumbers(num)
  }
  if (String(num).length == 2) {
    word = getTwoDigitNumber(num)
  }
  if (String(num).length == 3) {
    word = getThreeDigitNumber(num)
  }
  if (num > 999 && num <= 99999) {
    word = getFourToFiveDigitNumber(num)
  }
  if (num > 99999 && num <= 9999999) {
    word = getSixToSevenDigitNumber(num)
  }
  if (num > 9999999) {
    word = getOverSeven(num)
  }
  document.getElementById("inWords").innerText = word
}


function getUnitNumbers(num) {
  if (num == 0) return "zero"
  if (num == 1) return "one"
  if (num == 2) return "two"
  if (num == 3) return "three"
  if (num == 4) return "four"
  if (num == 5) return "five"
  if (num == 6) return "six"
  if (num == 7) return "seven"
  if (num == 8) return "eight"
  if (num == 9) return "nine"

  return typeof num
}

function twoDigitWithZero(num) {
  if (num == 10) return "ten"
  if (num == 20) return "twenty"
  if (num == 30) return "thirty"
  if (num == 40) return "forty"
  if (num == 50) return "fifty"
  if (num == 60) return "sixty"
  if (num == 70) return "seventy"
  if (num == 80) return "eighty"
  if (num == 90) return "ninty"
}

function getTwoDigitNumber(num) {
  if (num < 20 && num > 10) {
    if (num == 11) return "eleven"
    if (num == 12) return "twelve"
    if (num == 13) return "thrirteen"
    if (num == 14) return "forteen"
    if (num == 15) return "fifteen"
    if (num == 16) return "sixteen"
    if (num == 17) return "seventeen"
    if (num == 18) return "eighteen"
    if (num == 19) return "nineteen"
  }
  else if (String(num)[1] == 0) {
    return twoDigitWithZero(num)
  }
  else {
    let word = ""
    word = twoDigitWithZero(num - String(num)[1])
    word += " "
    word += getUnitNumbers(String(num)[1])
    return word
  }

}

function getThreeDigitNumber(num) {
  let word = ""
  word += getUnitNumbers(Number(String(num)[0]))
  word += " hundred "
  const processedNum = String(num).split('')
  processedNum.shift()
  if (Number(processedNum.join("") == 0)) return word
  word += getTwoDigitNumber(Number(processedNum.join("")))
  return word
}

function getFourToFiveDigitNumber(num) {
  let word = ""
  if (num < 10000) {
    word += getUnitNumbers(Number(String(num)[0]))
    word += " thousand "
    const processedNum = String(num).split('')
    processedNum.shift()
    if (Number(processedNum.join("") == 0)) return word
    word += getThreeDigitNumber(Number(processedNum.join("")))
  }
  else {
    word += getTwoDigitNumber(Number(String(num)[0] + String(num)[1]))
    word += " thousand "
    const processedNum = String(num).split('')
    processedNum.shift()
    processedNum.shift()
    if (Number(processedNum.join("") == 0)) return word
    word += getThreeDigitNumber(Number(processedNum.join("")))
  }
  return word
}

function getSixToSevenDigitNumber(num) {
  let word = ""
  if (num < 1000000) {
    word += getUnitNumbers(Number(String(num)[0]))
    word += " Lakh "
    const processedNum = String(num).split('')
    processedNum.shift()
    if (Number(processedNum.join("") == 0)) return word
    word += getFourToFiveDigitNumber(Number(processedNum.join("")))
  }
  else {
    word += getTwoDigitNumber(Number(String(num)[0] + String(num)[1]))
    word += " lakh "
    const processedNum = String(num).split('')
    processedNum.shift()
    processedNum.shift()
    if (Number(processedNum.join("") == 0)) return word
    word += getFourToFiveDigitNumber(Number(processedNum.join("")))
  }
  return word
}

function getOverSeven(num) {
  let word = ""
  if (num < 100000000) {
    word += getUnitNumbers(Number(String(num)[0]))
    word += " Crore "
    const processedNum = String(num).split('')
    processedNum.shift()
    if (Number(processedNum.join("") == 0)) return word
    word += getSixToSevenDigitNumber(Number(processedNum.join("")))
  }
  else if (num <= 999999999) {
    word += getTwoDigitNumber(Number(String(num)[0] + String(num)[1]))
    word += " crore "
    const processedNum = String(num).split('')
    processedNum.shift()
    processedNum.shift()
    if (Number(processedNum.join("") == 0)) return word
    word += getSixToSevenDigitNumber(Number(processedNum.join("")))
  }
  else if (num > 999999999 && num <= 9999999999) {
    word += getThreeDigitNumber(Number(String(num)[0] + String(num)[1] + String(num)[2]))
    word += " crore "
    const processedNum = String(num).split('')
    processedNum.shift()
    processedNum.shift()
    processedNum.shift()
    if (Number(processedNum.join("") == 0)) return word
    word += getSixToSevenDigitNumber(Number(processedNum.join("")))
  }
  else {
    word = "Sorry, works till 999,99,99,999 😅"
  }
  return word
}