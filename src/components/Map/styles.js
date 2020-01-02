import styled, {css} from 'styled-components/native';
import {Platform} from 'react-native';
import MapView from 'react-native-maps';

export const Container = styled.View`
  flex: 1;
`;

export const StyledMap = styled(MapView)`
  flex: 1;
`;

export const LocationBox = styled.View`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 3px;
  elevation: 1;
  flex-direction: row;
  shadow-color: #000;
  shadow-offset: 0 0;
  shadow-opacity: 0.1;

  ${Platform.select({
    ios: css`
      margin-top: 20px;
    `,
    android: css`
      margin-top: 10px;
      margin-left: 10px;
    `,
  })}
`;

export const LocationText = styled.Text`
  color: #333;
  font-size: 14px;
  margin: 8px 10px;
`;

export const LocationTimeBox = styled.View`
  background: #222;
  padding: 3px 8px;
`;

export const LocationTimeText = styled.Text`
  color: #fff;
  font-size: 12px;
  text-align: center;
`;

export const LocationTimeTextSmall = styled.Text`
  color: #fff;
  font-size: 10px;
  text-align: center;
`;

export const Back = styled.TouchableOpacity`
  left: 20px;
  position: absolute;
  top: ${Platform.select({ios: 60, android: 40})};
`;

export const BackImage = styled.Image``;
