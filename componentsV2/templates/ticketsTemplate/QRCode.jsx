import React from 'react'
import { Container, Typo } from '../../atoms'
import QRCode from 'react-native-qrcode-svg';


const QRCodeTemplate = ({categoryName}) => {
  return (
    <Container.PageContainer justifyContent={'center'} alignItems={'center'} gap={'20px'}>

      {/* display a fake QR Code  */}
      <Typo.Gotham text={'QR Code'} />
      <QRCode
        value={'https://www.google.com'}
        size={200}
        color={'black'}
        backgroundColor={'white'}
      />
      <Container.ColContainer gap={'10px'}>
        <Typo.Gotham text={'Nom de la catégorie'} />
        <Typo.Gotham text={categoryName} />
      </Container.ColContainer>


    </Container.PageContainer>
  )
}

export default QRCodeTemplate