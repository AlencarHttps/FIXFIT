import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Settings, 
  Zap, 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  Star,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  MessageCircle,
  Play,
  Award,
  Users,
  Clock,
  Gauge
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Simular envio do formulário
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado!"
    });

    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const whatsappMessage = "Olá! Gostaria de saber mais sobre os serviços da FIXFIT.";
  const whatsappUrl = `https://wa.me/554792104490?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Toaster />
      
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-effect">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">FIXFIT</span>
            </motion.div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="hover:text-blue-400 transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('sobre')} className="hover:text-blue-400 transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection('servicos')} className="hover:text-blue-400 transition-colors">
                Serviços
              </button>
              <button onClick={() => scrollToSection('diferenciais')} className="hover:text-blue-400 transition-colors">
                Diferenciais
              </button>
              <button onClick={() => scrollToSection('contato')} className="hover:text-blue-400 transition-colors">
                Contato
              </button>
              <Button 
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="bg-green-600 hover:bg-green-700"
              >
                <span className="w-4 h-4 mr-2" style={{display: 'inline-block'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="20" height="20">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.58 1.38 5.07L2 22l5.13-1.35A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.64 0-3.17-.5-4.45-1.36l-.32-.21-3.05.8.82-2.97-.21-.33A7.96 7.96 0 0 1 4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8zm4.29-5.71c-.2-.1-1.18-.58-1.36-.65-.18-.07-.31-.1-.44.1-.13.2-.5.65-.62.78-.12.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99-.59-.53-.99-1.18-1.11-1.38-.12-.2-.01-.3.09-.4.09-.09.2-.23.3-.34.1-.11.13-.19.2-.32.07-.13.03-.25-.01-.35-.05-.1-.44-1.06-.6-1.45-.16-.39-.32-.34-.44-.35-.11-.01-.25-.01-.39-.01-.13 0-.34.05-.52.25-.18.2-.7.68-.7 1.65 0 .97.7 1.91.8 2.05.1.13 1.38 2.12 3.36 2.89.47.16.84.25 1.13.32.47.1.9.09 1.24.05.38-.06 1.18-.48 1.35-.94.17-.46.17-.85.12-.94-.05-.09-.18-.13-.38-.23z"/>
                  </svg>
                </span>
                Fale Conosco
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.nav 
              className="md:hidden mt-4 pb-4 border-t border-slate-700"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4 mt-4">
                <button onClick={() => scrollToSection('inicio')} className="text-left hover:text-blue-400 transition-colors">
                  Início
                </button>
                <button onClick={() => scrollToSection('sobre')} className="text-left hover:text-blue-400 transition-colors">
                  Sobre
                </button>
                <button onClick={() => scrollToSection('servicos')} className="text-left hover:text-blue-400 transition-colors">
                  Serviços
                </button>
                <button onClick={() => scrollToSection('diferenciais')} className="text-left hover:text-blue-400 transition-colors">
                  Diferenciais
                </button>
                <button onClick={() => scrollToSection('contato')} className="text-left hover:text-blue-400 transition-colors">
                  Contato
                </button>
                <Button 
                  onClick={() => window.open(whatsappUrl, '_blank')}
                  className="bg-green-600 hover:bg-green-700 w-fit"
                >
                  <span className="w-4 h-4 mr-2" style={{display: 'inline-block'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="20" height="20">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.58 1.38 5.07L2 22l5.13-1.35A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.64 0-3.17-.5-4.45-1.36l-.32-.21-3.05.8.82-2.97-.21-.33A7.96 7.96 0 0 1 4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8zm4.29-5.71c-.2-.1-1.18-.58-1.36-.65-.18-.07-.31-.1-.44.1-.13.2-.5.65-.62.78-.12.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99-.59-.53-.99-1.18-1.11-1.38-.12-.2-.01-.3.09-.4.09-.09.2-.23.3-.34.1-.11.13-.19.2-.32.07-.13.03-.25-.01-.35-.05-.1-.44-1.06-.6-1.45-.16-.39-.32-.34-.44-.35-.11-.01-.25-.01-.39-.01-.13 0-.34.05-.52.25-.18.2-.7.68-.7 1.65 0 .97.7 1.91.8 2.05.1.13 1.38 2.12 3.36 2.89.47.16.84.25 1.13.32.47.1.9.09 1.24.05.38-.06 1.18-.48 1.35-.94.17-.46.17-.85.12-.94-.05-.09-.18-.13-.38-.23z"/>
                    </svg>
                  </span>
                  Fale Conosco
                </Button>
              </div>
            </motion.nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center hero-bg tech-pattern">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-shadow leading-tight">
                Com a <span className="gradient-text">FIXFIT</span>,<br />
                <span className="text-blue-400 drop-shadow-lg">sua academia nunca para.</span>
              </h1>
              <p className="text-lg lg:text-2xl text-slate-300 mb-8 leading-relaxed font-medium">
                Manutenção técnica de equipamentos de academia em Balneário Camboriú e região. Preventiva, corretiva, reformas e gestão com agilidade e confiança.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 pulse-glow"
                  onClick={() => scrollToSection('servicos')}
                >
                  Nossos Serviços
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => window.open(whatsappUrl, '_blank')}
                  className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                >
                  <span className="w-5 h-5 mr-2" style={{display: 'inline-block'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.58 1.38 5.07L2 22l5.13-1.35A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.64 0-3.17-.5-4.45-1.36l-.32-.21-3.05.8.82-2.97-.21-.33A7.96 7.96 0 0 1 4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8zm4.29-5.71c-.2-.1-1.18-.58-1.36-.65-.18-.07-.31-.1-.44.1-.13.2-.5.65-.62.78-.12.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99-.59-.53-.99-1.18-1.11-1.38-.12-.2-.01-.3.09-.4.09-.09.2-.23.3-.34.1-.11.13-.19.2-.32.07-.13.03-.25-.01-.35-.05-.1-.44-1.06-.6-1.45-.16-.39-.32-.34-.44-.35-.11-.01-.25-.01-.39-.01-.13 0-.34.05-.52.25-.18.2-.7.68-.7 1.65 0 .97.7 1.91.8 2.05.1.13 1.38 2.12 3.36 2.89.47.16.84.25 1.13.32.47.1.9.09 1.24.05.38-.06 1.18-.48 1.35-.94.17-.46.17-.85.12-.94-.05-.09-.18-.13-.38-.23z"/>
                    </svg>
                  </span>
                  Falar com Especialista
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="floating-animation">
                <img  
                  alt="Técnico especializado em manutenção de equipamentos de academia"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  src="https://images.unsplash.com/photo-1695835805851-33a445101b3e" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold gradient-text">500+</h3>
              <p className="text-slate-400">Academias Atendidas</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold gradient-text">24h</h3>
              <p className="text-slate-400">Tempo de Resposta</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold gradient-text">15+</h3>
              <p className="text-slate-400">Anos de Experiência</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gauge className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold gradient-text">100%</h3>
              <p className="text-slate-400">Taxa de Sucesso</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img  
                alt="Ismael, fundador da FIXFIT, técnico especializado em equipamentos de academia"
                className="w-full h-auto rounded-2xl shadow-2xl"
               src="https://images.unsplash.com/photo-1694712220320-5d6f4233e6aa" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Sobre a <span className="gradient-text">FIXFIT</span>
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Fundada pelo técnico <strong>Ismael</strong>, a FIXFIT é referência em manutenção técnica para equipamentos de academia em Balneário Camboriú e região. Somos especialistas em manutenção preventiva, corretiva, reforma e administração da manutenção, com mais de 15 anos de experiência no setor, atendendo grandes redes e academias locais.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-slate-300">
                    <strong>Expertise Técnica:</strong> Ismael é reconhecido e respeitado no setor, 
                    com conhecimento profundo em todos os tipos de equipamentos.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-slate-300">
                    <strong>Ferramentas Profissionais:</strong> Kits completos e especializados 
                    para qualquer tipo de manutenção ou reparo.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-slate-300">
                    <strong>Conteúdo Técnico:</strong> Canal no YouTube com bastidores de manutenção, 
                    demonstrando nossa autoridade técnica.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={() => scrollToSection('servicos')}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Ver Serviços
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-slate-600 hover:bg-slate-700"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Assistir Vídeos (Em Breve)
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Nossos <span className="gradient-text">Serviços</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Oferecemos soluções completas em manutenção técnica para equipamentos de academia, 
              garantindo o funcionamento perfeito do seu negócio.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Settings className="w-8 h-8" />,
                title: "Manutenção Preventiva",
                description: "Inspeções regulares e manutenção programada para evitar problemas e prolongar a vida útil dos equipamentos."
              },
              {
                icon: <Wrench className="w-8 h-8" />,
                title: "Manutenção Corretiva",
                description: "Reparo rápido e eficiente de esteiras, bicicletas, elípticos e equipamentos de musculação."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Motores Elétricos",
                description: "Especialização em conserto e manutenção de motores elétricos de todos os tipos de equipamentos."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Ar-Condicionado",
                description: "Instalação, manutenção e reparo de sistemas de ar-condicionado e refrigeração para academias."
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Assistência Técnica",
                description: "Suporte técnico completo com diagnóstico preciso e soluções personalizadas para cada situação."
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Consultoria Técnica",
                description: "Consultoria especializada para novos projetos, escolha de equipamentos e otimização de espaços."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="service-card glass-effect rounded-xl p-6 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-4 text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section id="diferenciais" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Nossos <span className="gradient-text">Diferenciais</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              O que nos torna a escolha certa para a manutenção dos seus equipamentos.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img  
                alt="Kit profissional de ferramentas para manutenção de equipamentos de academia"
                className="w-full h-auto rounded-2xl shadow-2xl"
               src="https://images.unsplash.com/photo-1685633224966-fd18820f6016" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  icon: <Award className="w-6 h-6" />,
                  title: "Experiência Comprovada",
                  description: "Mais de 15 anos atendendo grandes redes e academias independentes com excelência."
                },
                {
                  icon: <Settings className="w-6 h-6" />,
                  title: "Ferramentas Profissionais",
                  description: "Kits completos e especializados para qualquer tipo de equipamento ou situação."
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: "Resposta Rápida",
                  description: "Atendimento em até 24 horas para emergências e agendamento flexível."
                },
                {
                  icon: <Play className="w-6 h-6" />,
                  title: "Conteúdo Técnico",
                  description: "Canal no YouTube com bastidores e dicas técnicas, demonstrando nossa expertise."
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "Garantia de Qualidade",
                  description: "Todos os serviços com garantia e acompanhamento pós-atendimento."
                }
              ].map((differential, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    {differential.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{differential.title}</h3>
                    <p className="text-slate-400">{differential.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Entre em <span className="gradient-text">Contato</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Pronto para garantir que sua academia funcione sempre perfeitamente? 
              Fale conosco e solicite um orçamento personalizado.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Telefone</h3>
                    <p className="text-slate-400">+55 47 9210-4490</p>
                    <p className="text-sm text-slate-500">Atendimento 24h para emergências</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
                    <p className="text-slate-400">+55 47 9210-4490</p>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-green-400 hover:text-green-300"
                      onClick={() => window.open(whatsappUrl, '_blank')}
                    >
                      <span className="w-4 h-4 mr-2" style={{display: 'inline-block'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.58 1.38 5.07L2 22l5.13-1.35A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.64 0-3.17-.5-4.45-1.36l-.32-.21-3.05.8.82-2.97-.21-.33A7.96 7.96 0 0 1 4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8zm4.29-5.71c-.2-.1-1.18-.58-1.36-.65-.18-.07-.31-.1-.44.1-.13.2-.5.65-.62.78-.12.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99-.59-.53-.99-1.18-1.11-1.38-.12-.2-.01-.3.09-.4.09-.09.2-.23.3-.34.1-.11.13-.19.2-.32.07-.13.03-.25-.01-.35-.05-.1-.44-1.06-.6-1.45-.16-.39-.32-.34-.44-.35-.11-.01-.25-.01-.39-.01-.13 0-.34.05-.52.25-.18.2-.7.68-.7 1.65 0 .97.7 1.91.8 2.05.1.13 1.38 2.12 3.36 2.89.47.16.84.25 1.13.32.47.1.9.09 1.24.05.38-.06 1.18-.48 1.35-.94.17-.46.17-.85.12-.94-.05-.09-.18-.13-.38-.23z"/>
                        </svg>
                      </span>
                      Iniciar conversa →
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">E-mail</h3>
                    <p className="text-slate-400">vcctecnologia@gmail.com</p>
                    <p className="text-sm text-slate-500">Resposta em até 2 horas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Atendimento</h3>
                    <p className="text-slate-400">Balneário Camboriú e região</p>
                    <p className="text-sm text-slate-500">Cobertura local garantida</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="glass-effect rounded-xl p-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="+55 47 9210-4490"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Descreva o tipo de serviço que precisa ou sua dúvida..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Enviar Mensagem
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold gradient-text">FIXFIT</span>
              </div>
              <p className="text-slate-400 mb-4">
                Empresa especializada em equipamentos de academia. Manutenção preventiva, corretiva, reforma e administração da manutenção em Balneário Camboriú e região, com qualidade e confiabilidade.
              </p>
            </div>

            <div>
              <span className="text-lg font-semibold mb-4 block">Links Rápidos</span>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('inicio')} className="block text-slate-400 hover:text-blue-400 transition-colors">
                  Início
                </button>
                <button onClick={() => scrollToSection('sobre')} className="block text-slate-400 hover:text-blue-400 transition-colors">
                  Sobre
                </button>
                <button onClick={() => scrollToSection('servicos')} className="block text-slate-400 hover:text-blue-400 transition-colors">
                  Serviços
                </button>
                <button onClick={() => scrollToSection('contato')} className="block text-slate-400 hover:text-blue-400 transition-colors">
                  Contato
                </button>
              </div>
            </div>

            <div>
              <span className="text-lg font-semibold mb-4 block">Contato</span>
              <div className="space-y-2 text-slate-400">
                <p>📞 +55 47 9210-4490</p>
                <p>📧 vcctecnologia@gmail.com</p>
                <p>📍 Balneário Camboriú e região</p>
                <div className="flex space-x-4 mt-4">
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => window.open(whatsappUrl, '_blank')}
                    className="border-green-600 text-green-400 hover:bg-green-600 hover:text-white"
                  >
                    <span className="w-4 h-4 mr-2" style={{display: 'inline-block'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.58 1.38 5.07L2 22l5.13-1.35A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.64 0-3.17-.5-4.45-1.36l-.32-.21-3.05.8.82-2.97-.21-.33A7.96 7.96 0 0 1 4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8zm4.29-5.71c-.2-.1-1.18-.58-1.36-.65-.18-.07-.31-.1-.44.1-.13.2-.5.65-.62.78-.12.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99-.59-.53-.99-1.18-1.11-1.38-.12-.2-.01-.3.09-.4.09-.09.2-.23.3-.34.1-.11.13-.19.2-.32.07-.13.03-.25-.01-.35-.05-.1-.44-1.06-.6-1.45-.16-.39-.32-.34-.44-.35-.11-.01-.25-.01-.39-.01-.13 0-.34.05-.52.25-.18.2-.7.68-.7 1.65 0 .97.7 1.91.8 2.05.1.13 1.38 2.12 3.36 2.89.47.16.84.25 1.13.32.47.1.9.09 1.24.05.38-.06 1.18-.48 1.35-.94.17-.46.17-.85.12-.94-.05-.09-.18-.13-.38-.23z"/>
                      </svg>
                    </span>
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          <div className="text-center text-slate-500">
            <p>&copy; 2025 FIXFIT. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="whatsapp-float">
        <Button
          size="lg"
          onClick={() => window.open(whatsappUrl, '_blank')}
          className="bg-green-600 hover:bg-green-700 rounded-full w-16 h-16 shadow-2xl"
        >
          <span className="w-8 h-8" style={{display: 'inline-block'}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="32" height="32">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.58 1.38 5.07L2 22l5.13-1.35A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.64 0-3.17-.5-4.45-1.36l-.32-.21-3.05.8.82-2.97-.21-.33A7.96 7.96 0 0 1 4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8zm4.29-5.71c-.2-.1-1.18-.58-1.36-.65-.18-.07-.31-.1-.44.1-.13.2-.5.65-.62.78-.12.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99-.59-.53-.99-1.18-1.11-1.38-.12-.2-.01-.3.09-.4.09-.09.2-.23.3-.34.1-.11.13-.19.2-.32.07-.13.03-.25-.01-.35-.05-.1-.44-1.06-.6-1.45-.16-.39-.32-.34-.44-.35-.11-.01-.25-.01-.39-.01-.13 0-.34.05-.52.25-.18.2-.7.68-.7 1.65 0 .97.7 1.91.8 2.05.1.13 1.38 2.12 3.36 2.89.47.16.84.25 1.13.32.47.1.9.09 1.24.05.38-.06 1.18-.48 1.35-.94.17-.46.17-.85.12-.94-.05-.09-.18-.13-.38-.23z"/>
            </svg>
          </span>
        </Button>
      </div>
    </div>
  );
};

export default App;
