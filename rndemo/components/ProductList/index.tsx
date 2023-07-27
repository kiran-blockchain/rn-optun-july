import { FlatList, SafeAreaView, Text, View } from "react-native";
import { useProducts } from "../../hooks/useProducts";
import {Button, Divider} from "@rneui/themed"
import { styles } from "./styles";
import { useRef } from "react";

export const ProductList = ({navigation}) => {
    console.log(navigation);
    const productList = useProducts();
    const list:any = useRef(null);
    const press =()=>{
        list.current.scrollToEnd({animated:true})
    }
    // console.log(productList);
    const renderItem = (item: any) => {
        return (<View>
            <Text style={styles.textStyle}>{item.item.title}</Text>
            <Text style={styles.textStyle}>{item.description}</Text>
        </View>)
    }
    //header 
    const header =()=>{
        return(
            <View>
                <Text style={styles.headerStyle}>
                    Products List
                </Text>
                <Button onPress={()=>{
                    press();
                }} title='Go to End'/>
                <Button onPress={()=>{
                    navigation.navigate('SmallList',{list:productList})
                }} title='Go other Page'/>
                <Divider orientation="vertical" width={6}/>
            </View>
        )
    }
    const itemSeparator =()=>{
        return (
            <Divider width={2} color="green"/>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {productList && (<FlatList
              ref={list}
               ListHeaderComponent={header}
               ItemSeparatorComponent={itemSeparator}
                data={productList}
                renderItem={renderItem}
                keyExtractor={(item: any) => item.index}>
            </FlatList>
            )
            }

        </SafeAreaView>
    )
}