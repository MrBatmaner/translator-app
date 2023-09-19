import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import CategoryCard from "./CategoryCard";
import sanityClient from "../sanity";
import { urlFor } from "../sanity"

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {

  }, [])
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      >

        {categories.map((category) => (
          <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.name}
          />
        ))}
        {/* CategoryCard */}

        <CategoryCard 
          imgUrl="https://links.papareact.com/gn7"
          title="Testing 1"
        />
        <CategoryCard 
          imgUrl="https://links.papareact.com/gn7"
          title="Testing 2"
        />
        <CategoryCard 
          imgUrl="https://links.papareact.com/gn7"
          title="Testing 3"
        />
        <CategoryCard 
          imgUrl="https://links.papareact.com/gn7"
          title="Testing 3"
        />
        <CategoryCard 
          imgUrl="https://links.papareact.com/gn7"
          title="Testing 3"
        />
        <CategoryCard 
          imgUrl="https://links.papareact.com/gn7"
          title="Testing 3"
        />

    </ScrollView>
  );
};

export default Categories;