"use client";

import { ChamberBancas, Party, partyColors, partyKeys, provinces } from "@/src/data/provinces";
import { useState } from "react";

interface HorizontalBarProps {
  title?: string;
  filterType?: null | 'national';
}

export default function HorizontalBar({title, filterType}: HorizontalBarProps) {
  const [selectedParty, setSelectedParty] = useState<keyof Party | null>(null);

  const getSumBancas = (party: keyof Party, bancasType: keyof ChamberBancas) => {
    const filteredProvinces = provinces.filter(province => {
      if (filterType === 'national') return province.type === 'national';
      if (filterType === null) return province.type !== 'national';
      return true;
    });

    return filteredProvinces.reduce((acc, province) => {
      const partyData = province.parties[party];
      acc += 
        (partyData.deputies?.[bancasType] || 0) 
        + (partyData.senate?.[bancasType] || 0);
      return acc;
    }, 0);
  };
  
  const totalLoseBancas = partyKeys.reduce(
    (acc, party) => acc + getSumBancas(party, "loseBancas"),
    0
  );

  const sumTotalBancas = partyKeys.reduce(
    (acc, party) => acc + getSumBancas(party, "bancas"),
    0
  );
  
  return (
    <div className="w-full max-w-3xl mb-4">
      <h2 className="text-lg font-semibold mb-2 text-center">
        {title}: {totalLoseBancas} / {sumTotalBancas}
      </h2>
      <div className="flex h-6 border border-gray-300">
      {partyKeys.map((party) => {
          const securedBancas = getSumBancas(party, "bancas") - getSumBancas(party, "loseBancas");
          const loseBancas = getSumBancas(party, "loseBancas");
          const renewBancas = getSumBancas(party, "renewBancas");
          const enJuegoNoRenovadas = Math.max(loseBancas - renewBancas, 0); // Bancas en juego no renovadas
          const totalBancas = securedBancas + renewBancas; // Total del partido

          const partyWidth = (totalBancas + loseBancas / sumTotalBancas) * 100;  

          return (
            <div
              key={party}
              className="flex hover:brightness-125 cursor-pointer relative"
              style={{ width: `${partyWidth}%` }}
              onMouseEnter={() => setSelectedParty(party)}
              onMouseLeave={() => setSelectedParty(null)}
            >
            {/* Bancas aseguradas */}
            {securedBancas > 0 && (
                <div
                  className={`bg-${partyColors[party]}-500 h-full`}
                  style={{ width: `${(securedBancas / totalBancas) * 100}%` }}
                />
              )}
              {/* Bancas renovadas/ganadas */}
              {renewBancas > 0 && (
                <div
                  className={`bg-${partyColors[party]}-700 h-full`}
                  style={{ width: `${(renewBancas / totalBancas) * 100}%` }}
                />
              )}
              {/* Bancas en juego no renovadas */}
              {enJuegoNoRenovadas > 0 && (
                <div
                  className={`bg-${partyColors[party]}-200 h-full`}
                  style={{ width: `${(enJuegoNoRenovadas / totalBancas) * 100}%` }}
                />
              )}
            {/* Cuadro informativo al hacer clic */}
            {selectedParty === party && (
              <div
                className="absolute border px-1 text-white bg-blue-950 shadow-lg z-10"
                style={{
                  bottom: "100%", // Posiciona el cuadro justo arriba de la barra
                  marginBottom: "4px", // Espacio entre el cuadro y la barra
                  minWidth: "400px",
                  textAlign: "center",
                }}
              >
                <p className="text-sm">
                  {party.charAt(0).toUpperCase() + party.slice(1)}: TOTAL {totalBancas} ({securedBancas} firmes, {renewBancas} renovadas, {loseBancas} vencen)
                </p>
              </div>
            )}
          </div>
          );
        })}
      </div>
    </div>
  );
}

