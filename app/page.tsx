import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-16">
      <header>
        <h1 className="text-xl font-normal">neel shah</h1>
      </header>

      <main className="mt-16">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="flex-1 space-y-6">
            <h2 className="text-6xl font-bold -mt-4 -ml-1">
              <span className="text-red-600">Hi,</span> I&apos;m Neel
            </h2>
            <div className="space-y-4 text-base">
              <p>
                I am a sophomore from Indian Institute of Technology Bombay. Lover of all things technology. Lately I
                have been writing a lot of Python and TypeScript.
              </p>
              <p>
                I work @{" "}
                <Link href="https://cogni-landing.vercel.app" className="underline hover:no-underline">
                  AAIC
                </Link>{" "}
                where I spend most of my time building tools to automate browser tasks using AI Agents. Some projects I&apos;ve worked on
                include:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  A platform for {""}
                  <Link href="http://20.78.1.165:3000" className="underline hover:no-underline">
                  browser automation to enable AI Agents to interact with web 
                  </Link>
                </li>
                <li>
                  A platform for collabrative{" "}
                  <Link href="https://cogni-zeta.vercel.app" className="underline hover:no-underline">
                    chatting amongst personalised AI Agents
                  </Link>{" "}
                
                </li>
                <li>Dozens of AI tools for automating daily tasks</li>
              </ul>
            </div>
            <div className="flex gap-4 pt-2">
              <Link href="https://github.com/spexxxzzz" aria-label="GitHub">
                <Github className="w-6 h-6" />
              </Link>
              <Link href="https://www.linkedin.com/in/neelshah020604/" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-auto">
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden">
              <Image
                src="/neel-removebg.jpg"
                alt="Profile photo"
                width={320}
                height={320}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <section className="mt-24">
          <h2 className="text-4xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div key={project.title} className="bg-gray-900 p-4 rounded-md">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="text-sm mt-1 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech.name} className={`text-xs px-2 py-1 rounded ${tech.color}`}>
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 mb-16">
          <h2 className="text-4xl font-bold">Wanna get in touch?</h2>
          <div className="mt-4">
            <a href="mailto:neelshah020604@gmail.com" className="text-lg underline hover:no-underline">
              neelshah020604@gmail.com
            </a>
            <p className="text-gray-400 mt-1">+91 9819418846</p>
            <p className="text-gray-400 mt-1">Based in Mumbai, India</p>
          </div>
        </section>
      </main>
    </div>
  )
}

const projects = [
  {
    title: "Reinforcement Leaning- Lunar Lander",
    description: "Simulated the Lunar Lander environment using Reinforcement Learning",
    technologies: [
      { name: "Python", color: "bg-amber-200" },
      { name: "Tensorflow", color: "bg-yellow-200" },
      { name: "JAX", color: "bg-blue-200" },
    ],
  },
  {
    title: "Option Pricing Models and Accuracy",
    description: "Developed framework for Option Pricing using BSM model in the most optimised way",
    technologies: [
      { name: "Python", color: "bg-amber-200" },
      { name: "PyTorch", color: "bg-blue-600 text-white" },
    ],
  },
 {
    title: "WQ Brain Alpha Extraction",
    description: "Performed various techniques in Quantitative Research to mine valuable Alphas",
    technologies: [
      { name: "Brain API", color: "bg-blue-200" },
      { name: "Fast Expression", color: "bg-yellow-200" },
      { name: "Data Mining", color: "bg-red-500 text-white" },
    ],
  },
  {
    title: "Siamese Network",
    description: "Shared-weights network for similarity learning",
    technologies: [{ name: "OpenCV", color: "bg-blue-600 text-white" }],
  },
  {
    title: "Algorithmic Trading",
    description: "Attempts to find trends in stock prices and predict future prices",
    technologies: [
      { name: "MLOps", color: "bg-blue-200" },
      { name: "PyTorch", color: "bg-yellow-200" },
    ],
  },
  {
    title: "Wireless RC Plane",
    description: "Developed a wireless remote control plane using the ESP32 microprocessor and servos",
    technologies: [{ name: "Arduino", color: "bg-amber-200" }],
  },
]
