
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const IdeaForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    experience: '',
    ideaDescription: '',
    targetCustomer: '',
    problemSolved: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.ideaDescription || !formData.targetCustomer || !formData.problemSolved) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos obligatorios",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    console.log('Enviando datos a webhook:', formData);

    try {
      const response = await fetch('https://n8n-demo-n8n.1riddk.easypanel.host/webhook/testealo-ai-lovable', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'testealo-ai-landing'
        }),
      });

      if (response.ok) {
        toast({
          title: "¡Idea Enviada!",
          description: "Tu idea ha sido enviada para validación. Te contactaremos pronto con los resultados.",
        });
        
        // Reset form after successful submission
        setFormData({
          firstName: '',
          experience: '',
          ideaDescription: '',
          targetCustomer: '',
          problemSolved: ''
        });
      } else {
        throw new Error('Error en el envío');
      }
    } catch (error) {
      console.error('Error enviando datos:', error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu idea. Por favor intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div id="idea-form" className="w-full">
      <Card className="shadow-2xl border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50">
        <CardHeader className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white rounded-t-lg">
          <CardTitle className="flex items-center space-x-2 text-xl">
            <Lightbulb className="w-6 h-6" />
            <span>¿Es Buena Mi Idea? ¡Descúbrelo!</span>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="p-6 space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                ¿Cuál es tu Nombre?*
              </Label>
              <Input
                id="firstName"
                placeholder="Enzo"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className="border-gray-300 focus:border-orange-400"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience" className="text-sm font-medium text-gray-700">
                ¿Has Construido Algo Antes?*
              </Label>
              <Select onValueChange={(value) => handleInputChange('experience', value)}>
                <SelectTrigger className="border-gray-300 focus:border-orange-400">
                  <SelectValue placeholder="NO, Primera vez como fundador." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="first-time">NO, Primera vez como fundador.</SelectItem>
                  <SelectItem value="some-experience">Sí, tengo algo de experiencia</SelectItem>
                  <SelectItem value="experienced">Sí, soy un emprendedor experimentado</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="ideaDescription" className="text-sm font-medium text-gray-700">
                ¿Cuál es tu Idea de Emprendimiento?*
              </Label>
              <Textarea
                id="ideaDescription"
                placeholder="Modelado predictivo impulsado por IA para reclamaciones de seguros..."
                value={formData.ideaDescription}
                onChange={(e) => handleInputChange('ideaDescription', e.target.value)}
                className="border-gray-300 focus:border-orange-400 min-h-[80px]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="targetCustomer" className="text-sm font-medium text-gray-700">
                ¿Quién es el Cliente Ideal para Esto?*
              </Label>
              <Input
                id="targetCustomer"
                placeholder="compañías de seguros"
                value={formData.targetCustomer}
                onChange={(e) => handleInputChange('targetCustomer', e.target.value)}
                className="border-gray-300 focus:border-orange-400"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="problemSolved" className="text-sm font-medium text-gray-700">
                ¿Qué Problema Resuelve tu Idea?*
              </Label>
              <Textarea
                id="problemSolved"
                placeholder="Reduce el tiempo de procesamiento de reclamaciones..."
                value={formData.problemSolved}
                onChange={(e) => handleInputChange('problemSolved', e.target.value)}
                className="border-gray-300 focus:border-orange-400 min-h-[80px]"
                required
              />
            </div>

            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              {isLoading ? 'Validando...' : 'Validar Idea'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default IdeaForm;
