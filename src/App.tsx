import { useState } from 'react';
import { ImageViewer } from './components/ImageViewer';
import { SliderComparisonViewer } from './components/SliderComparisonViewer';
import { Satellite, Mail, Github, Linkedin } from 'lucide-react';

type ImageType = 'satellite' | 'sar' | 'thermal';

const imageOptions = [
  { id: 'satellite' as ImageType, label: 'Супутникове фото' },
  { id: 'sar' as ImageType, label: 'SAR зйомка' },
  { id: 'thermal' as ImageType, label: 'Теплове зображення' }
];

// Mock images for each type
const mockImages = {
  satellite: [
    'https://images.unsplash.com/photo-1574786199452-c7a5f69fb6e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBlYXJ0aCUyMHZpZXd8ZW58MXx8fHwxNzU5NTg4NzIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://cdn.discordapp.com/attachments/1413426843956023359/1419989924760915990/image.png?ex=68e244ac&is=68e0f32c&hm=a87f3710f7a686dae77e3e4e12a5c1a7929d8b4cfb32fbeb81902ee589e2fa66&',
    'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1080'
  ],
  sar: [
    'https://images.unsplash.com/photo-1571519729621-a2e761b3efa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWRhciUyMHNhdGVsbGl0ZSUyMGltYWdlcnl8ZW58MXx8fHwxNzU5NTY5MzcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1080',
    'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1080'
  ],
  thermal: [
    'https://images.unsplash.com/photo-1700081744390-53ac7df645ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVybWFsJTIwaW1hZ2luZyUyMGFlcmlhbHxlbnwxfHx8fDE3NTk1OTA3ODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1080',
    'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1080'
  ]
};

export default function App() {
  // Section 1 state
  const [section1Type, setSection1Type] = useState<ImageType>('satellite');
  const [section1Index, setSection1Index] = useState(0);

  // Section 2 state
  const [section2Type, setSection2Type] = useState<ImageType>('satellite');
  const [section2Index, setSection2Index] = useState(0);

  // Section 3 state
  const [section3Type, setSection3Type] = useState<ImageType>('satellite');
  const [section3Index, setSection3Index] = useState(0);

  const handleNavigate = (
    section: 1 | 2 | 3,
    direction: 'prev' | 'next',
    currentIndex: number,
    setIndex: (index: number) => void,
    type: ImageType
  ) => {
    const images = mockImages[type];
    if (direction === 'prev') {
      setIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    } else {
      setIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Header */}
      <header className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-24 px-4 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="relative">
              <Satellite className="w-24 h-24 animate-pulse" />
              <div className="absolute inset-0 bg-white/30 rounded-full blur-xl"></div>
            </div>
            <h1 className="text-7xl font-black tracking-wider">
              DATASTORM
            </h1>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            <p className="text-white/90 text-2xl">NASA Space Apps Challenge 2024</p>
            <div className="inline-block bg-white/20 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/30">
              <p className="text-white text-xl">Аналіз трагедії на Каховському водосховищі</p>
            </div>
            
            {/* Additional Info */}
            <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/30">
              <div className="space-y-2">
                <p className="text-5xl font-black">6 червня</p>
                <p className="text-white/80">Дата катастрофи</p>
                <p className="text-white/60 text-sm">2023 рік</p>
              </div>
              <div className="space-y-2">
                <p className="text-5xl font-black">18 км³</p>
                <p className="text-white/80">Об'єм водосховища</p>
                <p className="text-white/60 text-sm">до руйнування</p>
              </div>
              <div className="space-y-2">
                <p className="text-5xl font-black">600 км²</p>
                <p className="text-white/80">Площа затоплення</p>
                <p className="text-white/60 text-sm">постраждала територія</p>
              </div>
            </div>

            <p className="text-white/90 text-lg leading-relaxed mt-8 max-w-3xl mx-auto">
              Дослідження наслідків руйнування греблі Каховської ГЕС з використанням 
              супутникових даних, SAR-зйомки та теплового картування для всебічного 
              аналізу екологічної катастрофи та її впливу на регіон.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-20 space-y-28">
        {/* Section 1: Аналіз супутникових знімків */}
        <section className="space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Аналіз супутникових знімків
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-[320px_1fr] gap-8">
            {/* Left: Options List */}
            <div className="space-y-3">
              {imageOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => {
                    setSection1Type(option.id);
                    setSection1Index(0);
                  }}
                  className={`w-full text-left px-6 py-4 rounded-lg border-2 transition-all ${
                    section1Type === option.id
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-500 shadow-lg shadow-blue-500/20 scale-105'
                      : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <span className={section1Type === option.id ? 'text-blue-700' : 'text-gray-700'}>
                    {option.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Right: Image Viewer */}
            <div>
              <ImageViewer
                images={mockImages[section1Type]}
                currentIndex={section1Index}
                onNavigate={(direction) =>
                  handleNavigate(1, direction, section1Index, setSection1Index, section1Type)
                }
              />
            </div>
          </div>
        </section>

        {/* Section 2: Порівняння До/Після катастрофи */}
        <section className="space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Порівняння До/Після катастрофи
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-[320px_1fr] gap-8">
            {/* Left: Options List */}
            <div className="space-y-3">
              {imageOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => {
                    setSection2Type(option.id);
                    setSection2Index(0);
                  }}
                  className={`w-full text-left px-6 py-4 rounded-lg border-2 transition-all ${
                    section2Type === option.id
                      ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-500 shadow-lg shadow-purple-500/20 scale-105'
                      : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <span className={section2Type === option.id ? 'text-purple-700' : 'text-gray-700'}>
                    {option.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Right: Slider Comparison Viewer */}
            <div>
              <SliderComparisonViewer
                images={mockImages[section2Type]}
                currentIndex={section2Index}
                onNavigate={(direction) =>
                  handleNavigate(2, direction, section2Index, setSection2Index, section2Type)
                }
              />
            </div>
          </div>
        </section>

        {/* Section 3: Додатковий аналіз */}
        <section className="space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-5xl font-black bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
              Додатковий аналіз
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-red-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-[320px_1fr] gap-8">
            {/* Left: Options List */}
            <div className="space-y-3">
              {imageOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => {
                    setSection3Type(option.id);
                    setSection3Index(0);
                  }}
                  className={`w-full text-left px-6 py-4 rounded-lg border-2 transition-all ${
                    section3Type === option.id
                      ? 'bg-gradient-to-r from-pink-50 to-red-50 border-pink-500 shadow-lg shadow-pink-500/20 scale-105'
                      : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <span className={section3Type === option.id ? 'text-pink-700' : 'text-gray-700'}>
                    {option.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Right: Image Viewer */}
            <div>
              <ImageViewer
                images={mockImages[section3Type]}
                currentIndex={section3Index}
                onNavigate={(direction) =>
                  handleNavigate(3, direction, section3Index, setSection3Index, section3Type)
                }
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white mt-32 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <Satellite className="w-10 h-10 text-blue-400" />
                <h3 className="text-2xl font-black tracking-wide">DATASTORM</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Команда аналітиків, що використовує передові технології дистанційного зондування 
                для моніторингу та аналізу екологічних катастроф.
              </p>
              <div className="flex gap-4 pt-2">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all hover:scale-110">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all hover:scale-110">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Project Info */}
            <div className="space-y-4">
              <h4 className="font-black text-blue-400">Проект</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-white transition-colors cursor-pointer">NASA Space Apps Challenge 2024</li>
                <li className="hover:text-white transition-colors cursor-pointer">Команда DataStorm</li>
                <li className="hover:text-white transition-colors cursor-pointer">Про дослідження</li>
                <li className="hover:text-white transition-colors cursor-pointer">Методологія</li>
              </ul>
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <h4 className="font-black text-purple-400">Технології</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-white transition-colors cursor-pointer">Супутникова зйомка</li>
                <li className="hover:text-white transition-colors cursor-pointer">SAR аналіз</li>
                <li className="hover:text-white transition-colors cursor-pointer">Теплове картування</li>
                <li className="hover:text-white transition-colors cursor-pointer">Геопросторові дані</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 DataStorm. Усі права захищені.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Політика конфіденційності</a>
              <a href="#" className="hover:text-white transition-colors">Умови використання</a>
              <a href="#" className="hover:text-white transition-colors">Контакти</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
