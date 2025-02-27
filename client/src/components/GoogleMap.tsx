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
    window.open("https://maps.google.com?q="+'43.508646'+","+'16.4867672' );
  };

  return (
    <div style={{ height: "283px", width: "100%" }}>
      <APIProvider apiKey={'AIzaSyAtVE7BWxTh-k_9qZWJXLEHWcTgPHeAYLc'}>
        <Map
          mapId={'bf51a910020fa25a'}
          mapTypeId='terrain'
          defaultZoom={18}
          defaultCenter={{ lat: 43.508646, lng: 16.4867672 }}
          gestureHandling={'greedy'}
          clickableIcons={false}>
          <AdvancedMarker
            ref={markerRef}
            onClick={() => showInMapClicked()}
            key={'bf51a910020fa25a'}
            zIndex={1}
            className="custom-marker"
            position={{ lat: 43.508646, lng: 16.4867672 }}>
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
              <p>Tucepska 16, Split</p>
            </InfoWindow>
        </Map>
      </APIProvider>
    </div>
  );
};



export default App;