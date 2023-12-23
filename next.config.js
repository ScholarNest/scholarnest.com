// // next.config.js

// module.exports = {
//   async redirects() {
//     return [];
//     // return [
//     //   { source: '/courses/', destination: 'https://www.scholarnest.com/', permanent: true },
//     //   { source: '/master-big-data-engineering-using-apache-spark-and-azure-databricks-cloud/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/upcoming-live-courses/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/login', destination: 'https://www.scholarnest.com/', permanent: true },
//     //   { source: '/login/', destination: 'https://www.scholarnest.com/', permanent: true },
//     //   { source: '/course-category/free-courses/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/deep-dive-into-spark-memory-allocation/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/course-category/data-engineering/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/collections/databricks-spark-certification-mentorship/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/how-to-access-lms/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/about-us/', destination: 'https://www.scholarnest.com/company', permanent: true },
//     //   { source: '/how-to-remove-duplicate-rows-from-spark-dataframe/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/courses/spark-programming-in-scala-for-beginners/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/contact/', destination: 'https://www.scholarnest.com/contact-us', permanent: true },
//     //   { source: '/course-category/live-trainings/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/category/apache-spark/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/collections/instructor-courses/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/courses/spark-programming-in-python-for-beginners/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/courses/kafka-streams-master-class/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/course-category/cloud-computing/', destination: 'https://www.scholarnest.com/technology-consulting', permanent: true },
//     //   { source: '/courses/spark-streaming-for-python-programmers/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/how-to-create-kafka-streams-application/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/category/pyspark/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/courses/apache-spark-3-beyond-basics-and-cracking-job-interviews/lessons/spark-memory-allocation/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/course-category/careers-growth/', destination: 'https://www.scholarnest.com/career-guidance-and-enhancement', permanent: true },
//     //   { source: '/course-category/data-engineering/page/2/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/mastering-spark-and-databricks-cloud-instructor-led-course', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/course-category/machine-learning-ai/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/course-category/careers-growth/page/2/', destination: 'https://www.scholarnest.com/career-guidance-and-enhancement', permanent: true },
//     //   { source: '/courses/apache-spark-3-beyond-basics-and-cracking-job-interviews/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/course-category/programmming-languages/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/courses/apache-kafka-for-beginners/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/courses/apache-spark-3-beyond-basics-and-cracking-job-interviews/lessons/data-caching-in-spark/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/what-is-apache-kafka/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/courses/apache-spark-3-beyond-basics-and-cracking-job-interviews/lessons/spark-memory-management/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/courses/spark-streaming-for-scala-programmers/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/courses/apache-kafka-big-picture-for-beginners/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/become-an-instructor/', destination: 'https://www.scholarnest.com/teach', permanent: true },
//     //   { source: '/courses/apache-spark-3-beyond-basics-and-cracking-job-interviews/lessons/lets-practice-quiz-2-solution-video/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/mastering-spark-and-databricks-cloud-self-paced-course', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/courses/apache-spark-3-beyond-basics-and-cracking-job-interviews/lessons/spark-cluster-and-runtime-architecture/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/courses/apache-spark-3-beyond-basics-and-cracking-job-interviews/lessons/repartition-and-coalesce/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/courses/apache-spark-3-beyond-basics-and-cracking-job-interviews/lessons/help-me-add-more-content-demand-for-more/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/courses/apache-spark-3-beyond-basics-and-cracking-job-interviews/lessons/broadcast-variables/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/author/prashant/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   { source: '/courses/apache-spark-3-beyond-basics-and-cracking-job-interviews/lessons/handling-data-skew-in-spark-joins/', destination: 'https://www.scholarnest.com/scholarnest-academy', permanent: true },
//     //   // Add the remaining redirects here
//     // ];
//   },
// };
module.exports = {
  middleware: async () => {
    require('./middleware.js');
  },
};