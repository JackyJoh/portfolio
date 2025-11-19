const skillCategories = [
  {
    category: 'Languages',
    skills: ['Java', 'JavaScript', 'TypeScript', 'C++', 'Python', 'C#', 'HTML/CSS', 'OCaml']
  },
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Chart.js']
  },
  {
    category: 'Backend & Data',
    skills: ['Express', 'Python', 'Pandas', 'NumPy', 'scikit-learn', 'rapidcsv']
  },
  {
    category: 'Databases & Tools',
    skills: ['Supabase', 'SQL', 'Git', 'Data Structures', 'Algorithms']
  },
  {
    category: 'Specialties',
    skills: ['Full-Stack Development', 'Data Analysis', 'Embedded Systems', 'Machine Learning', 'Performance Optimization']
  }
]

export default function Skills() {
  return (
    <section className="py-20 px-4 md:px-8 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-8 px-[5vw] md:px-[8vw] xl:px-[10vw]">
      <div className="w-full mx-auto">
        <div className="mb-12 flex items-center gap-3">
          <div className="w-1 h-6 bg-accent"></div>
          <h2 className="text-2xl font-bold">Skills & Technologies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="border border-border rounded-lg p-6 hover:border-accent transition bg-card/05 backdrop-blur-sm">
              <h3 className="text-accent font-mono text-xs font-semibold mb-4 uppercase">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span key={i} className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-12 border-t border-border">
          <h3 className="text-lg font-bold mb-4">Relevant Coursework</h3>
          <div className="flex flex-wrap gap-2">
            {['Data Structures & Algorithms', 'Advanced Programming Fundamentals', 'Engieering Statistics', 'Discrete Structures', 'Computational Linear Algebra', 'Computer Organization'].map((course, i) => (
                <span key={i} className="px-3 py-1 border border-border text-sm text-muted-foreground rounded bg-card/20 backdrop-blur-sm">
                  {course}
                </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
