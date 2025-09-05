import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}>
                Юлия Филатова
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className={`font-medium transition-colors hover:text-primary ${
                  isScrolled ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                О себе
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={`font-medium transition-colors hover:text-primary ${
                  isScrolled ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                Услуги
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className={`font-medium transition-colors hover:text-primary ${
                  isScrolled ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                Портфолио
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className={`font-medium transition-colors hover:text-primary ${
                  isScrolled ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                Отзывы
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className={`font-medium transition-colors hover:text-primary ${
                  isScrolled ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                Блог
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`font-medium transition-colors hover:text-primary ${
                  isScrolled ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                Контакты
              </button>
            </div>

            <Button 
              size="sm" 
              className={`${isScrolled ? 'bg-primary' : 'bg-white/20 hover:bg-white/30 backdrop-blur-sm'}`}
              onClick={() => scrollToSection('contact')}
            >
              Связаться
            </Button>
          </div>
        </nav>
      </header>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl font-bold text-slate-900 mb-4">
                  Филатова<br />
                  <span className="text-primary">Юлия Дмитриевна</span>
                </h1>
                <h2 className="text-2xl font-medium text-slate-600 mb-6">
                  Web-разработчик
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Создаю современные веб-приложения с фокусом на пользовательский опыт 
                  и производительность. Специализируюсь на React, TypeScript и современных технологиях.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Mail" size={18} className="mr-2" />
                  Связаться со мной
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="Download" size={18} className="mr-2" />
                  Скачать CV
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/img/31f13174-1b42-4e4b-b2d4-50b336011ac4.jpg"
                  alt="Филатова Юлия Дмитриевна"
                  className="w-80 h-80 rounded-2xl object-cover shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-3 rounded-xl shadow-lg">
                  <span className="font-medium">5+ лет опыта</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">О себе</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Профессиональный подход к разработке и внимание к деталям
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-900">Опыт и подход</h3>
              <p className="text-slate-700 leading-relaxed">
                За 5 лет работы в IT-сфере я успешно реализовала более 50 проектов 
                различной сложности. Специализируюсь на создании масштабируемых 
                веб-приложений с использованием современных технологий.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Стремлюсь к написанию чистого, поддерживаемого кода и созданию 
                интуитивных пользовательских интерфейсов. Всегда изучаю новые 
                технологии и следую лучшим практикам разработки.
              </p>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">Ключевые навыки</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'React/Next.js', level: 95 },
                    { name: 'TypeScript', level: 90 },
                    { name: 'Node.js', level: 85 },
                    { name: 'Python', level: 80 }
                  ].map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium text-slate-800">{skill.name}</span>
                        <span className="text-sm text-slate-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Услуги</h2>
            <p className="text-xl text-slate-600">Профессиональная веб-разработка</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Веб-приложения',
                description: 'Создание современных SPA и PWA с использованием React, Vue.js',
                icon: 'Globe',
                features: ['Адаптивный дизайн', 'Высокая производительность', 'SEO-оптимизация']
              },
              {
                title: 'E-commerce',
                description: 'Интернет-магазины с интеграцией платежных систем',
                icon: 'ShoppingCart',
                features: ['Корзина покупок', 'Админ-панель', 'Аналитика продаж']
              },
              {
                title: 'API разработка',
                description: 'REST API и GraphQL серверы на Node.js',
                icon: 'Database',
                features: ['Документация API', 'Безопасность', 'Масштабируемость']
              },
              {
                title: 'CMS системы',
                description: 'Системы управления контентом под ключ',
                icon: 'Settings',
                features: ['Удобный интерфейс', 'Гибкая настройка', 'Многоязычность']
              },
              {
                title: 'Консультации',
                description: 'Техническое консультирование и код-ревью',
                icon: 'MessageSquare',
                features: ['Анализ архитектуры', 'Рефакторинг кода', 'Обучение команды']
              },
              {
                title: 'Поддержка',
                description: 'Техническая поддержка и доработка проектов',
                icon: 'Wrench',
                features: ['24/7 мониторинг', 'Быстрые исправления', 'Регулярные обновления']
              }
            ].map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 group">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-700">
                      <Icon name="Check" size={16} className="text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Портфолио</h2>
            <p className="text-xl text-slate-600">Последние проекты</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-commerce платформа',
                description: 'Полнофункциональный интернет-магазин с админ-панелью',
                tech: ['React', 'Node.js', 'MongoDB'],
                image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop'
              },
              {
                title: 'CRM система',
                description: 'Система управления клиентами для малого бизнеса',
                tech: ['Next.js', 'PostgreSQL', 'Tailwind'],
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
              },
              {
                title: 'Мобильное приложение',
                description: 'React Native приложение для фитнес-трекинга',
                tech: ['React Native', 'Firebase', 'TypeScript'],
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop'
              }
            ].map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-video bg-slate-200 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Icon name="ExternalLink" size={14} className="mr-2" />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-slate-600">Что говорят о моей работе</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Александр Петров',
                position: 'CEO, TechStart',
                text: 'Юлия создала для нас потрясающую CRM-систему. Профессиональный подход, соблюдение сроков и отличное качество кода.',
                rating: 5
              },
              {
                name: 'Мария Сидорова',
                position: 'Marketing Director, Fashion Co',
                text: 'Наш интернет-магазин работает безупречно! Продажи выросли на 40% после запуска. Рекомендую Юлию как отличного специалиста.',
                rating: 5
              },
              {
                name: 'Дмитрий Волков',
                position: 'Product Manager, DevStudio',
                text: 'Сотрудничество с Юлией - это всегда качественный результат в срок. Очень профессиональный подход к проектам.',
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="p-8 bg-white hover:shadow-xl transition-all duration-300">
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, starIndex) => (
                      <Icon key={starIndex} name="Star" size={18} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-6 italic">"{review.text}"</p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Icon name="User" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{review.name}</h4>
                    <p className="text-sm text-slate-600">{review.position}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Блог</h2>
            <p className="text-xl text-slate-600">Статьи о веб-разработке</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'React 18: Новые возможности',
                excerpt: 'Обзор ключевых нововведений в React 18 и как они изменят разработку...',
                date: '15 ноября 2024',
                readTime: '5 мин',
                category: 'React'
              },
              {
                title: 'TypeScript для начинающих',
                excerpt: 'Пошаговое руководство по изучению TypeScript с практическими примерами...',
                date: '8 ноября 2024',
                readTime: '8 мин',
                category: 'TypeScript'
              },
              {
                title: 'Оптимизация веб-приложений',
                excerpt: 'Лучшие практики для повышения производительности современных веб-приложений...',
                date: '1 ноября 2024',
                readTime: '12 мин',
                category: 'Performance'
              }
            ].map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Icon name="BookOpen" size={48} className="text-primary/60" />
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-2">
                      {article.category}
                    </span>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Читать далее
                    <Icon name="ArrowRight" size={14} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Контакты</h2>
            <p className="text-xl text-slate-600">
              Готова обсудить ваш проект
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Email</h3>
                  <p className="text-slate-600">yulia.filatova@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Телефон</h3>
                  <p className="text-slate-600">+7 (999) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Местоположение</h3>
                  <p className="text-slate-600">Москва, Россия</p>
                </div>
              </div>
              
              <div className="pt-8">
                <h3 className="font-semibold text-slate-900 mb-4">Социальные сети</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon">
                    <Icon name="Github" size={20} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Linkedin" size={20} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Globe" size={20} />
                  </Button>
                </div>
              </div>
            </div>
            
            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Написать сообщение</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Сообщение
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Расскажите о вашем проекте..."
                  ></textarea>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить сообщение
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <p className="text-slate-300">
                © 2024 Филатова Юлия Дмитриевна. Все права защищены.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-slate-300 text-sm">
                Создано с использованием React и Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;