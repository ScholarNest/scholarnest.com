import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();

  const redirects = {
    '/courses/': 'https://www.scholarnest.com/',
    '/master-big-data-engineering-using-apache-spark-and-azure-databricks-cloud/': 'https://www.scholarnest.com/scholarnest-academy',
    '/upcoming-live-courses/': 'https://www.scholarnest.com/scholarnest-academy',
    '/login': 'https://www.scholarnest.com/',
    '/login/': 'https://www.scholarnest.com/',
    '/course-category/free-courses/': 'https://www.scholarnest.com/scholarnest-academy',
    '/deep-dive-into-spark-memory-allocation': 'https://www.scholarnest.com/scholarnest-academy',
    '/course-category/data-engineering/': 'https://www.scholarnest.com/scholarnest-academy',
    '/collections/databricks-spark-certification-mentorship': 'https://www.scholarnest.com/scholarnest-academy',
    '/how-to-access-lms/': 'https://www.scholarnest.com/scholarnest-academy',
    '/about-us': 'https://www.scholarnest.com/company',
    '/how-to-remove-duplicate-rows-from-spark-dataframe': 'https://www.scholarnest.com/scholarnest-academy',
    '/courses/spark-programming-in-scala-for-beginners': 'https://www.scholarnest.com/scholarnest-academy',
    '/contact': 'https://www.scholarnest.com/contact-us',
    '/course-category/live-trainings': 'https://www.scholarnest.com/scholarnest-academy',
    '/category/apache-spark/': 'https://www.scholarnest.com/scholarnest-academy',
    '/collections/instructor-courses/': 'https://www.scholarnest.com/scholarnest-academy',
    '/courses/spark-programming-in-python-for-beginners': 'https://www.scholarnest.com/scholarnest-academy',
    '/courses/kafka-streams-master-class/': 'https://www.scholarnest.com/scholarnest-academy',
    '/course-category/cloud-computing/': 'https://www.scholarnest.com/technology-consulting',
    '/courses/spark-streaming-for-python-programmers/': 'https://www.scholarnest.com/scholarnest-academy',
    '/how-to-create-kafka-streams-application/': 'https://www.scholarnest.com/scholarnest-academy',
    '/category/pyspark/': 'https://www.scholarnest.com/scholarnest-academy',
    '/courses/apache-spark-3-beyond-basics-and-cracking-job-interviews/lessons/spark-memory-allocation/': 'https://www.scholarnest.com/scholarnest-academy',
    '/course-category/careers-growth/': 'https://www.scholarnest.com/career-guidance-and-enhancement',
    '/course-category/data-engineering/page/2/': 'https://www.scholarnest.com/scholarnest-academy',
    '/mastering-spark-and-databricks-cloud-instructor-led-course': 'https://www.scholarnest.com/scholarnest-academy',
    '/course-category/machine-learning-ai': 'https://www.scholarnest.com/scholarnest-academy',
    '/course-category/careers-growth/page/2': 'https://www.scholarnest.com/career-guidance-and-enhancement',
    // '/courses/apache-spark-3-beyond-basics-and-cracking-job-interviews/': 'https://www.scholarnest.com/scholarnest-academy/', //defect
    '/course-category/programmming-languages': 'https://www.scholarnest.com/scholarnest-academy',
    // '/courses/apache-kafka-for-beginners/': 'https://www.scholarnest.com/scholarnest-academy',
    '/courses/apache-spark-3-beyond-basics-and-cracking-job-interviews/lessons/data-caching-in-spark': 'https://www.scholarnest.com/scholarnest-academy',
    '/what-is-apache-kafka': 'https://www.scholarnest.com/scholarnest-academy',
    '/courses/apache-spark-3-beyond-basics-and-cracking-job-interviews/lessons/spark-memory-management': 'https://www.scholarnest.com/scholarnest-academy',
    '/courses/spark-streaming-for-scala-programmers': 'https://www.scholarnest.com/scholarnest-academy',
    '/courses/apache-kafka-big-picture-for-beginners': 'https://www.scholarnest.com/scholarnest-academy',
    '/become-an-instructor': 'https://www.scholarnest.com/teach',
    '/courses/apache-spark-3-beyond-basics-and-cracking-job-interviews/lessons/lets-practice-quiz-2-solution-video': 'https://www.scholarnest.com/scholarnest-academy',
    '/mastering-spark-and-databricks-cloud-self-paced-course': 'https://www.scholarnest.com/scholarnest-academy',
    '/courses/apache-spark-3-beyond-basics-and-cracking-job-interviews/lessons/spark-cluster-and-runtime-architecture': 'https://www.scholarnest.com/scholarnest-academy',
    '/courses/apache-spark-3-beyond-basics-and-cracking-job-interviews/lessons/repartition-and-coalesce': 'https://www.scholarnest.com/scholarnest-academy',
    '/courses/apache-spark-3-beyond-basics-and-cracking-job-interviews/lessons/help-me-add-more-content-demand-for-more': 'https://www.scholarnest.com/scholarnest-academy',
    '/courses/apache-spark-3-beyond-basics-and-cracking-job-interviews/lessons/broadcast-variables': 'https://www.scholarnest.com/scholarnest-academy',
    '/author/prashant': 'https://www.scholarnest.com/scholarnest-academy',
    '/courses/apache-spark-3-beyond-basics-and-cracking-job-interviews/lessons/handling-data-skew-in-spark-joins': 'https://www.scholarnest.com/scholarnest-academy',
  };

  for (const key in redirects) {
    if (url.pathname === key) {
      const redirectUrl = redirects[key];
      return NextResponse.redirect(new URL(redirectUrl, request.url));
    }
  }

  return NextResponse.next();
}
