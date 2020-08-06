let { wordNumberForIntro, wordNumberForText, intros, descriptions, currentPhraseSelection, introText, descriptionsText, slicedWord, index, subtractIndex } = returnVariables();

(function typeDescriptions() {

//set intitial timeout
    let timeOutNumber = 75;

//both arrays have been printed to page, fade in button. If you dont use button or animation, delete style section below
    if (wordNumberForText === descriptions.length && wordNumberForIntro === intros.length) {
        wordNumberForIntro = 0;
        wordNumberForText = 0;
        //document.getElementById('main_page_button').style.visibility = "visible";
        //document.getElementById('main_page_button').style.animation = "fadeIn 2s";
        //document.getElementById('main_page_button').style.opacity = "0.7";
        //document.getElementById('main_page_button').style.animation = "blinkFade 2s infinite ease"
        return;
    } 

//iterate through length of wordNumberForIntro array
    if (wordNumberForIntro !== intros.length) {
            
        currentPhraseSelection = intros[wordNumberForIntro];
        slicedWord = currentPhraseSelection.slice(0, ++index);

        document.querySelector('.main_page_text1').textContent = introText + slicedWord;
        
        //iterate through each word, when complete move to next word of array
        if (slicedWord.length === currentPhraseSelection.length) {
            wordNumberForIntro++;
            index = 0;
            timeOutNumber = 200;
            introText += slicedWord;
            document.querySelector('.main_page_text1').textContent = introText;
            if (wordNumberForIntro === intros.length) {
                timeOutNumber = 500;
            }
        }
    } else if (wordNumberForIntro === intros.length) {

        timeOutNumber = 25;
        subtractIndex = introText.length;
    
        introText = introText.slice(0, --subtractIndex);

        document.querySelector('.main_page_text1').textContent = introText;

        if (introText.length === 0 ) {
    
            timeOutNumber = 75;
            currentPhraseSelection = descriptions[wordNumberForText];
            slicedWord = currentPhraseSelection.slice(0, ++index);
            
            document.querySelector('.main_page_text1').textContent = descriptionsText + slicedWord;
    
            if (slicedWord.length === currentPhraseSelection.length) {
                wordNumberForText++;
                index = 0;
                timeOutNumber = 200;
                descriptionsText += slicedWord;
                document.querySelector('.main_page_text1').textContent = descriptionsText;
            }
        }
        
    }
    setTimeout(typeDescriptions, timeOutNumber);
}());

function returnVariables() {
    const intros = ['Hello, ', 'my name is [FirstName] [LastName], ', "and I am a [Frontend?] [Backend?] Developer."];
    const descriptions = ['I make ', 'websites, ', 'desktop apps, ', 'web apps, ', '...and other stuff! ', "Let's talk!"];
    let wordNumberForIntro = 0;
    let wordNumberForText = 0;
    let index = 0;
    let subtractIndex = 0;
    let currentPhraseSelection = '';
    let introText = '';
    let descriptionsText = '';
    let slicedWord = '';
    return { wordNumberForIntro, wordNumberForText, intros, descriptions, currentPhraseSelection, introText, descriptionsText, slicedWord, index, subtractIndex  };
}
