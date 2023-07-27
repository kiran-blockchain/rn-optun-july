import { SafeAreaView, ScrollView,Text } from "react-native"
import { styles } from "./styles"

export const SmallList = () => {
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
        </ScrollView>
    </SafeAreaView>
    )
}