function countHours(year, holidays) {
  const workDays = holidays.filter( day => {
    const date = new Date(`${day}/${year}`);
    return date.getDay() !== 0 && date.getDay() !== 6
  }).length
    
  return 2*workDays
}

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

countHours(year, holidays)