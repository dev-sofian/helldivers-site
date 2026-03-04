document.getElementById("enlistForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const nom = document.getElementById("nom").value.trim();
    const cause = document.getElementById("cause").value.trim();
    if (!nom) {
        alert("IDENTITY REQUIRED, SOLDIER.");
        return;
    }
    const confirm = document.getElementById("enlistConfirm");
    confirm.style.display = "block";
    confirm.textContent = `> ENLISTMENT CONFIRMED — HELLDIVER "${nom.toUpperCase()}" REGISTERED. CAUSE: "${cause || "FOR DEMOCRACY"}". REPORT FOR DUTY IMMEDIATELY.`;
    this.style.opacity = ".4";
    this.style.pointerEvents = "none";
});