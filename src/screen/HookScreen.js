import React,{useCallback,useEffect} from "react";
import {View,Text,Button} from "react-native";
import useOrderCountHook from "../../src/Hooks/useOrderCount"
const HookScreen=()=>{
    const innerFunction = useCallback(() => {
        alert("called")
        // do something!
    });
 
    useEffect(() => {
        innerFunction();
        // The effect calls innerFunction, hence it should declare it as a dependency
        // Otherwise, if something about innerFunction changes (e.g. the data it uses), the effect would run the outdated version of innerFunction
    }, [innerFunction]);
    const orderHook = useOrderCountHook();
    return(
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <Text style={{marginBottom:40}}>
            count:{orderHook.orderCount.count}
            </Text>
            <Button onPress={orderHook.changeOrderCount} title={"Increment"}/>
        </View>
    )
}
export default HookScreen