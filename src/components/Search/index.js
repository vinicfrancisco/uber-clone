import React, {useState} from 'react';

import {StyledAutocomplete} from './styles';

export default function Search(props) {
  const {onLocationSelected} = props;
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <StyledAutocomplete
      fetchDetails
      enablePoweredByContainer={false}
      listViewDisplayed={searchFocused}
      placeholder="Para onde?"
      query={{
        key: 'AIzaSyBeNhM4-R46K6BJOfNDrZIf2EvipBbfMG0',
        language: 'pt',
      }}
      textInputProps={{
        onFocus: () => setSearchFocused(true),
        onBlur: () => setSearchFocused(false),
        autoCapitalize: 'none',
        autoCorrect: false,
      }}
      onPress={onLocationSelected}
    />
  );
}
