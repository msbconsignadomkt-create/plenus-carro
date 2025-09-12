import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Car, CreditCard, Shield, Users, Calculator, CheckCircle, Star, Phone, Mail, ChevronRight, X } from "lucide-react";
import heroCarImage from "@/assets/hero-cars.png";
const Index = () => {
  // GTM Tracking helper function
  const gtmPush = (eventName: string, eventData: any = {}) => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: eventName,
        ...eventData
      });
    }
  };

  const handleWhatsAppContact = (source: string = 'generic') => {
    // GTM Event
    gtmPush('contact_whatsapp', {
      event_category: 'engagement',
      event_label: source,
      value: 1
    });

    const message = "Olá, tenho interesse em simular um consórcio de carro/moto. Pode me ajudar?";
    const phone = "5531996925313";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleSpecialistContact = () => {
    // GTM Event
    gtmPush('contact_specialist', {
      event_category: 'engagement',
      event_label: 'hero_section',
      value: 1
    });

    handleWhatsAppContact('specialist');
  };

  const handleSimulateClick = () => {
    // GTM Event
    gtmPush('lead_form_start', {
      event_category: 'conversion',
      event_label: 'simulate_now',
      value: 1
    });

    document.getElementById('simulacao')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const handleWhatsAppContactWithData = (formData: {name: string, phone: string, vehicle: string, value: string}) => {
    // GTM Event for lead generation
    gtmPush('generate_lead', {
      event_category: 'conversion',
      event_label: 'simulation_form',
      lead_value: formData.value || 'not_specified',
      vehicle_type: formData.vehicle || 'not_specified',
      value: 5
    });

    const message = `Olá, meu nome é ${formData.name} e gostaria de simular um consórcio com os seguintes dados:

📱 Telefone: ${formData.phone || 'Não informado'}
🚗 Tipo de veículo: ${formData.vehicle || 'Não informado'}
💰 Valor desejado: R$ ${formData.value || 'Não informado'}

Pode me ajudar com a simulação?`;
    
    const phone = "5531996925313";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // Click handlers with GTM tracking
  const handleHeaderContactClick = () => handleWhatsAppContact('header');
  const handleHugoContactClick = () => handleWhatsAppContact('hugo_profile');
  const handleFloatingContactClick = () => handleWhatsAppContact('floating_button');

  const handleSimulationSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const simulationData = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      vehicle: formData.get('vehicle') as string,
      value: formData.get('value') as string,
    };
    handleWhatsAppContactWithData(simulationData);
  };
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/c5604e87-e4d6-41ab-b1a7-9b2e28dd53e2.png" alt="Plenus Seguros" className="h-10 w-auto" />
          </div>
          <Button variant="secondary" size="sm" onClick={handleHeaderContactClick}>
            <Phone className="h-4 w-4 mr-2" />
            Contato
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <Badge variant="secondary" className="mb-6 bg-plenus-orange/10 text-plenus-orange border-plenus-orange/20">
                Zero Juros • Sem Entrada
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground leading-tight">
                Realize o sonho do seu
                <span className="text-secondary block">carro novo</span>
              </h1>
              <p className="text-xl mb-8 text-primary-foreground/80 max-w-lg">
                Consórcio sem juros, sem entrada obrigatória e com parcelas que cabem no seu bolso. Simule agora!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" onClick={handleSimulateClick} className="text-lg px-8 py-6">
                  Simule Agora
                  <Calculator className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" onClick={handleSpecialistContact} className="text-lg px-8 py-6 border-primary-foreground/20 hover:bg-primary-foreground text-slate-950">
                  Falar com Especialista
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="lg:order-2">
              <img src={heroCarImage} alt="Carro novo - Consórcio Plenus" className="w-full h-auto rounded-2xl shadow-elegant" />
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-plenus-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Por que escolher nosso consórcio?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Vantagens exclusivas que fazem toda a diferença na hora de conquistar seu veículo
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-card hover:shadow-elegant transition-all">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-orange rounded-2xl flex items-center justify-center">
                  <CreditCard className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Zero Juros</h3>
                <p className="text-muted-foreground">Sem juros abusivos que inflam sua parcela. Pague apenas o valor real do veículo.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-card hover:shadow-elegant transition-all">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-orange rounded-2xl flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Sem Entrada</h3>
                <p className="text-muted-foreground">Comece seu consórcio sem precisar dar entrada. Mais acessibilidade para você.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-card hover:shadow-elegant transition-all">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-orange rounded-2xl flex items-center justify-center">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Parcelas Acessíveis</h3>
                <p className="text-muted-foreground">Valores que cabem no seu orçamento. Planejamento financeiro inteligente.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-card hover:shadow-elegant transition-all">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-orange rounded-2xl flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Segurança Financeira</h3>
                <p className="text-muted-foreground">Investimento protegido e regulamentado pelo Banco Central do Brasil.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparação */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Consórcio vs Financiamento
            </h2>
            <p className="text-xl text-muted-foreground">
              Veja as diferenças e entenda por que o consórcio é a melhor opção
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-elegant">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Header */}
                  <div className="bg-muted p-6 font-semibold text-center border-b md:border-b-0 md:border-r">
                    Características
                  </div>
                  <div className="bg-gradient-orange text-white p-6 font-semibold text-center border-b md:border-b-0 md:border-r">
                    Consórcio Plenus
                  </div>
                  <div className="bg-destructive/10 text-destructive p-6 font-semibold text-center">
                    Financiamento
                  </div>

                  {/* Rows */}
                  <div className="p-6 border-b border-r font-medium">Juros</div>
                  <div className="p-6 border-b border-r text-center">
                    <CheckCircle className="h-6 w-6 text-green-600 mx-auto mb-1" />
                    <span className="text-green-600 font-semibold">Zero Juros</span>
                  </div>
                  <div className="p-6 border-b text-center">
                    <X className="h-6 w-6 text-destructive mx-auto mb-1" />
                    <span className="text-destructive font-semibold">Até 3% a.m.</span>
                  </div>

                  <div className="p-6 border-b border-r font-medium">Entrada</div>
                  <div className="p-6 border-b border-r text-center">
                    <CheckCircle className="h-6 w-6 text-green-600 mx-auto mb-1" />
                    <span className="text-green-600 font-semibold">Não obrigatória</span>
                  </div>
                  <div className="p-6 border-b text-center">
                    <X className="h-6 w-6 text-destructive mx-auto mb-1" />
                    <span className="text-destructive font-semibold">Obrigatória (20-30%)</span>
                  </div>

                  <div className="p-6 border-r font-medium">Valor Total Pago</div>
                  <div className="p-6 border-r text-center">
                    <CheckCircle className="h-6 w-6 text-green-600 mx-auto mb-1" />
                    <span className="text-green-600 font-semibold">Preço negociado</span>
                  </div>
                  <div className="p-6 text-center">
                    <X className="h-6 w-6 text-destructive mx-auto mb-1" />
                    <span className="text-destructive font-semibold">Até 80% mais caro</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-16 bg-plenus-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Como funciona?
            </h2>
            <p className="text-xl text-muted-foreground">
              Apenas 3 passos simples para conquistar seu veículo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-orange rounded-full flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Simule</h3>
              <p className="text-muted-foreground">
                Faça sua simulação gratuita e escolha o plano que melhor se adapta ao seu perfil e orçamento.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-orange rounded-full flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Escolha a Parcela</h3>
              <p className="text-muted-foreground">
                Defina o valor da parcela que cabe no seu orçamento. Flexibilidade total para sua realidade.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-orange rounded-full flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Contrate com Especialista</h3>
              <p className="text-muted-foreground">
                Nosso time de especialistas te acompanha em todo o processo até a entrega das chaves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Autoridade e Prova Social */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-plenus-orange/10 text-plenus-orange border-plenus-orange/20">
                Mais de 10 anos de experiência
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Autoridade e experiência que você pode confiar
              </h2>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-plenus-orange mb-2">10+</div>
                  <p className="text-muted-foreground">Anos de experiência</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-plenus-orange mb-2">1000+</div>
                  <p className="text-muted-foreground">Clientes satisfeitos</p>
                </div>
              </div>

              <div className="space-y-4">
                <Card className="border-l-4 border-l-plenus-orange shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex text-plenus-orange">
                        <Star className="h-5 w-5 fill-current" />
                        <Star className="h-5 w-5 fill-current" />
                        <Star className="h-5 w-5 fill-current" />
                        <Star className="h-5 w-5 fill-current" />
                        <Star className="h-5 w-5 fill-current" />
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-2">
                          "Excelente atendimento! Consegui meu carro sem juros e sem entrada. Hugo foi fundamental no processo."
                        </p>
                        <p className="font-semibold text-primary">— Maria Silva, São Paulo</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-plenus-orange shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex text-plenus-orange">
                        <Star className="h-5 w-5 fill-current" />
                        <Star className="h-5 w-5 fill-current" />
                        <Star className="h-5 w-5 fill-current" />
                        <Star className="h-5 w-5 fill-current" />
                        <Star className="h-5 w-5 fill-current" />
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-2">
                          "Transparência total e processo super simples. Recomendo a todos que querem um consórcio sério."
                        </p>
                        <p className="font-semibold text-primary">— João Santos, Rio de Janeiro</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="text-center">
              <img src="/lovable-uploads/38b25d33-557d-4466-871e-577411d2ce35.png" alt="Hugo - Especialista Plenus Seguros" className="w-80 h-auto mx-auto rounded-2xl shadow-elegant" />
              <Card className="mt-6 shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary mb-2">Hugo Morais - CEO Plenus
Administrador com uma sólida trajetória, este profissional iniciou sua carreira em 2008 focado no atendimento a empresas, em uma das maiores instituições financeiras do país. Em 2015, expandiu sua atuação para o mercado de investimentos, onde passou a atuar tanto com pessoas físicas quanto empresas na maior distribuidora de investimentos do Brasil. Sua experiência abrange uma década e meia de atuação no mercado financeiro, com um olhar completo sobre as necessidades de diferentes perfis de clientes.</h3>
                  
                  <Button variant="outline" onClick={handleHugoContactClick} className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Falar com Hugo
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-plenus-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Tire suas dúvidas sobre consórcio
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card rounded-lg px-6 shadow-card">
                <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">
                  Como funciona o consórcio?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O consórcio é um grupo de pessoas que se reúnem para adquirir bens. Mensalmente, através de sorteios e lances, os participantes são contemplados e podem adquirir seu veículo. É regulamentado pelo Banco Central.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card rounded-lg px-6 shadow-card">
                <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">
                  Preciso dar entrada?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Não! No consórcio você não precisa dar entrada obrigatória. Você pode escolher dar um lance para antecipar sua contemplação, mas não é obrigatório.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card rounded-lg px-6 shadow-card">
                <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">
                  O que acontece em caso de atraso?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Em caso de atraso, há uma multa de 2% sobre o valor da parcela e juros de mora de 1% ao mês. O importante é manter a comunicação conosco para encontrarmos a melhor solução.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card rounded-lg px-6 shadow-card">
                <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">
                  Posso sair do consórcio quando quiser?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim, você pode cancelar seu consórcio a qualquer momento. Valores pagos são devolvidos conforme regulamento do grupo, geralmente após o encerramento.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card rounded-lg px-6 shadow-card">
                <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">
                  Qual a diferença entre sorteio e lance?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O sorteio acontece mensalmente e é gratuito. Já o lance é um valor extra que você pode oferecer para aumentar suas chances de contemplação imediata.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Simulação */}
      <section id="simulacao" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Simule seu consórcio
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Preencha os dados abaixo e receba sua simulação personalizada
            </p>

            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <form onSubmit={handleSimulationSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome completo</Label>
                      <Input id="name" name="name" placeholder="Seu nome completo" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">WhatsApp</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="(11) 99999-9999" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="vehicle">Tipo de veículo</Label>
                    <select id="vehicle" name="vehicle" className="w-full p-3 border border-input rounded-lg bg-background" required>
                      <option value="">Selecione o tipo de veículo</option>
                      <option value="Carro Popular">Carro Popular (até R$ 50.000)</option>
                      <option value="Carro Médio">Carro Médio (R$ 50.000 - R$ 100.000)</option>
                      <option value="Carro Premium">Carro Premium (acima de R$ 100.000)</option>
                      <option value="Moto">Moto</option>
                      <option value="SUV/Picape">SUV/Picape</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="value">Valor estimado do veículo</Label>
                    <Input id="value" name="value" placeholder="Ex: 80.000" required />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg" variant="secondary">
                    Receber Simulação no WhatsApp
                    <Phone className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button onClick={handleFloatingContactClick} size="lg" className="rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse">
          <Phone className="h-8 w-8" />
        </Button>
      </div>

      {/* Footer */}
      <footer className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <img src="/lovable-uploads/c5604e87-e4d6-41ab-b1a7-9b2e28dd53e2.png" alt="Plenus Seguros - logo" className="h-12 w-auto mx-auto mb-6" loading="lazy" />
            <p className="mb-4">
              Sua parceria de confiança para realizar o sonho do carro próprio
            </p>
            <div className="flex justify-center gap-6 text-sm">
              <span>© 2025 Plenus Seguros</span>
              
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;