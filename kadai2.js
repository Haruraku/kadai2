for (let number = 1; number < 51; number++) {
  if (number % 4 === 0) {
    console.log("4で割れる数です" + number);
  }
  if (number % 10 === 0) {
    console.log("今" + number + "回ループしました。")
  }
  if (number === 50) {
    alert ("50回カウントが終わりました。")
  }
}
