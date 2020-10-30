const txtElement = ['Tomoro Founder','Games Developer','Gamer'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '' ;

(function ngetik(){
    if(count == txtElement.length){
    count = 0;
}

    currentTxt = txtElement[count];
    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.transisi').textContent = words;

    if(words.length == currentTxt.length){
        count++;
        txtIndex = 0;
    }
    setTimeout(ngetik, 400);

})();