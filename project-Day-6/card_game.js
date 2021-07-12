let cards = [{
        image: "https://i.pinimg.com/564x/1f/74/10/1f7410717536342c8386886e784338ac.jpg",
        value: 1,
        status: "closed"
    },
    {
        image: "https://i.pinimg.com/564x/1f/74/10/1f7410717536342c8386886e784338ac.jpg",
        value: 1,
        status: "closed"
    },
    {
        image: "https://i.pinimg.com/originals/7c/70/3f/7c703ff95934b0094c5be9994f1998c5.jpg",
        value: 2,
        status: "closed"
    },
    {
        image: "https://i.pinimg.com/originals/7c/70/3f/7c703ff95934b0094c5be9994f1998c5.jpg",
        value: 2,
        status: "closed"
    },
    {
        image: "https://i.pinimg.com/originals/f2/5b/8c/f25b8c9a16738de4bb0f6807a03ba192.jpg",
        value: 3,
        status: "closed"

    },
    {
        image: "https://i.pinimg.com/originals/f2/5b/8c/f25b8c9a16738de4bb0f6807a03ba192.jpg",
        value: 3,
        status: "closed"

    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZg0LmCFEV2GEk72kYQ_6-RCP9GiCRmzN1Q&usqp=CAU.jpg",
        value: 4,
        status: "closed"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZg0LmCFEV2GEk72kYQ_6-RCP9GiCRmzN1Q&usqp=CAU.jpg",
        value: 4,
        status: "closed"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmHFrrLE2fgPi6dpNcXLDYcHqM1mNpkHiIwaWbjn-Vp1wUDVyFJD6aO23AMxXWdRommyE&usqp=CAU.jpg",
        value: 5,
        status: "closed"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmHFrrLE2fgPi6dpNcXLDYcHqM1mNpkHiIwaWbjn-Vp1wUDVyFJD6aO23AMxXWdRommyE&usqp=CAU.jpg",
        value: 5,
        status: "closed"
    },


]




// durnsten shuffling alogorithm 

let temp;
for (let i = cards.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
}

let cardsCopy = cards;



function displayCards(data) {

    let cardsString = "";



    data.forEach(function(card, index) {
        cardsString += `
            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCard(${index})">
                </div>
            </div>
        `;
    });


    document.getElementById('cards').innerHTML = cardsString;

}


displayCards(cards);






let cardCount = 1;
let val1 = null,
    val2 = null;
let score = 0;

function openCard(index) {

    console.log(cards);

    cards[index].status = "opened";
    if (cardCount === 1) {
        val1 = cards[index].value;
        cardCount++;
    } else if (cardCount === 2) {
        val2 = cards[index].value;

        if (val1 === val2) {
            score++;
            document.getElementById('score').innerText = score;

            // reste after one guess 
            val1 = null;
            val2 = null;
            cardCount = 1;

        } else {

            alert("game over");
            location.reload();

        }


    }

    displayCards(cards);

}