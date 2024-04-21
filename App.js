import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Card, Header, Image } from 'react-native-elements';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";


export default function App() {

    const [categories, setCategories] = React.useState([
        { id: 1, name: "Business", image: require("./images/Button 17.png") },
        { id: 2, name: "Code", image: require("./images/Button 18.png") },
        { id: 3, name: "Design", image: require("./images/Button 19.png") },
        { id: 4, name: "Writing", image: require("./images/Button 20.png") },
        { id: 5, name: "Movie", image: require("./images/Button 21.png") },
        { id: 6, name: "Language", image: require("./images/Button 22.png") },
    ])

    const [courses, setCourses] = React.useState([
        {
            id: 1,
            name: "Business",
            image: require("./images/Image 19.png"),
            price: 20,
            rate: 4.5,
            lession: 10,
            subribers: 1000,
        },
        {
            id: 2,
            name: "Business",
            image: require("./images/Image 20.png"),
            price: 20,
            rate: 4.5,
            lession: 10,
            subribers: 1000,
        },
    ])

    const [recomends, serRecomends] = React.useState([
        {
            id: 1,
            name: "Web Development",
            image: require("./images/Image 18.png"),
            price: 20,
            rate: 4.5,
            lession: 10,
            subribers: 1000,
        },
        {
            id: 2,
            name: "UX Design",
            image: require("./images/Image 22.png"),
            price: 20,
            rate: 4.5,
            lession: 10,
            subribers: 1000,
        },
    ])

    return (
        <ScrollView>

            <View style={styles.container}>
                <Header
                    leftComponent={() => {
                        return (
                            <View style={{ width: 220 }}>
                                <Text style={{ color: "white", fontSize: 26, fontWeight: 'bold' }}>Hello, Roise!</Text>
                                <Text style={{ color: "white", fontSize: 16 }}>What do you want learn today?</Text>
                            </View>
                        )
                    }}
                    rightComponent={() => {
                        return (
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                width: 60,
                                alignItems: "center",
                                marginTop: 15
                            }}>
                                <MaterialIcons name='local-grocery-store' color={"white"} size={25} />
                                <FontAwesome5Icon name='bell' color={"white"} size={25} />
                            </View>
                        )
                    }}
                />
                <View style={{ justifyContent: "center", alignItems: "center", marginVertical: 15 }}>
                    <Image
                        source={{ uri: 'https://www.w3schools.com/w3images/mountains.jpg' }}
                        style={{ width: 380, height: 200, borderRadius: 10 }}
                    />
                </View>
                <View style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    flexDirection: "row",
                    paddingHorizontal: 15,
                    marginVertical: 10
                }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Categrories</Text>
                    <Text style={{ fontSize: 16, color: 'gray' }}>View more</Text>
                </View>
                <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                    {
                        categories.map((category, index) => {
                            return (
                                <View key={index}
                                    style={{
                                        borderRadius: 10,
                                        borderWidth: 1,
                                        width: 180,
                                        flexDirection: "row",
                                        alignItems: "center",
                                        padding: 10,
                                        margin: 10,
                                        borderColor: 'gray'
                                    }}
                                >
                                    <Image style={{ width: 50, height: 50 }} source={category.image} />
                                    <Text style={{ marginLeft: 15, fontWeight: "bold" }}>{category.name}</Text>
                                </View>
                            )
                        })
                    }
                </View>
                <View style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    flexDirection: "row",
                    paddingHorizontal: 15,
                    marginVertical: 10
                }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Popular course</Text>
                    <Text style={{ fontSize: 16, color: 'gray' }}>View more</Text>
                </View>
                <FlatList style={{ width: "100%" }} data={courses} horizontal={true} renderItem={({ item }) => (
                    <Card containerStyle={{ width: 250 }}>
                        <Card.Image style={{ width: 250, height: 200 }} source={item.image}></Card.Image>
                        <Card.Divider />
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.name}</Text>
                            <FontAwesome name={"bookmark-o"} size={25} />
                        </View>
                        <Text style={{ fontSize: 16, color: "gray" }}>Ramono Wultschner</Text>
                        <Text style={{ fontSize: 16, color: "#800080", fontWeight: "bold" }}>{item.price}$</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Entypo name={"star-outlined"} size={25} color={"#FFD700"} />
                            <Text style={{ fontSize: 16, color: "gray" }}>{item.rate} ({item.subribers})</Text>
                            <Text style={{ fontSize: 16, color: "gray" }}> {item.lession} lessions</Text>
                        </View>
                    </Card>
                )} />
                <View style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    flexDirection: "row",
                    paddingHorizontal: 15,
                    marginBottom: 15
                }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Recomended for you</Text>
                    <Text style={{ fontSize: 16, color: 'gray' }}>View more</Text>
                </View>
                <FlatList style={{ width: "100%" }} data={recomends} horizontal={true} renderItem={({ item }) => (
                    <Card containerStyle={{ width: 250 }}>
                        <Card.Image style={{ width: 250, height: 200 }} source={item.image}></Card.Image>
                        <Card.Divider />
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.name}</Text>
                            <FontAwesome name={"bookmark-o"} size={25} />
                        </View>
                        <Text style={{ fontSize: 16, color: "gray" }}>Ramono Wultschner</Text>
                        <Text style={{ fontSize: 16, color: "#800080", fontWeight: "bold" }}>{item.price}$</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Entypo name={"star-outlined"} size={25} color={"#FFD700"} />
                            <Text style={{ fontSize: 16, color: "gray" }}>{item.rate} ({item.subribers})</Text>
                            <Text style={{ fontSize: 16, color: "gray" }}> {item.lession} lessions</Text>
                        </View>
                    </Card>
                )} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        overflow: "scroll",
        flex: 1,
    },
});
