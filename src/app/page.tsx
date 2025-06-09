// src/app/page.tsx
"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import HorizontalBar from "../components/ui/horizontal-bar"
import { GitHubLogo } from "../components/ui/github-logo"
import { Province, provinces } from "../data/provinces"

export default function Home() {
  const [activeProvince, setActiveProvince] = useState<Province | null>(null);
  const [clicked, setClicked] = useState<boolean>(false);
  const [panelPosition, setPanelPosition] = useState({ mouseXCoord: 0, mouseYCoord: 0 });
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const getPointClasses = (province: Province) => {
    const baseClasses = "absolute w-6 h-6 border-2 border-gray-800 transition-colors duration-200 cursor-pointer";
  
    if (province.type === 'national') {
      return `${baseClasses} rounded-none`;
    }
    else {
      return `${baseClasses} rounded-full`;
    }
  };
  
  const getProvinceStatus = (province: Province) => {
    const parties = ["peronismo", "socialismo", "centro", "liberalismo"] as const;
    
    const hasRenewBancas = parties.some(party => 
      province.parties[party].deputies?.renewBancas != null || 
      province.parties[party].senate?.renewBancas != null
    );
    
    const hasLoseBancas = parties.some(party => 
      (province.parties[party].deputies?.loseBancas || 0) > 0 || 
      (province.parties[party].senate?.loseBancas || 0) > 0
    );
    
    if (!hasLoseBancas) {
      return {
        text: <span className="text-red-600 italic text-sm">(no se vota)</span>,
        color: "bg-gray-300"
      };
    } else if (hasRenewBancas) {
      return {
        text: <span className="text-green-500 text-sm italic">(se votó {activeProvince?.date})</span>,
        color: "bg-green-500"
      };
    } else {
      return {
        text: <span className="text-sm italic">(por votar {activeProvince?.date})</span>,
        color: "bg-yellow-500"
      };
    }
  };
  
  const handleMouseEnter = (province: Province) => {
    if(clicked) {
      if(activeProvince?.id === province.id) {
        setActiveProvince(province);
      } else {
        setClicked(false);
        setActiveProvince(null);
      }
    } else {
      setActiveProvince(null);
    }
  }
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mapContainerRef.current) return;

    const mapRect = mapContainerRef.current.getBoundingClientRect();
    const panelWidth = 300;
    const panelHeight = 300;

    let mouseXCoord = e.clientX - mapRect.left + 10;
    let mouseYCoord = e.clientY - mapRect.top + 10;

    if (mouseXCoord + panelWidth > mapRect.width) {
      mouseXCoord = mapRect.width - panelWidth;
    }
    if (mouseXCoord < 0) {
      mouseXCoord = 0;
    }
    if (mouseYCoord + panelHeight > mapRect.height) {
      mouseYCoord = mapRect.height - panelHeight;
    }
    if (mouseYCoord < 0) {
      mouseYCoord = 0;
    }

    setPanelPosition({ mouseXCoord, mouseYCoord });
  };

  const liberalDeputies = activeProvince?.parties.liberalismo.deputies
  const peronDeputies = activeProvince?.parties.peronismo.deputies
  const socialistDeputies = activeProvince?.parties.socialismo.deputies
  const centerDeputies = activeProvince?.parties.centro.deputies

  const liberalSenate = activeProvince?.parties.liberalismo.senate
  const peronSenate = activeProvince?.parties.peronismo.senate
  const socialistSenate = activeProvince?.parties.socialismo.senate
  const centerSenate = activeProvince?.parties.centro.senate

  return (
    <main className="bg-blue-950 text-yellow-400 flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <h1 className="flex flex-raw md:text-3xl text-xl mb-8 text-center italic">
        MAPILLA POLITICO ARGENTINO
      </h1>
      <h1 className="flex md:text-3xl text-xl mb-8 text-center">
        Representación legislativa Argentina (2025)
      </h1>
      
      <div className="grid grid-cols-3 w-4xl md:w-full">
        
        <div className="row-start-1 col-2 space-y-4">
          <HorizontalBar 
            title="Bancas NACIONALES en juego" 
            filterType="national" 
          />
          <HorizontalBar 
            title="Bancas PROVINCIALES en juego" 
            filterType={null}
          />
        </div>

        <div className="row-start-2 col-2 max-w-4xl mb-4">
        <div className="border rounded-lg p-4 bg-white relative" ref={mapContainerRef}>
          <div className="relative w-full mx-auto" style={{ aspectRatio: "0.45", maxWidth: "500px" }}>
            <Image
              src="/argentina-map.png"
              alt="Mapa político de Argentina"
              fill
              className="absolute"
              priority
            />

            {provinces.map((province) => {
                const { color } = getProvinceStatus(province);
              const isActive = activeProvince?.id === province.id;

              return (
                <div
                  key={province.id}
                    className={`${getPointClasses(province)} ${
                    isActive ? "bg-blue-500" : `${color} hover:bg-blue-500`
                  }`}
                  style={{
                    left: `${province.x}%`,
                    top: `${province.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  onMouseEnter={() => handleMouseEnter(province)}
                  onMouseLeave={() => setActiveProvince(null)}
                  onMouseMove={handleMouseMove}
                  onClick={() => {
                    setClicked(true);
                    setActiveProvince(province);
                  }}
                  title={province.name}
                />
              );
            })}

            {activeProvince && (
              <div
                className="absolute p-4 border rounded-lg text-white bg-blue-950 shadow-lg z-10"
                style={{
                  left: panelPosition.mouseXCoord,
                  top: panelPosition.mouseYCoord,
                }}
              >
                <h2 className="text-xl font-bold mb-2 text-yellow-400 text-center">
                  {activeProvince.name} {getProvinceStatus(activeProvince).text}
                </h2>
                <div className="flex md:flex-row flex-col justify-between gap-4">
                  {/* Columna izquierda: Diputados */}
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">Diputados</h3>
                    <p className="text-lg font-bold">{activeProvince.deputies}</p>
                    <div className="mt-1 w-55">
                      <h4 className="font-medium text-sm">Bancas por Partido</h4>
                      <p className="text-sm text-purple-500">Liberalismo: {liberalDeputies?.bancas} (-{liberalDeputies?.loseBancas}/+{liberalDeputies?.renewBancas}) 
                        <span className="font-bold"> {liberalDeputies?.renewBancas != null ? liberalDeputies?.bancas-liberalDeputies?.loseBancas+liberalDeputies?.renewBancas : ''}</span>
                      </p>
                      <p className="text-sm text-yellow-400">Centro: {centerDeputies?.bancas} (-{centerDeputies?.loseBancas}/+{centerDeputies?.renewBancas}) 
                        <span className="font-bold"> {centerDeputies?.renewBancas != null ? centerDeputies?.bancas-centerDeputies?.loseBancas+centerDeputies?.renewBancas : ''}</span>
                      </p>
                      <p className="text-sm text-sky-500">Peronismo: {peronDeputies?.bancas} (-{peronDeputies?.loseBancas}/+{peronDeputies?.renewBancas}) 
                        <span className="font-bold"> {peronDeputies?.renewBancas != null ? peronDeputies?.bancas-peronDeputies?.loseBancas+peronDeputies?.renewBancas : ''}</span>
                      </p>
                      <p className="text-sm text-red-500">Socialismo: {socialistDeputies?.bancas} (-{socialistDeputies?.loseBancas}/+{socialistDeputies?.renewBancas}) 
                        <span className="font-bold"> {socialistDeputies?.renewBancas != null ? socialistDeputies?.bancas-socialistDeputies?.loseBancas+socialistDeputies?.renewBancas : ''}</span>
                      </p>
                    </div>
                  </div>

                  {/* Columna derecha: Senadores */}
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">Senadores</h3>
                    <p className="text-lg font-bold">{activeProvince.senators}</p>
                    {activeProvince.senators > 0 && (
                      <div className="mt-1 w-55">
                        <h4 className="font-medium text-sm">Bancas por Partido</h4>
                        <p className="text-sm text-purple-500">Liberalismo: {liberalSenate?.bancas} (-{liberalSenate?.loseBancas}/+{liberalSenate?.renewBancas}) 
                          <span className="font-bold"> {liberalSenate?.renewBancas != null ? liberalSenate?.bancas-liberalSenate?.loseBancas+liberalSenate?.renewBancas : ''}</span>
                        </p>
                        <p className="text-sm text-yellow-400">Centro: {centerSenate?.bancas} (-{centerSenate?.loseBancas}/+{centerSenate?.renewBancas}) 
                          <span className="font-bold"> {centerSenate?.renewBancas != null ? centerSenate?.bancas-centerSenate?.loseBancas+centerSenate?.renewBancas : ''}</span>
                        </p>
                        <p className="text-sm text-sky-500">Peronismo: {peronSenate?.bancas} (-{peronSenate?.loseBancas}/+{peronSenate?.renewBancas}) 
                          <span className="font-bold"> {peronSenate?.renewBancas != null ? peronSenate?.bancas-peronSenate?.loseBancas+peronSenate?.renewBancas : ''}</span>
                        </p>
                        <p className="text-sm text-red-500">Socialismo: {socialistSenate?.bancas} (-{socialistSenate?.loseBancas}/+{socialistSenate?.renewBancas}) 
                          <span className="font-bold"> {socialistSenate?.renewBancas != null ? socialistSenate?.bancas-socialistSenate?.loseBancas+socialistSenate?.renewBancas : ''}</span>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-center italic mt-4 opacity-70">
                  partido: bancas actuales (-en juego/+ganadas) futuras
                </div>
                <div className="mt-2 text-center">
                    <p className="text-sm mt-4 text-right">Electores: {activeProvince.population.toLocaleString()}</p>
                  </div>
                </div>
              )}
              </div>
          </div>
        </div>
      </div>

      <h2 className="flex mt-8">No tengo secretos:</h2>
      <a 
        className="mt-2" 
        href="https://github.com/fierillo/mapilla-politico-argentino">
        <GitHubLogo />
      </a>
    </main>
  );
}