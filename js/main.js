//https://pokeapi.co/api/v2/pokemon/ditto

const pokemons = {
    list:[],
    
    html:{
        name :document.getElementById('name'),
        type :document.getElementById('type'),
        color :document.getElementById('color'),    
        shape :document.getElementById('shape'),   
        height :document.getElementById('height'),    
        weight :document.getElementById('weight'),   
        habitat :document.getElementById('habitat'),   
        growth_rate :document.getElementById('growth_rate'), 
        evolves_from_species :document.getElementById('evolves_from_species'),
        
        sprite: document.getElementById('sprite'),
        altImg: document.getElementById('altImg')
    },

    createPokemon: async function(pokemonName){
        try{

            let fetcher = await fetch('https://pokeapi.co/api/v2/pokemon/'+pokemonName);
            
            if(fetcher.ok === true){
                //checks if the fetching was successful
                console.log('createPokemon: Fetch Done');
                let pokemonJson = await((fetcher).json());  
                pokemonName = pokemonJson.name;

                this.list[pokemonName] = this.list[pokemonName] || [];
                // shorthand
                let pkl = this.list[pokemonName];
                
                console.log('createPokemon: Initial Json = ', pokemonJson);
            }
        }
    }
    
}