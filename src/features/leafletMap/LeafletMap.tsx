import L from 'leaflet';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectLeafletMapLayers } from './leafletMapSlice';

import 'leaflet/dist/leaflet.css';
import styles from './LeafletMap.module.css';

type LeafletMapProps = {
    center?: [number, number];
    zoom?: number;
}

function LeafletMap({ center, zoom }: LeafletMapProps) {
    const mapElement = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<L.Map>();

    const layers = useSelector(selectLeafletMapLayers);

    if (map) {
        layers.forEach(layer => {
            if (!map.hasLayer(layer)) {
                layer.addTo(map);
                console.log(map);
            }
        });
    }

    useEffect(() => {
        if (mapElement.current && !('_leaflet_id' in mapElement.current)) {
            const map = L.map(mapElement.current, {
                center,
                zoom,
            });
            setMap(map);
        }
    }, []);

    return (
        <div className={styles.map} ref={mapElement}></div>
    )
}

export default LeafletMap;