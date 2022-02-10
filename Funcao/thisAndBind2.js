function Pessoa() {
    this.idade = 0

    const self = this // técnica utlizada para fixar o valor de this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa