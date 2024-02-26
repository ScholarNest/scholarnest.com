import React from 'react'
import classes from "./style/moreAcademyInstructor.module.css";
import { Carousel } from 'react-responsive-carousel';

const MoreAcademyInstructor = () => {
    const keyHighlight=[
        {
            id:1,
            title:'Weekend Live Sessions',
            img:'/assets/solutions/more-academy/weekend-live.svg'
        },
        {
            id:2,
            title:'Industry-Tailored Curriculum for Real-World Relevance',
            img:'/assets/solutions/more-academy/industry-tailored.svg'
        },
        {
            id:3,
            title:'Tailored for Experienced Professionals',
            img:'/assets/solutions/more-academy/tailored-for-experienced.svg'
        },
        {
            id:4,
            title:'Program with a Thoughtfully Structured Curriculum',
            img:'/assets/solutions/more-academy/program-with-a-thoughtfully.svg'
        },
        {
            id:5,
            title:'High-Quality, Engaging Course Content',
            img:'/assets/solutions/more-academy/high-quality.svg'
        },
        {
            id:6,
            title:'Hands-On Learning for Practical Mastery',
            img:'/assets/solutions/more-academy/hands-on-learning.svg'
        },
        {
            id:7,
            title:'Robust Student Support System',
            img:'/assets/solutions/more-academy/robust-student.svg'
        },
        {
            id:8,
            title:'Promising Career Guidance',
            img:'/assets/solutions/more-academy/promising-career-guidance.svg'
        }
    ];
    const testimonials=[
        {
          img:"/assets/testimonials/test1.jpg",
          name:"Prajnaya Prakash Nayak",
          designation:"Specialist software engineer ",
          company:"Societe Generale",
          feedback:"I had a wonderful learning experience with Prashant Sir. The course provided valuable insights and I got to learn new things in PySpark & Azure Databricks. The explanations, particularly the real-life scenarios, were clear and relevant to daily work.",
          linkedin:"https://www.linkedin.com/in/prajnaya-prakash-nayak-745856153/"
        },
        {
          img:"/assets/testimonials/test2.jpg",
          name:"Abhishek Pal",
          designation:"Azure Data Engineer",
          company:"Deloitte",
          feedback:"Prashant Sir's course at Scholarnest Technologies significantly closed my knowledge gap in Data Engineering. His live sessions were interactive, insightful, addressing doubts effectively. I highly recommend the Master Pyspark & DataBricks course for career upskilling in data engineering.",
          linkedin:"https://www.linkedin.com/in/abhishek-pal-b09b04b4/"
        },
        {
          img:"/assets/testimonials/test3.jpg",
          name:"Mithran Mohan ",
          designation:"Data Engineer",
          company:"Deloitte",
          feedback:"The PySpark & Databricks Master Course at Scholarnest Technologies is exceptional. Prashant Sir's pedagogy, real-world examples, and practical insights are highly valuable. The added placement support is a significant benefit. I'm genuinely thankful to Prashant Sir and the Scholarnest Team for this transformative experience.",
          linkedin:"https://www.linkedin.com/in/mithran-mohan/"
        }
       ]
    return (
    <>
    <div>
    <h2 class={classes.heading+" my-2 mx-3"+ " " + classes.h2fs}>
    Key highlights of the Master Data Engineering Comprehensive Program
    </h2>
    <br />
    <div className="row mx-auto">
    {
    keyHighlight.map((data,key)=>{
        return (
            <div className="col-12 col-sm-6 col-md-3 px-3 py-2">
            <div className={classes.keybox+" h-100"}>
                <img class="mx-auto" src={data.img} alt={data.title}  />
                <p class={classes.h3styleMain+ " text-center mx-1 my-2 " + classes.pfs}>{data.title}</p>
            </div>

            </div>
        );
    })
    }
    </div>
    </div>
    <br />
    <br />
    <div style={{backgroundColor:"rgb(251 251 249)"}} class="py-2">

    <div  className={classes.feedbackBox} >
        <h2 className={ classes.h2fs+" text-center my-2"}  >What our customers say</h2>
        <br />
        <Carousel
          dynamicHeight={false}
          autoPlay
          infiniteLoop
          interval={7000} // Adjust the interval time as desired
          transitionTime={1000} // Adjust the transition time as desired
          showIndicators={false}
          showThumbs={false}
          stopOnHover={false}>
          {
            testimonials.map((testimonial, index) => {

              return (<div  key={index} style={{ border: "1px groove" }} >
                <div style={{ margin: "0 auto", padding: "10px" }} className="mx-auto">
                  <img style={{ height: "100px", width: "100px", borderRadius: "50%" }} src={testimonial.img} />
                  <div style={{ margin: "2px auto" }}>
                    <p class= {classes.pfs} style={{ margin: "5px" }} > <strong style={{ color: "black" }}>❝ </strong>
                        {testimonial.feedback}
                       <strong style={{ color: "black" }}> ❞</strong></p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <h3 className={ classes.h3fs+" text-center my-2 text-dark fw-bold"}> {testimonial.name}</h3>
                    <a style={{ marginTop: "12px" }} target="_blank" href={testimonial.linkedin}> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="blue" className="bi  ml-2 bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg></a>
                  </div>
                  <p className={classes.pfs+" mb-3"}>{testimonial.designation} @{testimonial.company}</p>

                </div>



              </div>);
            })
          }

        </Carousel>
      </div>
      </div>
    </>
  )
}

export default MoreAcademyInstructor;