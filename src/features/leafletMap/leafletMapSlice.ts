import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import L from 'leaflet';

export interface LeafletMapState {
    layers: L.Layer[];
}

const initialState: LeafletMapState = {
    layers: [
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        })
    ],
};

export const leafletMapSlice = createSlice({
  name: 'leafletMap',
  initialState,
  reducers: {
    addLayer: (state, action: PayloadAction<L.Layer>) => {
        state.layers.push(action.payload);
    },
  },
});

export const { addLayer } = leafletMapSlice.actions;

export const selectLeafletMapLayers = (state: RootState) => state.leafletMap.layers;

export default leafletMapSlice.reducer;
