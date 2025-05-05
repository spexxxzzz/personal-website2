import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-16">
      <header>
        <h1 className="text-xl font-normal">manglam kartik</h1>
      </header>

      <main className="mt-16">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="flex-1 space-y-6">
            <h2 className="text-6xl font-bold -mt-4 -ml-1">
              <span className="text-red-600">Hello,</span> I&apos;m Kartik
            </h2>
            <div className="space-y-4 text-base">
              <p>
              I am entrepreneur since age of 18. I love deep tech startups and all the companies in which I have been a founding member are tech companies. 

              </p>
              <p>
                I am a Co-Founder & CEO @{" "}
                <Link href="https://cogni-landing.vercel.app" className="underline hover:no-underline">
                  AutoBro
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
              {/*<Link href="https://github.com/spexxxzzz" aria-label="GitHub">
                <Github className="w-6 h-6" />
              </Link>*/}
              <Link href="https://www.linkedin.com/in/manglamkartik/" aria-label="LinkedIn">
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

        <section className="mt-24">
          <h2 className="text-4xl font-bold mb-8">Internships & Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {internships.map((internship) => (
              <div key={internship.title} className="bg-gray-900 p-4 rounded-md">
                <h3 className="font-bold text-lg">{internship.title}</h3>
                <p className="text-sm mt-1 mb-4">{internship.description}</p>
                <div className="flex flex-wrap gap-2">
                  {internship.technologies.map((tech) => (
                    <span key={tech.name} className={`text-xs px-2 py-1 rounded ${tech.color}`}>
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <h2 className="text-4xl font-bold mb-8">Competitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {competitions.map((competition) => (
              <div key={competition.title} className="bg-gray-900 p-4 rounded-md">
                <h3 className="font-bold text-lg">{competition.title}</h3>
                <p className="text-sm mt-1 mb-4">{competition.description}</p>
                <div className="flex flex-wrap gap-2">
    
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 mb-16">
          <h2 className="text-4xl font-bold">Wanna get in touch?</h2>
          <div className="mt-4">
            <a href="mailto:neelshah020604@gmail.com" className="text-lg underline hover:no-underline">
              manglam28official@gmail.com
            </a>
            <p className="text-gray-400 mt-1">+91 7007708794</p>
            <p className="text-gray-400 mt-1">Based in Mumbai, India</p>
          </div>
        </section>
      </main>
    </div>
  )
}

const projects = [
  {
    title: "Dynamic Wireless Charging of EVs",
    description: " Developed a miniature prototype of dynamic wireless charging of EVs",
    technologies: [
      { name: "Embedded Systems", color: "bg-amber-200" },
      { name: "Signal Processing", color: "bg-yellow-200" },
      { name: "Microcontroller", color: "bg-blue-200" },
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
    title: "Cogni",
    description: "Cogni is a collabrative chat platform for personalised AI Agents to interact with each other",
    technologies: [
      { name: "Web Sockets ", color: "bg-blue-200" },
      { name: "Agentic AI Frameworks", color: "bg-yellow-200" },
    ],
  },
  {
    title: "Web of AI Agents - Research Paper",
    description: "Ongoing Research Paper on a Web of AI Agents",
    technologies: [{ name: "Agentic AI", color: "bg-blue-600 text-white" }],
  },
  {
    title: "EVibe Research Paper",
    description: "Attempts to find trends in stock prices and predict future prices",
    technologies: [
      { name: "Electronics", color: "bg-blue-200" },
      { name: "Power Engineering", color: "bg-yellow-200" },
    ],
  },
  {
    title: "Wireless RC Plane",
    description: "Developed a wireless remote control plane using the ESP32 microprocessor and servos",
    technologies: [{ name: "Arduino", color: "bg-amber-200" }],
  },
]

const internships = [
  {
    title: "Co-Founder & CEO - AutoBro",
    description: "AutoBro is a cloud based platform that allows AI Agents to surf the browser",
    technologies: [
      { name: "Agentic AI", color: "bg-amber-200" },
      { name: "Web & Browser", color: "bg-blue-200" },
    ],
  },
  {
    title: "Co-Founder of EVibe",
    description: "Evibe is a deeptech project the works on dynamic wireless charging of EVs",
    technologies: [
      { name: "Dynamic Wireless Charging", color: "bg-blue-600 text-white" },
      { name: "Power transmission", color: "bg-red-500 text-white" },
    ],
  },
  {
    title: "Founding Team Member & Sales head of BPrep",
    description: "Bprep is an Edtech company and I was the sales head and in the GTM strategy",
    technologies: [
      { name: "Sales", color: "bg-blue-200" },
      { name: "Marketing", color: "bg-yellow-200" },
    ],
  },
  {
    title: "Software Engineering Intern - BPrep",
    description: "Developed web applications for the BPrep platform",
    technologies: [
      { name: "React", color: "bg-amber-200" },
      { name: "Next.js", color: "bg-blue-200" },
    ],
  },
  {
    title: "AI Engineering Intern - Choira",
    description: "Optimized audio analysis pipelines using deep learning to improve user experience and content discovery",
    technologies: [
      { name: "LLMs", color: "bg-orange-200" },
      { name: "Finetuning", color: "bg-purple-200" },
    ],
  },
  {
    title: "Coordinator at ECell - IIT Bombay",
    description: "Hosted the 10min Million Challenge",
    technologies: [
      { name: "Management", color: "bg-blue-300" },
    ],
  },
]

const competitions = [
  {
    title: "EMC Global Japan",
    description: "Won the Entrepreneurship competition from India and a sponsor trip to Japan for sightseeing",
  },
  {
    title: "Smart India Hackathon 2024 - 1st Prize",
    description: "Won Smart India Hackathon 2024 under Innovation in Logistics and Transportation and got a cash prize of $1200 from Government of India",
  },
  {
    title: "ITSP (Institute Technical Summer Project) 2024",
    description: "Won 3rd prize in the technical project competition for innovative EV charging solution",
  },
]
