import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';



const HomeScreen = ({navigation}) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className= "bg-white pt-5"> 
      {/* header */}
      <View className= "flex-row pb-3 items-center mx-4 space-x-2 ">
        <Image 
          source={{
            uri: 'https://links.papareact.com/wru'
          }}
          className= "h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className= "flex-1">
          <Text className= "font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className= "font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB"/>  
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View> 
      
      {/* search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 items-center bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput 
            placeholder='Restaurants and cuisines' 
            keyboardType='default' 
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB"/>
      </View>

      {/* body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom:100,
        }}
      >
        {/* categories */}
        <Categories />  


        {/* featured rows */}
        <FeaturedRow
          id= "123"
          title="Featured"
          description="Paid placements from our partners"
        />  

        <FeaturedRow
          id= "1234"
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts!"
        />  

        <FeaturedRow
          id= "12345"
          title="Offers near you!"
          description="Why not support your local restaurant tonight! "
        />  

      </ScrollView>

    </SafeAreaView>
  ) 
}

export default HomeScreen;
