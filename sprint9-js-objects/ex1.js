/* Scrieți o funcție care creează un obiect pentru a păstra informații despre rețeta ta preferată

Ar trebui să aibă proprietăți pentru titlu (un șir de caractere), porții (un număr) și ingrediente (o șir de elemente - array). Va fi afișată pe rânduri separate (o instrucțiune console.log pentru fiecare) toate informațiile obiectului după crearea acestuia.

Exemplu 1:

Input: titlu = “Pizza”, portii = 3, ingrediente = [“sunca”, “cas”, “ketchup”]

Output: { titlu: “Pizza”, portii: 3, ingrediente: [”sunca”, “cas”, “ketchup”] } */

function createRecipe (title, portions, ingredients) {
    const recipe = {
        title: title,
        portions: portions,
        ingredients: [...ingredients],
    };
    console.log("Titlul retetei este: ", recipe.title);
    console.log("Numarul de portii este: ", recipe.portions);
    console.log("Ingredientele sunt: ", recipe.ingredients);

    return recipe;
}

const pizzaRecipe = createRecipe("Pizza", 3, ["sunca", "cas", "ketchup"]);

