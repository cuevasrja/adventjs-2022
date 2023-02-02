function getCompleted(part, total) {
    const timePart = part.split(":").reduce((acc, cur)=>acc*60 + Number(cur));
    const timeTotal = total.split(":").reduce((acc, cur)=>acc*60 + Number(cur));
    
    const calculateGCD = (a, b) => {
        while (b) {
          const t = b;
          b = a % b;
          a = t;
        }
        return a;
    };

    const gcd = calculateGCD(timePart, timeTotal);

    const top = timePart / gcd;
    const bottom = timeTotal / gcd;
    
    return `${top}/${bottom}`
}

getCompleted('01:00:00', '03:00:00'); // '1/3'
getCompleted('02:00:00', '04:00:00') // '1/2'
getCompleted('01:00:00', '01:00:00') // '1/1'
getCompleted('00:10:00', '01:00:00') // '1/6'
getCompleted('01:10:10', '03:30:30') // '1/3'
getCompleted('03:30:30', '05:50:50') // '3/5