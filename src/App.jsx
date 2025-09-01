import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { Mail, Phone, Linkedin, Github, Code, Database, Cloud, Cog, TestTube, GitBranch } from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('intro')

  const skills = [
    { name: 'Python', icon: Code, category: 'Linguagens' },
    { name: 'Java', icon: Code, category: 'Linguagens' },
    { name: '.NET C#', icon: Code, category: 'Linguagens' },
    { name: 'Git/GitHub', icon: GitBranch, category: 'Ferramentas' },
    { name: 'Jenkins', icon: Cog, category: 'CI/CD' },
    { name: 'Jira', icon: TestTube, category: 'QA Tools' },
    { name: 'SonarQube', icon: TestTube, category: 'QA Tools' },
    { name: 'SQL/Banco de Dados', icon: Database, category: 'Dados' },
    { name: 'Azure Cloud', icon: Cloud, category: 'Cloud' },
    { name: 'Selenium', icon: TestTube, category: 'Automação' },
    { name: 'Postman', icon: TestTube, category: 'API Testing' },
    { name: 'Cypress', icon: TestTube, category: 'Automação' }
  ]

  const experiences = [
    {
      title: 'Engenheiro de Computação',
      company: 'DibiTech Engenharia',
      period: '2024 - 2025',
      description: 'Desenvolvedor Java, .NET, Python. Projetos com CLPs, IHMs e SCADA. Foco em qualidade e robustez de sistemas industriais.',
      highlights: ['Desenvolvimento em Python/Java/.NET', 'Automação Industrial', 'Testes de Integração']
    },
    {
      title: 'Coordenador de T.I.',
      company: 'Prefeitura Municipal de Apiaí',
      period: '2010 - 2014',
      description: 'Gestão de infraestrutura de TI, coordenação de equipes, implementação de projetos de automação e migração para nuvem.',
      highlights: ['Automação de Processos', 'Gestão de Equipes', 'Migração para Nuvem', 'Infraestrutura']
    },
    {
      title: 'Programador',
      company: 'Leão Junior S.A.',
      period: '2008 - 2009',
      description: 'Desenvolvimento de sistemas para emissão de notas fiscais em Delphi e C#. Integração com órgãos fiscais e automação de processos.',
      highlights: ['Sistemas Críticos', 'Integração de APIs', 'Conformidade Tributária']
    }
  ]

  const qaRelevance = [
    {
      title: 'Automação de Processos',
      description: 'Experiência em implementar automação de processos na gestão de TI, aplicável à automação de testes.'
    },
    {
      title: 'Desenvolvimento de Software',
      description: 'Sólida base em Python, Java e .NET para criar estruturas de automação robustas e escaláveis.'
    },
    {
      title: 'Depuração e Resolução de Problemas',
      description: 'Experiência comprovada em identificar, analisar e resolver problemas complexos em sistemas.'
    },
    {
      title: 'Integração de Sistemas',
      description: 'Trabalho com APIs, serviços web e integração de sistemas, essencial para testes de API.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Rui Tobias Carvalho</h1>
              <p className="text-slate-600 dark:text-slate-300">Engenheiro de QA | Automação | </p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" onClick={() => setActiveSection('intro')}>
                Introdução
              </Button>
              <Button variant="outline" size="sm" onClick={() => setActiveSection('experience')}>
                Experiência
              </Button>
              <Button variant="outline" size="sm" onClick={() => setActiveSection('skills')}>
                Habilidades
              </Button>
              <Button variant="outline" size="sm" onClick={() => setActiveSection('contact')}>
                Contato
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Introdução */}
        {activeSection === 'intro' && (
          <div className="space-y-8 animate-fade-in">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="text-3xl">Engenheiro de QA</CardTitle>
                <CardDescription className="text-blue-100 text-lg">
                  Transformando experiência em desenvolvimento e automação em excelência em QA
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Com uma sólida formação em Engenharia de Computação e vasta experiência em desenvolvimento de software 
                    e gestão de infraestrutura de TI, apresento um perfil robusto e adaptável, ideal para a posição de 
                    Engenheiro de QA.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Minha trajetória profissional abrange desde o desenvolvimento de sistemas complexos em Java, .NET e Python 
                    até a coordenação de equipes e implementação de projetos de automação, proporcionando uma compreensão 
                    aprofundada do ciclo de vida do software e da importância da qualidade em todas as suas etapas.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TestTube className="h-5 w-5 text-blue-600" />
                    Relevância para QA
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {qaRelevance.map((item, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cog className="h-5 w-5 text-purple-600" />
                    Qualificações
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-slate-900 dark:text-white">Automação e IA</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Experiência em automação de processos alinhada com o foco da Tekton Labs em IA para DevOps e testes.
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-slate-900 dark:text-white">Projetos Internacionais</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Capacidade de trabalhar em projetos desafiadores e escaláveis, como os desenvolvidos pela empresa.
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-slate-900 dark:text-white">Inovação Tecnológica</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Paixão por otimização e soluções eficientes, alinhada com a missão de melhorar vidas através da tecnologia.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Experiência */}
        {activeSection === 'experience' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Experiência Profissional</h2>
            {experiences.map((exp, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-slate-900 dark:text-white">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-blue-600">{exp.company}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-sm">{exp.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Habilidades */}
        {activeSection === 'skills' && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Habilidades Técnicas</h2>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Ferramentas e Tecnologias</CardTitle>
                <CardDescription>
                  Competências técnicas alinhadas aos requisitos da vaga de Engenheiro de QA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                      <skill.icon className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium text-slate-900 dark:text-white text-sm">{skill.name}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">{skill.category}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Metodologias de QA</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-slate-700 dark:text-slate-300">Automação de Testes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-slate-700 dark:text-slate-300">Testes de Integração</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-slate-700 dark:text-slate-300">Testes de API</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-slate-700 dark:text-slate-300">CI/CD Integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-slate-700 dark:text-slate-300">Depuração e Resolução de Problemas</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Habilidades</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-700 dark:text-slate-300">+3 anos em desenvolvimento (aplicável a QA)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-700 dark:text-slate-300">Estruturas de automação robustas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-700 dark:text-slate-300">Jira, SonarQube, Jenkins, GitHub</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-700 dark:text-slate-300">Selenium/Cypress/Appium</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-700 dark:text-slate-300">SOAPUI/Postman</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Contato */}
        {activeSection === 'contact' && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Contato</h2>
            
            <Card className="border-0 shadow-lg max-w-2xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Vamos Conversar!</CardTitle>
                <CardDescription>
                  Estou entusiasmado com a possibilidade de contribuir com a equipe.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a 
                    href="mailto:ruitobiascarvalho@hotmail.com"
                    className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-medium text-slate-900 dark:text-white">Email</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">ruitobiascarvalho@hotmail.com</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
                    <Phone className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-medium text-slate-900 dark:text-white">Telefone</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">(15) 99852-9447</div>
                    </div>
                  </div>

                  <a 
                    href="https://www.linkedin.com/in/rui-tobias-carvalho-a56765169"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-blue-700" />
                    <div>
                      <div className="font-medium text-slate-900 dark:text-white">LinkedIn</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Perfil Profissional</div>
                    </div>
                  </a>

                  <a 
                    href="https://github.com/Bibolook-eng"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Github className="h-5 w-5 text-gray-800 dark:text-gray-200" />
                    <div>
                      <div className="font-medium text-slate-900 dark:text-white">GitHub</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Projetos e Código</div>
                    </div>
                  </a>
                </div>

                <Separator />

                <div className="text-center">
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Obrigado pela sua atenção e consideração. Estou ansioso para discutir como posso contribuir 
                    como Engenheiro de QA.
                  </p>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Mail className="h-4 w-4 mr-2" />
                    Entrar em Contato
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2025 Rui Tobias Carvalho - Portfólio para Engenheiro de QA
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

