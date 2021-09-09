import { style } from "./styles";
import * as React from 'react'; 
import { Image} from "react-native";
import { Text } from "../../components/Themed";
import { View } from "../../components/Themed";
import { FlatList } from "react-native-gesture-handler";

interface HomeCategoryProp {
    category:{
        title :string
        id :string
        movies :{
            id:string
            poster: string
        }[]
    }
}


const HomeScreenCategories = (props: HomeCategoryProp) =>{
    return (
        <>
            <Text style={style.title}>{props.category.title}</Text>
            <FlatList 
            data={props.category.movies}
            renderItem={({item})=>(
                <Image style={style.image} source={{ uri: item.poster}}></Image>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            />
        </>
    )
}

export default HomeScreenCategories;