import React from 'react'
import { Container, Typo } from '../atoms'
import NetInfo from "@react-native-community/netinfo";


const OfflinePage = () => {
  const [isConnected, setIsConnected] = React.useState(true)

  React.useEffect(() => {
    // Abonnez-vous aux changements d'état réseau
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    // Nettoyez l'abonnement à la destruction du composant
    return () => unsubscribe();
  }, []);
  if (!isConnected){
    return (
      <Container.PageContainer>
        <Typo.Gotham text={'Vous êtes hors ligne'} />
      </Container.PageContainer>
    )
  } 
  return null
}

export default OfflinePage