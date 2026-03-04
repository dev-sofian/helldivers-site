const units = [{
        icon: "Factory_Strider_Enemy_Icon.png",
        nom: "FACTORY STRIDER",
        desc: "Massive Automaton quad-walker armed with twin fusion gatling guns and a large burst-cannon. Capable of deploying squads of Devastators directly onto the battlefield."
    },
    {
        icon: "AutomatonLogo.png",
        nom: "DEVASTATOR",
        desc: "Medium-weight combat unit equipped with high-caliber ballistic weaponry. Resilient armor plating makes them difficult to eliminate without anti-armor ordinance."
    },
    {
        icon: "AutomatonLogo.png",
        nom: "HULK",
        desc: "Heavy assault mech armed with a flamethrower and rotary cannon. Targeting the heat vents on its back is the only reliable weak point."
    }
];

const grille = document.getElementById("unitsGrid");

units.forEach(u => {
    const carte = document.createElement("div");
    carte.className = "unit-card";
    carte.innerHTML = `
        <img src="${u.icon}" alt="${u.nom}" class="unit-icon">
        <div class="unit-info">
            <div class="unit-name">${u.nom}</div>
            <p class="unit-desc">${u.desc}</p>
        </div>
    `;
    grille.appendChild(carte);
});