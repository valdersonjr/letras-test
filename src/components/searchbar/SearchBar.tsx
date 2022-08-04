import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';

import './styles.css';

interface ICoordinates {
  lat: number;
  setLat: (e: number) => void;
  setLng: (e: number) => void;
}

const SearchBar = ({ lat, setLat, setLng }: ICoordinates) => {
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
    clearSuggestions();
  });

  const handleInput = (e: any) => {
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }: any) =>
    () => {
      setValue(description, false);
      clearSuggestions();

      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);

        setLat(lat);
        setLng(lng);
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
          key={place_id}
          onClick={handleSelect(suggestion)}
          className='list-li'
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
        disabled={!ready}
        placeholder='Enter the city name'
      />

      {status === 'OK' && <ul className='list-ul'>{renderSuggestions()}</ul>}
    </div>
  );
};

export default SearchBar;
