"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/ui/tooltip";
import { provinces } from "@/src/data/provinces";

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

  const totalBancas = (
    sumBancas('liberales','bancas')
    + sumBancas('peronismo','bancas')
    + sumBancas('pro','bancas')
    + sumBancas('ucr','bancas')
  )

  return (
    <div className="w-full max-w-3xl mb-4">
      <h2 className="md:text-xl text-md mb-2 text-center">
        Bancas totales: {totalBancas} | En juego: {totalLoseBancas}
      </h2>
      <TooltipProvider>
      <div className="flex h-6 rounded-lg overflow-hidden border border-gray-300">
        {parties.map((party) => {
          const bancasTotales = sumBancas(party, 'bancas');        
          const loseBancas = sumBancas(party, 'loseBancas');      
          const renewBancas = sumBancas(party, 'renewBancas');   

          const bancasNoEnJuego = bancasTotales - loseBancas;              
          const bancasEnJuegoNoRenovadas = loseBancas - renewBancas;       

          return (
            <Tooltip key={party}>
              <TooltipTrigger asChild>
                <div
                  className="flex hover:brightness-125"
                  style={{ width: `${(bancasTotales / totalBancas) * 100}%` }}
                >
                  <div
                    className={`bg-${colorMap[party]}-500 h-full`}
                    style={{ width: `${(bancasNoEnJuego / bancasTotales) * 100}%` }}
                  />
                  <div
                    className={`bg-${colorMap[party]}-700 h-full`}
                    style={{ width: `${(renewBancas / bancasTotales) * 100}%` }}
                  />
                  <div
                    className={`bg-${colorMap[party]}-200 h-full`}
                    style={{ width: `${(bancasEnJuegoNoRenovadas / bancasTotales) * 100}%` }}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {party}: {bancasTotales} totales, {renewBancas} renovadas, {loseBancas} en juego
                </p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
      </TooltipProvider>
    </div>
  );
}