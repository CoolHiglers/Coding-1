const chatbotResponses ={
  "hello": "hello? shush that mouth lazy boy/girl. i work 72 hours a dang day boyh i got no time for some dang hello.",
  "how are you": "workin 72 hours a dang day aint easy but im dang good dangin boyh.",
  "bye": "ah this generation. they dont know no god dang work do they? just the laziest netflix tiki taki lovin brats.",
  "ouch": "back in my day there werent no ouch, ye god dang softie"
  "thats offensive": "so? i dont give a dang abat your feelings. im tryina make tik toks on how lazy this generation is, its hard work ya know!"
  "why are you so rude": "because i aint soft eh 'pats your shoulder' man up boyh"
  "default":"oooh sorry i have only 3 braincells due to falling from the eiffel tower booty first and a stick penetrated me so i dont understand."
};
function handleUserInput(event) {
  if (event.key=== 'Enter'){
    const userInput = document.getElementById("userInput").value;
    const chat = document.getElementById("chat");

    document.getElementById("userInput").value = "";

    chat.innerHTML+=`<p><strong>Goy:</strong> ${userInput}</p>`;

    const response = chatbotResponses[userInput.toLowerCase()] || chatbotResponses["default"];

chat.innerHTML+= `<p><strong>Redneck:</strong>  ${response}</p>`;
  }
}
