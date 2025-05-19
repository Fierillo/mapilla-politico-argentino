"use client";

import { provinces } from "@/src/data/provinces";
import { useState } from "react";

type Party = "peronismo" | "ucr" | "pro" | "liberales";
type BancasType = 'bancas' | 'loseBancas' | 'renewBancas'

const parties: Party[] = ["peronismo", "liberales", "ucr", "pro"];
const colorMap: Record<Party, string> = {
  peronismo: "sky",
  liberales: "purple",
  ucr: "red",
  pro: "yellow",
};

export default function HorizontalBar() {
  const [selectedParty, setSelectedParty] = useState<Party | null>(null);
  
  function sumBancas (party: Party, bancasType: BancasType) {
    return provinces.reduce(
      (acc, province) => {
        const partyData = province.parties[party];
        acc += (partyData.deputies?.[bancasType] || 0) + (partyData.senate?.[bancasType] || 0);
        return acc;
      },
      0
    );
  }  
  
  const totalLoseBancas = (
    sumBancas('liberales','loseBancas')
    + sumBancas('peronismo','loseBancas')
    + sumBancas('pro','loseBancas')
    + sumBancas('ucr','loseBancas')
  )  
  
  const sumTotalBancas = (
    sumBancas('liberales','bancas')
    + sumBancas('peronismo','bancas')
    + sumBancas('pro','bancas')
    + sumBancas('ucr','bancas')
  )  
  
  return (
    <div className="w-full max-w-3xl mb-4">
      <h2 className="text-lg font-semibold mb-2 text-center">
        Bancas totales en juego (2025): {totalLoseBancas} / {sumTotalBancas}
      </h2>
      <div className="flex h-6 border border-gray-300">
      {parties.map((party) => {
          const securedBancas = sumBancas(party, "bancas") - sumBancas(party, "loseBancas");
          const loseBancas = sumBancas(party, "loseBancas");
          const renewBancas = sumBancas(party, "renewBancas");
          const enJuegoNoRenovadas = Math.max(loseBancas - renewBancas, 0); // Bancas en juego no renovadas
          const totalBancas = securedBancas + renewBancas; // Total del partido

          // Ancho del segmento del partido
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
                  className={`bg-${colorMap[party]}-500 h-full`}
                  style={{ width: `${(securedBancas / totalBancas) * 100}%` }}
                />
              )}
              {/* Bancas renovadas/ganadas */}
              {renewBancas > 0 && (
                <div
                  className={`bg-${colorMap[party]}-700 h-full`}
                  style={{ width: `${(renewBancas / totalBancas) * 100}%` }}
                />
              )}
              {/* Bancas en juego no renovadas */}
              {enJuegoNoRenovadas > 0 && (
                <div
                  className={`bg-${colorMap[party]}-200 h-full`}
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
                  {party.charAt(0).toUpperCase() + party.slice(1)}: TOTAL {totalBancas} ({securedBancas} aseguradas, {renewBancas} renovadas, {enJuegoNoRenovadas} a cubrir)
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

