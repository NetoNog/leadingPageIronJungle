import React, { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'

export default function Lightbox({ isOpen, photo, onNext, onPrev, onClose }) {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && onNext) onNext()
      if (e.key === 'ArrowLeft' && onPrev) onPrev()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onNext, onPrev, onClose])

  if (!isOpen || !photo) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fadeIn select-none"
      onClick={onClose}
    >
      {/* Botão Fechar */}
      <button
        onClick={onClose}
        aria-label="Fechar tela cheia"
        className="absolute top-5 right-5 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-[#d4a726] text-white hover:text-black border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Botão Anterior */}
      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          aria-label="Foto anterior"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-black/70 hover:bg-[#d4a726] text-white hover:text-black border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
      )}

      {/* Botão Próximo */}
      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          aria-label="Próxima foto"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-black/70 hover:bg-[#d4a726] text-white hover:text-black border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      )}

      {/* Imagem Central em Alta Definição */}
      <div 
        className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.src}
          alt={photo.title || 'Foto da Iron Jungle'}
          className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-[#a6861c]/40"
        />

        {/* Legenda */}
        {(photo.title || photo.desc || photo.caption) && (
          <div className="mt-4 text-center max-w-xl px-4">
            {photo.title && (
              <h4 className="text-base font-bold text-white tracking-wide">
                {photo.title}
              </h4>
            )}
            {(photo.desc || photo.caption) && (
              <p className="text-xs text-slate-300 mt-1">
                {photo.desc || photo.caption}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
