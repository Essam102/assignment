var Quote=[`<h2>"It's not what happens to you, but how you react to it that matters."</h2> <br/>

<h3> --Epictetus </h3> `,` <h2> "You miss 100% of the shots you don't take."<h2> <br/>

<h2> --Wayne Gretzy <h2> `,` <h2> "Do not take life too seriously. You will not get out alive."<h2> <br/>

<h2> --Elbert Hubbard <h2> `,` <h2> "The best revenge is massive success."<h2> <br/>

<h2> --Frank Sinatra <h2> `,` <h2>"Do not take life too seriously. You will not get out alive."<h2> <br/>

<h2> --Elbert Hubbard <h2> `,` <h2> "Resentment is like drinking poison and waiting for your enemies to die."<h2> <br/>

<h2> --Nelson Mandela <h2> `];




function getRandomNumber()
{
    var i=Math.round(Math.random()*(5-0))+0;
    document.getElementById('demo').innerHTML=Quote[i];
}
