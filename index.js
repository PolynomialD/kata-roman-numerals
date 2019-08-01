converter = (input) => {
  const decimals = input.split('').map((element) => convertToDecimal(element))
  const convert = decimals.reduce((total, current, index) => {
    if(current >= decimals[index+1] || !decimals[index+1]) {
      return total + current
    } else {
      decimals[index+1] -= current
      return total
    }
  })
  console.log(convert)
}

convertToDecimal = (x) => {
  switch (x) {
    case 'M': value = 1000
    break;
    case 'D': value = 500
    break;
    case 'C': value = 100
    break;
    case 'L': value = 50
    break;
    case 'X': value = 10
    break;
    case 'V': value = 5
    break;
    case 'I': value = 1
    break;
    default: undefined
  }
  return value
}

converter('MXMCVII')