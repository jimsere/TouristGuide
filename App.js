import React  from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity, ImageBackground, FlatList, ScrollView, TouchableWithoutFeedback, Linking } from 'react-native';
import {NavigationContainer} from '@react-navigation/native' ;
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown : false}}>
        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="MuseumsIntro" component={MuseumsIntroScreen} />  
        <Stack.Screen name='MuseumsInfo' component={MusuemsInfoScreen}  />  
        <Stack.Screen name='NightLifeIntro' component={NightLifeIntroScreen}/>  
        <Stack.Screen name='NightLifeInfo' component={NightLifeInfoScreen}/>
   
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


function HomeScreen({navigation}){
  return(
     // HomeScreen Create building first the buttons and then using Scrollview i create some usefull info about the author of the app
      <ImageBackground source={require('C:/Users/Jimmy/Desktop/projects/Unfinished/TouristGuide/Guide/assets/thess2.jpeg')} style={styles.backgroundImage} resizeMode='cover'>
       <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.contentContainer}> 
          <Text style={styles.titleStyle}>Welcome to Thessaloniki</Text>

          <View style={styles.buttonGrid}>
            <View style={styles.buttonColumn}> 
            <TouchableOpacity style={styles.neonOutlineButton} onPress={() => navigation.navigate('MuseumsIntro')}>
                  <Text style={styles.neonButtonText}>Museums</Text>
            </TouchableOpacity>  
            <TouchableOpacity style={styles.neonOutlineButton} onPress={() => navigation.navigate('NightLifeIntro')}>
                  <Text style={styles.neonButtonText}>Night Life</Text>
            </TouchableOpacity>  
            <TouchableOpacity style={styles.neonOutlineButton} onPress={() => navigation.navigate('')}>
                  <Text style={styles.neonButtonText}>City Sites</Text>
            </TouchableOpacity>  
            <TouchableOpacity style={styles.neonOutlineButton} onPress={() => navigation.navigate('')}>
                  <Text style={styles.neonButtonText}>Beaches</Text>
            </TouchableOpacity>  
            <TouchableOpacity style={styles.neonOutlineButton} onPress={() => navigation.navigate('')}>
                  <Text style={styles.neonButtonText}>Nature Walks</Text>
            </TouchableOpacity>  
            <TouchableOpacity style={styles.neonOutlineButton} onPress={() => navigation.navigate('')}>
                  <Text style={styles.neonButtonText}>10 reasons to visit</Text>
            </TouchableOpacity>  
            <TouchableOpacity style={styles.neonOutlineButton} onPress={() => navigation.navigate('')}>
                  <Text style={styles.neonButtonText}>Travelling to Thessaloniki</Text>
            </TouchableOpacity>  
            <TouchableOpacity style={styles.neonOutlineButton} onPress={() => navigation.navigate('')}>
                  <Text style={styles.neonButtonText}>About Thessaloniki</Text>
            </TouchableOpacity>  
            </View>
          </View>
          
          <View style={styles.aboutSection}>
            <Text style={styles.aboutTitle}>Contact with us</Text>
            <Text>App Creator: Serefias Dimitrios</Text>
            <Text>Phone number: 6946909015</Text>
            <Text>Emai: dimitrisserefias@gmail.com</Text>
            <Text>Instagram: dimitrisserefias</Text>
          </View>

        </View>
      </ScrollView>
      </ImageBackground>
    

  )
}

function MuseumsIntroScreen({navigation}){
  return(
    <ScrollView contentContainerStyle={styles.scrollView}>
      <Image source={require('C:/Users/Jimmy/Desktop/projects/Unfinished/TouristGuide/Guide/assets/museums.jpg')} style={styles.backgroundImage} />
       <View style={styles.overlay}>
       <TouchableOpacity onPress={() => navigation.navigate('MuseumsInfo')}>
          <Text style={styles.ButtonForSecondScreen}>Museums</Text>
       </TouchableOpacity>       
       </View>   
    </ScrollView>
    
  )

}
//Σε αυτη την συναρτηση φτιαχνω την εικονα και το ονομα για καθε μουσειο. Επειτα
//με την χρηση του πινακα museums που περιεχει ολα τα δεδομενα για τα μουσεια
//βαζω τα λινκ των μουσειων πανω στις εικονες. Στο return τα δεδομενα τα παιρνει 
//απο τον πινακα με τα δεδομενα
function MusuemsInfoScreen({}){
  const museums = [
{
    imageUrl : require('C:/Users/Jimmy/Desktop/projects/Unfinished/TouristGuide/Guide/assets/vyzantio.jpg'),
    museumName: 'Byzantine Museum',
    museumUrl: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjx0I6dvfmFAxXfXvEDHX99C6gQFnoECCsQAQ&url=https%3A%2F%2Fwww.mbp.gr%2F&usg=AOvVaw3saikPURKgbNyFWPk-VwTO&opi=89978449'
},
{
  imageUrl : require('C:/Users/Jimmy/Desktop/projects/Unfinished/TouristGuide/Guide/assets/arxaiologiko.jpg'),
  museumName: 'Archaeological Museum Of Thessaloniki',
  museumUrl: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi47MSUlYOGAxXIQ_EDHQq9Dv8QFnoECDoQAQ&url=https%3A%2F%2Fwww.amth.gr%2F&usg=AOvVaw0ceV7BEltLkfV9r2zjF-Nc&opi=89978449'
},
{
  imageUrl : require('C:/Users/Jimmy/Desktop/projects/Unfinished/TouristGuide/Guide/assets/polemiko.jpg'),
  museumName: 'War Museum',
  museumUrl: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjBxOHEl4OGAxW5S_EDHSYzDr8QFnoECB0QAQ&url=https%3A%2F%2Fwarmuseum.gr%2Four-war-museums%2Fthessaloniki-war-museum%2F&usg=AOvVaw0pyCBKvCSerFHO6neFMQie&opi=89978449'
},
{
  imageUrl : require('C:/Users/Jimmy/Desktop/projects/Unfinished/TouristGuide/Guide/assets/olympiako.jpg'),
  museumName: 'Olympic Museum',
  museumUrl: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjK7fKtmIOGAxUwc_EDHZN5CFUQFnoECC8QAQ&url=http%3A%2F%2Fwww.olympicmuseum-thessaloniki.org%2F&usg=AOvVaw3FP7K2UVU4PZSGmwQh2b5a&opi=89978449'
},
{
  imageUrl : require('C:/Users/Jimmy/Desktop/projects/Unfinished/TouristGuide/Guide/assets/texnis.jpg'),
  museumName: 'Museum of Contemporary Art',
  museumUrl: 'https://www.momus.gr/museum/museum-contemporary-art#museum'
}
]
const handleImagePress = (url) => {
  Linking.openURL(url);
};

  return(
    <ScrollView contentContainerStyle={styles.scrollViewSecondScreen}> 
    {museums.map((museum, index) =>(
      <View style={styles.ThirdScreenContainer} key={index}>
        <TouchableWithoutFeedback onPress={() => handleImagePress(museum.museumUrl)}>
          <View style={styles.ImageContainer}>
            <Image source={museum.imageUrl} style={styles.ThirdScreenImage}/>
            <Text style={styles.ThirdScreenName}>{museum.museumName}</Text>                
           </View>
        </TouchableWithoutFeedback>
        
      </View>
      
      ))}
    </ScrollView>
 ) 

}

function NightLifeIntroScreen({navigation}){
  return(
    <ScrollView contentContainerStyle={styles.scrollView}>
      <Image source={require('C:/Users/Jimmy/Desktop/projects/Unfinished/TouristGuide/Guide/assets/club.jpg')} style={styles.backgroundImage} />
       <View style={styles.overlay}>
       <TouchableOpacity onPress={() => navigation.navigate('NightLifeInfo')}>
          <Text style={styles.ButtonForSecondScreen}>Night Life</Text>
       </TouchableOpacity>       
       </View>   
    </ScrollView>
    
  )

}

function NightLifeInfoScreen({}){
  const clubs = [
{
    imageUrl : require('C:/Users/Jimmy/Desktop/projects/Unfinished/TouristGuide/Guide/assets/jadore.jpg'),
    clubName: 'Jadore Supreme Club',
    clubUrl: 'https://www.instagram.com/jdrclub?fbclid=IwZXh0bgNhZW0CMTAAAR30Jv_e8CeHD6bAOgvmwOXhQt68GmdlU_Gocb2BjYgi2fR9KVW9fNXrP50_aem_ASs8cwCGRtK0tEBKV4eoiEydTR2YaV1VqieA8MtZ8wQzSbTZZYkQ1ti_uNDL4PzM1CXbhYsq7h2wwLo__kcRVgmG'
},
{
  imageUrl : require('C:/Users/Jimmy/Desktop/projects/Unfinished/TouristGuide/Guide/assets/bali.jpg'),
  clubName: 'Bali Night Club',
  clubUrl: 'https://www.instagram.com/bali.skg/?hl=el'
},
  {
  imageUrl : require('C:/Users/Jimmy/Desktop/projects/Unfinished/TouristGuide/Guide/assets/casper.jpg'),
  clubName: 'Casper at Verykoko',
  clubUrl: 'https://www.instagram.com/casper_at_verykoko/?hl=el'
},
{
  imageUrl : require('C:/Users/Jimmy/Desktop/projects/Unfinished/TouristGuide/Guide/assets/mabel.jpg'),
  clubName: 'Mabel Club',
  clubUrl: 'https://www.instagram.com/mabel_bar_thes/?hl=el'
},
{
  imageUrl : require('C:/Users/Jimmy/Desktop/projects/Unfinished/TouristGuide/Guide/assets/king.jpg'),
  clubName: 'King Bar',
  clubUrl: 'https://www.instagram.com/king_bar_skg/'
}
]
const handleImagePress = (url) => {
  Linking.openURL(url);
};

  return(
    <ScrollView contentContainerStyle={styles.scrollViewSecondScreen}> 
    {clubs.map((club, index) =>(
      <View style={styles.ThirdScreenContainer} key={index}>
        <TouchableWithoutFeedback onPress={() => handleImagePress(club.clubUrl)}>
          <View style={styles.ImageContainer}>
            <Image source={club.imageUrl} style={styles.ThirdScreenImage}/>
            <Text style={styles.ThirdScreenName}>{club.clubName}</Text>                
           </View>
        </TouchableWithoutFeedback>
        
      </View>
      
      ))}
    </ScrollView>
 ) 

}






const styles = StyleSheet.create({
  
  
    contentContainer: {
    alignItems: 'center',
    marginTop: 90, // Αυξήστε αυτήν την τιμή αν χρειάζεται
  },
  //Τιτλος για την Εφαρμογη
    titleStyle:{
    fontFamily: 'serif', 
    fontSize: 35, 
    fontWeight: 'bold',
    color: '#8B008B',
    marginTop:-20
  },
  //Φτιαχνω το νοητο background για τα κουμπια στην αρχικη οθονη αλλα και την νοητη στυλη στην οποια θα τοποθετηθουν
    buttonGrid: {
    flexDirection: 'row',
    marginTop: 50,
  },
    buttonColumn: {
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
  },
  //Η εικονα στην αρχικη οθονη
    backgroundImage: {
    flex: 1,
    width: '100%', // Τοποθετεί την εικόνα σε πλήρες πλάτος
    height: '100%', // Τοποθετεί την εικόνα σε πλήρες ύψος
    resizeMode: 'cover',
  },
  //Το border για τα κουμπια στην αρχικη οθονη αλλα και το περιεχομενο τους
    neonOutlineButton: {
    borderWidth: 2,
    borderColor: '#00FFFF',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginBottom: 20,
    alignItems: 'center'
  },
    neonButtonText:{
    color: '#FFFFFF', // λευκό χρώμα για αντίθεση
    fontWeight: 'bold',
    fontSize: 16,
  },
  //Τα scrollview για καθε σκριν αντιστοιχα(Πρωτο σκριν, δευτερο κλπ)
    scrollView:{
    flexGrow: 1,
    justifyContent:'space-between'
    
  },
  scrollViewSecondScreen:{
    flexGrow: 1,
    backgroundColor:'blanchedalmond'
  },
  //Οι πληροφοριες στο τελος της αρχικης οθονης αλλα και ο τιτλος για το contact with us
    aboutSection:{
    padding:  10,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 10,
    marginHorizontal:20,
    marginVertical: 20
  },
    aboutTitle:{
    fontSize:20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  //Το text για το κουμπι για ολες τις δευτερες οθονες
  ButtonForSecondScreen:{
    color: '#FFFFFF', // λευκό χρώμα για αντίθεση
    fontWeight: 'bold',
    fontSize: 16,
    padding: 10,
    fontSize: 20,
    marginHorizontal: 10,
  },
  // Η ιδιοτητα για την κατασκευη του κουμπιου στις δευτερες οθονες
  overlay:{
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(192, 150, 172, 0.72)',
    padding: 10,
    paddingHorizontal: 20,
    paddingVertical: 10, 
    
  },
  museumsTextContainer:{
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  museumsText:{
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold'
  },
  header: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  ThirdScreenContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginVertical:30,
    fontSize: 20,
    fontWeight: 'bold'
  },
  ThirdScreenImage:{
    width:400,
    height:200,
    resizeMode:'cover',
    borderRadius:10,
   
  },
  ImageContainer:{
    flex: 1,
    alignItems: 'center'
  },
  ThirdScreenName:{
    fontSize: 30,
    marginTop:20,
    marginBottom:-30,
    textShadowColor:'rebeccapurple',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    fontWeight:'900',
    color:'lightcyan'
  },
  overlay:{
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(192, 150, 172, 0.72)',
    padding: 10,
    paddingHorizontal: 20,
    paddingVertical: 10, 
    
  },
  buttonContainer: {
    backgroundColor: '#5F9EA0',
    borderRadius: 10,
    padding: 10,
    width: 150, 
    marginTop: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
  
})
