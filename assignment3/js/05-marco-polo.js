for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    alert("Marco! Polo!");
  } else if (i % 3 === 0) {
    alert("Marco!");
  } else if (i % 5 === 0) {
    alert("Polo!");
  } else {
    alert(i);
  }
}