let allCards = []

async function carregarCards() {
    try {
        const response = await fetch('http://localhost:8000/cards')
        allCards = await response.json()
        console.log('Dados Carregados do Banco:', allCards)

        if(!mainContent.classList.contains("hidden")){
            render_cards(allCards)
        }
    } catch (error) {
        console.error("erro de busca a API", error)
    }
}
window.onload = carregarCards

const container = document.getElementById("pokemon-list");
const homeSection = document.getElementById("home_page")
const mainContent = document.querySelector("main")

const card_styles = {
    fantasma: { bg: "bg-gradient-to-br from-purple-600/80 to-indigo-900/80", borda: "border-purple-400/50" }
}


function render_cards(lista) {
    if (!container) return
    
    if (!lista || !Array.isArray(lista)) {
        console.warn("A lista de cards ainda não está pronta.")
        container.innerHTML = "<p class='text-white'>Carregando Pokémons...</p>"
        return
    }

    container.innerHTML = ""

    lista.forEach((p) => {
    
        const typeKey = p.card_type ? p.card_type.toLowerCase() : 'default'
        const style = card_styles[typeKey] || { bg: "bg-slate-800/70", borda: "border-slate-700" }

        container.innerHTML += `
            <div class="poke-card ${style.bg} ${style.borda} p-6 rounded-2xl border backdrop-blur-sm transition-all hover:scale-105">
                <div class="flex justify-center -mt-16 mb-4">
                    <a href="${p.db_url || '#'}" target="_blank"> 
                        <img src="${p.sprit_url}" class="w-32 h-32 object-contain ">
                    </a>
                </div>
                <div class="text-center">
                    <h3 class="text-xl font-bold text-white uppercase tracking-tighter">${p.nome_pokemon}</h3>
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-black/30 text-white/90">${p.tipo}</span>
                </div>
                <div class="mt-4 space-y-2">
                    <div class="flex justify-between text-[10px] font-black text-white/70">
                        <span>HP</span>
                        <span>${p.vida}</span>
                    </div>
                    <div class="w-full h-1.5 bg-black/20 rounded-full overflow-hidden">
                        <div class="h-full bg-green-400" style="width: ${Math.min((p.vida / 200) * 100, 100)}%"></div>
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

        if (allCards.length > 0){
            render_cards(allCards)
        } else{
            container.innerHTML = "<p class='text-white text-center'>Carregando Pokémons do banco...</p>";
        setTimeout(() => render_cards(allCards), 500)
        }

    }
}

document.getElementById("btn_home").addEventListener("click", ()=>{
    nav("home")
})
document.getElementById("btn_dex").addEventListener("click", ()=>{
    nav("dex")
})

nav("home")