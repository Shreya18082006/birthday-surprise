function nextPage(page){
    window.location.href=page;
    }
    
    /* Moving No Button */
    function moveButton(){
    var btn=document.getElementById("noBtn");
    btn.style.position="absolute";
    btn.style.left=Math.random()*80+"%";
    btn.style.top=Math.random()*80+"%";
    }
    
    function correctAnswer(){
    window.location.href="color.html";
    }
    
    /* Favourite Color */
    function checkColor(){
    var color=document.getElementById("favColor").value.toLowerCase();
    if(color=="priyanshu"){
    alert("Correct 😌 You know me well!");
    window.location.href="game.html";
    }else{
    alert("Nope 😏 Try again");
    }
    }
    
    /* ⭐ STAR TAP GAME ⭐ */
    var stars=0;
    function tapStar(){
    stars++;
    document.getElementById("starCount").innerHTML="Stars Collected: "+stars+" ❤️";
    if(stars==6){
    window.location.href="funny.html";
    }
    }
    
    /* Funny Facts */
    var facts=[
        "**You are illegally handsome. I’m reporting you… to myself😁**",
        "**Your smile should be declared a national treasure💎.**",
        "**Being thisss cute without warning should be banned.😘**",
        "**Who gave you permission to look this good?🥰**",
        "**You’re not handsome… you’re a public disturbance😉**.",
        "**Your face deserves its own fan club.😎**",
        "**If charm was a crime, you’d get life imprisonment.😄**",
        "**Excuse me, why are you glowing like you pay rent in heaven🧐?**",
        "**You’re mine. The government hasn’t approved it yet, but still.🫂❤️**",
        "**Looking at you should come with a ‘Handle With Care’ warning.😉😜**",
        "**Stop smiling like that. I have a weak heartheart🫣😅**",
        "**You don’t need filters. Cameras need you.😉😁**",
        "**Honestly, you’re unfair to the rest of the male population.🤌🤴🏻**",
        "**You walking around this handsome is a threat to my focus😉😋.**",
        "**Your smile? Yeah, I’d invest in that.😁💕**",
    ];
    
    function generateFact(){
    var random=Math.floor(Math.random()*facts.length);
    document.getElementById("factText").innerHTML=facts[random];
    }
    
    /* Secret Name Unlock */
    function checkName(){
    var name=document.getElementById("secretName").value.toLowerCase();
    if(name=="shreya"){
    window.location.href="almost.html";
    }else{
    alert("Wrong password 😜");
    }
    }
    
    /* Confetti Firework */
    function blast(){
    for(let i=0;i<60;i++){
    let e=document.createElement("div");
    e.innerHTML="✨";
    e.style.position="absolute";
    e.style.left=Math.random()*100+"vw";
    e.style.top=Math.random()*100+"vh";
    e.style.fontSize="20px";
    document.body.appendChild(e);
    setTimeout(()=>e.remove(),2000);
    }
    }
    
    /* Music */