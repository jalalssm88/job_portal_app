import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get("window");

export default StyleSheet.create({
    landingContainer: {
        height:800, 
        width:'100%', 
        backgroundColor:'rgba(0,0,0,0.7)', 
        paddingHorizontal:20
    },
    logoContainer:{
        width:'100%', 
        height:150, 
        alignItems:"center", 
        justifyContent:'center'
    },
    buttonsContainer:{
        width:'100%',
        height:400,
        justifyContent:'center',
        alignItems:'center'
    },
    buttons:{
        height:50,
        width:'100%',
        borderWidth:1,
        borderColor:'#FFFFFF',
        borderRadius:8,
        backgroundColor:'#2fc2ba',
        alignItems:'center',
        justifyContent:'center',
    },
   
    formContainer: {
        height:800, 
        width:'100%', 
        paddingHorizontal:20,
        paddingTop:15,
        borderRadius:10,
    },
    textInput:{
        height:50,
        borderWidth:1,
        borderColor:'#2fc2ba',
        borderRadius:8,
        paddingLeft:8,
        fontSize:18,
        marginBottom:30
    },
 
})