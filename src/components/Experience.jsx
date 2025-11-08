import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "💼 Frontend Developer Intern – AICTE",
      duration: "August 2025 – September 2025 | Chennai, India",
      description: `Worked on developing responsive user interfaces using React and Tailwind CSS. 
      Collaborated with a team of interns to create intuitive, accessible, and interactive web layouts for educational platforms. 
      Enhanced user experience by optimizing design performance and implementing reusable components.`,
    },
    {
      title: "🧠 AI & Data Analytics Intern – AICTE x Shell India Markets Pvt. Ltd.",
      duration: "July 2025 – August 2025 | Virtual Internship",
      description: `Completed the Skills4Future program, focusing on AI-driven data processing and analytics. 
      Gained practical experience in Python, NumPy, and Matplotlib for dataset analysis and visualization. 
      Delivered a data-driven project presentation that demonstrated predictive modeling for sustainability case studies.`,
    },
    {
      title: "🤖 Artificial Intelligence Intern – CodSoft",
      duration: "April 2025 – May 2025 | Greater Chennai Area",
      description: `Implemented machine learning models using Python and Scikit-learn to perform classification and regression tasks. 
      Improved accuracy through model fine-tuning and trained custom algorithms for image-based datasets. 
      Strengthened skills in AI workflow design and model deployment basics.`,
    },
    {
      title: "📊 Machine Learning Intern – Prodigy InfoTech",
      duration: "April 2025 | Chennai, India",
      description: `Focused on supervised and unsupervised learning algorithms. 
      Conducted exploratory data analysis (EDA) using Pandas and Seaborn, developing prediction models that achieved measurable accuracy improvements. 
      Collaborated with peers to debug and evaluate models with cross-validation.`,
    },
    {
      title: "🌐 Web Development Intern – Brainwave Matrix Solutions",
      duration: "March 2025 – April 2025 | Chennai, India",
      description: `Developed front-end layouts using HTML, CSS, and JavaScript for client websites. 
      Assisted in integrating REST APIs with front-end components and debugging UI inconsistencies. 
      Delivered responsive designs optimized for cross-browser performance and mobile compatibility.`,
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-[#0a0f1a] text-cyan-400 flex flex-col items-center justify-center px-8 py-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl mb-8 text-cyan-300 tracking-wide">
        Professional Experience
      </h1>

      <div className="max-w-3xl space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="border border-cyan-600 rounded-xl p-5 bg-[#06121f]/50 hover:bg-[#0b1d2b]/70 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-lg text-cyan-300 font-semibold mb-1">
              {exp.title}
            </h2>
            <p className="text-sm text-cyan-500 mb-3">{exp.duration}</p>
            <p className="text-cyan-400 leading-relaxed">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
