import { Box } from '@mui/material';
import {
  AdvancedMarker,
  APIProvider,
  InfoWindow,
  Map,
  Pin,
  useAdvancedMarkerRef
} from '@vis.gl/react-google-maps';

const App = () => {

  const [markerRef, marker] = useAdvancedMarkerRef();

  const showInMapClicked = () => {
    window.open("https://www.google.com/maps/dir/43.5060392,16.4994892/Janjevska+ul.+23,+21000,+Split" );
  };

  return (
    <Box sx={{ height: {xs: "283px", xl: "283px"}, width: "100%" }}>
      <APIProvider apiKey={'AIzaSyAtVE7BWxTh-k_9qZWJXLEHWcTgPHeAYLc'}>
        <Map
          mapId={'bf51a910020fa25b'}
          mapTypeId='terrain'
          defaultZoom={18}
          defaultCenter={{ lat: 43.5107394, lng: 16.4709608  }}
          gestureHandling={'greedy'}
          clickableIcons={false}>
          <AdvancedMarker
            ref={markerRef}
            onClick={() => showInMapClicked()}
            key={'bf51a910020fa25b'}
            zIndex={1}
            className="custom-marker"
            position={{ lat: 43.5107394, lng: 16.4709608 }}>
            <Pin
              background='#22ccff'
              borderColor='#1e89a1'
              glyphColor='#0f677a'
            />
          </AdvancedMarker>
            <InfoWindow
              anchor={marker}
              pixelOffset={[0, -2]}>
              <h3>M PER LEI</h3>
              <p>Janjevska 23, Split</p>
            </InfoWindow>
        </Map>
      </APIProvider>
    </Box>
  );
};



export default App;