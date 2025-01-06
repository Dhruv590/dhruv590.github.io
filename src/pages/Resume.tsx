import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-5xl font-bold mb-12 text-[#E2E2E2]"
        >
          Resume
        </motion.h1>
        
        <div className="bg-[#1A1A1A] rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-[#E2E2E2]">Skills</h2>
          <div className="grid grid-cols-2 gap-4 text-[#888888]">
            <div>
              <h3 className="font-semibold mb-2 text-[#E2E2E2]">Languages</h3>
              <p>Python, Java, C/C++, NumPy, pandas, SciPy</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-[#E2E2E2]">Machine Learning</h3>
              <p>TensorFlow/PyTorch, JAX, scikit-learn, Spark ML, MLflow, llamaindex, LangChain</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-[#E2E2E2]">Big Data & Cloud</h3>
              <p>Spark, Kafka, Airflow, Hadoop, AWS, Databricks, Hugging Face</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-[#E2E2E2]">Frameworks</h3>
              <p>Django, Rest API, Power BI, Tableau, Docker, Jira, Git</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-[#E2E2E2]">Databases</h3>
              <p>SQL(MySQL, PostgreSQL), NoSQL(MongoDB), GraphDB(neo4J), VectoreDB(Pinecone)</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-[#E2E2E2]">Certification</h3>
              <p>AWS Certified Machine Learning - Specialty</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1A1A1A] rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-[#E2E2E2]">Education</h2>
          <div className="mb-4">
            <h3 className="font-semibold text-[#E2E2E2]">Master of Science in Computer Science & Engineering</h3>
            <p className="text-[#888888]">Santa Clara University, 2022-2024</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#E2E2E2]">Bachelor of Science in Computer Science</h3>
            <p className="text-[#888888]">Uka Tarsadiya University, 2018-2022</p>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="https://drive.google.com/file/d/12Pv5y4eZdJyZPwyUsHPnWu6VaD5Wr7M6/view?usp=sharing" 
            download
            className="inline-block px-6 py-3 bg-[#333333] text-[#E2E2E2] rounded-lg hover:bg-[#444444] transition-colors"
          >
            Download Full Resume
          </a>
        </div>
      </div>
    </div>
  );
}