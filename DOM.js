console.log("dom ");

const date = document.getElementById("output");
date.innerText = "50000tk";


const boxxx=document.getElementById('Boxxx');
boxxx.innerHTML=`
   <h1>Hello Robi......</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nobis, veniam. Animi, tempore dicta tempora eos.
    </p>
`



const texts=document.getElementById('Hatim');
texts.innerHTML=`
    <h1>Hello robi ! you are so lucky haaa na hahahhahahhaa hahhahhahahha hahhahhaha</h1>
`


const players = [
  "robi",
  "asif",
  "ovi",
  "nasir",
  "raju",
  "rafii",
  "rakib",
  "mamun",
  "sultan",
  "noyon",
];

const list = document.getElementsByClassName("player");

function PlayerList(array) {
  for (let i = 0; i <= array.length; i++) {
    list[i].innerText = array[i];
  }
}

PlayerList(players);




