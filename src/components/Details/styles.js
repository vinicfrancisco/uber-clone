import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  background: #fff;
  border: 1px solid #ddd;
  bottom: 0;
  elevation: 3;
  height: 300px;
  padding: 20px;
  position: absolute;
  shadow-color: #000;
  shadow-offset: 0 0;
  shadow-opacity: 0.2;
  shadow-radius: 10;
  width: 100%;
`;

export const TypeTitle = styled.Text`
  color: #222;
  font-size: 20px;
`;

export const TypeDescription = styled.Text`
  color: #666;
  font-size: 14px;
`;

export const TypeImage = styled.Image`
  height: 80px;
  margin: 10px 0;
`;

export const RequestButton = styled.TouchableOpacity`
  align-items: center;
  align-self: stretch;
  background: #222;
  height: 44px;
  justify-content: center;
  margin-top: 10px;
`;

export const RequestButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
`;
