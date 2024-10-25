const affirmations = [
    "You are strong and capable.",
    "You deserve happiness and success.",
    "Believe in yourself and your abilities.",
    "Every day is a new opportunity for growth.",
    "You are enough, just as you are.",
    "Your potential is limitless.",
    "Be proud of how far you've come.",
    "You are in control of your thoughts and emotions.",
    "Positivity flows through you.",
    "You have the power to create change.",
    "My self-worth is not determined by my accomplishments.",

    "There is no end destination on this self-love journey.",
"I exude beauty and grace.",
"I am worthy of love just for being who I am.",
"Prioritizing myself is productive.",
"It is okay to take things one step at a time.",
"I deserve fulfilling relationships.", 
"I will allow myself to rest when my body needs it.", 
"My worth doesn’t depend on how I look.",
"I view my body without judgment",
"I will be present. I will be positive.",
"I am courageous, and I stand up for myself.", 
"I will honor my need to rest and recharge.", 
"I embrace my best self today.", 
"I radiate positive energy and vitality. ",
"I have the power to change my story. ",
"I choose positivity. I choose happiness. I see both all around me.",
"I love and approve of myself. ",
"I am well prepared for any situation.", 
"I deserve time for myself by tending to my own needs without guilt or apology.",
];

function generateAffirmation() {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    document.getElementById('affirmationText').textContent = affirmations[randomIndex];
}
