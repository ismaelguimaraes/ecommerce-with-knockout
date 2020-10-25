function TopbarViewModel() {
    var self = this;
    var messageTopbar = [
        '10% de desconto em produtos Open Box!',
        'Frete grátis em compras acima de R$200,00.',
        'Aproveite as promoções e receba no conforto da sua casa com FRETE GRÁTIS!'
    ];

    var initialMessage = messageTopbar[0];
    this.initialMessage = ko.observable(initialMessage);

    setInterval(function() {
        initialMessage = messageTopbar[Math.floor(Math.random() * messageTopbar.length)];
        self.initialMessage(initialMessage);
    }, 10000);

    this.message = ko.pureComputed({
        read: () => {
            return this.initialMessage();
        },
        owner: this
    });
};

function BannerViewModel() {
    this.banner = "teste";
}

function HeadControllerModel() {
    this.title = "Móveis, Celulares, Smart Tv e Mais | Armazém Paraíba";
    this.description = "Confira Celulares, Smart Tv, Eletrodomésticos e Mais aqui no Armazém Paraíba | Até 12x s/ Juros!* | Não perca!";
    this.keywords = ['Teste', 'Teste2'];
}

ko.applyBindings(new TopbarViewModel(), document.getElementById('topbar'));
ko.applyBindings(new BannerViewModel(), document.getElementById('banner'));
ko.applyBindings(new HeadControllerModel(), document.querySelector('head'))