import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Ilustración Digital',
    category: 'Ilustración',
    image: 'https://images.unsplash.com/photo-1707999494553-27506fa302a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaWxsdXN0cmF0aW9uJTIwYXJ0d29yayUyMGNvbG9yZnVsfGVufDF8fHx8MTc3MjAzNTg1MHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Ilustración digital colorida y expresiva'
  },
  {
    id: 2,
    title: 'Diseño Gráfico',
    category: 'Diseño',
    image: 'https://images.unsplash.com/photo-1760071744047-5542cbfda184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcHJvamVjdCUyMHBvcnRmb2xpb3xlbnwxfHx8fDE3NzIwMzU4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Proyecto de diseño gráfico conceptual'
  },
  {
    id: 3,
    title: 'Character Design',
    category: 'Character',
    image: 'https://images.unsplash.com/photo-1739513275763-84d4393a84ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyYWN0ZXIlMjBkZXNpZ24lMjBkaWdpdGFsJTIwYXJ0fGVufDF8fHx8MTc3MjAxNjc4MXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Diseño de personajes únicos'
  },
  {
    id: 4,
    title: 'Arte Digital',
    category: 'Arte',
    image: 'https://images.unsplash.com/photo-1634320714682-ae8b9c9cee60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcGFpbnRpbmclMjBhcnR3b3JrJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzcyMDM1ODUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Pintura digital creativa'
  },
  {
    id: 5,
    title: 'Branding & Logo',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1659123739225-ebc34dbdab0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dvJTIwZGVzaWduJTIwYnJhbmRpbmclMjBwcm9qZWN0fGVufDF8fHx8MTc3MjAzNTg1MXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Diseño de identidad corporativa'
  },
  {
    id: 6,
    title: 'Workspace Digital',
    category: 'Proceso',
    image: 'https://images.unsplash.com/photo-1768729797971-472ce92e7a71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwZGVzaWduJTIwcHJvY2VzcyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzIwMzU4NDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Proceso de trabajo digital'
  }
];

const categories = ['Todos', 'Ilustración', 'Diseño', 'Character', 'Arte', 'Branding', 'Proceso'];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredProjects = selectedCategory === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="min-h-screen bg-black text-white py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-6xl tracking-wider mb-4 text-center">
          PROYECTOS
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Una selección de trabajos realizados
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 uppercase text-sm tracking-wider transition-all ${
                selectedCategory === category
                  ? 'bg-white text-black'
                  : 'border border-white text-white hover:bg-white hover:text-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden bg-gray-900 aspect-square cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-2xl tracking-wider mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm uppercase tracking-wider mb-3">
                  {project.category}
                </p>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
