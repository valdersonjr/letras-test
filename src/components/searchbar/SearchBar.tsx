import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';

import './styles.css';

const SearchBar = () => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      types: ['administrative_area_level_2'],
      componentRestrictions: {
        country: 'br',
      },
    },
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e: any) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }: any) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();

      // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        console.log('📍 Coordinates: ', { lat, lng });
      });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text },
      } = suggestion;

      return (
        <li
          className='list-li'
          key={place_id}
          onClick={handleSelect(suggestion)}
        >
          {main_text}
        </li>
      );
    });

  return (
    <div ref={ref}>
      <input
        className='searchbar-input'
        id='inputID'
        value={value}
        onChange={handleInput}
        // disabled={!ready}
        placeholder='Digite o nome da cidade'
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === 'OK' && <ul className='list-ul'>{renderSuggestions()}</ul>}
    </div>
  );
};

export default SearchBar;
