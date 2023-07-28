import React from 'react';
import {
    StyleSheet,
    View,
    Dimensions
} from 'react-native';

const { height } = Dimensions.get('window');

const box_count = 3;
const box_height = height / box_count;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: "space-between",
        borderEndWidth: 1,
        borderBottomColor: '#000'
    },
    box: {
        height: box_height
    },
    box1: {
        flex: 0.3,
        backgroundColor: '#2196F3',
    },
    box2: {
        flex: 0.33,
        backgroundColor: '#8BC34A',

    },
    box3: {
        flex: 0.33,
        backgroundColor: '#e3aa1a',
    }
});
export default function VerticalStack() {
    return (
        <View>
            <View style={styles.container}>
                <View style={[styles.box, styles.box1]}></View>
                <View style={[styles.box, styles.box2]}></View>
                <View style={[styles.box, styles.box3]}></View>
            </View>
        </View>
    );
}