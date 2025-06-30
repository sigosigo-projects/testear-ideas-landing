
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Loader2, CheckCircle } from 'lucide-react';

interface ValidationModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLoading: boolean;
  response: string | null;
}

const ValidationModal: React.FC<ValidationModalProps> = ({
  isOpen,
  onClose,
  isLoading,
  response
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin text-orange-500" />
                <span>Validando tu Idea...</span>
              </>
            ) : (
              <>
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Validación Completada</span>
              </>
            )}
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-4">
          {isLoading ? (
            <div className="text-center py-8">
              <div className="flex flex-col items-center space-y-4">
                <Loader2 className="w-12 h-12 animate-spin text-orange-500" />
                <p className="text-gray-600">
                  Estamos analizando tu idea de negocio...
                </p>
                <p className="text-sm text-gray-500">
                  Esto puede tomar unos momentos
                </p>
              </div>
            </div>
          ) : response ? (
            <div 
              className="prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: response }} 
            />
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600">No se recibió respuesta del servidor.</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ValidationModal;
