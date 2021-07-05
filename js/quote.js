const quotes = [
    {quotes: "삶이 있는 한 희망은 있다",  
     author: "키케로" },
     {quotes: "산다는것 그것은 치열한 전투이다",
     author: "로망로랑"},
     {quotes: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다",
     author: "사무엘존슨"},
            {quotes:  "언제나 현재에 집중할수 있다면 행복할것이다",
                author: "파울로 코엘료"},
                {quotes: "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해",
                    author: "찰리 채플린"}
];

const num = Math.floor(Math.random() * quotes.length);

const quote = document.querySelector("#quotes-quote");
const author = document.querySelector("#quotes-author")


quote.innerText = quotes[num].quotes;
author.innerText = quotes[num].author;