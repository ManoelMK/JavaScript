function cal(){
  let r1 = document.getElementById("tx1")
  let r2 = document.getElementById("tx2")
  let r3 = document.getElementById("tx3")
  let res = document.getElementById("tx5")
  let r4 = r1.valueAsNumber
  let r5 = r2.valueAsNumber
  let r6 = r3.valueAsNumber
  let r7 =[]
  while(r4 < r5){
    r7.push( r4+=r6)
    res.innerHTML = r7
    
  }
}