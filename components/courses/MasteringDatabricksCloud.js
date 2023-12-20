import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Card } from "@nextui-org/react";
import classes from "./style/extraCourses.module.css";
import { useRouter } from "next/router";

const MasteringDatabricksCloud = () => {
    const router = useRouter();
    const [courseSections , setcourseSections] =useState([]);
     const [showMoreLessText, setShowMoreLessText] = useState('Show more');
    useEffect((()=>{
    setcourseSections(halfcourseSections);
    }),[])
    const halfcourseSections = [
        {
            id:1,
            ques:"Ch1: Getting Started",
            ans:[
            {ansId:1,det:"Ch1 Downloadable Documents",icon:"2",free:"false",link:""},
            {ansId:2,det:"Ch 1 Section Overview",icon:"1",free:"true",link:"https://www.scholarnest.in/enroll/2120430?et=free_trial"},
            {ansId:3,det:"What is Big Data and How it Started",icon:"1",free:"true",link:"https://www.scholarnest.in/enroll/2120430?et=free_trial"},
            {ansId:4,det:"What is Big Data and How it Started - Notes",icon:"3",free:"true",link:"https://www.scholarnest.in/enroll/2120430?et=free_trial"} ,
            {ansId:5,det:"What is Data Lake and How it works",icon:"1",free:"true",link:"https://www.scholarnest.in/enroll/2120430?et=free_trial"},
            {ansId:6,det:"What is Data Lake and How it works - Notes",icon:"3",free:"false",link:""},
            {ansId:7,det:"Introducing Apache Spark and Databricks Cloud",icon:"1",free:"false",link:""},
            {ansId:8,det:"Introducing Apache Spark and Databricks Cloud - Notes",icon:"3",free:"false",link:""},
            {ansId:9,det:"Introducing Azure Databricks",icon:"1",free:"false",link:""},
            {ansId:10,det:"Introducing Azure Databricks - Notes",icon:"3",free:"false",link:""},
            {ansId:11,det:"Challanges with the Data Lake Architecture",icon:"1",free:"false",link:""},
            {ansId:12,det:"Challanges with the Data Lake Architecture - Notes",icon:"3",free:"false",link:""},
            {ansId:13,det:"The Idea of Lakehouse Architecture",icon:"1",free:"true",link:"https://www.scholarnest.in/enroll/2107620?et=free_trial"},
            {ansId:14,det:"The Idea of Lakehouse Architecture - Notes",icon:"3",free:"false",link:""}]
            },
            {
            id:2,
            ques:"Ch2: Setup Your Environment",
            ans:[
            {ansId:1,det:"Ch2 Downloadable Documents",icon:"2",free:"false",link:""},
            {ansId:2,det:"Section Overview",icon:"1",free:"false",link:""},
            {ansId:3,det:"Creating Azure Free Account",icon:"1",free:"false",link:""},
            {ansId:4,det:"Creating Azure Free Account - Notes",icon:"3",free:"false",link:""},
            {ansId:5,det:"Azure Portal Overview",icon:"1",free:"false",link:""},
            {ansId:6,det:"Azure Portal Overview - Notes",icon:"3",free:"false",link:""},
            {ansId:7,det:"Creating Azure Databricks Service",icon:"1",free:"false",link:""},
            {ansId:8,det:"Creating Azure Databricks Service - Notes",icon:"3",free:"false",link:""},
            {ansId:9,det:"Introduction to Azure Databricks Workspace",icon:"1",free:"false",link:""},
            {ansId:10,det:"Introduction to Azure Databricks Workspace - Notes",icon:"3",free:"false",link:""}]
            },
            {
            id:3,
            ques:"Ch3: Introduction to Azure Databricks",
            ans:[
            {ansId:1,det:"Ch3 Downloadable Documents",icon:"2",free:"false",link:""},
            {ansId:2,det:"Ch3 Downloadable Materials",icon:"2",free:"false",link:""},
            {ansId:3,det:"Azure Databricks Architecture",icon:"1",free:"false",link:""},
            {ansId:4,det:"Azure Databricks Architecture - Notes",icon:"3",free:"false",link:""},
            {ansId:5,det:"Azure Databricks Cluster and Configurations",icon:"1",free:"false",link:""},
            {ansId:6,det:"Azure Databricks Cluster and Configurations - Notes",icon:"3",free:"false",link:""},
            {ansId:7,det:"Creating Azure Databricks Cluster",icon:"1",free:"false",link:""},
            {ansId:8,det:"Creating Azure Databricks Cluster - Notes",icon:"3",free:"false",link:""},
            {ansId:9,det:"Azure Databricks Cluster Pool",icon:"1",free:"false",link:""},
            {ansId:10,det:"Azure Databricks Cluster Pool - Notes",icon:"3",free:"false",link:""},
            {ansId:11,det:"Introduction to Databricks Notebooks",icon:"1",free:"false",link:""},
            {ansId:12,det:"Introduction to Databricks Notebooks - Notes",icon:"3",free:"false",link:""},
            {ansId:13,det:"Notebook Magic Commands",icon:"1",free:"false",link:""},
            {ansId:14,det:"Notebook Magic Commands - Notes",icon:"3",free:"false",link:""},
            {ansId:15,det:"Databricks Notebook Utilities",icon:"1",free:"false",link:""},
            {ansId:16,det:"Databricks Notebook Utilities - Notes",icon:"3",free:"false",link:""}]
            },
            {
            id:4,
            ques:"Ch4: Design and Implement Lakehouse Storage",
            ans:[
            {ansId:1,det:"Ch4 Downloadable Documents",icon:"2",free:"false",link:""},
            {ansId:2,det:"Ch4 Downloadable Materials",icon:"2",free:"false",link:""},
            {ansId:3,det:"Ch4 Section Overview",icon:"1",free:"false",link:""},
            {ansId:4,det:"Databricks File System and Storage Layer Architecture",icon:"1",free:"false",link:""},
            {ansId:5,det:"Databricks File System and Storage Layer Architecture - Notes",icon:"3",free:"false",link:""},
            {ansId:6,det:"Exploring DBFS Root",icon:"1",free:"false",link:""},
            {ansId:7,det:"Exploring DBFS Root - Notes",icon:"3",free:"false",link:""},
            {ansId:8,det:"Overview of Mounting Storage Layer",icon:"1",free:"false",link:""},
            {ansId:9,det:"Overview of Mounting Storage Layer - Notes",icon:"3",free:"false",link:""},
            {ansId:10,det:"Introduction to Azure Storage Account",icon:"1",free:"false",link:""},
            {ansId:11,det:"Introduction to Azure Storage Account - Notes",icon:"3",free:"false",link:""},
            {ansId:12,det:"Creating Azure Storage Account",icon:"1",free:"false",link:""},
            {ansId:13,det:"Creating Azure Storage Account - Notes",icon:"3",free:"false",link:""},
            {ansId:14,det:"Introduction to Azure Storage Explorer",icon:"1",free:"false",link:""},
            {ansId:15,det:"Introduction to Azure Storage Explorer - Notes",icon:"3",free:"false",link:""},
            {ansId:16,det:"Creating Azure Service Principal and Secret",icon:"1",free:"false",link:""},
            {ansId:17,det:"Creating Azure Service Principal and Secret - Notes",icon:"3",free:"false",link:""},
            {ansId:18,det:"Granting Access to Storage Account",icon:"1",free:"false",link:""},
            {ansId:19,det:"Granting Access to Storage Account - Notes",icon:"3",free:"false",link:""},
            {ansId:20,det:"Mounting Your Storage Containers",icon:"1",free:"false",link:""},
            {ansId:21,det:"Mounting Your Storage Containers - Notes",icon:"3",free:"false",link:""},
            {ansId:22,det:"Overview of Securing your Service Secret",icon:"1",free:"false",link:""},
            {ansId:23,det:"Overview of Securing your Service Secret - Notes",icon:"3",free:"false",link:""},
            {ansId:24,det:"Creating and Storing Secrets in Azure Key Vault",icon:"1",free:"false",link:""},
            {ansId:25,det:"Creating and Storing Secrets in Azure Key Vault - Notes",icon:"3",free:"false",link:""},
            {ansId:26,det:"Link Azure Key Vault with Databricks Service",icon:"1",free:"false",link:""},
            {ansId:27,det:"Link Azure Key Vault with Databricks Service - Notes",icon:"3",free:"false",link:""},
            {ansId:28,det:"Mounting Your Storage Containers",icon:"1",free:"false",link:""},
            {ansId:29,det:"Mounting Your Storage Containers - Notes",icon:"3",free:"false",link:""},
            {ansId:30,det:"Using Databricks CLI",icon:"1",free:"false",link:""},
            {ansId:31,det:"Using Databricks CLI - Notes",icon:"3",free:"false",link:""}]
            },
            {
            id:5,
            ques:"Ch5: Implementing Medallion Lakehouse Architecture",
            ans:[
            {ansId:1,det:"Ch5 Downloadable Documents",icon:"2",free:"false",link:""},
            {ansId:2,det:"Ch5 Downloadable Materials",icon:"2",free:"false",link:""},
            {ansId:3,det:"Ch5 Section Overview",icon:"1",free:"false",link:""},
            {ansId:4,det:"Micro Project - Problem statement",icon:"1",free:"false",link:""},
            {ansId:5,det:"Micro Project - Problem statement - Notes",icon:"3",free:"false",link:""},
            {ansId:6,det:"Data Ingestion into Bronze Layer",icon:"1",free:"false",link:""},
            {ansId:7,det:"Data Ingestion into Bronze Layer - Notes",icon:"3",free:"false",link:""},
            {ansId:8,det:"Working with Spark Data Frames",icon:"1",free:"false",link:""},
            {ansId:9,det:"Working with Spark Data Frames - Notes",icon:"3",free:"false",link:""},
            {ansId:10,det:"Creating Modular Application Structure",icon:"1",free:"false",link:""},
            {ansId:11,det:"Creating Modular Application Structure - Notes",icon:"3",free:"false",link:""},
            {ansId:12,det:"Using Spark SQL",icon:"1",free:"false",link:""},
            {ansId:13,det:"Using Spark SQL - Notes",icon:"3",free:"false",link:""},
            {ansId:14,det:"Micro Project Solution Design",icon:"1",free:"false",link:""},
            {ansId:15,det:"Micro Project Solution Design - Notes",icon:"3",free:"false",link:""},
            {ansId:16,det:"Implementing Silver Layer Transformations",icon:"1",free:"false",link:""},
            {ansId:17,det:"Implementing Silver Layer Transformations - Notes",icon:"3",free:"false",link:""},
            {ansId:18,det:"Implementing Gold Layer Transformations",icon:"1",free:"false",link:""},
            {ansId:19,det:"Implementing Gold Layer Transformations - Notes",icon:"3",free:"false",link:""},
            {ansId:20,det:"Creating Databricks Workflow",icon:"1",free:"false",link:""},
            {ansId:21,det:"Creating Databricks Workflow - Notes",icon:"3",free:"false",link:""},
            {ansId:22,det:"Scheduling and Running Spark Jobs",icon:"1",free:"false",link:""},
            {ansId:23,det:"Scheduling and Running Spark Jobs - Notes",icon:"3",free:"false",link:""}]
            },
            
       

    ]
    const extraCourseSection=[
        {
            id:6,
            ques:"Ch6: Handling Incremental Data in Lakehouse",
            ans:[
            {ansId:1,det:"Ch6 Downloadable Documents",icon:"2",free:"false",link:""},
            {ansId:2,det:"Ch6 Downloadable Materials",icon:"2",free:"false",link:""},
            {ansId:3,det:"Micro Project - Problem statement",icon:"1",free:"false",link:""},
            {ansId:4,det:"Micro Project - Problem statement - Notes",icon:"3",free:"false",link:""},
            {ansId:5,det:"Understanding Delta Lake",icon:"1",free:"false",link:""},
            {ansId:6,det:"Understanding Delta Lake - Notes",icon:"3",free:"false",link:""},
            {ansId:7,det:"Incremental Ingestion into Bronze Layer",icon:"1",free:"false",link:""},
            {ansId:8,det:"Incremental Ingestion into Bronze Layer - Notes",icon:"3",free:"false",link:""},
            {ansId:9,det:"Silver Layer - Historial and Incremental Data",icon:"1",free:"false",link:""},
            {ansId:10,det:"Silver Layer - Historial and Incremental Data - Notes",icon:"3",free:"false",link:""},
            {ansId:11,det:"Implementing Silver Layer",icon:"1",free:"false",link:""},
            {ansId:12,det:"Implementing Silver Layer - Notes",icon:"3",free:"false",link:""},
            {ansId:13,det:"Understanding Silver Layer Implementation",icon:"1",free:"false",link:""},
            {ansId:14,det:"Understanding Silver Layer Implementation - Notes",icon:"3",free:"false",link:""},
            {ansId:15,det:"Gold Layer - Historial and Incremental Data",icon:"1",free:"false",link:""},
            {ansId:16,det:"Gold Layer - Historial and Incremental Data - Notes",icon:"3",free:"false",link:""},
            {ansId:17,det:"Implementing Gold Layer",icon:"1",free:"false",link:""},
            {ansId:18,det:"Implementing Gold Layer - Notes",icon:"3",free:"false",link:""},
            {ansId:19,det:"Understanding Gold Layer Implementation",icon:"1",free:"false",link:""},
            {ansId:20,det:"Understanding Gold Layer Implementation - Notes",icon:"3",free:"false",link:""},
            {ansId:21,det:"Summarizing Incremental Processing",icon:"1",free:"false",link:""},
            {ansId:22,det:"Summarizing Incremental Processing - Notes",icon:"3",free:"false",link:""},
            {ansId:23,det:"Data Engineering Roles and Responsibilities",icon:"1",free:"false",link:""},
            {ansId:24,det:"Data Engineering Roles and Responsibilities - Notes",icon:"3",free:"false",link:""}]
            },
            {
            id:7,
            ques:"Ch7: Deep Dive into Delta Lake",
            ans:[
            {ansId:1,det:"Ch7 Downloadable Documents",icon:"2",free:"false",link:""},
            {ansId:2,det:"Ch7 Downloadable Materials",icon:"2",free:"false",link:""},
            {ansId:3,det:"Introduction to Delta Lake",icon:"1",free:"false",link:""},
            {ansId:4,det:"Introduction to Delta Lake - Notes",icon:"3",free:"false",link:""},
            {ansId:5,det:"Creating Delta Tables",icon:"1",free:"false",link:""},
            {ansId:6,det:"Creating Delta Tables - Notes",icon:"3",free:"false",link:""},
            {ansId:7,det:"Delta Table Operations",icon:"1",free:"false",link:""},
            {ansId:8,det:"Delta Table Operations - Notes",icon:"3",free:"false",link:""},
            {ansId:9,det:"Managing Delta Table Schema",icon:"1",free:"false",link:""},
            {ansId:10,det:"Managing Delta Table Schema - Notes",icon:"3",free:"false",link:""},
            {ansId:11,det:"Schema Evolution in Delta Tables",icon:"1",free:"false",link:""},
            {ansId:12,det:"Schema Evolution in Delta Tables - Notes",icon:"3",free:"false",link:""},
            {ansId:13,det:"Delta Table Time travel and versions",icon:"1",free:"false",link:""},
            {ansId:14,det:"Delta Table Time travel and versions - Notes",icon:"3",free:"false",link:""},
            {ansId:15,det:"Delta Lake Tools and Utilities",icon:"1",free:"false",link:""},
            {ansId:16,det:"Delta Lake Tools and Utilities - Notes",icon:"3",free:"false",link:""},
            {ansId:17,det:"Delta Table Optimizations",icon:"1",free:"false",link:""},
            {ansId:18,det:"Delta Table Optimizations - Notes",icon:"3",free:"false",link:""}]
            },
            {
            id:8,
            ques:"Ch8: Unity Catlog",
            ans:[
            {ansId:1,det:"Ch8 Downloadable Documents",icon:"2",free:"false",link:""},
            {ansId:2,det:"Ch8 Downloadable Materials",icon:"2",free:"false",link:""},
            {ansId:3,det:"Introduction to Unity Catalog",icon:"1",free:"false",link:""},
            {ansId:4,det:"Introduction to Unity Catalog - Notes",icon:"3",free:"false",link:""},
            {ansId:5,det:"How to setup Unity Catalog",icon:"1",free:"false",link:""},
            {ansId:6,det:"How to setup Unity Catalog - Notes",icon:"3",free:"false",link:""},
            {ansId:7,det:"Creating Metastore Root",icon:"1",free:"false",link:""},
            {ansId:8,det:"Creating Metastore Root - Notes",icon:"3",free:"false",link:""},
            {ansId:9,det:"Creating Unity Catalog Metastore",icon:"1",free:"false",link:""},
            {ansId:10,det:"Creating Unity Catalog Metastore - Notes",icon:"3",free:"false",link:""},
            {ansId:11,det:"Unity Catalog User Provisioning and Management",icon:"1",free:"false",link:""},
            {ansId:12,det:"Unity Catalog User Provisioning and Management - Notes",icon:"3",free:"false",link:""},
            {ansId:13,det:"Managing Users, Groups and Roles",icon:"1",free:"false",link:""},
            {ansId:14,det:"Managing Users, Groups and Roles - Notes",icon:"3",free:"false",link:""},
            {ansId:15,det:"Creating and Managing Catalog",icon:"1",free:"false",link:""},
            {ansId:16,det:"Creating and Managing Catalog - Notes",icon:"3",free:"false",link:""},
            {ansId:17,det:"Managing Workspace and Cluster Permissions",icon:"1",free:"false",link:""},
            {ansId:18,det:"Managing Workspace and Cluster Permissions - Notes",icon:"3",free:"false",link:""},
            {ansId:19,det:"Creating and Managing Cluster Policies",icon:"1",free:"false",link:""},
            {ansId:20,det:"Creating and Managing Cluster Policies - Notes",icon:"3",free:"false",link:""},
            {ansId:21,det:"Securable Objects and Privileges",icon:"1",free:"false",link:""},
            {ansId:22,det:"Securable Objects and Privileges - Notes",icon:"3",free:"false",link:""},
            {ansId:23,det:"Creating and Managing External Locations",icon:"1",free:"false",link:""},
            {ansId:24,det:"Creating and Managing External Locations - Notes",icon:"3",free:"false",link:""}]
            },
            {
            id:9,
            ques:"Ch9: Structured Streaming and AutoLoader",
            ans:[
            {ansId:1,det:"Ch9 Downloadable Documents",icon:"2",free:"false",link:""},
            {ansId:2,det:"Ch9 Downloadable Materials",icon:"2",free:"false",link:""},
            {ansId:3,det:"Micro Project - Problem statement",icon:"1",free:"false",link:""},
            {ansId:4,det:"Micro Project - Problem statement - Notes",icon:"3",free:"false",link:""},
            {ansId:5,det:"Design your Lakehouse Environment",icon:"1",free:"false",link:""},
            {ansId:6,det:"Design your Lakehouse Environment - Notes",icon:"3",free:"false",link:""},
            {ansId:7,det:"Development Environment Setup",icon:"1",free:"false",link:""},
            {ansId:8,det:"Development Environment Setup - Notes",icon:"3",free:"false",link:""},
            {ansId:9,det:"Working with External Location",icon:"1",free:"false",link:""},
            {ansId:10,det:"Working with External Location - Notes",icon:"3",free:"false",link:""},
            {ansId:11,det:"Streaming Ingestion to Bronze Layer",icon:"1",free:"false",link:""},
            {ansId:12,det:"Streaming Ingestion to Bronze Layer - Notes",icon:"3",free:"false",link:""},
            {ansId:13,det:"Spark Structured Streaming Model",icon:"1",free:"false",link:""},
            {ansId:14,det:"Spark Structured Streaming Model - Notes",icon:"3",free:"false",link:""},
            {ansId:15,det:"Structured Streaming Features",icon:"1",free:"false",link:""},
            {ansId:16,det:"Structured Streaming Features - Notes",icon:"3",free:"false",link:""},
            {ansId:17,det:"Fault Tolerance and Restarts in Structured Streaming",icon:"1",free:"false",link:""},
            {ansId:18,det:"Fault Tolerance and Restarts in Structured Streaming- Notes",icon:"3",free:"false",link:""},
            {ansId:19,det:"Autoloader and Streaming Ingestion",icon:"1",free:"false",link:""},
            {ansId:20,det:"Autoloader and Streaming Ingestion - Notes",icon:"3",free:"false",link:""},
            {ansId:21,det:"Autoloader Schema Evolution",icon:"1",free:"false",link:""},
            {ansId:22,det:"Autoloader Schema Evolution - Notes",icon:"3",free:"false",link:""}]
            },
            {
            id:10,
            ques:"Ch10: Delta Live Table",
            ans:[
            {ansId:1,det:"Ch10 Downloadable Documents",icon:"2",free:"false",link:""},
            {ansId:2,det:"Ch10 Downloadable Materials",icon:"2",free:"false",link:""},
            {ansId:3,det:"Introduction to DLT Pipeline",icon:"1",free:"false",link:""},
            {ansId:4,det:"Introduction to DLT Pipeline - Notes",icon:"3",free:"false",link:""},
            {ansId:5,det:"Using Auto Loader in Delta Live Tables",icon:"1",free:"false",link:""},
            {ansId:6,det:"Using Auto Loader in Delta Live Tables - Notes",icon:"3",free:"false",link:""},
            {ansId:7,det:"Implementing Data Quality using DLT",icon:"1",free:"false",link:""},
            {ansId:8,det:"Implementing Data Quality using DLT - Notes",icon:"3",free:"false",link:""},
            {ansId:9,det:"Implementing SCD Type 2 using DLT",icon:"1",free:"false",link:""},
            {ansId:10,det:"Implementing SCD Type 2 using DLT - Notes",icon:"3",free:"false",link:""},
            {ansId:11,det:"Implementing CDC using DLT",icon:"1",free:"false",link:""},
            {ansId:12,det:"Implementing CDC using DLT - Notes",icon:"3",free:"false",link:""},
            {ansId:13,det:"Implementing full refresh using DLT",icon:"1",free:"false",link:""},
            {ansId:14,det:"Implementing full refresh using DLT - Notes",icon:"3",free:"false",link:""}]
            },
            {
            id:11,
            ques:"Lakehouse Fundamentals Exam Practice Test.",
            ans:[
            {ansId:1,det:"Must Read: About Lakehouse Fundamentals Exam Practice Test",icon:"5",free:"false",link:""},
            {ansId:2,det:"Lakehouse Fundamentals Exam Practice Test - Evaluation Mode",icon:"4",free:"false",link:""},
            {ansId:3,det:"Lakehouse Fundamentals Exam Practice Test - Review Mode",icon:"4",free:"false",link:""}]
            },
            {
            id:12,
            ques:"Lakehouse Capstone Project",
            ans:[
            {ansId:1,det:"Project Source Code and Resources",icon:"2",free:"false",link:""},
            {ansId:2,det:"Project Scope and Background",icon:"1",free:"false",link:""},
            {ansId:3,det:"Taking out the operational requirement",icon:"1",free:"false",link:""},
            {ansId:4,det:"Storage Design",icon:"1",free:"false",link:""},
            {ansId:5,det:"Implement Data Security",icon:"1",free:"false",link:""},
            {ansId:6,det:"Implement Resource Policies",icon:"1",free:"false",link:""},
            {ansId:7,det:"Decouple Data Ingestion",icon:"1",free:"false",link:""},
            {ansId:8,det:"Design Bronze Layer",icon:"1",free:"false",link:""},
            {ansId:9,det:"Design Silver and Gold Layer",icon:"1",free:"false",link:""},
            {ansId:10,det:"Setup your source control",icon:"1",free:"false",link:""},
            {ansId:11,det:"Setup your environment",icon:"1",free:"false",link:""},
            {ansId:12,det:"Create a development workspace",icon:"1",free:"false",link:""},
            {ansId:13,det:"Create and Configure Storage Layer",icon:"1",free:"false",link:""},
            {ansId:14,det:"Create Unity Catalog Metastore",icon:"1",free:"false",link:""},
            {ansId:15,det:"Create Catalog and External Locations",icon:"1",free:"false",link:""},
            {ansId:16,det:"Start Coding",icon:"1",free:"false",link:""},
            {ansId:17,det:"Test your code",icon:"1",free:"false",link:""},
            {ansId:18,det:"Load historical data",icon:"1",free:"false",link:""},
            {ansId:19,det:"Ingest into bronze layer",icon:"1",free:"false",link:""},
            {ansId:20,det:"Process the silver layer",icon:"1",free:"false",link:""},
            {ansId:21,det:"Handling multiple updates",icon:"1",free:"false",link:""},
            {ansId:22,det:"Implementing Gold Layer",icon:"1",free:"false",link:""},
            {ansId:23,det:"Creating a run script",icon:"1",free:"false",link:""},
            {ansId:24,det:"Preparing for Integration testing",icon:"1",free:"false",link:""},
            {ansId:25,det:"Creating Test Data Producer",icon:"1",free:"false",link:""},
            {ansId:26,det:"Creating Integration Test for Batch mode",icon:"1",free:"false",link:""},
            {ansId:27,det:"Creating Integration Test for Stream mode",icon:"1",free:"false",link:""},
            {ansId:28,det:"Implementing CI CD Pipeline",icon:"1",free:"false",link:""},
            {ansId:29,det:"Develop Build Pipeline",icon:"1",free:"false",link:""},
            {ansId:30,det:"Develop Release Pipeline",icon:"1",free:"false",link:""},
            {ansId:31,det:"Creating Databricks CLI Script",icon:"1",free:"false",link:""}]
            }
            
    ]
   
    const IndcourseList = [
        {
            heading:"Mastering PySpark",
            desc:"Self-paced",
            imgPath:"/assets/solutions/AcademySolutions/2.png",
            price: "$149",
            link:"/courses/mastering-pyspark"
          },
          {
            heading:"Databricks Data Engineer Assoicate Certification Practice Test",
            desc:"Self-paced Exam Practice Test",
            imgPath:"/assets/solutions/AcademySolutions/5.png",
            price: "$36.79",
            link:"courses/databricks-data-engineer-associate-certification-practice-test"
          },
        {
            heading: "Just Enough Python for PySpark Developers",
            desc: "Self-paced Learning",
            imgPath: "/assets/solutions/MoreAcademySolutions/courses/justpython.jpg",
            price: "$24.79",
            link: "just-enough-python-for-pyspark-developers"
        },
        
       

    ]
    const Faqs = [
        {
            id: "faq1",
            ques: "How long can I access the course material?",
            ans: "We provide lifetime access to the course material."
        },
        {
            id: "faq2",
            ques: "Do you have refund policy?",
            ans: "Yes. You can ask for a refund within 7 days of your purchase or before completing 15% of any course material, whichever is earlier. We provide a refund after deducting 6% of payment processing charges."
        },
        {
            id: "faq3",
            ques: "How do you provide support?",
            ans: "We have a Q&A forum where you can ask questions, and our team will answer your queries. We also provide a course coordinator's email address and WhatsApp number so you can reach out to us if you need one-to-one technical support."
        }
    ]
    const renderIcon = (icon) => {
        // Depending on the icon value, render the respective icon
        // You can replace these with your own icon components or images
        if (icon === "1") {
          return <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-camera-video" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"/>
        </svg>; // Replace with your icon
        } else if (icon === "2") {
          return <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-cloud-arrow-down" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z"/>
          <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
        </svg>; // Replace with your icon
        } else if (icon === "3") {
          return <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-filetype-pdf" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/>
        </svg>; // Replace with your icon
        } else if (icon === "4"){
           return <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-journal-code" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708m-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708z"/>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
</svg>;
          // Handle other cases or return a default icon
        }else{
            return null;
        }
      };
    const ExtendCourseList=()=>{
        if(showMoreLessText==='Show more'){
        const extendedList=[...courseSections,...extraCourseSection];
      setcourseSections(extendedList)
      setShowMoreLessText('Show less');
      }else{
         setShowMoreLessText('Show more');
        setcourseSections(halfcourseSections);
      }
    }
    return (
        <>
           <div class={classes.mainBody}>
            <div className={classes.banner + " d-flex justify-content-center align-items-center"}>
                <div class="mx-auto w-75">
                    <h1>Mastering Databricks Cloud</h1>

                    <h3 class="text-white text-center"> Master Lakehouse Implementation | Azure Databricks | Data Engineer</h3>
                    <div class={classes.butns + " row gap-2 justify-content-center"}>
                        <button onClick={()=>{router.push('https://www.scholarnest.in/cart/add_product/2107620?price_id=2854666')}} class={classes.nfpbutn+" col-sm-5 col-md-3  col-12 "}>   Buy self-paced for $149.00</button>

                        <button  onClick={()=>{router.push('https://docs.google.com/forms/d/e/1FAIpQLSczeKG6-u1esN6_N8dQSFD3C8_BVg9jj3uJEoBU-37jn5IYhw/viewform')}} class={classes.nfpbutn+" col-sm-5  col-md-3 col-12 "}> Enquire for Instructor-led </button>
                        <button  onClick={()=>{router.push('https://www.scholarnest.in/order?ct=4a985180-1b61-4aee-8dfa-cf06b6fa5ff5')}} class=" col-sm-5 col-md-2 col-12 btn btn-light   "> Free Preview  </button>
                    </div>
                    <br />
                </div>
            </div>
            <br />
            <br />
            {/* 2nd section */}
            <div className={classes.secondDiv +" row mx-4 px-md-2"}>
            <h2 class={classes.headings}>What you'll learn</h2>
                
                <div className=" col-12 col-sm-12 col-md-6 h-100">
                <br />
                <br />
                    <h3 class='my-2 px-md-2'>Mastering Databricks Cloud is a comprehensive course that will help you become proficient in Databricks Cloud Platform, Lakehouse Architecture, Incremental Data Processing, Unity Catalog, Delta Lake, Autoloader, Delta Live Table, Databricks CLI and Rest API for Automation. </h3>

                </div>
                <div className={classes.afterSecndDiv+" col-12 col-sm-12 col-md-6 px-2 px-md-5"}>
                <br />

                <br />
                    <p class="d-flex my-2"> <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class={classes.sideIcon+" bi  mr-3 bi-check-circle-fill"} viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>Databricks Cloud - Working with Databricks Platform on Azure Cloud, Designing Lakehouse Architecture, Storage and Security</p>
                    <br />
                    <hr />
                    <br />
                    <p class="d-flex my-2"> <svg xmlns="http://www.w3.org/2000/svg" width="50" height="55" fill="currentColor" class={classes.sideIcon+" bi  mr-3 bi-check-circle-fill"} viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>Delta Lake - Working with Delta Lake using PySpark and Spark SQL, Delta Lake Operations, Optimizations, and Tools</p>
                    <br />
                    <hr />
                    <br />


                    <p class="d-flex my-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"  class={classes.sideIcon+" bi  mr-3 bi-check-circle-fill"} viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                       
Advanced Databricks Tools - Autoloader, Unity Catalog, Delta Live Tables, Databricks Workflows, Repos, CLI and Rest API</p>
                        <br />
                    <hr />
                    <br />
                    
                </div>

            </div>
            <br />
            <br />
            <br />
            {/* 3rd Section */}
            <div className={classes.secondDiv +" "+classes.thirdDiv+ " row mx-0 px-md-5"}>
            <h2  class={classes.headings}>Course Prerequisite</h2>
                <div className=" col-12 col-sm-12 col-md-6 my-2">
                   
                    <h3 class="">What do you need to know before you start this course
                    </h3>

                </div>
                <div className=" col-12 col-sm-12 col-md-6">
                    <p class="d-flex "> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class={classes.sideIcon+" bi mr-3 bi-arrow-right-circle-fill"} viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
</svg>Programming Knowledge Using Python Programming Language and SQL Fundamentals</p>
                    <br />
                    <hr />
                    <br />
                    <p class="d-flex "> <svg xmlns="http://www.w3.org/2000/svg"fill="currentColor" class={classes.sideIcon+" bi mr-3 bi-arrow-right-circle-fill"} viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
</svg>
PySpark Programming and Spark SQL knowledge</p>
                        <br />
                    <hr />
                    <br />



                </div>

            </div>

          
          
            <br />
            <br />
  {/* 4th section */}
            <div className={classes.fifthDiv + ' row mx-2 px-md-5'}>
                <h2>
                    Course Content
                </h2>
                <h3>130 lectures - 25 hours video - Capstone Project</h3>
                <br />

                <div className="col-md-8 col-12">
                    <div className={ " "}>

                        {
                            courseSections.map((quest) => {
                                function openSolution(ques_id) {
                                    const elem = document.getElementById(ques_id)
                                    if (elem.style.display === "none") {
                                        elem.style.display = "block";
                                    } else {
                                        elem.style.display = "none";
                                    }
                                }
                                return (
                                    <div class="my-2 mx-md-2" >
                                        <div style={{ cursor: "pointer" }} onClick={() => { openSolution(quest.id) }} className="row rounded    w-100 justify-content-between question">
                                            <h3 class={classes.h3style + " col-10 d-flex"}> {quest.ques}</h3>
                                            <div class="col-2  text-end d-flex justify-content-center align-items-center" >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi  bi-caret-down-fill" viewBox="0 0 16 16">
                                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div style={{ display: "none" }} class= " " id={quest.id}>
                                     
            {quest.ans.map(answer => (
                
              <div class='my-3' key={answer.ansId}>
                {answer.free === "true" ? (
                  <a href={answer.link} className={classes.ansDiv}>
                  
                   <p className={classes.clickable +" d-flex gap-2"}> {renderIcon(answer.icon)} {answer.det}</p>
                   
                
                   <button class={classes.freePreview}>
                      Free Preview
                    </button>
                    
                  </a>
                ) : (
                  <span className='d-flex my-2'>
                    <p className={classes.unclickable+ " d-flex gap-2"}>{renderIcon(answer.icon)}   {answer.det} </p>
                    {/* Add a disabled style for non-free items */}
                  </span>
                )}
              </div>
            ))}
          
                                        </div>
                                        <hr />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button onClick={ExtendCourseList}> <p class='fw-bold my-2'> {showMoreLessText} </p></button>
                </div>
                <div className={classes.courseContent+ " col-md-4 col-12"}>
                <Card.Body class={classes.cardDet} >
                  <img class="w-100" src="/assets/solutions/AcademySolutions/3.png" alt="MasteringDatabricksCloud" />
                  <div className='ml-3 py-2'>
                  <h3 className={classes.h3style}>Course Feature</h3>
                  <div class='mb-2' style={{width:"50px",height:'1px',backgroundColor:'black',marginLeft:'10px'}}></div>
                  <div className=' ml-2 px-3 py-2'>
                    <div className="d-flex my-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class={classes.sideBoxIcon+" bi mr-2 bi-tag-fill"} viewBox="0 0 16 16">
  <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg>
                  <p class={classes.sideBox}>$149.00</p>
                  </div>
                  {/* <div className="d-flex my-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class={classes.sideBoxIcon+" mr-2"} viewBox="0 0 448 512"><path d="M347.1 215.4c11.7-32.6 45.4-126.9 45.4-157.1 0-26.6-15.7-48.9-43.7-48.9-44.6 0-84.6 131.7-97.1 163.1C242 144 196.6 0 156.6 0c-31.1 0-45.7 22.9-45.7 51.7 0 35.3 34.2 126.8 46.6 162-6.3-2.3-13.1-4.3-20-4.3-23.4 0-48.3 29.1-48.3 52.6 0 8.9 4.9 21.4 8 29.7-36.9 10-51.1 34.6-51.1 71.7C46 435.6 114.4 512 210.6 512c118 0 191.4-88.6 191.4-202.9 0-43.1-6.9-82-54.9-93.7zM311.7 108c4-12.3 21.1-64.3 37.1-64.3 8.6 0 10.9 8.9 10.9 16 0 19.1-38.6 124.6-47.1 148l-34-6 33.1-93.7zM142.3 48.3c0-11.9 14.5-45.7 46.3 47.1l34.6 100.3c-15.6-1.3-27.7-3-35.4 1.4-10.9-28.8-45.5-119.7-45.5-148.8zM140 244c29.3 0 67.1 94.6 67.1 107.4 0 5.1-4.9 11.4-10.6 11.4-20.9 0-76.9-76.9-76.9-97.7 .1-7.7 12.7-21.1 20.4-21.1zm184.3 186.3c-29.1 32-66.3 48.6-109.7 48.6-59.4 0-106.3-32.6-128.9-88.3-17.1-43.4 3.8-68.3 20.6-68.3 11.4 0 54.3 60.3 54.3 73.1 0 4.9-7.7 8.3-11.7 8.3-16.1 0-22.4-15.5-51.1-51.4-29.7 29.7 20.5 86.9 58.3 86.9 26.1 0 43.1-24.2 38-42 3.7 0 8.3 .3 11.7-.6 1.1 27.1 9.1 59.4 41.7 61.7 0-.9 2-7.1 2-7.4 0-17.4-10.6-32.6-10.6-50.3 0-28.3 21.7-55.7 43.7-71.7 8-6 17.7-9.7 27.1-13.1 9.7-3.7 20-8 27.4-15.4-1.1-11.2-5.7-21.1-16.9-21.1-27.7 0-120.6 4-120.6-39.7 0-6.7 .1-13.1 17.4-13.1 32.3 0 114.3 8 138.3 29.1 18.1 16.1 24.3 113.2-31 174.7zm-98.6-126c9.7 3.1 19.7 4 29.7 6-7.4 5.4-14 12-20.3 19.1-2.8-8.5-6.2-16.8-9.4-25.1z"/></svg>
                  
                  <p class={classes.sideBox}>Practice Quiz & Assignment</p></div> */}
                  <div className="d-flex my-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class={classes.sideBoxIcon+" bi mr-2 bi-file-earmark-arrow-down-fill"} viewBox="0 0 16 16">
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1m-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0"/>
</svg>
<p class={classes.sideBox}>PDF & Source Code</p>
                  </div>
                  <div className="d-flex my-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className={classes.sideBoxIcon+" mr-2"} viewBox="0 0 640 512"><path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"/></svg>
                  <p class={classes.sideBox}>Total Support</p>
                  </div>
                  </div>
                  </div>
                </Card.Body>
                <Card.Footer > </Card.Footer>
                </div>
            </div>
        
            <br />
            <br />
            <div className={classes.div4 + ' '+ classes.newBg+ ' px-md-5'}>
                <br />
                <h2 class={" my-2 mx-3"}>Features & Support</h2>
                <br />
                <div className="row mx-0 justify-content-center">
                    <div className={classes.featureBox + " col-10 col-sm-6 col-md-4 bg-white border "}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" width="40px" class="mx-auto my-3" viewBox="0 0 448 512"><path d="M347.1 215.4c11.7-32.6 45.4-126.9 45.4-157.1 0-26.6-15.7-48.9-43.7-48.9-44.6 0-84.6 131.7-97.1 163.1C242 144 196.6 0 156.6 0c-31.1 0-45.7 22.9-45.7 51.7 0 35.3 34.2 126.8 46.6 162-6.3-2.3-13.1-4.3-20-4.3-23.4 0-48.3 29.1-48.3 52.6 0 8.9 4.9 21.4 8 29.7-36.9 10-51.1 34.6-51.1 71.7C46 435.6 114.4 512 210.6 512c118 0 191.4-88.6 191.4-202.9 0-43.1-6.9-82-54.9-93.7zM311.7 108c4-12.3 21.1-64.3 37.1-64.3 8.6 0 10.9 8.9 10.9 16 0 19.1-38.6 124.6-47.1 148l-34-6 33.1-93.7zM142.3 48.3c0-11.9 14.5-45.7 46.3 47.1l34.6 100.3c-15.6-1.3-27.7-3-35.4 1.4-10.9-28.8-45.5-119.7-45.5-148.8zM140 244c29.3 0 67.1 94.6 67.1 107.4 0 5.1-4.9 11.4-10.6 11.4-20.9 0-76.9-76.9-76.9-97.7.1-7.7 12.7-21.1 20.4-21.1zm184.3 186.3c-29.1 32-66.3 48.6-109.7 48.6-59.4 0-106.3-32.6-128.9-88.3-17.1-43.4 3.8-68.3 20.6-68.3 11.4 0 54.3 60.3 54.3 73.1 0 4.9-7.7 8.3-11.7 8.3-16.1 0-22.4-15.5-51.1-51.4-29.7 29.7 20.5 86.9 58.3 86.9 26.1 0 43.1-24.2 38-42 3.7 0 8.3.3 11.7-.6 1.1 27.1 9.1 59.4 41.7 61.7 0-.9 2-7.1 2-7.4 0-17.4-10.6-32.6-10.6-50.3 0-28.3 21.7-55.7 43.7-71.7 8-6 17.7-9.7 27.1-13.1 9.7-3.7 20-8 27.4-15.4-1.1-11.2-5.7-21.1-16.9-21.1-27.7 0-120.6 4-120.6-39.7 0-6.7.1-13.1 17.4-13.1 32.3 0 114.3 8 138.3 29.1 18.1 16.1 24.3 113.2-31 174.7zm-98.6-126c9.7 3.1 19.7 4 29.7 6-7.4 5.4-14 12-20.3 19.1-2.8-8.5-6.2-16.8-9.4-25.1z" /></svg>
                        <h3  class={classes.h3style}> Total Support</h3>
                        <p class='p-3'>We provide support throughout your learning and answer every question within 24 business hours. You may also avail one-to-one technical support calls for blocker issues. </p></div>
                    <div className={classes.featureBox + " col-10 col-sm-6 bg-white border col-md-4"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi mx-auto my-3 bi-mortarboard-fill" viewBox="0 0 16 16">
                            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
                        </svg>
                        <h3  class={classes.h3style}>Certification Ready</h3>
                        <p class='p-3'>The course covers the curriculum for the Databricks Certified Data Engineer Associate certification exam. By the end of the course, you will be ready to take the certification exam. </p></div>
                    <div className={classes.featureBox + " col-10 col-sm-6  bg-white border col-md-4"}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto my-3" width="40" height="40" viewBox="0 0 448 512"><path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z"/></svg>
                        <h3 class={classes.h3style}> Completion Certificate</h3>
                        <p class='p-3'> Students who complete ScholarNest Academy courses earn free, verifiable course completion certificates to share with their friends, co-workers, and potential employers. </p></div>
                </div>
                <br />
            </div>
            <br />
            <br />
            {/* Section 4 */}
            <div class={classes.div3}>
                <h2 class="text-center">Course FAQ</h2>
                <br />
                <div className={classes.faqDiv + " mx-auto"}>

                    {
                        Faqs.map((quest) => {
                            function openSolution(ques_id) {
                                const elem = document.getElementById(ques_id)
                                if (elem.style.display === "none") {
                                    elem.style.display = "flex";
                                } else {
                                    elem.style.display = "none";
                                }
                            }
                            return (
                                <div class="my-2" >
                                    <div style={{ cursor: "pointer" }} onClick={() => { openSolution(quest.id) }} className="row rounded mx-auto  my-2 p-3 w-100 justify-content-between question">
                                        <p class= " col-10 d-flex fw-bold text-black"> {quest.ques}</p>
                                        <a class="col-1  text-end" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi align-self-end bi-caret-down-fill" viewBox="0 0 16 16">
                                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div style={{ display: "none" }} class={classes.Faqs + " px-4 mx-auto "} id={quest.id}>
                                        <p>{quest.ans} </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <br />
            <br />
            <div style={{minHeight:"300px",backgroundColor:'#c3d4e8'}} class={classes.div4 + " row mx-0 px-md-5"}>
                <div class='col-12 col-md-8  d-flex justify-content-center align-items-center'> 
                <div class={classes.enroll}>
                    <h2 class={classes.headings+" fw-bold"}>Enroll into self-paced course</h2>
                    <br />
                    <h3 style={{maxWidth:"700px"}}>Discover your potential, start today and learn at your own schedule</h3>
                    </div>
                    
                </div>
              
                <div class=" col-md-4 col-12 d-flex justify-content-center  align-items-center">
                        <button onClick={()=>{ router.push("https://www.scholarnest.in/order?ct=30e49b07-a047-4d76-89b0-53507f093acd")}} style={{height:'70px',backgroundColor:'#e79913'}} class="btn rounded-pill w-75  px-5 text-center text-light fw-bold">Buy  $149 </button>
                    </div>
                  
             
            </div>
            
            <div  style={{ backgroundColor: "#F8F2E9" }} >
            <div className="row mx-4 py-5 px-md-5">
            <h2 class={classes.headings}>Schedule a free call</h2>
                <div className={classes.secondDiv + " col-12 col-sm-12 col-md-6 p-2  h-100"}>
                   
                <br />
                    <p class="my-1">Get in touch with your course coordinator to learn more about the course, instructor-led course options, discount offers, course bundles, and additional payment methods.
                    </p>

                </div>
                <div className={classes.secondDiv + " col-12 col-md-6 col-6 my-1"}>
                <br />
                    <div >
                        <h3 class={classes.h3style +" my-2"}>For Instructor-led training</h3>

                        <p class="fw-bold mb-2"> Course Enquiry: <a style={{ textDecoration: "underline" }} href="https://docs.google.com/forms/d/e/1FAIpQLSczeKG6-u1esN6_N8dQSFD3C8_BVg9jj3uJEoBU-37jn5IYhw/viewform" target="_blank">  Request callback </a></p>
                        <p class="mb-2">
                            Looking for an Instructor-led course? We have Instructor-led batches starting every month. Fill out the course inquiry form, and we will contact you with more details.
                        </p>

                        <hr />
                    </div>
                    <br />
                    <div>

                        <h3 class={classes.h3style +" my-2"}>Email</h3>
                        <p class="fw-bold mb-2">
                            Email: sushant@scholarnest.com
                        </p>
                        <p class="mb-2">Contact us for current promotional offers, course bundles, and additional payment methods such as NEFT, Net Banking, UPI, etc.</p>
                    </div>
                    
                    <hr />
                    <br />
                    <div>

                        <h3 class={classes.h3style +" my-2"}>WhatsApp</h3>
                        <p class="fw-bold mb-2">
                            WhatsApp: +91-93534 65988
                        </p>
                        <p class="mb-2">Want to speak to your course coordinator? We are just a WhatsApp message away.</p>
                    </div>
                    <br />
                </div>
                <br />
            </div>
            </div>
            <br /><br />
            <div className={classes.courseBox + " mx-auto justify-content-center  row text-start  p-3"} >

                <h2 class={classes.heading+"  my-2"}>Related Courses:</h2>
                <p>Schedule a call with course coordinator for bundles, discounts and live sessions</p>

                {
                    IndcourseList.map((data, index) => {
                        return (
                            <div className=" rounded col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-lg-4 p-xl-4 p-md-3 p-sm-2 p-1">
                                <a href={data.link}>
                                    <div className={classes.styleDiv + " h-100"}>
                                        <Image width={600}
                                            height={300} src={data.imgPath} />
                                        <br />
                                        <h3 class={classes.h3style} >{data.heading}</h3>

                                        <p class="my-2">{data.desc}</p>
                                        <p class="my-2 fw-bold">{data.price}</p>

                                        {/* <p>8 self-placed courses worth $xyz</p> */}
                                    </div>
                                </a>

                            </div>

                        )
                    })
                }


                <a href="https://www.scholarnest.in/collections">
                    <button className='px-lg-3 px-xl-3 px-md-3 px-sm-1 px-1 py-lg-3 py-xl-3 py-md-3 py-1 py-sm-2 fw-semibold btn  rounded-pill mx-4 my-4'>View more courses</button>
                </a>
            </div>
            </div>
        </>
    )
}
export default MasteringDatabricksCloud;