import { pokemon } from "./data/teste_chars.js";

const container = document.getElementById("pokemon-list");
const card_tipos = document.getElementById("card1")

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
    }
}


function render_cards() {

    container.innerHTML = "";

    pokemon.forEach((p) => {

        const tipo_style = card_styles[p.card_type]

        container.innerHTML += `
        <div class="poke-card shadow-lg p-4 ${tipo_style.bg} ${tipo_style.borda}">

            <div class="flex justify-center -mt-10 mb-4">
                <img src="${p.image}" 
                class="w-64 h-64 object-contain drop-shadow-xl hover:scale-110 transition-transform duration-300">
            </div>
            
            <div class="flex justify-between items-start mb-4">
                <span class=" bg-white/10 backdrop-blur rounded-md text-white-400 text-xs font-bold px-2 py-1">
                    HP ${p.vida}
                    <div class="w-full h-3 bg-black/30 rounded mt-2">
                    <div class="h-full bg-green-400 rounded" style="width: ${p.vida / 2}%"></div>
                    </div>
                </span>
                <span class="px-2 py-1 text-xs font-bold rounded-full bg-black/30 backdrop-blur">
                ${p.tipo}</span>
            </div>
            
            <h3 class="text-2xl font-bold text-white mb-1">${p.nome_pokemon}</h3>
            
            <div class="space-y-2 my-4">
            <div class="p-3 text-black bg-white/10 backdrop-blur rounded-2xl">
                <div class="flex justify-between items-center">
                    <span class="font-bold">${p.ataque_principal}</span>
                    <span class="font-bold">120</span>
                </div>
            </div>
            <div class="p-3 text-black bg-white/10 backdrop-blur rounded-2xl">
                <div class="flex justify-between items-center">
                    <span class="font-bold">${p.ataque_secundario}</span>
                    <span class="font-bold">120</span>
                </div>
            </div>
        </div>
        `
    });
}


let sttPage = "home"

function nav(page){
    sttPage = page

    if (page === "home"){
        render_home()
    }

    if (page === "dex"){
        render_dex()
    }
}

function render_home() {
    container.innerHTML = ""
}

function render_dex(){
    render_cards()
}

document.getElementById("btn_home").addEventListener("click", ()=>{
    nav("home")
})
document.getElementById("btn_dex").addEventListener("click", ()=>{
    nav("dex")
})

nav("home")