function contar() {
  let inicio = document.getElementById("txtini")
  let fim = document.getElementById("txtfim")
  let passo = document.getElementById("txtpas")
  let res = document.getElementById("res")

  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = "Impossível contar!"
    window.alert("[ERRO] Verifique os dados e tente novamente!")
  } else {
      res.innerHTML = "Contando: <br>"
      let i = Number(inicio.value)
      let f = Number(fim.value)
      let p = Number(passo .value)

      if (p <= 0) {
        window.alert("Passo inválido! Considerando PASSO 1")
        p = 1
      }

      if (i <  f) {
        // Contagem Crescente
        for (let c = i; c <= f; c += p) {
          res.innerHTML += ` ${c} \u{1F4A8}`
        }
      } else {
        // Contagem Regressiva
          for (let c = i; c >= f; c -= p) {
            res.innerHTML += ` ${c} \u{1F4A8}`
          }
      res.innerHTML += `\u{1F44C}`
    }
  }
}