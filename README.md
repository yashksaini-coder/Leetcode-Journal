<!-- ![Leetcode-Journal](https://socialify.git.ci/yashksaini-coder/Leetcode-Journal/image?font=Rokkitt&name=1&owner=1&pattern=Solid&theme=Auto) -->

<img align="center" src="https://github.com/user-attachments/assets/e2fad388-7a5b-41fb-95c6-ff7c983193dc">

# [Leetcode Journal](https://leetcode-journal.vercel.app/)

**Leetcode Journal** is a NextJS Full stack application designed to help developers track, assess, and analyze their problem-solving journey on LeetCode. It provides a better way to show the progress of a developer of their coding journey.

## Project Overview

[![wakatime](https://wakatime.com/badge/user/9a827e04-5df8-4525-ace8-e88326bbf87a/project/cbc54911-d322-42cb-a897-c093a59e53ad.svg?style=social)](https://wakatime.com/badge/user/9a827e04-5df8-4525-ace8-e88326bbf87a/project/cbc54911-d322-42cb-a897-c093a59e53ad)

## Key Features

Leetcode Journal offers the following key features:

- **🗂️ Problems Dashboard:** Showcasing problems by difficulty, topic, or category for better organization.
- **📈 Track Progress:** Visualize your journey with detailed progress tracking.
- **📊 Performance Analytics:** Leverage charts and insights to discover patterns in your performance.

## Tech Stack

Leetcode Journal leverages cutting-edge technologies to deliver a seamless user experience:

<table>
    <tr>
        <td align="center">
            <img alt="Next.js" src="https://skillicons.dev/icons?i=nextjs"/>
        </td>
        <td align="center">
            <img alt="TailwindCSS" src="https://skillicons.dev/icons?i=tailwind"/>
        </td>
        <td align="center">
            <img alt="Supabase" src="https://skillicons.dev/icons?i=supabase"/>
        </td>
        <td align="center">
            <img alt="Prisma" src="https://skillicons.dev/icons?i=prisma"/>
        </td>
        <td align="center">
            <img alt="Vercel" src="https://skillicons.dev/icons?i=vercel"/>
        </td>
        <td align="center">
            <img alt="Git" src="https://skillicons.dev/icons?i=git"/>
        </td>
        <td align="center">
            <img alt="GitHub" src="https://skillicons.dev/icons?i=github"/>
        </td>
    </tr>
</table>

## Workflow

The entire application works on a client-server architecture. The backend is requested from the client side using Next.js API routes. Originally, the real backend server is deployed on Render where Leetcode API is called to fetch the data. The data is then stored in a Supabase database. 

On the client side, the data is fetched for the users, problems, submissions, and progress. The data is then displayed in a user-friendly manner using charts and tables. The application is deployed on Vercel for better performance and scalability.

### System Design:

<img align="center" src="./public/System-design.png"/>
