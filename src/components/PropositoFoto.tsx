"use client";

import Image from "next/image";
import { useState } from "react";

interface PropositoFotoProps {
  src: string;
  alt: string;
}

/**
 * Foto quadrada da seção Propósito.
 * TODO: as 4 fotos individuais (public/proposito/pessoa-{1..4}.jpg) ainda não foram entregues.
 * Enquanto o arquivo não existir, a <Image> falha e é ocultada, ficando só o placeholder cinza.
 * Quando as fotos chegarem, nada precisa mudar aqui.
 */
export default function PropositoFoto({ src, alt }: PropositoFotoProps) {
  const [missing, setMissing] = useState(false);

  return (
    <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-light">
      {!missing && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 768px) 220px, 45vw"
          className="object-cover"
          onError={() => setMissing(true)}
        />
      )}
    </div>
  );
}
