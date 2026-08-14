'use client';

import { useEffect, useRef } from 'react';
import styles from './MapEmbed.module.css';

export default function MapEmbed({ 
  markers = [], 
  center = [-6.5590, 110.6920], 
  zoom = 15,
  height = '500px',
  showFilter = false,
}) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Load Leaflet CSS
    if (!document.querySelector('link[href*="leaflet"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }

    // Load Leaflet JS
    const loadLeaflet = () => {
      return new Promise((resolve) => {
        if (window.L) {
          resolve(window.L);
          return;
        }
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.onload = () => resolve(window.L);
        document.head.appendChild(script);
      });
    };

    loadLeaflet().then((L) => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }

      const map = L.map(mapRef.current).setView(center, zoom);
      mapInstanceRef.current = map;

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      // Category colors
      const categoryColors = {
        'alam': '#2D5A3D',
        'sejarah': '#5D4037',
        'budaya': '#5B3E8A',
        'kuliner-kopi': '#C9A84C',
        'Kedai Kopi': '#C9A84C',
        'Kedai Kopi & Edukasi': '#C9A84C',
        'Warung Makan': '#E67E22',
        'Restoran': '#E67E22',
        'Homestay': '#3498DB',
        'Penginapan': '#3498DB',
        'Lodge': '#2980B9',
        'Parkir': '#7F8C8D',
        'Toilet': '#7F8C8D',
        'Informasi': '#3498DB',
        'Kesehatan': '#E74C3C',
        'Belanja': '#F39C12',
        'Transportasi': '#9B59B6',
        'default': '#2D5A3D',
      };

      const categoryIcons = {
        'alam': '🏞️',
        'sejarah': '⚛️',
        'budaya': '🎭',
        'kuliner-kopi': '☕',
        'Kedai Kopi': '☕',
        'Kedai Kopi & Edukasi': '☕',
        'Warung Makan': '🍽️',
        'Restoran': '🍽️',
        'Homestay': '🏠',
        'Penginapan': '🏨',
        'Lodge': '🏨',
        'Parkir': '🅿️',
        'Toilet': '🚻',
        'Informasi': 'ℹ️',
        'Kesehatan': '🏥',
        'Belanja': '🏪',
        'Transportasi': '🚙',
        'ojek': '🛵',
        'pick-up': '🛻'
      };

      markers.forEach((marker) => {
        if (!marker.coordinates || marker.coordinates.length < 2) return;
        
        const cat = marker.category || marker.type || 'default';
        const color = categoryColors[cat] || categoryColors['default'];
        const icon = categoryIcons[cat] || '📍';

        const customIcon = L.divIcon({
          className: 'custom-marker',
          html: `<div style="
            background: ${color};
            width: 36px;
            height: 36px;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          ">
            <span style="transform: rotate(45deg); font-size: 16px;">${icon}</span>
          </div>`,
          iconSize: [36, 36],
          iconAnchor: [18, 36],
          popupAnchor: [0, -36],
        });

        const popupContent = `
          <div style="font-family: 'Inter', sans-serif; max-width: 220px;">
            <strong style="font-size: 14px; color: #1B3A2D; display: block; margin-bottom: 4px;">
              ${marker.name}
            </strong>
            ${marker.zone ? `<span style="font-size: 11px; color: #C9A84C; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">📍 Zona ${marker.zone}</span>` : ''}
            ${marker.shortDesc || marker.description ? `<p style="font-size: 12px; color: #6D4C41; margin: 6px 0 0; line-height: 1.5;">${(marker.shortDesc || marker.description || '').substring(0, 120)}...</p>` : ''}
          </div>
        `;

        L.marker(marker.coordinates, { icon: customIcon })
          .addTo(map)
          .bindPopup(popupContent);
      });

      // Fix map rendering issue
      setTimeout(() => map.invalidateSize(), 100);
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [markers, center, zoom]);

  return (
    <div className={styles.mapWrapper} style={{ height }} id="map-container">
      <div ref={mapRef} className={styles.map} />
    </div>
  );
}
