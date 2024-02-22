import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Card } from "@nextui-org/react";
import MoreAcademyInstructor from './courses/MoreAcademyInstructor';
import classes from "./style/moreAcademy.module.css";
const MoreAcademyInfo = (props) => {
  const [courseListMain, setCourseListMain] = useState([]);
  const [indCourseListMain, setIndCourseListMain] = useState([]);
  const [bannerDetails, setBannerDetails] = useState(null);
  const [courseSections, setcourseSections] = useState([]);
  const [showMoreLessText, setShowMoreLessText] = useState('Show more');
  const [showMoreLessText2, setShowMoreLessText2] = useState('Show more');
  const [courseSections2, setcourseSections2] = useState([]);
  const [learnSide, setLearnSide] = useState([]);
  const [Faqs, setFaqs] = useState([]);

  const halfcourseSections = [
    {
      id: 1,
      ques: "About the Program",
      ans: [{ ansId: 1, det: "Before you start - Must watch", icon: "1", free: "true", link: "https://www.scholarnest.in/enroll/2107620?et=free_trial" }]
    },
    {
      id: 2,
      ques: "Ch1: Understanding Big Data and Apache Spark",
      ans: [
        { ansId: 1, det: "Ch1: Downloadable Documents", icon: "2", free: "false", link: "" },
        { ansId: 2, det: "Ch1: Downloadable Material", icon: "2", free: "false", link: "" },
        { ansId: 3, det: "Big Data - Overview and Objectives", icon: "1", free: "true", link: "https://www.scholarnest.in/enroll/2107620?et=free_trial" },
        { ansId: 4, det: "What is Big Data and How it Started", icon: "1", free: "true", link: "https://www.scholarnest.in/enroll/2107620?et=free_trial" },
        { ansId: 5, det: "What is Big Data and How it Started - Notes", icon: "3", free: "false", link: "" },
        { ansId: 6, det: "Hadoop Architecture, History, and Evolution", icon: "1", free: "false", link: "" },
        { ansId: 7, det: "Hadoop Architecture, History, and Evolution - Notes", icon: "3", free: "false", link: "" },
        { ansId: 8, det: "What is Data Lake and How it works", icon: "1", free: "false", link: "" },
        { ansId: 9, det: "What is Data Lake and How it works - Notes", icon: "3", free: "false", link: "" },
        { ansId: 10, det: "Introducing Apache Spark and Databricks Cloud", icon: "1", free: "true", link: "https://www.scholarnest.in/enroll/2107620?et=free_trial" },
        { ansId: 11, det: "Introducing Apache Spark and Databricks Cloud - Notes", icon: "3", free: "false", link: "" },
        { ansId: 12, det: "Spark Development Environment - Overview and Objectives", icon: "1", free: "true", link: "https://www.scholarnest.in/enroll/2107620?et=free_trial" },
        { ansId: 13, det: "Spark Development Environments", icon: "1", free: "true", link: "https://www.scholarnest.in/order?ct=3f4ce35a-bd10-4226-8b24-724cc39785c5" },
        { ansId: 14, det: "Spark Development Environments - Notes", icon: "3", free: "false", link: "" },
        { ansId: 15, det: "Setup your Databricks Community Cloud Environment", icon: "1", free: "false", link: "" },
        { ansId: 16, det: "Setup your Databricks Community Cloud Environment - Notes", icon: "3", free: "false", link: "" },
        { ansId: 17, det: "Introduction to Databricks Workspace", icon: "1", free: "true", link: "https://www.scholarnest.in/enroll/2107620?et=free_trial" },
        { ansId: 18, det: "Introduction to Databricks Workspace - Notes", icon: "3", free: "false", link: "" },
        { ansId: 19, det: "Create Your First Spark Application in Databricks Cloud", icon: "1", free: "true", link: "https://www.scholarnest.in/enroll/2107620?et=free_trial" },
        { ansId: 20, det: "Create Your First Spark Application in Databricks Cloud - Notes", icon: "3", free: "false", link: "" },
        { ansId: 21, det: "Setup Your Local Development IDE", icon: "1", free: "false", link: "" },
        { ansId: 22, det: "Setup your Local Development IDE - Notes", icon: "3", free: "false", link: "" },
        { ansId: 23, det: "Mac Users - Setup your Local Development IDE", icon: "1", free: "false", link: "" },
        { ansId: 24, det: "Create Your First Spark Application using IDE", icon: "1", free: "true", link: "https://www.scholarnest.in/enroll/2107620?et=free_trial" },
        { ansId: 25, det: "Create Your First Spark Application using IDE - Notes", icon: "3", free: "false", link: "" },
        { ansId: 26, det: "Ch1: Assignment", icon: "3", free: "false", link: "" },
        { ansId: 27, det: "Ch1: Test Your Knowledge [Requires 60% passing grade - Retake allowed]", icon: "4", free: "false", link: "" }]
    },
    {
      id: 3,
      ques: "Ch2: Apache Spark Tables and Dataframes",
      ans: [
        { ansId: 1, det: "Ch2: Downloadable Documents", icon: "2", free: "false", link: "" },
        { ansId: 2, det: "Ch2: Downloadable Materials", icon: "2", free: "false", link: "" },
        { ansId: 3, det: "Introduction to Spark Data Frames and Tables", icon: "1", free: "false", link: "" },
        { ansId: 4, det: "Introduction to Spark Data Frames and Tables - Notes", icon: "3", free: "false", link: "" },
        { ansId: 5, det: "Creating Spark Dataframe", icon: "1", free: "false", link: "" },
        { ansId: 6, det: "Creating Spark Dataframe - Notes", icon: "3", free: "false", link: "" },
        { ansId: 7, det: "Creating Spark Tables", icon: "1", free: "false", link: "" },
        { ansId: 8, det: "Creating Spark Tables - Notes", icon: "3", free: "false", link: "" },
        { ansId: 9, det: "Common Problem With Databricks Community", icon: "1", free: "false", link: "" },
        { ansId: 10, det: "Common Problem With Databricks Community - Notes", icon: "3", free: "false", link: "" },
        { ansId: 11, det: "Data Caching Essentials", icon: "1", free: "false", link: "" },
        { ansId: 12, det: "Data Caching Essentials - Notes", icon: "3", free: "false", link: "" },
        { ansId: 13, det: "Working With Spark SQL", icon: "1", free: "false", link: "" },
        { ansId: 14, det: "Working With Spark SQL - Notes", icon: "3", free: "false", link: "" },
        { ansId: 15, det: "Dataframe Transformations and Actions", icon: "1", free: "false", link: "" },
        { ansId: 16, det: "Dataframe Transformations and Actions - Notes", icon: "3", free: "false", link: "" },
        { ansId: 17, det: "Applying Transformations", icon: "1", free: "false", link: "" },
        { ansId: 18, det: "Applying Transformations - Notes", icon: "3", free: "false", link: "" },
        { ansId: 19, det: "Querying Spark Dataframe", icon: "1", free: "false", link: "" },
        { ansId: 20, det: "Querying Spark Dataframe - Notes", icon: "3", free: "false", link: "" },
        { ansId: 21, det: "More Dataframe Transformations", icon: "1", free: "false", link: "" },
        { ansId: 22, det: "More Dataframe Transformations - Notes", icon: "3", free: "false", link: "" },
        { ansId: 23, det: "Micro Project - Problem Statement", icon: "1", free: "false", link: "" },
        { ansId: 24, det: "Micro Project - Problem Statement - Notes", icon: "3", free: "false", link: "" },
        { ansId: 25, det: "Ch2: Assignments", icon: "3", free: "false", link: "" },
        { ansId: 26, det: "Ch2: Test Your Knowledge [Requires 60% passing grade - Retake allowed]", icon: "4", free: "false", link: "" }]
    },
    {
      id: 4,
      ques: "Ch3: Dataframe Essentials",
      ans: [
        { ansId: 1, det: "Ch3: Downloadable Documents", icon: "2", free: "false", link: "" },
        { ansId: 2, det: "Ch3: Downloadable Materials", icon: "2", free: "false", link: "" },
        { ansId: 3, det: "Ch2: Assignment Solutions", icon: "2", free: "false", link: "" },
        { ansId: 4, det: "Creating Spark Session", icon: "1", free: "false", link: "" },
        { ansId: 5, det: "Creating Spark Session - Notes", icon: "3", free: "false", link: "" },
        { ansId: 6, det: "Programmatically Creating Data Frames", icon: "1", free: "false", link: "" },
        { ansId: 7, det: "Programmatically Creating Data Frames - Notes", icon: "3", free: "false", link: "" },
        { ansId: 8, det: "Working with Spark Data Frame Schema", icon: "1", free: "false", link: "" },
        { ansId: 9, det: "Working with Spark Data Frame Schema - Notes", icon: "3", free: "false", link: "" },
        { ansId: 10, det: "Writing Spark Data Frames", icon: "1", free: "false", link: "" },
        { ansId: 11, det: "Writing Spark Data Frames - Notes", icon: "3", free: "false", link: "" },
        { ansId: 12, det: "Managed Vs External Tables", icon: "1", free: "false", link: "" },
        { ansId: 13, det: "Managed Vs External Tables - Notes", icon: "3", free: "false", link: "" },
        { ansId: 14, det: "Introducing Spark Web UI", icon: "1", free: "false", link: "" },
        { ansId: 15, det: "Introducing Spark Web UI - Notes", icon: "3", free: "false", link: "" },
        { ansId: 16, det: "Ch3: Assignments", icon: "3", free: "false", link: "" },
        { ansId: 17, det: "Ch3: Test Your Knowledge [Requires 60% passing grade - Retake allowed]", icon: "4", free: "false", link: "" }]
    },
    {
      id: 5,
      ques: "Ch4: Dataframe Transformations",
      ans: [
        { ansId: 1, det: "Ch4: Downloadable Documents", icon: "2", free: "false", link: "" },
        { ansId: 2, det: "Ch4: Downloadable Materials", icon: "2", free: "false", link: "" },
        { ansId: 3, det: "Ch3: Assignment Solutions", icon: "3", free: "false", link: "" },
        { ansId: 4, det: "Working with Spark Data Frame Rows", icon: "1", free: "false", link: "" },
        { ansId: 5, det: "Working with Spark Data Frame Rows - Notes", icon: "3", free: "false", link: "" },
        { ansId: 6, det: "Working with Spark Data Frame Columns", icon: "1", free: "false", link: "" },
        { ansId: 7, det: "Working with Spark Data Frame Columns - Notes", icon: "3", free: "false", link: "" },
        { ansId: 8, det: "Working with Select and SelectExpr", icon: "1", free: "false", link: "" },
        { ansId: 9, det: "Working with Select and SelectExpr - Notes", icon: "3", free: "false", link: "" },
        { ansId: 10, det: "Working with Literal Values", icon: "1", free: "false", link: "" },
        { ansId: 11, det: "Working with Literal Values - Notes", icon: "3", free: "false", link: "" },
        { ansId: 12, det: "Adding, Renaming and Removing Columns", icon: "1", free: "false", link: "" },
        { ansId: 13, det: "Adding, Renaming and Removing Columns - Notes", icon: "3", free: "false", link: "" },
        { ansId: 14, det: "Filtering Records and Finding Unique Rows", icon: "1", free: "false", link: "" },
        { ansId: 15, det: "Filtering Records and Finding Unique Rows - Notes", icon: "3", free: "false", link: "" },
        { ansId: 16, det: "Ch4: Assignments", icon: "3", free: "false", link: "" },
        { ansId: 17, det: "Ch4: Assignment Resource for DOWNLOAD", icon: "2", free: "false", link: "" },
        { ansId: 18, det: "Ch4: Test Your Knowledge [Requires 60% passing grade - Retake allowed]", icon: "4", free: "false", link: "" }]
    },


  ]
  const extraCourseSection = [
    {
      id: 6,
      ques: "Ch5: Spark Data Types",
      ans: [
        { ansId: 1, det: "Ch5: Downloadable Documents", icon: "2", free: "false", link: "" },
        { ansId: 2, det: "Ch5: Downloadable Materials", icon: "2", free: "false", link: "" },
        { ansId: 3, det: "Ch4: Assignment Solutions", icon: "3", free: "false", link: "" },
        { ansId: 4, det: "Ch4: Assignment Solution Notebooks for DOWNLOAD", icon: "2", free: "false", link: "" },
        { ansId: 5, det: "Sampling and Splitting", icon: "1", free: "false", link: "" },
        { ansId: 6, det: "Sampling and Splitting - Notes", icon: "3", free: "false", link: "" },
        { ansId: 7, det: "Sorting and Limiting", icon: "1", free: "false", link: "" },
        { ansId: 8, det: "Sorting and Limiting - Notes", icon: "3", free: "false", link: "" },
        { ansId: 9, det: "Nulls in Apache Spark", icon: "1", free: "false", link: "" },
        { ansId: 10, det: "Nulls in Apache Spark - Notes", icon: "3", free: "false", link: "" },
        { ansId: 11, det: "Working with Nulls", icon: "1", free: "false", link: "" },
        { ansId: 12, det: "Working with Nulls - Notes", icon: "3", free: "false", link: "" },
        { ansId: 13, det: "Spark Data Types", icon: "1", free: "false", link: "" },
        { ansId: 14, det: "Spark Data Types - Notes", icon: "3", free: "false", link: "" },
        { ansId: 15, det: "Casting and Aliases", icon: "1", free: "false", link: "" },
        { ansId: 16, det: "Casting and Aliases - Notes", icon: "3", free: "false", link: "" },
        { ansId: 17, det: "Ch5: Assignments", icon: "3", free: "false", link: "" },
        { ansId: 18, det: "Ch5: Test Your Knowledge [Requires 60% passing grade - Retake allowed]", icon: "4", free: "false", link: "" }]
    },
    {
      id: 7,
      ques: "Ch6: Working with Different Data Types",
      ans: [
        { ansId: 1, det: "Ch6: Downloadable Documents", icon: "2", free: "false", link: "" },
        { ansId: 2, det: "Ch6: Downloadable Materials", icon: "2", free: "false", link: "" },
        { ansId: 3, det: "Ch5: Assignment Solutions", icon: "3", free: "false", link: "" },
        { ansId: 4, det: "Ch5: Assignment Solution Notebooks for DOWNLOAD", icon: "2", free: "false", link: "" },
        { ansId: 5, det: "Working with Numbers", icon: "1", free: "false", link: "" },
        { ansId: 6, det: "Working with Numbers - Notes", icon: "3", free: "false", link: "" },
        { ansId: 7, det: "Boolean Expressions", icon: "1", free: "false", link: "" },
        { ansId: 8, det: "Boolean Expressions - Notes", icon: "3", free: "false", link: "" },
        { ansId: 9, det: "Manipulating Strings", icon: "1", free: "false", link: "" },
        { ansId: 10, det: "Manipulating Strings - Notes", icon: "3", free: "false", link: "" },
        { ansId: 11, det: "Working with Dates and Timestamps", icon: "1", free: "false", link: "" },
        { ansId: 12, det: "Working with Dates and Timestamps - Notes", icon: "3", free: "false", link: "" },
        { ansId: 13, det: "Working with Struct", icon: "1", free: "false", link: "" },
        { ansId: 14, det: "Working with Struct - Notes", icon: "3", free: "false", link: "" },
        { ansId: 15, det: "Working with Arrays", icon: "1", free: "false", link: "" },
        { ansId: 16, det: "Working with Arrays - Notes", icon: "3", free: "false", link: "" },
        { ansId: 17, det: "Working with Maps", icon: "1", free: "false", link: "" },
        { ansId: 18, det: "Working with Maps - Notes", icon: "3", free: "false", link: "" },
        { ansId: 19, det: "Ch6: Assignments", icon: "3", free: "false", link: "" },
        { ansId: 20, det: "Ch6: Test Your Knowledge [Requires 60% passing grade - Retake allowed]", icon: "4", free: "false", link: "" }]
    },
    {
      id: 8,
      ques: "Ch7: Spark Aggregations",
      ans: [
        { ansId: 1, det: "Ch7: Downloadable Documents", icon: "2", free: "false", link: "" },
        { ansId: 2, det: "Ch7: Downloadable Materials", icon: "2", free: "false", link: "" },
        { ansId: 3, det: "Ch6: Assignment Solutions", icon: "3", free: "false", link: "" },
        { ansId: 4, det: "Ch6: Assignment Solution Notebooks for DOWNLOAD", icon: "2", free: "false", link: "" },
        { ansId: 5, det: "Simple Aggregations in Spark", icon: "1", free: "false", link: "" },
        { ansId: 6, det: "Simple Aggregations in Spark - Notes", icon: "3", free: "false", link: "" },
        { ansId: 7, det: "Grouping Aggregation in Spark", icon: "1", free: "false", link: "" },
        { ansId: 8, det: "Grouping Aggregation in Spark - Notes", icon: "3", free: "false", link: "" },
        { ansId: 9, det: "Windowing Aggregations in Spark", icon: "1", free: "false", link: "" },
        { ansId: 10, det: "Windowing Aggregations in Spark - Notes", icon: "3", free: "false", link: "" },
        { ansId: 11, det: "Top N Aggregation", icon: "1", free: "false", link: "" },
        { ansId: 12, det: "Top N Aggregation - Notes", icon: "3", free: "false", link: "" },
        { ansId: 13, det: "Pivoting and Aggregation", icon: "1", free: "false", link: "" },
        { ansId: 14, det: "Pivoting and Aggregation - Notes", icon: "3", free: "false", link: "" },
        { ansId: 15, det: "Ch7: Assignments", icon: "3", free: "false", link: "" },
        { ansId: 16, det: "Ch7: Test Your Knowledge [Requires 60% passing grade - Retake allowed]", icon: "4", free: "false", link: "" }]
    },
    {
      id: 9,
      ques: "Ch8: Spark Joins",
      ans: [
        { ansId: 1, det: "Ch8: Downloadable Documents", icon: "2", free: "false", link: "" },
        { ansId: 2, det: "Ch8: Downloadable Materials", icon: "2", free: "false", link: "" },
        { ansId: 3, det: "Ch7: Assignment Solutions", icon: "3", free: "false", link: "" },
        { ansId: 4, det: "Ch7: Assignment Solution Notebooks for DOWNLOAD", icon: "2", free: "false", link: "" },
        { ansId: 5, det: "Introduction to Data Frame Joins", icon: "1", free: "false", link: "" },
        { ansId: 6, det: "Introduction to Data Frame Joins - Notes", icon: "3", free: "false", link: "" },
        { ansId: 7, det: "Outer Joins in Spark", icon: "1", free: "false", link: "" },
        { ansId: 8, det: "Outer Joins in Spark - Notes", icon: "3", free: "false", link: "" },
        { ansId: 9, det: "Data Frame Joins and Column Name Ambiguity", icon: "1", free: "false", link: "" },
        { ansId: 10, det: "Data Frame Joins and Column Name Ambiguity - Notes", icon: "3", free: "false", link: "" },
        { ansId: 11, det: "More on Data Frame Joins", icon: "1", free: "false", link: "" },
        { ansId: 12, det: "More on Data Frame Joins - Notes", icon: "3", free: "false", link: "" },
        { ansId: 13, det: "Ch8: Assignments", icon: "3", free: "false", link: "" },
        { ansId: 14, det: "Ch8: Assignments Resource for Download", icon: "2", free: "false", link: "" },
        { ansId: 15, det: "Ch8: Test Your Knowledge [Requires 60% passing grade - Retake allowed]", icon: "4", free: "false", link: "" }]
    },
    {
      id: 10,
      ques: "Ch9: Working with Spark Data Sources and Sinks",
      ans: [
        { ansId: 1, det: "Ch9: Downloadable Documents", icon: "2", free: "false", link: "" },
        { ansId: 2, det: "Ch9: Downloadable Materials", icon: "2", free: "false", link: "" },
        { ansId: 3, det: "Ch8: Assignment Solutions", icon: "3", free: "false", link: "" },
        { ansId: 4, det: "Ch8: Assignment Solution Notebooks for DOWNLOAD", icon: "2", free: "false", link: "" },
        { ansId: 5, det: "Introduction to Spark Data Sources and Sinks", icon: "1", free: "false", link: "" },
        { ansId: 6, det: "Introduction to Spark Data Sources and Sinks - Notes", icon: "3", free: "false", link: "" },
        { ansId: 7, det: "Understanding Spark Dataframe Reader", icon: "1", free: "false", link: "" },
        { ansId: 8, det: "Understanding Spark Dataframe Reader - Notes", icon: "3", free: "false", link: "" },
        { ansId: 9, det: "Reading CSV, JSON, Parquet, and AVRO File", icon: "1", free: "false", link: "" },
        { ansId: 10, det: "Reading CSV, JSON, Parquet, and AVRO File - Notes", icon: "3", free: "false", link: "" },
        { ansId: 10, det: "Reading Data with Schema-on-read", icon: "1", free: "false", link: "" },
        { ansId: 10, det: "Reading Data with Schema-on-read - Notes", icon: "3", free: "false", link: "" },
        { ansId: 11, det: "DataFrameReader Options for CSV, JSON and Others", icon: "1", free: "false", link: "" },
        { ansId: 12, det: "DataFrameReader Options for CSV, JSON and Others - Notes", icon: "3", free: "false", link: "" },
        { ansId: 13, det: "Understanding Spark DataframeWriter", icon: "1", free: "false", link: "" },
        { ansId: 14, det: "Understanding Spark DataframeWriter - Notes", icon: "3", free: "false", link: "" },
        { ansId: 15, det: "Writing CSV, JSON, Parquet, and AVRO Files", icon: "1", free: "false", link: "" },
        { ansId: 16, det: "Writing CSV, JSON, Parquet, and AVRO Files - Notes", icon: "3", free: "false", link: "" },
        { ansId: 17, det: "Managing Your Data Layout", icon: "1", free: "false", link: "" },
        { ansId: 18, det: "Managing Your Data Layout - Notes", icon: "3", free: "false", link: "" },
        { ansId: 19, det: "Reading Partitioned Dataframes", icon: "1", free: "false", link: "" },
        { ansId: 20, det: "Reading Partitioned Dataframes - Notes", icon: "3", free: "false", link: "" },
        { ansId: 21, det: "Ch9: Assignments", icon: "3", free: "false", link: "" },
        { ansId: 22, det: "Ch9: Assignments Resource for Download", icon: "2", free: "false", link: "" },
        { ansId: 23, det: "Ch9: Test Your Knowledge [Requires 60% passing grade - Retake allowed]", icon: "4", free: "false", link: "" }]
    },
    {
      id: 11,
      ques: "Ch10: Spark Dataframe Internals",
      ans: [
        { ansId: 1, det: "Ch10: Downloadable Documents", icon: "2", free: "false", link: "" },
        { ansId: 2, det: "Ch10: Downloadable Materials", icon: "2", free: "false", link: "" },
        { ansId: 3, det: "Ch9: Assignment Solutions", icon: "3", free: "false", link: "" },
        { ansId: 4, det: "Ch9: Assignment Solution Notebooks for DOWNLOAD", icon: "2", free: "false", link: "" },
        { ansId: 5, det: "Evolution of Spark APIs", icon: "1", free: "false", link: "" },
        { ansId: 6, det: "Evolution of Spark APIs - Notes", icon: "3", free: "false", link: "" },
        { ansId: 7, det: "Dataframes, RDDs and Distributed Partitions", icon: "1", free: "false", link: "" },
        { ansId: 8, det: "Dataframes, RDDs and Distributed Partitions - Notes", icon: "3", free: "false", link: "" },
        { ansId: 9, det: "Internals of Transformations", icon: "1", free: "false", link: "" },
        { ansId: 10, det: "Internals of Transformations - Notes", icon: "3", free: "false", link: "" },
        { ansId: 11, det: "Narrow and Wide Transformations", icon: "1", free: "false", link: "" },
        { ansId: 12, det: "Narrow and Wide Transformations - Notes", icon: "3", free: "false", link: "" },
        { ansId: 13, det: "Spark Jobs - Stages, Shuffle, Task, and Slots", icon: "1", free: "false", link: "" },
        { ansId: 14, det: "Spark Jobs - Stages, Shuffle, Task, and Slots - Notes", icon: "3", free: "false", link: "" },
        { ansId: 15, det: "Spark SQL Engine and Query Planning", icon: "1", free: "false", link: "" },
        { ansId: 16, det: "Spark SQL Engine and Query Planning - Notes", icon: "3", free: "false", link: "" },
        { ansId: 17, det: "Ch10: Test Your Knowledge [Requires 60% passing grade - Retake allowed]", icon: "4", free: "false", link: "" }]
    },
    {
      id: 12,
      ques: "Ch11: Spark Cluster and Runtime Architecture",
      ans: [
        { ansId: 1, det: "Ch11: Downloadable Documents", icon: "2", free: "false", link: "" },
        { ansId: 2, det: "Ch11: Downloadable Materials", icon: "2", free: "false", link: "" },
        { ansId: 3, det: "Understanding Spark Cluster", icon: "1", free: "false", link: "" },
        { ansId: 4, det: "Understanding Spark Cluster - Notes", icon: "3", free: "false", link: "" },
        { ansId: 5, det: "Running Spark Application on Cluster", icon: "1", free: "false", link: "" },
        { ansId: 6, det: "Running Spark Application on Cluster - Notes", icon: "3", free: "false", link: "" },
        { ansId: 7, det: "Spark Submit and Important Options", icon: "1", free: "false", link: "" },
        { ansId: 8, det: "Spark Submit and Important Options - Notes", icon: "3", free: "false", link: "" },
        { ansId: 9, det: "Spark Deployment Modes", icon: "1", free: "false", link: "" },
        { ansId: 10, det: "Spark Deployment Modes - Notes", icon: "3", free: "false", link: "" },
        { ansId: 11, det: "Resource Allocation to Spark Application", icon: "1", free: "false", link: "" },
        { ansId: 12, det: "Resource Allocation to Spark Application - Notes", icon: "3", free: "false", link: "" },
        { ansId: 13, det: "Spark Cluster and Runtime Architecture", icon: "1", free: "false", link: "" },
        { ansId: 14, det: "Spark Cluster and Runtime Architecture - Notes", icon: "3", free: "false", link: "" },
        { ansId: 15, det: "Ch11: Assignments", icon: "3", free: "false", link: "" },
        { ansId: 16, det: "Ch11: Test Your Knowledge [Requires 60% passing grade - Retake allowed]", icon: "4", free: "false", link: "" }]
    },
    {
      id: 13,
      ques: "Ch12: Spark Joins and Optimization",
      ans: [
        { ansId: 1, det: "Ch12: Downloadable Documents", icon: "2", free: "false", link: "" },
        { ansId: 2, det: "Ch12: Downloadable Materials", icon: "2", free: "false", link: "" },
        { ansId: 3, det: "Ch11: Assignment Solutions - Notes", icon: "3", free: "false", link: "" },
        { ansId: 4, det: "Ch12: Internals of Spark Joins and Shuffle", icon: "1", free: "false", link: "" },
        { ansId: 5, det: "Ch12: Internals of Spark Joins and Shuffle - Notes", icon: "3", free: "false", link: "" },
        { ansId: 6, det: "Ch12: Optimizing Your Joins Using Broadcast", icon: "1", free: "false", link: "" },
        { ansId: 7, det: "Ch12: Optimizing Your Joins Using Broadcast - Notes", icon: "3", free: "false", link: "" },
        { ansId: 8, det: "Implementing Bucket Joins", icon: "1", free: "false", link: "" },
        { ansId: 9, det: "Implementing Bucket Joins - Notes", icon: "3", free: "false", link: "" },
        { ansId: 10, det: "Spark Adaptive Query Execution", icon: "1", free: "false", link: "" },
        { ansId: 11, det: "Spark Adaptive Query Execution - Notes", icon: "3", free: "false", link: "" },
        { ansId: 12, det: "Spark AQE Dynamic Join Optimization", icon: "1", free: "false", link: "" },
        { ansId: 13, det: "Spark AQE Dynamic Join Optimization - Notes", icon: "3", free: "false", link: "" },
        { ansId: 14, det: "Handling Data Skew in Spark Joins", icon: "1", free: "false", link: "" },
        { ansId: 15, det: "Handling Data Skew in Spark Joins - Notes", icon: "3", free: "false", link: "" },
        { ansId: 16, det: "Spark Dynamic Partition Pruning", icon: "1", free: "false", link: "" },
        { ansId: 17, det: "Spark Dynamic Partition Pruning - Notes", icon: "3", free: "false", link: "" },
        { ansId: 18, det: "Handling Data Skew in Spark Joins", icon: "1", free: "false", link: "" },
        { ansId: 19, det: "Handling Data Skew in Spark Joins - Notes", icon: "3", free: "false", link: "" },
        { ansId: 20, det: "Ch12: Assignments", icon: "3", free: "false", link: "" },
        { ansId: 21, det: "Ch12: Assignment Resource for Download", icon: "2", free: "false", link: "" },
        { ansId: 22, det: "Ch12: Test Your Knowledge [Requires 60% passing grade - Retake allowed]", icon: "4", free: "false", link: "" }]
    },
    {
      id: 14,
      ques: "Ch13: Advanced Spark",
      ans: [
        { ansId: 1, det: "Ch13: Downloadable Documents", icon: "2", free: "false", link: "" },
        { ansId: 2, det: "Spark Memory Allocation", icon: "1", free: "false", link: "" },
        { ansId: 3, det: "Spark Memory Allocation - Notes", icon: "3", free: "false", link: "" },
        { ansId: 4, det: "Spark Memory Management", icon: "1", free: "false", link: "" },
        { ansId: 5, det: "Spark Memory Management - Notes", icon: "3", free: "false", link: "" },
        { ansId: 6, det: "Data Caching in Spark", icon: "1", free: "false", link: "" },
        { ansId: 7, det: "Data Caching in Spark - Notes", icon: "3", free: "false", link: "" },
        { ansId: 8, det: "Data Frame Hints", icon: "1", free: "false", link: "" },
        { ansId: 9, det: "Data Frame Hints - Notes", icon: "3", free: "false", link: "" },
        { ansId: 10, det: "Repartition Vs Coalesce", icon: "1", free: "false", link: "" },
        { ansId: 11, det: "Repartition Vs Coalesce - Notes", icon: "3", free: "false", link: "" },
        { ansId: 12, det: "Broadcast Variables in Apache Spark", icon: "1", free: "false", link: "" },
        { ansId: 13, det: "Broadcast Variables in Apache Spark - Notes", icon: "3", free: "false", link: "" },
        { ansId: 14, det: "Spark Accumulators", icon: "1", free: "false", link: "" },
        { ansId: 15, det: "Spark Accumulators - Notes", icon: "3", free: "false", link: "" },
        { ansId: 16, det: "Spark Speculative Execution", icon: "1", free: "false", link: "" },
        { ansId: 17, det: "Spark Speculative Execution - Notes", icon: "3", free: "false", link: "" },
        { ansId: 18, det: "Dynamic Resource Allocation in Spark", icon: "1", free: "false", link: "" },
        { ansId: 19, det: "Dynamic Resource Allocation in Spark - Notes", icon: "3", free: "false", link: "" },
        { ansId: 20, det: "Spark Schedulers", icon: "1", free: "false", link: "" },
        { ansId: 21, det: "Spark Schedulers - Notes", icon: "3", free: "false", link: "" }]
    },
    {
      id: 15,
      ques: "Ch14: Miscellaneous and Interview Topics",
      ans: [
        { ansId: 1, det: "Ch14: Downloadable Documents", icon: "2", free: "false", link: "" },
        { ansId: 2, det: "Ch14: Downloadable Materials", icon: "2", free: "false", link: "" },
        { ansId: 3, det: "Creating and Using UDFs", icon: "1", free: "false", link: "" },
        { ansId: 4, det: "Creating and Using UDFs - Notes", icon: "3", free: "false", link: "" },
        { ansId: 5, det: "Unit Testing in Spark", icon: "1", free: "false", link: "" },
        { ansId: 6, det: "Unit Testing in Spark - Notes", icon: "3", free: "false", link: "" }]
    },
    {
      id: 16,
      ques: "Capstone Project",
      ans: [
        { ansId: 1, det: "Project Scope and Background", icon: "1", free: "false", link: "" },
        { ansId: 2, det: "Transformation Requirement", icon: "1", free: "false", link: "" },
        { ansId: 3, det: "Setup your starter project", icon: "1", free: "false", link: "" },
        { ansId: 4, det: "Download Starter Project", icon: "2", free: "false", link: "" },
        { ansId: 5, det: "Download Final Project", icon: "2", free: "false", link: "" },
        { ansId: 6, det: "Test Your Starter Project", icon: "1", free: "false", link: "" },
        { ansId: 7, det: "Setup your source control and process", icon: "1", free: "false", link: "" },
        { ansId: 8, det: "Creating Your Project CI/CD Pipeline", icon: "1", free: "false", link: "" },
        { ansId: 9, det: "Develop Code - Notes", icon: "1", free: "false", link: "" },
        { ansId: 10, det: "Write Test Cases", icon: "1", free: "false", link: "" },
        { ansId: 11, det: "Working with Kafka Integration", icon: "1", free: "false", link: "" },
        { ansId: 12, det: "Estimating resources for your application", icon: "1", free: "false", link: "" },
        { ansId: 13, det: "An end is the new beginning", icon: "1", free: "false", link: "" }]
    }
  ]
  const halfcourseSections2 = [
    {
      id: 1,
      ques: "Ch1: Getting Started",
      ans: [
        { ansId: 1, det: "Ch1 Downloadable Documents", icon: "2", free: "false", link: "" },
        { ansId: 2, det: "Ch 1 Section Overview", icon: "1", free: "true", link: "https://www.scholarnest.in/enroll/2120430?et=free_trial" },
        { ansId: 3, det: "What is Big Data and How it Started", icon: "1", free: "true", link: "https://www.scholarnest.in/enroll/2120430?et=free_trial" },
        { ansId: 4, det: "What is Big Data and How it Started - Notes", icon: "3", free: "true", link: "https://www.scholarnest.in/enroll/2120430?et=free_trial" },
        { ansId: 5, det: "What is Data Lake and How it works", icon: "1", free: "true", link: "https://www.scholarnest.in/enroll/2120430?et=free_trial" },
        { ansId: 6, det: "What is Data Lake and How it works - Notes", icon: "3", free: "false", link: "" },
        { ansId: 7, det: "Introducing Apache Spark and Databricks Cloud", icon: "1", free: "false", link: "" },
        { ansId: 8, det: "Introducing Apache Spark and Databricks Cloud - Notes", icon: "3", free: "false", link: "" },
        { ansId: 9, det: "Introducing Azure Databricks", icon: "1", free: "false", link: "" },
        { ansId: 10, det: "Introducing Azure Databricks - Notes", icon: "3", free: "false", link: "" },
        { ansId: 11, det: "Challanges with the Data Lake Architecture", icon: "1", free: "false", link: "" },
        { ansId: 12, det: "Challanges with the Data Lake Architecture - Notes", icon: "3", free: "false", link: "" },
        { ansId: 13, det: "The Idea of Lakehouse Architecture", icon: "1", free: "true", link: "https://www.scholarnest.in/enroll/2107620?et=free_trial" },
        { ansId: 14, det: "The Idea of Lakehouse Architecture - Notes", icon: "3", free: "false", link: "" }]
    },
    {
      id: 2,
      ques: "Ch2: Setup Your Environment",
      ans: [
        { ansId: 1, det: "Ch2 Downloadable Documents", icon: "2", free: "false", link: "" },
        { ansId: 2, det: "Section Overview", icon: "1", free: "false", link: "" },
        { ansId: 3, det: "Creating Azure Free Account", icon: "1", free: "false", link: "" },
        { ansId: 4, det: "Creating Azure Free Account - Notes", icon: "3", free: "false", link: "" },
        { ansId: 5, det: "Azure Portal Overview", icon: "1", free: "false", link: "" },
        { ansId: 6, det: "Azure Portal Overview - Notes", icon: "3", free: "false", link: "" },
        { ansId: 7, det: "Creating Azure Databricks Service", icon: "1", free: "false", link: "" },
        { ansId: 8, det: "Creating Azure Databricks Service - Notes", icon: "3", free: "false", link: "" },
        { ansId: 9, det: "Introduction to Azure Databricks Workspace", icon: "1", free: "false", link: "" },
        { ansId: 10, det: "Introduction to Azure Databricks Workspace - Notes", icon: "3", free: "false", link: "" }]
    },
    {
      id: 3,
      ques: "Ch3: Introduction to Azure Databricks",
      ans: [
        { ansId: 1, det: "Ch3 Downloadable Documents", icon: "2", free: "false", link: "" },
        { ansId: 2, det: "Ch3 Downloadable Materials", icon: "2", free: "false", link: "" },
        { ansId: 3, det: "Azure Databricks Architecture", icon: "1", free: "false", link: "" },
        { ansId: 4, det: "Azure Databricks Architecture - Notes", icon: "3", free: "false", link: "" },
        { ansId: 5, det: "Azure Databricks Cluster and Configurations", icon: "1", free: "false", link: "" },
        { ansId: 6, det: "Azure Databricks Cluster and Configurations - Notes", icon: "3", free: "false", link: "" },
        { ansId: 7, det: "Creating Azure Databricks Cluster", icon: "1", free: "false", link: "" },
        { ansId: 8, det: "Creating Azure Databricks Cluster - Notes", icon: "3", free: "false", link: "" },
        { ansId: 9, det: "Azure Databricks Cluster Pool", icon: "1", free: "false", link: "" },
        { ansId: 10, det: "Azure Databricks Cluster Pool - Notes", icon: "3", free: "false", link: "" },
        { ansId: 11, det: "Introduction to Databricks Notebooks", icon: "1", free: "false", link: "" },
        { ansId: 12, det: "Introduction to Databricks Notebooks - Notes", icon: "3", free: "false", link: "" },
        { ansId: 13, det: "Notebook Magic Commands", icon: "1", free: "false", link: "" },
        { ansId: 14, det: "Notebook Magic Commands - Notes", icon: "3", free: "false", link: "" },
        { ansId: 15, det: "Databricks Notebook Utilities", icon: "1", free: "false", link: "" },
        { ansId: 16, det: "Databricks Notebook Utilities - Notes", icon: "3", free: "false", link: "" }]
    },
    {
      id: 4,
      ques: "Ch4: Design and Implement Lakehouse Storage",
      ans: [
        { ansId: 1, det: "Ch4 Downloadable Documents", icon: "2", free: "false", link: "" },
        { ansId: 2, det: "Ch4 Downloadable Materials", icon: "2", free: "false", link: "" },
        { ansId: 3, det: "Ch4 Section Overview", icon: "1", free: "false", link: "" },
        { ansId: 4, det: "Databricks File System and Storage Layer Architecture", icon: "1", free: "false", link: "" },
        { ansId: 5, det: "Databricks File System and Storage Layer Architecture - Notes", icon: "3", free: "false", link: "" },
        { ansId: 6, det: "Exploring DBFS Root", icon: "1", free: "false", link: "" },
        { ansId: 7, det: "Exploring DBFS Root - Notes", icon: "3", free: "false", link: "" },
        { ansId: 8, det: "Overview of Mounting Storage Layer", icon: "1", free: "false", link: "" },
        { ansId: 9, det: "Overview of Mounting Storage Layer - Notes", icon: "3", free: "false", link: "" },
        { ansId: 10, det: "Introduction to Azure Storage Account", icon: "1", free: "false", link: "" },
        { ansId: 11, det: "Introduction to Azure Storage Account - Notes", icon: "3", free: "false", link: "" },
        { ansId: 12, det: "Creating Azure Storage Account", icon: "1", free: "false", link: "" },
        { ansId: 13, det: "Creating Azure Storage Account - Notes", icon: "3", free: "false", link: "" },
        { ansId: 14, det: "Introduction to Azure Storage Explorer", icon: "1", free: "false", link: "" },
        { ansId: 15, det: "Introduction to Azure Storage Explorer - Notes", icon: "3", free: "false", link: "" },
        { ansId: 16, det: "Creating Azure Service Principal and Secret", icon: "1", free: "false", link: "" },
        { ansId: 17, det: "Creating Azure Service Principal and Secret - Notes", icon: "3", free: "false", link: "" },
        { ansId: 18, det: "Granting Access to Storage Account", icon: "1", free: "false", link: "" },
        { ansId: 19, det: "Granting Access to Storage Account - Notes", icon: "3", free: "false", link: "" },
        { ansId: 20, det: "Mounting Your Storage Containers", icon: "1", free: "false", link: "" },
        { ansId: 21, det: "Mounting Your Storage Containers - Notes", icon: "3", free: "false", link: "" },
        { ansId: 22, det: "Overview of Securing your Service Secret", icon: "1", free: "false", link: "" },
        { ansId: 23, det: "Overview of Securing your Service Secret - Notes", icon: "3", free: "false", link: "" },
        { ansId: 24, det: "Creating and Storing Secrets in Azure Key Vault", icon: "1", free: "false", link: "" },
        { ansId: 25, det: "Creating and Storing Secrets in Azure Key Vault - Notes", icon: "3", free: "false", link: "" },
        { ansId: 26, det: "Link Azure Key Vault with Databricks Service", icon: "1", free: "false", link: "" },
        { ansId: 27, det: "Link Azure Key Vault with Databricks Service - Notes", icon: "3", free: "false", link: "" },
        { ansId: 28, det: "Mounting Your Storage Containers", icon: "1", free: "false", link: "" },
        { ansId: 29, det: "Mounting Your Storage Containers - Notes", icon: "3", free: "false", link: "" },
        { ansId: 30, det: "Using Databricks CLI", icon: "1", free: "false", link: "" },
        { ansId: 31, det: "Using Databricks CLI - Notes", icon: "3", free: "false", link: "" }]
    },
    {
      id: 5,
      ques: "Ch5: Implementing Medallion Lakehouse Architecture",
      ans: [
        { ansId: 1, det: "Ch5 Downloadable Documents", icon: "2", free: "false", link: "" },
        { ansId: 2, det: "Ch5 Downloadable Materials", icon: "2", free: "false", link: "" },
        { ansId: 3, det: "Ch5 Section Overview", icon: "1", free: "false", link: "" },
        { ansId: 4, det: "Micro Project - Problem statement", icon: "1", free: "false", link: "" },
        { ansId: 5, det: "Micro Project - Problem statement - Notes", icon: "3", free: "false", link: "" },
        { ansId: 6, det: "Data Ingestion into Bronze Layer", icon: "1", free: "false", link: "" },
        { ansId: 7, det: "Data Ingestion into Bronze Layer - Notes", icon: "3", free: "false", link: "" },
        { ansId: 8, det: "Working with Spark Data Frames", icon: "1", free: "false", link: "" },
        { ansId: 9, det: "Working with Spark Data Frames - Notes", icon: "3", free: "false", link: "" },
        { ansId: 10, det: "Creating Modular Application Structure", icon: "1", free: "false", link: "" },
        { ansId: 11, det: "Creating Modular Application Structure - Notes", icon: "3", free: "false", link: "" },
        { ansId: 12, det: "Using Spark SQL", icon: "1", free: "false", link: "" },
        { ansId: 13, det: "Using Spark SQL - Notes", icon: "3", free: "false", link: "" },
        { ansId: 14, det: "Micro Project Solution Design", icon: "1", free: "false", link: "" },
        { ansId: 15, det: "Micro Project Solution Design - Notes", icon: "3", free: "false", link: "" },
        { ansId: 16, det: "Implementing Silver Layer Transformations", icon: "1", free: "false", link: "" },
        { ansId: 17, det: "Implementing Silver Layer Transformations - Notes", icon: "3", free: "false", link: "" },
        { ansId: 18, det: "Implementing Gold Layer Transformations", icon: "1", free: "false", link: "" },
        { ansId: 19, det: "Implementing Gold Layer Transformations - Notes", icon: "3", free: "false", link: "" },
        { ansId: 20, det: "Creating Databricks Workflow", icon: "1", free: "false", link: "" },
        { ansId: 21, det: "Creating Databricks Workflow - Notes", icon: "3", free: "false", link: "" },
        { ansId: 22, det: "Scheduling and Running Spark Jobs", icon: "1", free: "false", link: "" },
        { ansId: 23, det: "Scheduling and Running Spark Jobs - Notes", icon: "3", free: "false", link: "" }]
    },



  ]
  const extraCourseSection2 = [
    {
      id: 6,
      ques: "Ch6: Handling Incremental Data in Lakehouse",
      ans: [
        { ansId: 1, det: "Ch6 Downloadable Documents", icon: "2", free: "false", link: "" },
        { ansId: 2, det: "Ch6 Downloadable Materials", icon: "2", free: "false", link: "" },
        { ansId: 3, det: "Micro Project - Problem statement", icon: "1", free: "false", link: "" },
        { ansId: 4, det: "Micro Project - Problem statement - Notes", icon: "3", free: "false", link: "" },
        { ansId: 5, det: "Understanding Delta Lake", icon: "1", free: "false", link: "" },
        { ansId: 6, det: "Understanding Delta Lake - Notes", icon: "3", free: "false", link: "" },
        { ansId: 7, det: "Incremental Ingestion into Bronze Layer", icon: "1", free: "false", link: "" },
        { ansId: 8, det: "Incremental Ingestion into Bronze Layer - Notes", icon: "3", free: "false", link: "" },
        { ansId: 9, det: "Silver Layer - Historial and Incremental Data", icon: "1", free: "false", link: "" },
        { ansId: 10, det: "Silver Layer - Historial and Incremental Data - Notes", icon: "3", free: "false", link: "" },
        { ansId: 11, det: "Implementing Silver Layer", icon: "1", free: "false", link: "" },
        { ansId: 12, det: "Implementing Silver Layer - Notes", icon: "3", free: "false", link: "" },
        { ansId: 13, det: "Understanding Silver Layer Implementation", icon: "1", free: "false", link: "" },
        { ansId: 14, det: "Understanding Silver Layer Implementation - Notes", icon: "3", free: "false", link: "" },
        { ansId: 15, det: "Gold Layer - Historial and Incremental Data", icon: "1", free: "false", link: "" },
        { ansId: 16, det: "Gold Layer - Historial and Incremental Data - Notes", icon: "3", free: "false", link: "" },
        { ansId: 17, det: "Implementing Gold Layer", icon: "1", free: "false", link: "" },
        { ansId: 18, det: "Implementing Gold Layer - Notes", icon: "3", free: "false", link: "" },
        { ansId: 19, det: "Understanding Gold Layer Implementation", icon: "1", free: "false", link: "" },
        { ansId: 20, det: "Understanding Gold Layer Implementation - Notes", icon: "3", free: "false", link: "" },
        { ansId: 21, det: "Summarizing Incremental Processing", icon: "1", free: "false", link: "" },
        { ansId: 22, det: "Summarizing Incremental Processing - Notes", icon: "3", free: "false", link: "" },
        { ansId: 23, det: "Data Engineering Roles and Responsibilities", icon: "1", free: "false", link: "" },
        { ansId: 24, det: "Data Engineering Roles and Responsibilities - Notes", icon: "3", free: "false", link: "" }]
    },
    {
      id: 7,
      ques: "Ch7: Deep Dive into Delta Lake",
      ans: [
        { ansId: 1, det: "Ch7 Downloadable Documents", icon: "2", free: "false", link: "" },
        { ansId: 2, det: "Ch7 Downloadable Materials", icon: "2", free: "false", link: "" },
        { ansId: 3, det: "Introduction to Delta Lake", icon: "1", free: "false", link: "" },
        { ansId: 4, det: "Introduction to Delta Lake - Notes", icon: "3", free: "false", link: "" },
        { ansId: 5, det: "Creating Delta Tables", icon: "1", free: "false", link: "" },
        { ansId: 6, det: "Creating Delta Tables - Notes", icon: "3", free: "false", link: "" },
        { ansId: 7, det: "Delta Table Operations", icon: "1", free: "false", link: "" },
        { ansId: 8, det: "Delta Table Operations - Notes", icon: "3", free: "false", link: "" },
        { ansId: 9, det: "Managing Delta Table Schema", icon: "1", free: "false", link: "" },
        { ansId: 10, det: "Managing Delta Table Schema - Notes", icon: "3", free: "false", link: "" },
        { ansId: 11, det: "Schema Evolution in Delta Tables", icon: "1", free: "false", link: "" },
        { ansId: 12, det: "Schema Evolution in Delta Tables - Notes", icon: "3", free: "false", link: "" },
        { ansId: 13, det: "Delta Table Time travel and versions", icon: "1", free: "false", link: "" },
        { ansId: 14, det: "Delta Table Time travel and versions - Notes", icon: "3", free: "false", link: "" },
        { ansId: 15, det: "Delta Lake Tools and Utilities", icon: "1", free: "false", link: "" },
        { ansId: 16, det: "Delta Lake Tools and Utilities - Notes", icon: "3", free: "false", link: "" },
        { ansId: 17, det: "Delta Table Optimizations", icon: "1", free: "false", link: "" },
        { ansId: 18, det: "Delta Table Optimizations - Notes", icon: "3", free: "false", link: "" }]
    },
    {
      id: 8,
      ques: "Ch8: Unity Catlog",
      ans: [
        { ansId: 1, det: "Ch8 Downloadable Documents", icon: "2", free: "false", link: "" },
        { ansId: 2, det: "Ch8 Downloadable Materials", icon: "2", free: "false", link: "" },
        { ansId: 3, det: "Introduction to Unity Catalog", icon: "1", free: "false", link: "" },
        { ansId: 4, det: "Introduction to Unity Catalog - Notes", icon: "3", free: "false", link: "" },
        { ansId: 5, det: "How to setup Unity Catalog", icon: "1", free: "false", link: "" },
        { ansId: 6, det: "How to setup Unity Catalog - Notes", icon: "3", free: "false", link: "" },
        { ansId: 7, det: "Creating Metastore Root", icon: "1", free: "false", link: "" },
        { ansId: 8, det: "Creating Metastore Root - Notes", icon: "3", free: "false", link: "" },
        { ansId: 9, det: "Creating Unity Catalog Metastore", icon: "1", free: "false", link: "" },
        { ansId: 10, det: "Creating Unity Catalog Metastore - Notes", icon: "3", free: "false", link: "" },
        { ansId: 11, det: "Unity Catalog User Provisioning and Management", icon: "1", free: "false", link: "" },
        { ansId: 12, det: "Unity Catalog User Provisioning and Management - Notes", icon: "3", free: "false", link: "" },
        { ansId: 13, det: "Managing Users, Groups and Roles", icon: "1", free: "false", link: "" },
        { ansId: 14, det: "Managing Users, Groups and Roles - Notes", icon: "3", free: "false", link: "" },
        { ansId: 15, det: "Creating and Managing Catalog", icon: "1", free: "false", link: "" },
        { ansId: 16, det: "Creating and Managing Catalog - Notes", icon: "3", free: "false", link: "" },
        { ansId: 17, det: "Managing Workspace and Cluster Permissions", icon: "1", free: "false", link: "" },
        { ansId: 18, det: "Managing Workspace and Cluster Permissions - Notes", icon: "3", free: "false", link: "" },
        { ansId: 19, det: "Creating and Managing Cluster Policies", icon: "1", free: "false", link: "" },
        { ansId: 20, det: "Creating and Managing Cluster Policies - Notes", icon: "3", free: "false", link: "" },
        { ansId: 21, det: "Securable Objects and Privileges", icon: "1", free: "false", link: "" },
        { ansId: 22, det: "Securable Objects and Privileges - Notes", icon: "3", free: "false", link: "" },
        { ansId: 23, det: "Creating and Managing External Locations", icon: "1", free: "false", link: "" },
        { ansId: 24, det: "Creating and Managing External Locations - Notes", icon: "3", free: "false", link: "" }]
    },
    {
      id: 9,
      ques: "Ch9: Structured Streaming and AutoLoader",
      ans: [
        { ansId: 1, det: "Ch9 Downloadable Documents", icon: "2", free: "false", link: "" },
        { ansId: 2, det: "Ch9 Downloadable Materials", icon: "2", free: "false", link: "" },
        { ansId: 3, det: "Micro Project - Problem statement", icon: "1", free: "false", link: "" },
        { ansId: 4, det: "Micro Project - Problem statement - Notes", icon: "3", free: "false", link: "" },
        { ansId: 5, det: "Design your Lakehouse Environment", icon: "1", free: "false", link: "" },
        { ansId: 6, det: "Design your Lakehouse Environment - Notes", icon: "3", free: "false", link: "" },
        { ansId: 7, det: "Development Environment Setup", icon: "1", free: "false", link: "" },
        { ansId: 8, det: "Development Environment Setup - Notes", icon: "3", free: "false", link: "" },
        { ansId: 9, det: "Working with External Location", icon: "1", free: "false", link: "" },
        { ansId: 10, det: "Working with External Location - Notes", icon: "3", free: "false", link: "" },
        { ansId: 11, det: "Streaming Ingestion to Bronze Layer", icon: "1", free: "false", link: "" },
        { ansId: 12, det: "Streaming Ingestion to Bronze Layer - Notes", icon: "3", free: "false", link: "" },
        { ansId: 13, det: "Spark Structured Streaming Model", icon: "1", free: "false", link: "" },
        { ansId: 14, det: "Spark Structured Streaming Model - Notes", icon: "3", free: "false", link: "" },
        { ansId: 15, det: "Structured Streaming Features", icon: "1", free: "false", link: "" },
        { ansId: 16, det: "Structured Streaming Features - Notes", icon: "3", free: "false", link: "" },
        { ansId: 17, det: "Fault Tolerance and Restarts in Structured Streaming", icon: "1", free: "false", link: "" },
        { ansId: 18, det: "Fault Tolerance and Restarts in Structured Streaming- Notes", icon: "3", free: "false", link: "" },
        { ansId: 19, det: "Autoloader and Streaming Ingestion", icon: "1", free: "false", link: "" },
        { ansId: 20, det: "Autoloader and Streaming Ingestion - Notes", icon: "3", free: "false", link: "" },
        { ansId: 21, det: "Autoloader Schema Evolution", icon: "1", free: "false", link: "" },
        { ansId: 22, det: "Autoloader Schema Evolution - Notes", icon: "3", free: "false", link: "" }]
    },
    {
      id: 10,
      ques: "Ch10: Delta Live Table",
      ans: [
        { ansId: 1, det: "Ch10 Downloadable Documents", icon: "2", free: "false", link: "" },
        { ansId: 2, det: "Ch10 Downloadable Materials", icon: "2", free: "false", link: "" },
        { ansId: 3, det: "Introduction to DLT Pipeline", icon: "1", free: "false", link: "" },
        { ansId: 4, det: "Introduction to DLT Pipeline - Notes", icon: "3", free: "false", link: "" },
        { ansId: 5, det: "Using Auto Loader in Delta Live Tables", icon: "1", free: "false", link: "" },
        { ansId: 6, det: "Using Auto Loader in Delta Live Tables - Notes", icon: "3", free: "false", link: "" },
        { ansId: 7, det: "Implementing Data Quality using DLT", icon: "1", free: "false", link: "" },
        { ansId: 8, det: "Implementing Data Quality using DLT - Notes", icon: "3", free: "false", link: "" },
        { ansId: 9, det: "Implementing SCD Type 2 using DLT", icon: "1", free: "false", link: "" },
        { ansId: 10, det: "Implementing SCD Type 2 using DLT - Notes", icon: "3", free: "false", link: "" },
        { ansId: 11, det: "Implementing CDC using DLT", icon: "1", free: "false", link: "" },
        { ansId: 12, det: "Implementing CDC using DLT - Notes", icon: "3", free: "false", link: "" },
        { ansId: 13, det: "Implementing full refresh using DLT", icon: "1", free: "false", link: "" },
        { ansId: 14, det: "Implementing full refresh using DLT - Notes", icon: "3", free: "false", link: "" }]
    },
    {
      id: 11,
      ques: "Lakehouse Fundamentals Exam Practice Test.",
      ans: [
        { ansId: 1, det: "Must Read: About Lakehouse Fundamentals Exam Practice Test", icon: "5", free: "false", link: "" },
        { ansId: 2, det: "Lakehouse Fundamentals Exam Practice Test - Evaluation Mode", icon: "4", free: "false", link: "" },
        { ansId: 3, det: "Lakehouse Fundamentals Exam Practice Test - Review Mode", icon: "4", free: "false", link: "" }]
    },
    {
      id: 12,
      ques: "Lakehouse Capstone Project",
      ans: [
        { ansId: 1, det: "Project Source Code and Resources", icon: "2", free: "false", link: "" },
        { ansId: 2, det: "Project Scope and Background", icon: "1", free: "false", link: "" },
        { ansId: 3, det: "Taking out the operational requirement", icon: "1", free: "false", link: "" },
        { ansId: 4, det: "Storage Design", icon: "1", free: "false", link: "" },
        { ansId: 5, det: "Implement Data Security", icon: "1", free: "false", link: "" },
        { ansId: 6, det: "Implement Resource Policies", icon: "1", free: "false", link: "" },
        { ansId: 7, det: "Decouple Data Ingestion", icon: "1", free: "false", link: "" },
        { ansId: 8, det: "Design Bronze Layer", icon: "1", free: "false", link: "" },
        { ansId: 9, det: "Design Silver and Gold Layer", icon: "1", free: "false", link: "" },
        { ansId: 10, det: "Setup your source control", icon: "1", free: "false", link: "" },
        { ansId: 11, det: "Setup your environment", icon: "1", free: "false", link: "" },
        { ansId: 12, det: "Create a development workspace", icon: "1", free: "false", link: "" },
        { ansId: 13, det: "Create and Configure Storage Layer", icon: "1", free: "false", link: "" },
        { ansId: 14, det: "Create Unity Catalog Metastore", icon: "1", free: "false", link: "" },
        { ansId: 15, det: "Create Catalog and External Locations", icon: "1", free: "false", link: "" },
        { ansId: 16, det: "Start Coding", icon: "1", free: "false", link: "" },
        { ansId: 17, det: "Test your code", icon: "1", free: "false", link: "" },
        { ansId: 18, det: "Load historical data", icon: "1", free: "false", link: "" },
        { ansId: 19, det: "Ingest into bronze layer", icon: "1", free: "false", link: "" },
        { ansId: 20, det: "Process the silver layer", icon: "1", free: "false", link: "" },
        { ansId: 21, det: "Handling multiple updates", icon: "1", free: "false", link: "" },
        { ansId: 22, det: "Implementing Gold Layer", icon: "1", free: "false", link: "" },
        { ansId: 23, det: "Creating a run script", icon: "1", free: "false", link: "" },
        { ansId: 24, det: "Preparing for Integration testing", icon: "1", free: "false", link: "" },
        { ansId: 25, det: "Creating Test Data Producer", icon: "1", free: "false", link: "" },
        { ansId: 26, det: "Creating Integration Test for Batch mode", icon: "1", free: "false", link: "" },
        { ansId: 27, det: "Creating Integration Test for Stream mode", icon: "1", free: "false", link: "" },
        { ansId: 28, det: "Implementing CI CD Pipeline", icon: "1", free: "false", link: "" },
        { ansId: 29, det: "Develop Build Pipeline", icon: "1", free: "false", link: "" },
        { ansId: 30, det: "Develop Release Pipeline", icon: "1", free: "false", link: "" },
        { ansId: 31, det: "Creating Databricks CLI Script", icon: "1", free: "false", link: "" }]
    }

  ]
  useEffect(() => {
    setcourseSections(halfcourseSections);
    setcourseSections2(halfcourseSections2);
    setLearnSide(props.selfPaced ? LearnSideSelf : LearnSideInd);
    setFaqs(props.selfPaced ? FaqsSelf : FaqsInd);
  }, []);
  useEffect(() => {

    setCourseListMain(props.selfPaced ? courseListForSelfPaced : courseList);
    setIndCourseListMain(props.selfPaced ? IndcourseListForSelfPaced : IndcourseList);
    const bannerObjSelf = {
      title: 'Master Data Engineering with Spark | Databricks',
      desc: 'Master Certified Data Engineer for Apache Spark, Azure Databricks, Stream Processing, and Kafka from beginners to advanced - Self-paced or Instructor-led'
    }
    const bannerObjIns = {
      title: 'Mastering PySpark and Databricks Cloud (Instructor Led Integrated Program)',
      desc: 'Master PySpark and Databricks Cloud with our expert-led program. Dive into hands-on projects for a robust understanding of data engineering and analytics.'
    }
    setBannerDetails(props.selfPaced ? bannerObjSelf : bannerObjIns);
  }, [courseListMain]);
  const courseList = [

    // {
    //   heading: "Mastering PySpark",
    //   desc: "Self-paced Learning",
    //   imgPath: "/assets/solutions/MoreAcademySolutions/2.jpg",
    //   price: "$149",
    //   link: "https://www.scholarnest.in/courses/mastering-pyspark"
    // },
    // {
    //   heading: "Mastering Databricks Cloud",
    //   desc: "Self-paced Learning",
    //   imgPath: "/assets/solutions/MoreAcademySolutions/3.jpg",
    //   price: "$149",
    //   link: "https://www.scholarnest.in/courses/mastering-databricks-cloud"
    // },
    // {
    //   heading: "Databricks Certified Associate Developer for Apache Spark 3.0",
    //   desc: "Self-paced Exam Practice Test",
    //   imgPath: "/assets/solutions/MoreAcademySolutions/4.jpg",
    //   price: "$36.79",
    //   link: "https://www.scholarnest.in/courses/databricks-certified-associate-developer-for-apache-spark"
    // },
    // {
    //   heading: "Databricks Data Engineer Assoicate Certification Practice Test",
    //   desc: "Self-paced Exam Practice Test",
    //   imgPath: "/assets/solutions/MoreAcademySolutions/5.jpg",
    //   price: "$36.79",
    //   link: "https://www.scholarnest.in/courses/databricks-data-engineer-associate-certification-practice-test"
    // },
    // {
    //   heading: "Apache Kafka for Begginers",
    //   desc: "Self-paced Learning",
    //   imgPath: "/assets/solutions/MoreAcademySolutions/6.jpg",
    //   price: "$24.79",
    //   link: "https://www.scholarnest.in/courses/apache-kafka-for-beginners"
    // },
    // {
    //   heading: "Apache Spark 3 - Real-time Stream Processing using Python",
    //   desc: "Self-paced Learning",
    //   link: "https://www.scholarnest.in/bundles/mastering-spark-and-databricks-cloud",
    //   price: "$24.79",
    //   imgPath: "/assets/solutions/MoreAcademySolutions/7.jpg"
    // }
  ]
  const courseListForSelfPaced = [

    {
      heading: "Mastering PySpark",
      desc: "Self-paced Learning",
      imgPath: "/assets/solutions/AcademySolutions/2.png",
      price: "$149",
      link: "mastering-pyspark"
    },
    {
      heading: "Mastering Databricks Cloud",
      desc: "Self-paced Learning",
      imgPath: "/assets/solutions/AcademySolutions/3.png",
      price: "$149",
      link: "mastering-databricks-cloud"
    },
    {
      heading: "Databricks Certified Associate Developer for Apache Spark 3.0",
      desc: "Self-paced Exam Practice Test",
      imgPath: "/assets/solutions/AcademySolutions/4.png",
      price: "$36.79",
      link: "databricks-certified-associate-developer-for-apache-spark"
    },
    {
      heading: "Databricks Data Engineer Assoicate Certification Practice Test",
      desc: "Self-paced Exam Practice Test",
      imgPath: "/assets/solutions/AcademySolutions/5.png",
      price: "$36.79",
      link: "databricks-data-engineer-associate-certification-practice-test"
    },
    {
      heading: "Apache Kafka for Begginers",
      desc: "Self-paced Learning",
      imgPath: "/assets/solutions/AcademySolutions/6.png",
      price: "$24.79",
      link: "apache-kafka-for-beginners"
    },
    {
      heading: "Apache Spark 3 - Real-time Stream Processing using Python",
      desc: "Self-paced Learning",
      link: "apache-spark-3-real-time-stream-processing-using-python",
      price: "$24.79",
      imgPath: "/assets/solutions/AcademySolutions/10.png",
    },
    {
      heading: "AWS Cloud Practitioner",
      desc: "Self-paced Learning",
      imgPath: "/assets/solutions/AcademySolutions/8.jpg",
      link: "learning-aws-cloud-fundamentals"
    },
    {
      heading: "Just Enough Python for PySpark Developers",
      desc: "Self-paced Learning",
      imgPath: "/assets/solutions/AcademySolutions/9.jpg",
      link: "just-enough-python-for-pyspark-developers"
    },
  ]
  const IndcourseList = [

    // {
    //   heading: "Mastering PySpark",
    //   desc: "Self-paced Learning",
    //   imgPath: "/assets/solutions/AcademySolutions/2.png",
    //   price: "$149",
    //   link: "https://www.scholarnest.in/courses/mastering-pyspark"
    // },
    // {
    //   heading: "Mastering Databricks Cloud",
    //   desc: "Self-paced Learning",
    //   imgPath: "/assets/solutions/AcademySolutions/3.png",
    //   price: "$149",
    //   link: "https://www.scholarnest.in/courses/mastering-databricks-cloud"
    // },

    // {
    //   heading: "Apache Kafka for Begginers",
    //   desc: "Self-paced Learning",
    //   imgPath: "/assets/solutions/AcademySolutions/6.png",
    //   price: "$24.79",
    //   link: "https://www.scholarnest.in/courses/apache-kafka-for-beginners"
    // },
  ]
  const IndcourseListForSelfPaced = [

    {
      heading: "Mastering PySpark",
      desc: "Self-paced Learning",
      imgPath: "/assets/solutions/AcademySolutions/2.png",
      price: "$149",
      link: "mastering-pyspark"
    },
    {
      heading: "Mastering Databricks Cloud",
      desc: "Self-paced Learning",
      imgPath: "/assets/solutions/AcademySolutions/3.png",
      price: "$149",
      link: "mastering-databricks-cloud"
    },

    {
      heading: "Apache Kafka for Begginers",
      desc: "Self-paced Learning",
      imgPath: "/assets/solutions/AcademySolutions/6.png",
      price: "$24.79",
      link: "apache-kafka-for-beginners"
    },
  ]
  const FaqsSelf = [
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
      ans: "We offer both options. Our Self-paced courses allow you to learn at your convenience, while our instructor-led courses provide guided learning with real-time interaction and support."
    }
  ]
  const FaqsInd = [
    {
      id: "faq1",
      ques: "How and where can I access the course contents?",
      ans: "You will receive login credentials for our dedicated Learning Management System (LMS) platform, where you can access a wealth of course contents. This includes pre-recorded video lectures, downloadable documents, hands-on assignments, quizzes, and additional learning resources. Our user-friendly LMS provides a seamless learning experience, allowing you to navigate through the curriculum at your own pace and convenience."
    },
    {
      id: "faq2",
      ques: "How long will I have access to the course material?",
      ans: "You will enjoy lifetime* access to the course material."
    },
    {
      id: "faq3",
      ques: "What happens if I miss a live session?",
      ans: "We record all live sessions, and you can access the recordings later on the LMS platform."
    },
    {
      id: "faq4",
      ques: "How do I get help if I get stuck during hands-on activities?",
      ans: "We offer a dedicated Q&A forum where you can post your questions, and our team is committed to providing detailed answers. Additionally, you can directly contact your course coordinator through email or WhatsApp for personalized, one-to-one technical support."
    },
    {
      id: "faq5",
      ques: "Do you have a refund policy?",
      ans: "Yes, you are eligible for a refund within the first 7 days of your purchase or before completing 15% of the course material, whichever comes first. Please note that a refund will be processed after deducting between 3% to 6% for payment processing charges."
    }
  ]
  const renderIcon = (icon) => {
    // Depending on the icon value, render the respective icon
    // You can replace these with your own icon components or images
    if (icon === "1") {
      return <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 40 40" fill="none">
        <path d="M5.5 10.0781H25.4259C26.6686 10.0781 27.6759 11.0855 27.6759 12.3281V27.0689C27.6759 28.3115 26.6686 29.3189 25.4259 29.3189H5.5C4.25736 29.3189 3.25 28.3115 3.25 27.0689V12.3281C3.25 11.0855 4.25736 10.0781 5.5 10.0781Z" stroke="black" stroke-width="1.5" />
        <path d="M28.3368 15.4077L34.7071 10.2318C35.524 9.56807 36.7454 10.1494 36.7454 11.2019V28.2778C36.7454 29.3078 35.5694 29.8958 34.7454 29.2778L28.375 24.5C28.0602 24.2639 27.875 23.8934 27.875 23.5V16.3779C27.875 16.0015 28.0446 15.6451 28.3368 15.4077Z" stroke="black" stroke-width="1.5" />
      </svg>; // Replace with your icon
    } else if (icon === "2") {
      return <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 40 40" fill="none">
        <path d="M10.8696 31.3261C8.64982 31.3261 6.52099 30.4443 4.95139 28.8747C3.38179 27.3051 2.5 25.1763 2.5 22.9565C2.5 20.7368 3.38179 18.6079 4.95139 17.0383C6.52099 15.4687 8.64982 14.587 10.8696 14.587C12.3913 11.0109 15.8913 8.5 20 8.5C25.2196 8.5 29.4957 12.5478 29.8913 17.6761L30.6522 17.6304C34.4565 17.6304 37.5 20.6739 37.5 24.4783C37.5 28.2826 34.4565 31.3261 30.6522 31.3261H10.8696ZM10.8696 16.1087C7.06522 16.1087 4.02174 19.1522 4.02174 22.9565C4.02174 26.7609 7.06522 29.8043 10.8696 29.8043H30.6522C32.0647 29.8043 33.4195 29.2432 34.4183 28.2444C35.4171 27.2455 35.9783 25.8908 35.9783 24.4783C35.9783 23.0657 35.4171 21.711 34.4183 20.7121C33.4195 19.7133 32.0647 19.1522 30.6522 19.1522C29.8 19.1522 28.9783 19.35 28.263 19.7152L28.3696 18.3913C28.3696 16.1716 27.4878 14.0427 25.9182 12.4731C24.3486 10.9035 22.2197 10.0217 20 10.0217C18.1642 10.0228 16.3794 10.6263 14.9197 11.7396C13.46 12.8529 12.406 14.4146 11.9196 16.1848L10.8696 16.1087ZM20.7609 16.1087V24.0978L24.1848 20.6739L25.3261 21.6783L20 27.0043L14.6739 21.6783L15.8152 20.6739L19.2391 24.0978V16.1087H20.7609Z" fill="black" />
      </svg>; // Replace with your icon
    } else if (icon === "3") {
      return <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 40 40" fill="none">
        <path d="M5 5.125C5 3.67525 6.17525 2.5 7.625 2.5H32.125C33.5747 2.5 34.75 3.67525 34.75 5.125V30.5C34.75 34.366 31.616 37.5 27.75 37.5H7.625C6.17525 37.5 5 36.3247 5 34.875V5.125Z" stroke="black" stroke-width="1.3125" />
        <path d="M35.1875 31.375H28.625V37.5" stroke="black" stroke-width="1.3125" />
        <path d="M9.75346 20.5V12.2273H12.8557C13.4913 12.2273 14.0245 12.3458 14.4553 12.5827C14.8889 12.8197 15.2161 13.1456 15.4369 13.5603C15.6604 13.9723 15.7722 14.4409 15.7722 14.966C15.7722 15.4965 15.6604 15.9678 15.4369 16.3798C15.2134 16.7918 14.8835 17.1163 14.4473 17.3533C14.011 17.5876 13.4738 17.7047 12.8355 17.7047H10.7795V16.4727H12.6336C13.0052 16.4727 13.3095 16.4081 13.5465 16.2788C13.7835 16.1495 13.9585 15.9718 14.0716 15.7456C14.1874 15.5194 14.2453 15.2595 14.2453 14.966C14.2453 14.6725 14.1874 14.4139 14.0716 14.1904C13.9585 13.9669 13.7821 13.7932 13.5424 13.6693C13.3055 13.5428 12.9998 13.4795 12.6255 13.4795H11.2521V20.5H9.75346ZM19.8773 20.5H17.0739V12.2273H19.9338C20.7552 12.2273 21.4607 12.3929 22.0505 12.7241C22.6429 13.0527 23.098 13.5253 23.4158 14.142C23.7336 14.7586 23.8924 15.4965 23.8924 16.3556C23.8924 17.2173 23.7322 17.9579 23.4117 18.5772C23.094 19.1966 22.6348 19.6719 22.0343 20.0032C21.4365 20.3344 20.7175 20.5 19.8773 20.5ZM18.5725 19.2033H19.8045C20.3808 19.2033 20.8615 19.0983 21.2466 18.8883C21.6317 18.6755 21.9212 18.3591 22.1151 17.939C22.309 17.5162 22.4059 16.9884 22.4059 16.3556C22.4059 15.7227 22.309 15.1976 22.1151 14.7802C21.9212 14.3601 21.6344 14.0464 21.2547 13.839C20.8777 13.629 20.4091 13.5239 19.849 13.5239H18.5725V19.2033ZM25.3163 20.5V12.2273H30.616V13.4835H26.815V15.7294H30.2525V16.9857H26.815V20.5H25.3163Z" fill="black" />
      </svg>; // Replace with your icon
    } else if (icon === "4") {
      return <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 40 40" fill="none">
        <path d="M5 5.125C5 3.67525 6.17525 2.5 7.625 2.5H32.125C33.5747 2.5 34.75 3.67525 34.75 5.125V30.5C34.75 34.366 31.616 37.5 27.75 37.5H7.625C6.17525 37.5 5 36.3247 5 34.875V5.125Z" stroke="black" stroke-width="1.3125" />
        <path d="M35.1875 31.375H28.625V37.5" stroke="black" stroke-width="1.3125" />
        <circle cx="12.875" cy="16.5" r="7" stroke="black" stroke-width="1.3125" />
        <circle cx="27.3125" cy="16.5" r="7" stroke="black" stroke-width="1.3125" />
        <g clip-path="url(#clip0_1788_3931)">
          <path d="M12.003 17.8891L16.0245 13.8672L16.6436 14.4858L12.003 19.1264L9.21875 16.3421L9.83738 15.7235L12.003 17.8891Z" fill="black" />
        </g>
        <g clip-path="url(#clip1_1788_3931)">
          <path d="M27.3155 15.8844L29.4811 13.7188L30.0998 14.3374L27.9341 16.503L30.0998 18.6686L29.4811 19.2873L27.3155 17.1216L25.1499 19.2873L24.5312 18.6686L26.6969 16.503L24.5312 14.3374L25.1499 13.7188L27.3155 15.8844Z" fill="black" />
        </g>
        <defs>
          <clipPath id="clip0_1788_3931">
            <rect width="10.5" height="10.5" fill="white" transform="translate(7.625 11.25)" />
          </clipPath>
          <clipPath id="clip1_1788_3931">
            <rect width="10.5" height="10.5" fill="white" transform="translate(22.0625 11.25)" />
          </clipPath>
        </defs>
      </svg>
        ;
      // Handle other cases or return a default icon
    } else {
      return <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 40 40" fill="none">
        <path d="M5 5.125C5 3.67525 6.17525 2.5 7.625 2.5H32.125C33.5747 2.5 34.75 3.67525 34.75 5.125V30.5C34.75 34.366 31.616 37.5 27.75 37.5H7.625C6.17525 37.5 5 36.3247 5 34.875V5.125Z" stroke="black" stroke-width="1.3125" />
        <line x1="11.125" y1="25.4688" x2="28.625" y2="25.4688" stroke="black" stroke-width="1.3125" />
        <line x1="11.125" y1="29.8438" x2="22.5" y2="29.8438" stroke="black" stroke-width="1.3125" />
        <path d="M35.1875 31.375H28.625V37.5" stroke="black" stroke-width="1.3125" />
        <path d="M18.0518 21.3672C17.9469 21.3307 17.7214 21.3125 17.375 21.3125H13.4648C13.2279 21.3125 13.0365 21.276 12.8906 21.2031C12.7493 21.1257 12.6787 20.9867 12.6787 20.7861C12.6787 20.6449 12.7152 20.5286 12.7881 20.4375C12.9613 20.4831 13.1253 20.5059 13.2803 20.5059C13.4352 20.5059 13.5811 20.4899 13.7178 20.458C13.8545 20.4261 13.9844 20.3691 14.1074 20.2871C14.3991 20.1003 14.554 19.8154 14.5723 19.4326V11.8311H13.6836C13.0228 11.8311 12.5898 11.863 12.3848 11.9268C12.1842 11.986 12.0316 12.0635 11.9268 12.1592C11.8265 12.2549 11.7445 12.3848 11.6807 12.5488C11.5667 12.8314 11.4779 13.319 11.4141 14.0117C11.3138 14.0345 11.2227 14.0459 11.1406 14.0459C10.9583 14.0459 10.8421 13.998 10.792 13.9023C10.7419 13.8066 10.7077 13.7087 10.6895 13.6084C10.6712 13.5036 10.6576 13.3896 10.6484 13.2666C10.6302 13.0205 10.6211 12.7585 10.6211 12.4805C10.6211 11.7194 10.6803 11.2363 10.7988 11.0312C10.9173 10.8125 11.1543 10.7031 11.5098 10.7031C11.5781 10.7031 11.6784 10.71 11.8105 10.7236C11.9427 10.7373 12.1341 10.7533 12.3848 10.7715C13.0638 10.8125 13.8773 10.833 14.8252 10.833H15.9805C17.3021 10.833 18.1862 10.8125 18.6328 10.7715C19.0794 10.7259 19.3574 10.7031 19.4668 10.7031C19.5762 10.7031 19.6764 10.7191 19.7676 10.751C19.8587 10.7829 19.9316 10.8285 19.9863 10.8877C20.0729 10.988 20.1162 11.1133 20.1162 11.2637C20.1162 11.4915 20.1094 11.6738 20.0957 11.8105C20.082 11.9473 20.0661 12.109 20.0479 12.2959C20.0342 12.4827 20.0137 12.6764 19.9863 12.877C19.9225 13.3509 19.8428 13.6768 19.7471 13.8545C19.6559 13.9821 19.5443 14.0459 19.4121 14.0459C19.2845 14.0459 19.1706 14.0345 19.0703 14.0117L19.0771 13.5811C19.0771 13.1755 19.0544 12.8564 19.0088 12.624C18.9632 12.387 18.8675 12.2116 18.7217 12.0977C18.5758 11.9792 18.3662 11.9062 18.0928 11.8789C17.8193 11.847 17.4548 11.8311 16.999 11.8311H16.1787V19.6992C16.1787 20.0273 16.4408 20.2552 16.9648 20.3828C17.0924 20.4102 17.2132 20.4352 17.3271 20.458C17.4456 20.4808 17.5596 20.5059 17.6689 20.5332C17.7783 20.556 17.8695 20.5856 17.9424 20.6221C18.0882 20.695 18.1611 20.818 18.1611 20.9912C18.1611 21.1507 18.1247 21.276 18.0518 21.3672Z" fill="black" />
        <path d="M23.5234 21.1875L22.1934 19.1808L21.0151 21.1875H19.2651L21.3768 17.9442L19.2418 14.7242H21.0851L22.4034 16.7192L23.5934 14.7242H25.3434L23.2201 17.9442L25.3668 21.1875H23.5234Z" fill="black" />
      </svg>
        ;
    }
  };
  const ExtendCourseList = () => {
    if (showMoreLessText === 'Show more') {
      const extendedList = [...courseSections, ...extraCourseSection];
      setcourseSections(extendedList)
      setShowMoreLessText('Show less');
    } else {
      setShowMoreLessText('Show more');
      setcourseSections(halfcourseSections);
    }
  }
  const ExtendCourseList2 = () => {
    if (showMoreLessText2 === 'Show more') {
      const extendedList2 = [...courseSections2, ...extraCourseSection2];
      setcourseSections2(extendedList2)
      setShowMoreLessText2('Show less');
    } else {
      setShowMoreLessText2('Show more');
      setcourseSections2(halfcourseSections2);
    }
  }
  const LearnSideSelf = [
    { cont: 'Learn Apache Spark and PySpark programming from beginner to advanced' },
    { cont: 'Master Databricks Cloud, Lakehouse Architecture and other Databricks Tools.' },
    { cont: 'Prepare and Practice for Spark Developer Associate and Data Engineer Associate Certifications' },
    { cont: 'Learn Apache Kafka and Spark Structured Streaming' },
    { cont: ' Bonus learning with Python Programming and AWS Cloud Fundamentals.' },
  ];
  const LearnSideInd = [
    { cont: 'Learn Apache Spark and PySpark programming from beginner to advanced' },
    { cont: 'Master Databricks Cloud, delve into Lakehouse Architecture, and harness proficiency in various Databricks Tools with our comprehensive program.' },
    { cont: 'Engage in weekly interactive live sessions for structured and comprehensive learning experiences.' },
    { cont: 'Clarify all your doubts with expert guidance and support.' },
  ];
  return (
    <>
      <div className={classes.banner + " d-flex justify-content-center align-items-center"}>
        <div class="mx-auto w-75">
          <h1 class={classes.h1fs}> {bannerDetails != null && bannerDetails.title}</h1>

          <h3 class={classes.h3fs+" "+"text-white"}>  {bannerDetails != null && bannerDetails.desc}   </h3>
          <div class="row gap-2 justify-content-center">
            <a class="col-sm-5 col-md-4  col-8 btn btn-rounded btn-warning p-2 mx-2" href={props.link}>{props.btnName}  </a>
            {
              props.isSelf && <a class="col-sm-5  col-md-4 col-8 btn btn-rounded btn-warning p-2 mx-2" href="https://docs.google.com/forms/d/e/1FAIpQLSczeKG6-u1esN6_N8dQSFD3C8_BVg9jj3uJEoBU-37jn5IYhw/viewform"> Inquiry Form for more details </a>
            }
          </div>
          <br />
        </div>
      </div>
      <br />
      <br />
      <div className="row mx-4">
        <div className={classes.secondDiv + " col-12 col-sm-12 col-md-6 h-100"}>
          <h2 className={classes.h2fs}>What you'll learn</h2>
          <br />
          <p class={classes.pfs+" "+"my-1"}>{props.isSelf ? "Master in Apache Spark Programming and Azure Databricks Cloud Platform. Explore hands-on projects, expert guidance, and comprehensive learning, empowering you with transformative skills in these cutting-edge technologies." : "Mastering Data Engineering with Spark and Databricks is a comprehensive course bundle that will help you become proficient in Apache Spark programming and Databricks Cloud Platform, Structured Streaming, Apache Kafka, Spark Developer and Databricks Data Engineer Certification."}
          </p>

        </div>
        <div className=" col-12 col-sm-12 col-md-6">
          {
            learnSide.map((data, key) => {
              return (
                <>
                  <p class={classes.pfs+" "+"d-flex my-3"}>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class={classes.svgIcon + " bi mt-1 mr-2 bi-check-circle-fill"} viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                      </svg> </span>
                    {data.cont}</p>
                  <hr />
                </>
              )
            })

          }

        </div>

      </div>
      <br />
      <br />
      {
        props.isSelf &&
        <div className={classes.fifthDiv + ' row mx-2 px-md-5 '}>
          <h2 className={classes.h2fs}>
            Course Content
          </h2>
          <h3 class={classes.h3fs}>130 lectures - 25 hours video - Capstone Project</h3>
          <br />

          <div className="col-md-6 col-12 border ">
            <div className={" "}>
              <h3 class={classes.h3fs+" fw-bold text-center"}>Mastering Pyspark</h3>
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
                        <h3 class={classes.h3style1 + " col-10 d-flex " + classes.h3fs}> {quest.ques}</h3>
                        <div class="col-2  text-end d-flex justify-content-center align-items-center" >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi  bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                          </svg>
                        </div>
                      </div>
                      <div style={{ display: "none" }} class=" " id={quest.id}>

                        {quest.ans.map(answer => (

                          <div class='my-3' key={answer.ansId}>
                            {answer.free === "true" ? (
                              <a href={answer.link} className={classes.ansDiv}>

                                <p className={classes.clickable + " d-flex gap-2" + " " + classes.pfs }> {renderIcon(answer.icon)} {answer.det}</p>


                                <button class={classes.freePreview + " mt-1  mt-sm-0" + " " + classes.pfs}>
                                  Free Preview
                                </button>

                              </a>
                            ) : (
                              <span className='d-flex my-2'>
                                <p className={classes.unclickable + " d-flex gap-2" + " " + classes.pfs}>{renderIcon(answer.icon)}   {answer.det} </p>
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
            <button onClick={ExtendCourseList}> <p class={classes.pfs+" "+'fw-bold my-2'}> {showMoreLessText} </p></button>
          </div>
          <div className="col-md-6 col-12 border">
            <div className={" "}>
              <h3 class={classes.h3fs+" fw-bold text-center"}>Mastering Azure Databricks </h3>
              {
                courseSections2.map((quest) => {
                  function openSolution2(ques_id) {
                    const elem = document.getElementById(ques_id + 'a')
                    if (elem.style.display === "none") {
                      elem.style.display = "block";
                    } else {
                      elem.style.display = "none";
                    }
                  }
                  return (
                    <div class="my-2 mx-md-2" >
                      <div style={{ cursor: "pointer" }} onClick={() => { openSolution2(quest.id) }} className="row rounded    w-100 justify-content-between question">
                        <h3 class={classes.h3style1 + " col-10 d-flex "+ classes.h3fs}> {quest.ques}</h3>
                        <div class="col-2  text-end d-flex justify-content-center align-items-center" >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi  bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                          </svg>
                        </div>
                      </div>
                      <div style={{ display: "none" }} class=" " id={quest.id + 'a'}>

                        {quest.ans.map(answer => (

                          <div class='my-3' key={answer.ansId}>
                            {answer.free === "true" ? (
                              <a href={answer.link} className={classes.ansDiv}>

                                <p className={classes.clickable + " d-flex gap-2" + " " + classes.pfs}> {renderIcon(answer.icon)} {answer.det}</p>


                                <button class={classes.freePreview + " mt-1  mt-sm-0" + " " + classes.pfs }>
                                  Free Preview
                                </button>

                              </a>
                            ) : (
                              <span className='d-flex my-2'>
                                <p className={classes.unclickable + " d-flex gap-2" + " " + classes.pfs}>{renderIcon(answer.icon)}   {answer.det} </p>
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
            <button onClick={ExtendCourseList2}> <p class={classes.pfs+" "+'fw-bold my-2' }> {showMoreLessText2} </p></button>
          </div>
        </div>
      }
      <br />
      {/* 3rd Section */}
      {
        !props.isSelf &&
        <div style={{ backgroundColor: "rgb(251 251 249)" }} className={classes.courseBox + " mx-auto  row text-start  p-3"} >

          <h2 class={ classes.h2fs+"  my-2"}>Included Course</h2>
          <p class={classes.pfs+" "+"mb-1"}>Lifetime access for 8 courses worth $470.79</p>

          {
            courseListMain.map((data, index) => {
              return (
                <div className=" col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-lg-4 p-xl-4 p-md-3 p-sm-2 p-1">
                  <a href={data.link}>
                    <div className={classes.styleDiv + " h-100"}>
                      <Image width={600}
                        height={300} src={data.imgPath} alt={data.heading} />
                      <br />
                      <h3 class={classes.h3style + " " + classes.h3fs} >{data.heading}</h3>

                      <p class={classes.pfs+" "+"my-2"}>{data.desc}</p>
                      <p class={classes.pfs+" "+"my-2 fw-bold"}>{data.price}</p>

                      {/* <p class={classes.pfs}>8 self-placed courses worth $xyz</p> */}
                    </div>
                  </a>

                </div>

              )
            })
          }



          {!props.selfPaced &&
            <a href="https://www.scholarnest.in/collections">
              <button className='px-lg-3 px-xl-3 px-md-3 px-sm-1 px-1 py-lg-3 py-xl-3 py-md-3 py-1 py-sm-2 fw-semibold btn btn-danger rounded-pill mx-4 my-4'>View more courses</button>
            </a>
          }
        </div>
      }
      <br />
      <br />
      <div className={classes.div4}>
        <br />
        <h2 class={ classes.h2fs+" my-2 mx-3"}>Features & Support</h2>
        <br />
        <div className="row mx-0 justify-content-center">
          <div className={classes.featureBox + " col-10 col-sm-6 col-lg-3 col-md-4 bg-white border"}>
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" width="40px" class="mx-auto my-3" viewBox="0 0 448 512"><path d="M347.1 215.4c11.7-32.6 45.4-126.9 45.4-157.1 0-26.6-15.7-48.9-43.7-48.9-44.6 0-84.6 131.7-97.1 163.1C242 144 196.6 0 156.6 0c-31.1 0-45.7 22.9-45.7 51.7 0 35.3 34.2 126.8 46.6 162-6.3-2.3-13.1-4.3-20-4.3-23.4 0-48.3 29.1-48.3 52.6 0 8.9 4.9 21.4 8 29.7-36.9 10-51.1 34.6-51.1 71.7C46 435.6 114.4 512 210.6 512c118 0 191.4-88.6 191.4-202.9 0-43.1-6.9-82-54.9-93.7zM311.7 108c4-12.3 21.1-64.3 37.1-64.3 8.6 0 10.9 8.9 10.9 16 0 19.1-38.6 124.6-47.1 148l-34-6 33.1-93.7zM142.3 48.3c0-11.9 14.5-45.7 46.3 47.1l34.6 100.3c-15.6-1.3-27.7-3-35.4 1.4-10.9-28.8-45.5-119.7-45.5-148.8zM140 244c29.3 0 67.1 94.6 67.1 107.4 0 5.1-4.9 11.4-10.6 11.4-20.9 0-76.9-76.9-76.9-97.7.1-7.7 12.7-21.1 20.4-21.1zm184.3 186.3c-29.1 32-66.3 48.6-109.7 48.6-59.4 0-106.3-32.6-128.9-88.3-17.1-43.4 3.8-68.3 20.6-68.3 11.4 0 54.3 60.3 54.3 73.1 0 4.9-7.7 8.3-11.7 8.3-16.1 0-22.4-15.5-51.1-51.4-29.7 29.7 20.5 86.9 58.3 86.9 26.1 0 43.1-24.2 38-42 3.7 0 8.3.3 11.7-.6 1.1 27.1 9.1 59.4 41.7 61.7 0-.9 2-7.1 2-7.4 0-17.4-10.6-32.6-10.6-50.3 0-28.3 21.7-55.7 43.7-71.7 8-6 17.7-9.7 27.1-13.1 9.7-3.7 20-8 27.4-15.4-1.1-11.2-5.7-21.1-16.9-21.1-27.7 0-120.6 4-120.6-39.7 0-6.7.1-13.1 17.4-13.1 32.3 0 114.3 8 138.3 29.1 18.1 16.1 24.3 113.2-31 174.7zm-98.6-126c9.7 3.1 19.7 4 29.7 6-7.4 5.4-14 12-20.3 19.1-2.8-8.5-6.2-16.8-9.4-25.1z" /></svg>
            <h3 class={classes.h3fs+ " my-3 fw-bold"}> Total Support</h3>
            {props.isSelf ? <p class={classes.pfs}>We offer continuous support, addressing all your queries in our discussion and Q&A forum. Additionally, personalized one-to-one technical support calls are available for any critical issues you may encounter. </p> : <p class={classes.pfs}> We provide support throughout your learning and answer every question in our discussion and Q&A forum. You may also avail of one-to-one technical support calls for blocker issues. </p>
            }
          </div>
          <div className={classes.featureBox + " col-10 col-sm-6 col-lg-3 bg-white border col-md-4"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi mx-auto my-3 bi-mortarboard-fill" viewBox="0 0 16 16">
              <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
              <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
            </svg>
            <h3 class={classes.h3fs+ " my-3 fw-bold"}>{props.isSelf ? "Prepared for Certification" : "Certification Ready"}</h3>
            {props.isSelf ? <p class={classes.pfs}>The course aligns with the Apache Spark Developer Associate and Databricks Certified Data Engineer Associate certification exam syllabus, ensuring you are well-prepared for the certification exam upon completion.</p> : <p class={classes.pfs}>The course covers the Apache Spark Developer Associate and Databricks Certified Data Engineer Associate certification exam curriculum. By the end of the course, you will be ready to take the certification exam. </p>
            }
          </div>
          <div className={classes.featureBox + " col-10 col-sm-6 col-lg-3 bg-white border col-md-4"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi mx-auto my-3 bi-cup-fill" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M.11 3.187A.5.5 0 0 1 .5 3h13a.5.5 0 0 1 .488.608l-.22.991a3.001 3.001 0 0 1-1.3 5.854l-.132.59A2.5 2.5 0 0 1 9.896 13H4.104a2.5 2.5 0 0 1-2.44-1.958L.012 3.608a.5.5 0 0 1 .098-.42Zm12.574 6.288a2 2 0 0 0 .866-3.899l-.866 3.9Z" />
            </svg>
            <h3 class={classes.h3fs+" my-3 fw-bold"}> Capstone Project</h3>
            {props.isSelf ? <p class={classes.pfs}>The course features two comprehensive end-to-end real-life capstone projects, complete with solutions, source code, and detailed explanations. Additionally, it offers hands-on assignments and quizzes for practical practice.</p> : <p class={classes.pfs}> The course includes many hands-on assignments/solutions and a major real-life capstone project with the complete solution, source code, and explanation. </p>
            }
          </div>
        </div>
        <br />
      </div>
      <br />
      <br />
      <div class="instructorLed">
        {props.isSelf &&
          <MoreAcademyInstructor />
        }
      </div>
      <br />
      <br />
      {/* Section 4 */}
      <div class={classes.div3}>
        <h2 class={classes.h2fs+" text-center"}>Course FAQ</h2>
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
                  <div style={{ cursor: "pointer" }} onClick={() => { openSolution(quest.id) }} className="row rounded mx-auto  p-3 w-100 justify-content-between question">
                    <p class={classes.h3style + " col-10 d-flex "+ classes.pfs}> {quest.ques}</p>
                    <a class="col-1  text-end" >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi align-self-end bi-caret-down-fill" viewBox="0 0 16 16">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                      </svg>
                    </a>
                  </div>
                  <div style={{ display: "none" }} class={classes.Faqs + " px-4 mx-auto "} id={quest.id}>
                    <p class={classes.pfs}>{quest.ans} </p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <br />
      <br />
      <div class={classes.div4 + " d-flex justify-content-center align-items-center"}>
        <div>
          <br />
          <h2 class={classes.h2fs+" text-center"}>Enroll now and get started today</h2>
          <br />
          <div class="d-flex justify-content-center gap-2  flex-column flex-md-row">
            <a class="btn rounded-pill btn-warning px-5 p-2 mx-auto text-center" href="https://www.scholarnest.in/order?ct=6a421523-c128-411f-9fa0-578357e21a21"> {props.selfPaced ? 'Buy Now' : 'Buy Now: Out of India'}</a>
            {
              props.isSelf &&
              <a class="btn rounded-pill btn-warning px-5 p-2 mx-auto text-center" href="https://www.scholarnest.in/pages/checkout-certified-big-data-engineer-ilt"> Buy Now: Within India</a>
            }
          </div>

          <br />
        </div>
      </div>
      <br />
      <br />
      <div style={{ backgroundColor: "rgb(251 251 249)" }}>
        <div className="row mx-4 justify-content-center">
          {
            !props.isSelf &&
            <>
            <div className={classes.secondDiv + " col-12 col-sm-12 col-md-6 p-2 h-100"}>
              <h2 className={classes.h2fs}>Schedule a free call</h2>
              <br />
              <p class={classes.pfs+" "+"my-1"}>Get in touch with your course coordinator to learn more about the course, instructor-led course options, discount offers, course bundles, and additional payment methods.
              </p>

            </div>
        
    
          <div className={classes.secondDiv + " col-12 col-md-6 col-6"}>

            <div >
              <h3 class={classes.h3fs}>For Instructor-led training</h3>


              <p class={classes.pfs+" "+"fw-bold mb-2"}> Course Enquiry: <a style={{ textDecoration: "underline" }} href="https://docs.google.com/forms/d/e/1FAIpQLSczeKG6-u1esN6_N8dQSFD3C8_BVg9jj3uJEoBU-37jn5IYhw/viewform" target="_blank">  Request callback </a></p>
              <p class={classes.pfs+" "+"mb-2"}>
                Looking for an Instructor-led course? We have Instructor-led batches starting every month. Fill out the course inquiry form, and we will contact you with more details.
              </p>

              <hr />
            </div>
            <div>

              <h3 class={classes.h3fs}>Email</h3>
              <p class={classes.pfs+" "+"fw-bold mb-2"}>
                Email: sushant@scholarnest.com
              </p>
              <p class={classes.pfs+" "+"mb-2"}>Contact us for current promotional offers, course bundles, and additional payment methods such as NEFT, Net Banking, UPI, etc.</p>
            </div>
            <hr />
            <div>

              <h3 class={classes.h3fs}>WhatsApp</h3>
              <p class={classes.pfs+" "+"fw-bold mb-2"}>
                WhatsApp: +91-93534 65988
              </p>
              <p class={classes.pfs+" "+"mb-2"}>Want to speak to your course coordinator? We are just a WhatsApp message away.</p>
            </div>
            <br />
          </div>
          <br />
          </>
          }
          {
            props.isSelf &&
            <div className={classes.secondDiv + " col-12 "}>
                    <h2 class={classes.h2fs +" my-2"}>Get in touch with the Course Coordinator </h2>
  <br />
              <div className='row justify-content-between' >
        
           
           <span class="col d-flex p-2 fw-bold"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="green" class="bi bi-whatsapp mr-2 " viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg>  +91 9353465988  </span>
              <span class="col d-flex  p-2 fw-bold"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#c71610" class="bi bi-envelope mr-2 " viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg> sushant@scholarnest.com </span>
              <span class="col d-flex  p-2 fw-bold">  <svg xmlns="http://www.w3.org/2000/svg"width="24" height="24" fill="currentColor" class="bi bi-telephone mr-2 " viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg>  <a style={{ textDecoration: "underline" }} href="https://docs.google.com/forms/d/e/1FAIpQLSczeKG6-u1esN6_N8dQSFD3C8_BVg9jj3uJEoBU-37jn5IYhw/viewform" target="_blank">  Request callback </a>
</span>     

              <hr />
            </div>
             </div>
          }
          </div>
        
      </div>
      
      <br /><br />
      {
        !props.isSelf &&
        <div className={classes.courseBox + " mx-auto justify-content-center  row text-start  p-3"} >

          <h2 class={classes.h2fs+"  my-2"}>Individual Courses:</h2>
          <p class={classes.pfs}>Schedule a call with course coordinator for bundles, discounts and live sessions</p>

          {
            indCourseListMain.map((data, index) => {
              return (
                <div className=" rounded col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-lg-4 p-xl-4 p-md-3 p-sm-2 p-1">
                  <a href={data.link}>
                    <div className={classes.styleDiv + " h-100"}>
                      <Image width={600}
                        height={300} src={data.imgPath} alt={data.heading} />
                      <br />
                      <h3 class={classes.h3style +" "+ classes.h3fs} >{data.heading}</h3>

                      <p class={classes.pfs+" "+"my-2"}>{data.desc}</p>
                      <p class={classes.pfs+" "+"my-2 fw-bold"}>{data.price}</p>

                      {/* <p class={classes.pfs}>8 self-placed courses worth $xyz</p> */}
                    </div>
                  </a>

                </div>

              )
            })
          }




          <a href={props.selfPaced ? "/scholarnest-academy" : "https://www.scholarnest.in/collections"}>
            <button className='px-lg-3 px-xl-3 px-md-3 px-sm-1 px-1 py-lg-3 py-xl-3 py-md-3 py-1 py-sm-2 fw-semibold btn btn-danger rounded-pill mx-4 my-4'>View more courses</button>
          </a>

        </div>
      }
    </>
  )
}
export default MoreAcademyInfo;