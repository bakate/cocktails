import React from 'react';
import Loading from './Loading';
import Cocktail from './Cocktail';

const CocktailsList = ({ cocktails, loading }) => {
  if (loading) {
    return <Loading />;
  }
  if (!cocktails.length) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title"> cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map(item => (
          <Cocktail key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};
export default CocktailsList;
