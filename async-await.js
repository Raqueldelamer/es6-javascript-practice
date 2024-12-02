// Async/Await Exercise

// Instructions:
// In this exercise, you will practice using async/await in JavaScript to handle asynchronous operations. The async/await syntax makes it easier to read and write asynchronous code.
// Complete the examples and exercises below using async/await where applicable.

// Examples

// Example 1: Use async/await to get data from the PokeAPI and handle the response
async function getPokemonData() {
  try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
      const data = await response.json();
      console.log("Example 1 - Pokemon Data:", data);
  } catch (error) {
      console.error("Example 1 - Error fetching data:", error);
  }
}
getPokemonData();

// Example 2: Handle errors using async/await
async function getUnknownPokemon() {
  try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/unknown');
      if (!response.ok) {
          throw new Error("Example 2 - Pokemon not found!");
      }
      const data = await response.json();
      console.log("Example 2 - Pokemon Data:", data);
  } catch (error) {
      console.error("Example 2 - Error:", error);
  }
}
getUnknownPokemon();

// Example 3: Fetch data from multiple endpoints using async/await
async function getPokemonAndAbility() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/charizard');
        const data = await response.json();

        console.log("Example 3 - Pokemon Name:", data.name);

        const abilityResponse = await fetch(data.abilities[0].ability.url);

        const abilityData = await abilityResponse.json();

        console.log("Example 3 - Ability Data:", abilityData);

    } catch (error) {
        console.error("Example 3 - Error fetching data:", error);
    }
}
getPokemonAndAbility();

// Exercises

// 1. Create an async function that fetches data from the PokeAPI and logs "Data fetched successfully!" if the fetch is successful
// async function fetchData() {
async function fetchData() {
    try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/meowth');  

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

    const data = await response.json();
        console.log('ToDo:1 - Data fetched successfully!');
        console.log(data);  // logged the fetched data
        } catch (error) {
            console.error('ToDo:1 - Error fetching data:', error);
        }
    }

    fetchData();
// }

// 2. Write an async function that tries to fetch an unknown Pokemon from the PokeAPI and logs "Fetch failed!" if it doesn't exist
// async function fetchWithError() {
    async function fetchWithError() {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/unknown');

            if (!response.ok) {
                throw new Error("Fetch failed!");
            }
            const data = await response.json();
            console.log("ToDo: 2 - Pokemon Data:", data);
        } catch (error) {
            console.error("ToDo: 2 - Error fetching data.", error);
        }
    }
// }

// 3. Fetch data from the PokeAPI, and then use the ID of the Pokemon to fetch another related resource using async/await
// async function chainFetches() {
    async function chainFetches(pokemonId) {
        try {
            // Fetching the Pokémon data
            const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
            
            if (!pokemonResponse.ok) {
                throw new Error('Pokemon not found');
            }
            
            const pokemonData = await pokemonResponse.json();
            console.log('Pokemon data fetched successfully:', pokemonData);
    
            const pokeId = pokemonData.id;  // This is the pokemon ID
            const relatedResponse = await fetch(`https://pokeapi.co/api/v2/item/${pokeId}`);
            
            if (!relatedResponse.ok) {
                throw new Error('Related item data not found.');
            }
            
            const relatedData = await relatedResponse.json();
            console.log('Data fetched successfully:', relatedData);
            
        } catch (error) {
            console.log('Fetch failed:', error.message);
        }
    }
    
    chainFetches(52);  // Pass a Pokémon ID to fetch
// }

// 4. Write an async function that waits for 1 second and then fetches data from the PokeAPI, logging "Promise complete!" when done
// async function delayedFetch() {
    async function delayedFetch() {
        await new Promise(resolve => setTimeout(resolve, 1000));

        const response = await fetch('https://pokeapi.co/api/v2/pokemon/52');
        const data = await response.json();
        console.log(data);
        console.log('Promise complete');
    }
    delayedFetch();
// }

// 5. Write an async function that fetches a Pokemon from the PokeAPI and checks if the ID is even; log "The Pokemon ID is even!" if it is, otherwise log "The Pokemon ID is odd!"
// async function checkEvenId(pokemonName) {
    async function checkEvenId(pokemonName) {
        try {
          // Fetch data for the given Pokémon
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error('Pokémon not found');
        }

        const data = await response.json();   // Convert the response to JSON
        const pokemonId = data.id;            // Get the Pokémon ID

        if (pokemonId % 2 === 0) {       // Check if the ID is even or odd
            console.log('The Pokémon ID is even!');
        } else {
            console.log('The Pokémon ID is odd!');
        }
        } catch (error) {

        console.error('Error:', error);
        }
}
    checkEvenId('meowth'); 
// }

// Solutions should be written directly below each TODO comment.