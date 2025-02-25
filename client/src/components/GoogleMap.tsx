import { useEffect } from 'react';
import {
    AdvancedMarker,
  APIProvider,
  ControlPosition,
  limitTiltRange,
  Map,
  MapControl,
  Pin,
  useMarkerRef
} from '@vis.gl/react-google-maps';
import DeckGL from '@deck.gl/react';

const App = () => {
  const [markerRef, marker] = useMarkerRef();

  useEffect(() => {
    if (!marker) {
      return;
    }

    // do something with marker instance here
  }, [marker]);

  return (
    <div style={{ height: "40vh", width: "100%" }}>
    <APIProvider apiKey={'AIzaSyAtVE7BWxTh-k_9qZWJXLEHWcTgPHeAYLc'}>
    <DeckGL
      //initialViewState={INITIAL_VIEW_STATE}
      //layers={layers}
      controller={true}
      onViewStateChange={limitTiltRange}>
      <Map 
        mapId={'bf51a910020fa25a'}
        zoom={18} 
        center={{lat: 43.508646, lng: 16.4867672}}
        gestureHandling={"cooperative"}
        disableDefaultUI>
      <AdvancedMarker
          position={{lat: 43.508646, lng: 16.4867672}}
          title={'AdvancedMarker with customized pin.'}>
          <Pin
            background={'#FBBC04'} 
            glyphColor={'#000'} 
            borderColor={'#000'}>
              
            </Pin>
        </AdvancedMarker>
      </Map>
      </DeckGL>
    </APIProvider>
    </div>
  );
};

export default App;