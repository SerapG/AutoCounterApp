import { View, Text,Button,StyleSheet } from 'react-native'
import React,{ useState,useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const MyComponent = () => {
    const [count,setCount] = useState(0)

    useEffect(() => {
        const Interval = setInterval(()=> {
            setCount((preCount) => preCount + 1);
        },1000)

        return()=> {
            clearInterval(Interval);
            console.log("Interval Temizlendi!")
        }
    },[])
  return (
    <SafeAreaView>
        
        <View style={styles.counterContainer}>
                <Text style={styles.counterText}>{count}</Text>
        </View>
        <View style={styles.buttonContainer}>
            <Button title ="Tıkla" onPress={()=> setCount(count+1)} color="seagreen"></Button>
        </View>

    </SafeAreaView>
    
  )
}


const styles = StyleSheet.create({
    counterContainer:{
        height:200,
        width:'90%',
        backgroundColor:'white',
       justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        shadowColor:'#000',
        shadowOffset: {width:0,height:2},
        shadowOpacity:0.2,
        shadowRadius:4,
        elevation:5,
    },
    counterText:{
        fontSize: 42,
        textAlign: 'center',
        color: '#333',
    },
    buttonContainer:{
        marginTop: 20,
        width: '90%',    
    },
});
export default MyComponent