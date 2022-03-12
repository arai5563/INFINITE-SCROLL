const quotes_cont = document.querySelector('.quotes');

let limit = 10;
let pageCount = 1;
let postCount =1;


const getQuotes = async (page, limit) => {
    const API_URL = `https://api.javascripttutorial.net/v1/quotes/?page=${pageCount}&limit=${limit}`;
    const response = await fetch(API_URL);
    let quotes =  await response.json();
    quotes = quotes.data ;
    // console.log('quotes:', quotes.data[0].quote)

    quotes.map((curElmt,index) => {

             let htmlData = `
             <div class = "post">
                <p class = "count">${postCount++}</p>
                <h2>${curElmt.quote}</h2>
                <p> <span class= "apos">"</span> - ${curElmt.author}</p>
             </div>
             `

             quotes_cont.insertAdjacentHTML("beforeend",htmlData)

             
    })



}

getQuotes();

const pageIncrease = () => {

    setTimeout(()=> {

        pageCount++;
        getQuotes();
    },400)
}


window.addEventListener("scroll",() => {
   const {scrollHeight,scrollTop,clientHeight} =  document.documentElement;

   if(scrollTop + clientHeight >= scrollHeight) {
       pageIncrease();
   }
})
