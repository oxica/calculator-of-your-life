function getTotalDaysYourLife() {
  let now = new Date().getTime();
  let year = prompt("Enter year of birth (number)");
  let month = prompt("Enter the month of birth (number)");
  let date = prompt("What date were you born? Please enter a number");

  let birthday = new Date(year, month - 1, date).getTime();

  let diff = now - birthday;
  return Math.floor(diff / 86400000);
}
//console.log(getTotalDaysYourLife());
alert(`You have lived for ${getTotalDaysYourLife()} days`);
