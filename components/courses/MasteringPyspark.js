import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Card } from "@nextui-org/react";
import classes from "./style/extraCourses.module.css";
import { useRouter } from "next/router";

const MasteringPyspark = () => {
    const router = useRouter();
    const [courseSections , setcourseSections] =useState([]);
     const [showMoreLessText, setShowMoreLessText] = useState('Show more');
    useEffect((()=>{
    setcourseSections(halfcourseSections);
    }),[])
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
    const extraCourseSection=[
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
   
    const IndcourseList = [

        {
            heading: "Just Enough Python for PySpark Developers",
            desc: "Self-paced Learning",
            imgPath: "/assets/solutions/MoreAcademySolutions/courses/justpython.jpg",
            price: "$24.79",
            link: "just-enough-python-for-pyspark-developers"
        },
        {
            heading: "Databricks Certified Associate Developer for Apache Spark 3.0",
            desc: " Self-Paced - Exam Practice Test",
            imgPath:"/assets/solutions/MoreAcademySolutions/courses/databricks.png",
            price: "$36.79",
            link: "databricks-certified-associate-developer-for-apache-spark"
        },

        {
            heading: " Getting Started to Spark Azure Databricks and Lakehouse Fundamentals Certification Preparation",
            desc: "",
            imgPath: "/assets/solutions/MoreAcademySolutions/courses/lakehouse.jpg",
            price: "",
            link: "https://www.scholarnest.in/courses/getting-started-to-spark-azure-databricks-and-lakehouse-fundamentals-certification-preparation"
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
          return <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 40 40" fill="none">
          <path d="M5.5 10.0781H25.4259C26.6686 10.0781 27.6759 11.0855 27.6759 12.3281V27.0689C27.6759 28.3115 26.6686 29.3189 25.4259 29.3189H5.5C4.25736 29.3189 3.25 28.3115 3.25 27.0689V12.3281C3.25 11.0855 4.25736 10.0781 5.5 10.0781Z" stroke="black" stroke-width="1.5"/>
          <path d="M28.3368 15.4077L34.7071 10.2318C35.524 9.56807 36.7454 10.1494 36.7454 11.2019V28.2778C36.7454 29.3078 35.5694 29.8958 34.7454 29.2778L28.375 24.5C28.0602 24.2639 27.875 23.8934 27.875 23.5V16.3779C27.875 16.0015 28.0446 15.6451 28.3368 15.4077Z" stroke="black" stroke-width="1.5"/>
          </svg>; // Replace with your icon
        } else if (icon === "2") {
          return <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 40 40" fill="none">
          <path d="M10.8696 31.3261C8.64982 31.3261 6.52099 30.4443 4.95139 28.8747C3.38179 27.3051 2.5 25.1763 2.5 22.9565C2.5 20.7368 3.38179 18.6079 4.95139 17.0383C6.52099 15.4687 8.64982 14.587 10.8696 14.587C12.3913 11.0109 15.8913 8.5 20 8.5C25.2196 8.5 29.4957 12.5478 29.8913 17.6761L30.6522 17.6304C34.4565 17.6304 37.5 20.6739 37.5 24.4783C37.5 28.2826 34.4565 31.3261 30.6522 31.3261H10.8696ZM10.8696 16.1087C7.06522 16.1087 4.02174 19.1522 4.02174 22.9565C4.02174 26.7609 7.06522 29.8043 10.8696 29.8043H30.6522C32.0647 29.8043 33.4195 29.2432 34.4183 28.2444C35.4171 27.2455 35.9783 25.8908 35.9783 24.4783C35.9783 23.0657 35.4171 21.711 34.4183 20.7121C33.4195 19.7133 32.0647 19.1522 30.6522 19.1522C29.8 19.1522 28.9783 19.35 28.263 19.7152L28.3696 18.3913C28.3696 16.1716 27.4878 14.0427 25.9182 12.4731C24.3486 10.9035 22.2197 10.0217 20 10.0217C18.1642 10.0228 16.3794 10.6263 14.9197 11.7396C13.46 12.8529 12.406 14.4146 11.9196 16.1848L10.8696 16.1087ZM20.7609 16.1087V24.0978L24.1848 20.6739L25.3261 21.6783L20 27.0043L14.6739 21.6783L15.8152 20.6739L19.2391 24.0978V16.1087H20.7609Z" fill="black"/>
          </svg>; // Replace with your icon
        } else if (icon === "3") {
          return <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 40 40" fill="none">
          <path d="M5 5.125C5 3.67525 6.17525 2.5 7.625 2.5H32.125C33.5747 2.5 34.75 3.67525 34.75 5.125V30.5C34.75 34.366 31.616 37.5 27.75 37.5H7.625C6.17525 37.5 5 36.3247 5 34.875V5.125Z" stroke="black" stroke-width="1.3125"/>
          <path d="M35.1875 31.375H28.625V37.5" stroke="black" stroke-width="1.3125"/>
          <path d="M9.75346 20.5V12.2273H12.8557C13.4913 12.2273 14.0245 12.3458 14.4553 12.5827C14.8889 12.8197 15.2161 13.1456 15.4369 13.5603C15.6604 13.9723 15.7722 14.4409 15.7722 14.966C15.7722 15.4965 15.6604 15.9678 15.4369 16.3798C15.2134 16.7918 14.8835 17.1163 14.4473 17.3533C14.011 17.5876 13.4738 17.7047 12.8355 17.7047H10.7795V16.4727H12.6336C13.0052 16.4727 13.3095 16.4081 13.5465 16.2788C13.7835 16.1495 13.9585 15.9718 14.0716 15.7456C14.1874 15.5194 14.2453 15.2595 14.2453 14.966C14.2453 14.6725 14.1874 14.4139 14.0716 14.1904C13.9585 13.9669 13.7821 13.7932 13.5424 13.6693C13.3055 13.5428 12.9998 13.4795 12.6255 13.4795H11.2521V20.5H9.75346ZM19.8773 20.5H17.0739V12.2273H19.9338C20.7552 12.2273 21.4607 12.3929 22.0505 12.7241C22.6429 13.0527 23.098 13.5253 23.4158 14.142C23.7336 14.7586 23.8924 15.4965 23.8924 16.3556C23.8924 17.2173 23.7322 17.9579 23.4117 18.5772C23.094 19.1966 22.6348 19.6719 22.0343 20.0032C21.4365 20.3344 20.7175 20.5 19.8773 20.5ZM18.5725 19.2033H19.8045C20.3808 19.2033 20.8615 19.0983 21.2466 18.8883C21.6317 18.6755 21.9212 18.3591 22.1151 17.939C22.309 17.5162 22.4059 16.9884 22.4059 16.3556C22.4059 15.7227 22.309 15.1976 22.1151 14.7802C21.9212 14.3601 21.6344 14.0464 21.2547 13.839C20.8777 13.629 20.4091 13.5239 19.849 13.5239H18.5725V19.2033ZM25.3163 20.5V12.2273H30.616V13.4835H26.815V15.7294H30.2525V16.9857H26.815V20.5H25.3163Z" fill="black"/>
          </svg>; // Replace with your icon
        } else if (icon === "4") {
          return <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 40 40" fill="none">
          <path d="M5 5.125C5 3.67525 6.17525 2.5 7.625 2.5H32.125C33.5747 2.5 34.75 3.67525 34.75 5.125V30.5C34.75 34.366 31.616 37.5 27.75 37.5H7.625C6.17525 37.5 5 36.3247 5 34.875V5.125Z" stroke="black" stroke-width="1.3125"/>
          <path d="M35.1875 31.375H28.625V37.5" stroke="black" stroke-width="1.3125"/>
          <circle cx="12.875" cy="16.5" r="7" stroke="black" stroke-width="1.3125"/>
          <circle cx="27.3125" cy="16.5" r="7" stroke="black" stroke-width="1.3125"/>
          <g clip-path="url(#clip0_1788_3931)">
          <path d="M12.003 17.8891L16.0245 13.8672L16.6436 14.4858L12.003 19.1264L9.21875 16.3421L9.83738 15.7235L12.003 17.8891Z" fill="black"/>
          </g>
          <g clip-path="url(#clip1_1788_3931)">
          <path d="M27.3155 15.8844L29.4811 13.7188L30.0998 14.3374L27.9341 16.503L30.0998 18.6686L29.4811 19.2873L27.3155 17.1216L25.1499 19.2873L24.5312 18.6686L26.6969 16.503L24.5312 14.3374L25.1499 13.7188L27.3155 15.8844Z" fill="black"/>
          </g>
          <defs>
          <clipPath id="clip0_1788_3931">
          <rect width="10.5" height="10.5" fill="white" transform="translate(7.625 11.25)"/>
          </clipPath>
          <clipPath id="clip1_1788_3931">
          <rect width="10.5" height="10.5" fill="white" transform="translate(22.0625 11.25)"/>
          </clipPath>
          </defs>
          </svg>
          ;
          // Handle other cases or return a default icon
        } else {
          return <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 40 40" fill="none">
          <path d="M5 5.125C5 3.67525 6.17525 2.5 7.625 2.5H32.125C33.5747 2.5 34.75 3.67525 34.75 5.125V30.5C34.75 34.366 31.616 37.5 27.75 37.5H7.625C6.17525 37.5 5 36.3247 5 34.875V5.125Z" stroke="black" stroke-width="1.3125"/>
          <line x1="11.125" y1="25.4688" x2="28.625" y2="25.4688" stroke="black" stroke-width="1.3125"/>
          <line x1="11.125" y1="29.8438" x2="22.5" y2="29.8438" stroke="black" stroke-width="1.3125"/>
          <path d="M35.1875 31.375H28.625V37.5" stroke="black" stroke-width="1.3125"/>
          <path d="M18.0518 21.3672C17.9469 21.3307 17.7214 21.3125 17.375 21.3125H13.4648C13.2279 21.3125 13.0365 21.276 12.8906 21.2031C12.7493 21.1257 12.6787 20.9867 12.6787 20.7861C12.6787 20.6449 12.7152 20.5286 12.7881 20.4375C12.9613 20.4831 13.1253 20.5059 13.2803 20.5059C13.4352 20.5059 13.5811 20.4899 13.7178 20.458C13.8545 20.4261 13.9844 20.3691 14.1074 20.2871C14.3991 20.1003 14.554 19.8154 14.5723 19.4326V11.8311H13.6836C13.0228 11.8311 12.5898 11.863 12.3848 11.9268C12.1842 11.986 12.0316 12.0635 11.9268 12.1592C11.8265 12.2549 11.7445 12.3848 11.6807 12.5488C11.5667 12.8314 11.4779 13.319 11.4141 14.0117C11.3138 14.0345 11.2227 14.0459 11.1406 14.0459C10.9583 14.0459 10.8421 13.998 10.792 13.9023C10.7419 13.8066 10.7077 13.7087 10.6895 13.6084C10.6712 13.5036 10.6576 13.3896 10.6484 13.2666C10.6302 13.0205 10.6211 12.7585 10.6211 12.4805C10.6211 11.7194 10.6803 11.2363 10.7988 11.0312C10.9173 10.8125 11.1543 10.7031 11.5098 10.7031C11.5781 10.7031 11.6784 10.71 11.8105 10.7236C11.9427 10.7373 12.1341 10.7533 12.3848 10.7715C13.0638 10.8125 13.8773 10.833 14.8252 10.833H15.9805C17.3021 10.833 18.1862 10.8125 18.6328 10.7715C19.0794 10.7259 19.3574 10.7031 19.4668 10.7031C19.5762 10.7031 19.6764 10.7191 19.7676 10.751C19.8587 10.7829 19.9316 10.8285 19.9863 10.8877C20.0729 10.988 20.1162 11.1133 20.1162 11.2637C20.1162 11.4915 20.1094 11.6738 20.0957 11.8105C20.082 11.9473 20.0661 12.109 20.0479 12.2959C20.0342 12.4827 20.0137 12.6764 19.9863 12.877C19.9225 13.3509 19.8428 13.6768 19.7471 13.8545C19.6559 13.9821 19.5443 14.0459 19.4121 14.0459C19.2845 14.0459 19.1706 14.0345 19.0703 14.0117L19.0771 13.5811C19.0771 13.1755 19.0544 12.8564 19.0088 12.624C18.9632 12.387 18.8675 12.2116 18.7217 12.0977C18.5758 11.9792 18.3662 11.9062 18.0928 11.8789C17.8193 11.847 17.4548 11.8311 16.999 11.8311H16.1787V19.6992C16.1787 20.0273 16.4408 20.2552 16.9648 20.3828C17.0924 20.4102 17.2132 20.4352 17.3271 20.458C17.4456 20.4808 17.5596 20.5059 17.6689 20.5332C17.7783 20.556 17.8695 20.5856 17.9424 20.6221C18.0882 20.695 18.1611 20.818 18.1611 20.9912C18.1611 21.1507 18.1247 21.276 18.0518 21.3672Z" fill="black"/>
          <path d="M23.5234 21.1875L22.1934 19.1808L21.0151 21.1875H19.2651L21.3768 17.9442L19.2418 14.7242H21.0851L22.4034 16.7192L23.5934 14.7242H25.3434L23.2201 17.9442L25.3668 21.1875H23.5234Z" fill="black"/>
          </svg>
          ;
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
            <div className={classes.banner + " d-flex justify-content-center align-items-center "}>
                <div class="mx-auto w-75">
                    <h1> Mastering PySpark</h1>

                    <h3 class="text-white text-center">  Master Data Engineering skills with PySpark | Beginner to Pro
                    </h3>
                    <div class={classes.butns + " row gap-2 justify-content-center"}>
                        <a class={classes.nfpbutn+" col-sm-5 col-md-3  col-12 text-center "} href="https://www.scholarnest.in/cart/add_product/2107620?price_id=2854666">
                         Buy self-paced for $149.00
                        </a>
                        <a  href='https://forms.gle/Nxk8dQUPq4o4XsA47' class={classes.nfpbutn+" col-sm-5  col-md-3 col-12 text-center "}> Enquire for Instructor-led </a>
                        <a  href='https://www.scholarnest.in/enroll/2107620?et=free_trial' class=" col-sm-5 col-md-2 col-12 btn btn-light  text-center  "> Free Preview  </a>
                    </div>
                    <br />
                </div>
            </div>
            <br />

            <br />
            <div className={classes.secondDiv +" row mx-4 px-md-2"}>
            <h2 class={classes.headings}>What you'll learn</h2>
                
                <div className=" col-12 col-sm-12 col-md-6 h-100">
                <br />
                <br />
                    <h3 class='my-2 px-md-2'> 
                    Mastering PySpark is a comprehensive course that will help you become proficient in PySpark Programming, 
                    Spark SQL, Dataframe APIs, Spark Architecture, Performace Tuning and Join Optimization, Advanced Concepts such as AQE, 
                    DPP, Memory Management and Unit Testing.
                    </h3>

                </div>
                <div className={classes.afterSecndDiv+" col-12 col-sm-12 col-md-6 px-2 px-md-5"}>
                <br />

                <br />
                    <p class="d-flex my-2"> 
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class={classes.sideIcon+" bi  mr-3 bi-check-circle-fill"} viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg> </div>
                    
                    PySpark Programming - Data Engineering and Data Processing using PySpark and Spark SQL</p>
                    <br />
                    <hr />
                    <br />
                    <p class="d-flex my-2"> 
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class={classes.sideIcon+" bi  mr-3 bi-check-circle-fill"} viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                    </div>
                    Spark Architecture - Understanding Spark internals, Performance optimization, Memory Management</p>
                    <br />
                    <hr />
                    <br />


                    <p class="d-flex my-2">
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"  class={classes.sideIcon+" bi  mr-3 bi-check-circle-fill"} viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                        </div>
                        Advanced Concepts - Data Sources and Sinks, Adaptive Query Optimization, Dynamic Partition Pruning, Unit Testing</p>
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
                    <p class="d-flex ">
                        <div>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class={classes.sideIcon+" bi mr-3 bi-arrow-right-circle-fill"} viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
</svg></div>
Programming Knowledge Using Python Programming Language and SQL Fundamentals</p>
                    <br />
                    <hr />
                    <br />
                    <p class="d-flex ">  <div>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class={classes.sideIcon+" bi mr-3 bi-arrow-right-circle-fill"} viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
</svg></div>
                        A Recent 64-bit Windows/Mac Machine with 8 GB RAM & Internet Connection</p>
                        <br />
                    <hr />
                    <br />



                </div>

            </div>

            {/* end 3rd */}
            <div className={classes.fourthDiv + " row mx-0 px-md-5"}>
                <div className="col-md-6 col-12  d-flex justify-content-center align-items-center">
                    <h2 className='my-2 text-center'>
                        Hear out instructor
                    </h2>
                </div>
                <div className={classes.videoDet + " col-md-6 col-12 d-flex justify-content-center align-items-center"}>

                    <iframe frameborder="0" allowfullscreen="" class="videoproxy__iframe embed-responsive-item" src="https://platform.thinkific.com/videoproxy/v1/play/cc8ap9r40u9f3c7bgkg0?autoplay=false"></iframe>
                </div>
            </div>
            <br />
            <br />

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
                  <img class="w-100" src="/assets/solutions/MoreAcademySolutions/2.jpg" alt="1" />
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
                  <div className="d-flex my-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class={classes.sideBoxIcon + " mr-2"} viewBox="0 0 448 512"><path d="M347.1 215.4c11.7-32.6 45.4-126.9 45.4-157.1 0-26.6-15.7-48.9-43.7-48.9-44.6 0-84.6 131.7-97.1 163.1C242 144 196.6 0 156.6 0c-31.1 0-45.7 22.9-45.7 51.7 0 35.3 34.2 126.8 46.6 162-6.3-2.3-13.1-4.3-20-4.3-23.4 0-48.3 29.1-48.3 52.6 0 8.9 4.9 21.4 8 29.7-36.9 10-51.1 34.6-51.1 71.7C46 435.6 114.4 512 210.6 512c118 0 191.4-88.6 191.4-202.9 0-43.1-6.9-82-54.9-93.7zM311.7 108c4-12.3 21.1-64.3 37.1-64.3 8.6 0 10.9 8.9 10.9 16 0 19.1-38.6 124.6-47.1 148l-34-6 33.1-93.7zM142.3 48.3c0-11.9 14.5-45.7 46.3 47.1l34.6 100.3c-15.6-1.3-27.7-3-35.4 1.4-10.9-28.8-45.5-119.7-45.5-148.8zM140 244c29.3 0 67.1 94.6 67.1 107.4 0 5.1-4.9 11.4-10.6 11.4-20.9 0-76.9-76.9-76.9-97.7 .1-7.7 12.7-21.1 20.4-21.1zm184.3 186.3c-29.1 32-66.3 48.6-109.7 48.6-59.4 0-106.3-32.6-128.9-88.3-17.1-43.4 3.8-68.3 20.6-68.3 11.4 0 54.3 60.3 54.3 73.1 0 4.9-7.7 8.3-11.7 8.3-16.1 0-22.4-15.5-51.1-51.4-29.7 29.7 20.5 86.9 58.3 86.9 26.1 0 43.1-24.2 38-42 3.7 0 8.3 .3 11.7-.6 1.1 27.1 9.1 59.4 41.7 61.7 0-.9 2-7.1 2-7.4 0-17.4-10.6-32.6-10.6-50.3 0-28.3 21.7-55.7 43.7-71.7 8-6 17.7-9.7 27.1-13.1 9.7-3.7 20-8 27.4-15.4-1.1-11.2-5.7-21.1-16.9-21.1-27.7 0-120.6 4-120.6-39.7 0-6.7 .1-13.1 17.4-13.1 32.3 0 114.3 8 138.3 29.1 18.1 16.1 24.3 113.2-31 174.7zm-98.6-126c9.7 3.1 19.7 4 29.7 6-7.4 5.4-14 12-20.3 19.1-2.8-8.5-6.2-16.8-9.4-25.1z" /></svg>

                  <p class={classes.sideBox}>Practice Quiz & Assignment</p></div>
                  <div className="d-flex my-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class={classes.sideBoxIcon + " mr-2"} viewBox="0 0 40 40" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.625 8C23.699 7.99972 24.7618 8.2192 25.7479 8.64493C26.7339 9.07066 27.6225 9.69365 28.3588 10.4756C29.0951 11.2575 29.6637 12.1818 30.0295 13.1916C30.3954 14.2014 30.5507 15.2754 30.486 16.3475H30.5L30.4982 18.4948C32.2942 18.4943 34.0216 19.1841 35.3232 20.4215C36.6248 21.659 37.401 23.3493 37.4913 25.143L37.5 25.493C37.4987 27.288 36.8078 29.0139 35.5702 30.3141C34.3326 31.6142 32.6428 32.3893 30.85 32.479L30.5 32.4878H30.4982L30.5 32.5H9.5C7.64339 32.4954 5.86428 31.7552 4.55227 30.4415C3.24027 29.1279 2.50231 27.3479 2.5 25.4913C2.50031 23.8786 3.05741 22.3156 4.07712 21.0663C5.09684 19.817 6.51662 18.9581 8.0965 18.6348C7.70801 17.6198 7.64405 16.5094 7.91345 15.4565C8.18284 14.4037 8.77231 13.4604 9.60053 12.7569C10.4288 12.0533 11.4549 11.624 12.5374 11.5284C13.6199 11.4327 14.7055 11.6753 15.6443 12.2228C16.311 10.9483 17.3142 9.88085 18.5448 9.13639C19.7755 8.39193 21.1867 7.99891 22.625 8ZM22.5445 15H19.0445V23.6135L14.75 23.61L20.7945 30.743L26.8565 23.6153H22.5445V15Z" fill="black"/>
</svg>
<p class={classes.sideBox}>PDF & Source Code</p>
                  </div>
                  <div className="d-flex my-2">
                  {/* <img  className={classes.sideBoxIcon+ " mr-2"} src="/assets/1.jpg"/> */}
                  <svg xmlns="http://www.w3.org/2000/svg"   class={classes.sideBoxIcon+" mr-2 "} viewBox="0 0 40 40" fill="none">
<ellipse cx="16.5" cy="17" rx="14.5" ry="10" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 29.1214C26.3338 28.0208 33.438 22.4141 33.438 15.6631C33.438 14.3942 33.187 13.1657 32.7174 12C35.876 13.8779 37.8756 16.6576 37.8756 19.7594C37.8756 25.4151 31.2275 30 23.0267 30C20.8811 30 18.8418 29.6862 17 29.1214Z" fill="black"/>
<path d="M13.3522 26.1761L7.31675 23.1584C7.15094 23.0755 6.95037 23.1613 6.89585 23.3385L5.17144 28.9428C5.09968 29.176 5.32155 29.3928 5.55304 29.3157L13.3129 26.729C13.5665 26.6445 13.5913 26.2956 13.3522 26.1761Z" fill="black"/>
<path d="M24.6478 29.1761L30.6832 26.1584C30.8491 26.0755 31.0496 26.1613 31.1041 26.3385L32.8286 31.9428C32.9003 32.176 32.6784 32.3928 32.447 32.3157L24.6871 29.729C24.4335 29.6445 24.4087 29.2956 24.6478 29.1761Z" fill="black"/>
</svg>
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
                        <p class='p-3'> We provide support throughout your learning and answer every question within 24 business hours. You may also avail one-to-one technical support calls for blocker issues. </p></div>
                    <div className={classes.featureBox + " col-10 col-sm-6 bg-white border col-md-4"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi mx-auto my-3 bi-mortarboard-fill" viewBox="0 0 16 16">
                            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
                        </svg>
                        <h3  class={classes.h3style}>Certification Ready</h3>
                        <p class='p-3'>The course covers the curriculum for Databricks Certified Associate Developer for Apache Spark 3.0 - Python certification exam. </p></div>
                    <div className={classes.featureBox + " col-10 col-sm-6  bg-white border col-md-4"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi mx-auto my-3 bi-cup-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M.11 3.187A.5.5 0 0 1 .5 3h13a.5.5 0 0 1 .488.608l-.22.991a3.001 3.001 0 0 1-1.3 5.854l-.132.59A2.5 2.5 0 0 1 9.896 13H4.104a2.5 2.5 0 0 1-2.44-1.958L.012 3.608a.5.5 0 0 1 .098-.42Zm12.574 6.288a2 2 0 0 0 .866-3.899l-.866 3.9Z" />
                        </svg>
                        <h3 class={classes.h3style}> Capstone Project</h3>
                        <p class='p-3'> The course includes many hands-on assignments/solutions and a major real-life capstone project with the complete solution, source code, and explanation. </p></div>
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
                        <button onClick={()=>{router.push('https://www.scholarnest.in/enroll/2107620')}} style={{height:'70px',backgroundColor:'#e79913'}} class="btn rounded-pill w-75  px-5 text-center text-light fw-bold"> Buy  $149.00 </button>
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
export default MasteringPyspark;