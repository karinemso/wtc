const translateOptions = {
    en: {
        notAWorld: `THIS IS NOT A <br/>"WORLD TOUR"`,
        whatItIs: `If it's excluding a continent thist term is being used incorrectly. We analyze and certify real world tours.`,
        howItWorks: `HOW DOES IT WORKS`,
        howManyContinents: `To receive this certification, you must have performed in <br class="broke-about"> at least 10% of the countries on each continent <br/> (America, Europe, Africa, Asia and Oceania)`,
        eachTour: `Each tour receive a label based on how many continents it has been to`,
        antartica: `(ALTHOUGH ANTARCTICA HAS ALREADY HOSTED SOME CONCERTS, IT DOES NOT COUNT IN THIS CERTIFICATION)`,
        analyzedTours: `SEE THE ANALYZED TOURS`,
        submitTour: `SUBMIT A TOUR`
    },
    pt: {
        notAWorld: `ISSO NÃO É UMA <br/>"TURNÊ MUNDIAL"`,
        whatItIs: `Se algum continente fica de fora, esse termo está sendo usado de forma errada. Nós analisamos e certificamos turnês mundiais de verdade.`,
        howItWorks: `COMO FUNCIONA`,
        howManyContinents: `Para receber essa certificação, você deve ter feito shows em, no mínimo, 10% dos países de cada continente (América, Europa, África, Ásia e Oceania).`,
        eachTour: `Cada turnê recebe um selo baseado em quantos continentes esteve.`,
        antartica: `(APESAR DE A ANTÁRTIDA JÁ TER RECEBIDO ALGUNS SHOWS, NÃO É UM CONTINENTE VÁLIDO NESSA ANÁLISE)`,
        analyzedTours: `VER TURNÊS ANALISADAS`,
        submitTour: `ENVIE UMA TURNÊ`
    }
}

function getCurrentLanguage() {
    const storageLanguage = localStorage.getItem('language');
    return !storageLanguage ? 'en' : storageLanguage;
}

function translateElements() {
    const currentLanguage = getCurrentLanguage();

    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    elementsToTranslate.forEach(element => {
        const translateLabel = element.dataset.translate || '';

        if(translateOptions[currentLanguage][translateLabel] != undefined) {
            const curHtml = translateOptions[currentLanguage][translateLabel];
            const iconElement = element?.querySelector('img') || element?.querySelector('svg');
            const iconItem = iconElement ? iconElement.cloneNode(true) : null;
            const iconContent = iconItem ? iconItem.outerHTML : '';

            element.innerHTML = curHtml + iconContent;
        }
    });
}

function handleClickToggleLanguage({ currentTarget }) {
    localStorage.setItem('language',currentTarget.dataset.language || 'en');
    translateElements();
}

window.addEventListener('DOMContentLoaded',() => {
    const langBtns = document.querySelectorAll('.languages button');

    translateElements();

    langBtns.forEach(btn => {
        btn.addEventListener('click',handleClickToggleLanguage);
    });
});