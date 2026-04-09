import { pokemon } from "./data/teste_chars.js";

const container = document.getElementById("pokemon-list");
const card_tipos = document.getElementById("card1")

const card_styles = {
    fogo: {
        bg: "bg-red-500",
        borda: "border-red-700"
    },
    agua: {
        bg: "bg-blue-500",
        borda: "border-blue-700"
    },
    planta: {
        bg: "bg-green-500",
        borda: "border-green-700"
    }
}


function render() {

    container.innerHTML = "";

    pokemon.forEach((p) => {

        const tipo_style = card_styles[p.card_type]

        container.innerHTML += `
        <div class="poke-card shadow-lg p-4 ${tipo_style.bg} ${tipo_style.borda}">

            <img src="${p.image}"
            class="mt-6 w-full mb-10 ">
            
            <div class="flex justify-between items-start mb-4">
                <span class="bg-blue-500/20 text-blue-400 text-xs font-bold px-2 py-1 rounded">
                    HP ${p.vida}
                </span>
                <span class="text-slate-400 text-xm font-bold">${p.tipo}</span>
            </div>
            
            <h3 class="text-2xl font-bold text-white mb-1">${p.nome_pokemon}</h3>
            
            <div class="space-y-2 my-4">
                <div class="text-sm">
                    <span class="text-slate-500 uppercase text-[10px] font-bold block">Ataque Principal</span>
                    <p class="text-slate-200">${p.ataque_principal}</p>
                </div>
                <div class="text-sm">
                    <span class="text-slate-500 uppercase text-[10px] font-bold block">Ataque Secundário</span>
                    <p class="text-slate-200">${p.ataque_secundario}</p>
                </div>
            </div>

            <div class="border-t border-slate-700 pt-3 mt-3 flex justify-between items-center text-xs">
                Fraqueza: ${p.fraqueza}
            </div>
        </div>
        `;
    });
}

render();