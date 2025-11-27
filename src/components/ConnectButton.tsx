import { useAppKit, useAccount } from '@reown/appkit-react-native';
import { useEffect } from 'react';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  background-color: #7b61ff;   /* Purple */
  padding: 14px 20px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const InfoContainer = styled.View`
  padding: 16px;
  align-items: flex-start;
  gap: 8px;
`;

const InfoText = styled.Text`
  font-size: 14px;
  color: #333;
`;

function ConnectButton() {
  const { open, disconnect } = useAppKit();
  const { address, isConnected, chainId } = useAccount();

  useEffect(() => {
    console.log("Connect button has to be rendered");
  }, []);

  if (isConnected) {
    return (
      <InfoContainer>
        <InfoText>Connected to Chain: {chainId}</InfoText>
        <InfoText>Address: {address}</InfoText>

        <Button onPress={() => disconnect()}>
          <ButtonText>Disconnect</ButtonText>
        </Button>
      </InfoContainer>
    );
  }

  return (
    <Button onPress={() => open()}>
      <ButtonText>Connect Wallet</ButtonText>
    </Button>
  );
}

export default ConnectButton;
