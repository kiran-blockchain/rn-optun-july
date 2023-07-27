import { SafeAreaView, ScrollView,Text } from "react-native"
import { styles } from "./styles"
import {Button, Divider} from "@rneui/themed"
export const SmallList = ({navigation}) => {
    console.log(navigation.params);
    return (
    <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.container}>
         <Text style={styles.textStyle}>
            React native is awesome
            React native is awesome
            React native is awesome
            React native is awesome
            React native is awesome
            React native is awesome
            React native is awesome
         </Text>
         <Button onPress={()=>{
                   navigation.goBack();
                }} title='Go to End'/>
        </ScrollView>
    </SafeAreaView>
    )
}