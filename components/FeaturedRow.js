import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({id, title, description}) => {
  return (
    <View>
      <View className="flex-row mt-4 mx-4 items-center justify-between">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs mx-4 text-gray-500">{description}</Text>
      <ScrollView 
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4 " 
      >
        {/* RestaurantCards */}
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Porotta! Poli..."
          rating={4.5}
          genre="Indian"
          address="123 Main St"
          short_description="this is a sample description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Porotta! Poli..."
          rating={4.5}
          genre="Indian"
          address="123 Main St"
          short_description="this is a sample description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Porotta! Poli..."
          rating={4.5}
          genre="Indian"
          address="123 Main St"
          short_description="this is a sample description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Porotta! Poli..."
          rating={4.5}
          genre="Indian"
          address="123 Main St"
          short_description="this is a sample description"
          dishes={[]}
          long={20}
          lat={0}
        />
        
      </ScrollView>

    </View>
  )
}

export default FeaturedRow;