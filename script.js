async function generate(){

let topic = document.getElementById("topicInput").value

if(topic==""){
alert("Please enter a topic")
return
}

generateExplanation(topic)
generateImage(topic)
generateQuiz(topic)

}

async function generateExplanation(topic){

let prompt = "Explain "+topic+" in simple words and give 3 key points."

let response = await fetch("https://api.openai.com/v1/chat/completions",{

method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization":"Bearer "+OPENAI_API_KEY
},

body:JSON.stringify({

model:"gpt-3.5-turbo",

messages:[
{role:"user",content:prompt}
]

})

})

let data = await response.json()

let text = data.choices[0].message.content

document.getElementById("explanation").innerText=text

let points = text.split("\n")

let list = document.getElementById("points")

list.innerHTML=""

points.forEach(p=>{
if(p.trim()!=""){
let li=document.createElement("li")
li.innerText=p
list.appendChild(li)
}
})

}

function generateImage(topic){

let imageUrl="https://source.unsplash.com/400x300/?"+encodeURIComponent(topic)

document.getElementById("image").src=imageUrl

}

function generateQuiz(topic){

let quizHTML=`

<p>What best describes ${topic}?</p>

<button onclick="alert('Good!')">A concept or idea</button>

<button onclick="alert('Try again')">A random object</button>

<button onclick="alert('Try again')">A food item</button>

`

document.getElementById("quiz").innerHTML=quizHTML

}
