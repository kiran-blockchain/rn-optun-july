import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    container: {
        flex: .5,
        flexDirection: 'row',
        justifyContent: 'center', //replace with flex-end or center 
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        alignItems: 'center',
    },
    container2: {
        flex: .5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#000'//replace with flex-end or center 
    },
    box: {
        width: 50,
        height: 50
    },
    box1: {
        backgroundColor: '#2196F3'
    },
    box2: {
        backgroundColor: '#8BC34A'
    },
    box3: {
        backgroundColor: '#e3aa1a'
    }
});
export default function AlignItems() {
    return (
        <View style={styles.wrapper}>
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <View style={[styles.box, styles.box1]}></View>
                    <View style={[styles.box, styles.box2]}></View>
                    <View style={[styles.box, styles.box3]}></View>
                </View>
                <View style={styles.container2}>
                    <View style={[styles.box, styles.box1]}></View>
                    <View style={[styles.box, styles.box2]}></View>
                    <View style={[styles.box, styles.box3]}></View>
                </View>
            </View>
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <View style={[styles.box, styles.box1]}></View>
                    <View style={[styles.box, styles.box2]}></View>
                    <View style={[styles.box, styles.box3]}></View>
                </View>
                <View style={styles.container2}>
                    <View style={[styles.box, styles.box1]}></View>
                    <View style={[styles.box, styles.box2]}></View>
                    <View style={[styles.box, styles.box3]}></View>
                </View>
            </View>

        </View>
    );
}