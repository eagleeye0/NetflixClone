import { style } from "./styles";
import * as React from 'react'; 
import { Image} from "react-native";
import { Text } from "../../components/Themed";
import { View } from "../../components/Themed";
import { FlatList } from "react-native-gesture-handler";
import data from '../../assets/data/categories';
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreenCategories from "../../components/HomeCategory";
const HomeScreen = () =>{
    return (
    <SafeAreaView style={style.container}>
            <>

                <FlatList
                data = {data.items}
                renderItem={ ({item}) => (
                <HomeScreenCategories category={item}></HomeScreenCategories>
                )}
                />
            </>
     </SafeAreaView>
    )
}

export default HomeScreen;