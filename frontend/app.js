import { pokemon } from "./data/teste_chars.js";

const container = document.getElementById("pokemon-list");
const homeSection = document.getElementById("home_page")
const mainContent = document.querySelector("main")

const card_styles = {
    fogo: {
        bg: "bg-gradient-to-br from-red-500/80 to-red-700/80",
        borda: "border-red-400/50"
    },
    agua: {
        bg: "bg-gradient-to-br from-blue-500/80 to-blue-700/80",
        borda: "border-blue-400/50"
    },
    planta: {
        bg: "bg-gradient-to-br from-green-500/80 to-green-700/80",
        borda: "border-green-400/50"
    },
    eletrico: {
        bg: "bg-gradient-to-br from-yellow-400/80 to-yellow-600/80",
        borda: "border-yellow-300/50"
    },
}


function render_cards() {

    container.innerHTML = ""

    pokemon.forEach((p) => {

        const style = card_styles[p.card_type] || { bg: "bg-slate-800/70", borda: "border-slate-700" }

        container.innerHTML += `
            <div class="poke-card ${style.bg} ${style.borda}">
                <div class="flex justify-center -mt-12 mb-4">
                    <a href=${p.db_url}> 
                    <img src="${p.sprit_url}" class="w-40 h-40 object-contain ">
                    </a>
                </div>
                <div class="text-center">
                    <h3 class="text-xl font-bold text-white uppercase tracking-tighter">${p.nome_pokemon}</h3>
                    <span class="text-xs font-bold px-2 py-1 rounded bg-black/20">${p.tipo}</span>
                </div>
                <div class="mt-4 space-y-2">
                    <div class="flex justify-between text-xs font-bold">
                        <span>HP</span>
                        <span>${p.vida}</span>
                    </div>
                    <div class="w-full h-1.5 bg-black/20 rounded-full overflow-hidden">
                        <div class="h-full bg-green-400" style="width: ${p.vida / 2}%"></div>
                    </div>
                </div>
            </div>
        `
    })
}

function nav(page){
     if (page === "home"){
        homeSection.classList.remove("hidden")
        mainContent.classList.add("hidden")
    }

    if (page === "dex"){
        homeSection.classList.add("hidden")
        mainContent.classList.remove("hidden")
        render_cards()
        render_cards_pequenos()
    }
}

document.getElementById("btn_home").addEventListener("click", ()=>{
    nav("home")
})
document.getElementById("btn_dex").addEventListener("click", ()=>{
    nav("dex")
})

nav("home")