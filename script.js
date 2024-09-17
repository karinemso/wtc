const initial = document.querySelector('.initial')
const about = document.querySelector('.about')
const btnHowItWorks = document.querySelector('#howItWorks')
const btnReturn = document.querySelector('#return')
const byBlaBlaLab = document.querySelector('#byBlaBlaLab')


function goTo(from){
    const currentPage = from == 'initial'? initial : about
    const nextPage = from == 'initial'? about : initial

    
    currentPage.style.opacity = '0'
    console.log('oi')
    setTimeout(() => {
        
        if(from == 'initial'){
            byBlaBlaLab.style.display = 'block'
        } else {
            byBlaBlaLab.style.display = 'none'
    
        }
         currentPage.style.display = 'none'
         nextPage.style.display = 'flex'

         
        },300)
        
        setTimeout(() => {
            
            if(from == 'initial'){
               byBlaBlaLab.style.opacity = '1'
           } else {
               byBlaBlaLab.style.opacity = '0'
       
           }
            nextPage.style.opacity = '1'
        }, 400);

}
btnHowItWorks.addEventListener('click', () => goTo('initial'))
btnReturn.addEventListener('click',() => goTo('about'))