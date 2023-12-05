class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'Mago':
                ataque = 'magia';
                break;
            case 'Guerreiro':
                ataque = 'espada';
                break;
            case 'Monge':
                ataque = 'artes marciais';
                break;
            case 'Ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'um ataque desconhecido';
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new Heroi('Xuxu', 99, 'Mago');
heroi1.atacar();

const heroi2 = new Heroi('Homer', 150, 'Ninja');
heroi2.atacar();