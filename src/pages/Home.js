import React, { useEffect, useState } from 'react';
import CocktailsList from '../components/CocktailsList';
import SearchForm from '../components/SearchForm';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function getCocktails() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const data = await response.json();
        const { drinks } = data;
        if (drinks) {
          const newCocktails = drinks.map(item => {
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
              strAlcoholic,
              strGlass,
            } = item;

            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              alcohol: strAlcoholic,
              glass: strGlass,
            };
          });
          setCocktails(newCocktails);
        } else {
          setCocktails([]);
        }
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }
    getCocktails();
  }, [searchTerm]);
  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm} />
      <CocktailsList cocktails={cocktails} loading={loading} />
    </main>
  );
};
export default Home;
