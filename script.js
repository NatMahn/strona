function nwd(num1, num2) {
  if (!num2) {
    return num1;
  }

  return nwd(num2, num1 % num2);
}

const nwdResult = () => {
  let a = Number(document.getElementById("a").value);
  let b = Number(document.getElementById("b").value);
  const result = nwd(a, b);
  alert(result);
};
