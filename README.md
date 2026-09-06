# Premed OS

Premed OS is a web app prototype for helping premed students keep track of everything that eventually goes into a medical school application.

The idea came from how scattered the premed process can become. Experiences, hours, reflections, research, clinical work, volunteering, shadowing, leadership, and application drafts often end up spread across spreadsheets, notes, and documents.

I wanted to experiment with putting that information into one place and designing the product around the question:

**If a student plans to apply to medical school in a few years, what should they be keeping track of now?**

Premed OS is currently a frontend MVP built to explore that idea.

## Current Status

The project is a functional React prototype, but it is still early in development.

The major screens and user flows are built and connected through the frontend, although some features are incomplete and there are still bugs and rough edges.

Right now, the project uses mock data rather than a production database or authentication system.

The current version includes:

- Landing page
- Pricing page
- Mock login and signup flow
- Student dashboard
- Experience tracker
- Experience filters and categories
- Experience detail and edit views
- AMCAS-style activity draft editor
- Interview and secondary essay story bank
- Readiness report
- Monthly planning view
- Settings
- Responsive layouts and mobile navigation
- Waitlist and feedback flows

The goal of the current version was to get the main workflow working before spending time building infrastructure around it.

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- React Router
- Vite
- Local mock data

## The Problem

Preparing for medical school applications happens over several years, but most application tools become useful only when a student is already applying.

That creates a few problems.

Students may forget:

- how many hours they spent on an activity
- what they actually did
- what they learned from the experience
- specific stories that could later be useful in essays or interviews
- whether they have been neglecting an important type of experience

Premed OS is meant to help students build that record gradually rather than trying to reconstruct several years of experiences during application season.

## Main Ideas

### Experience Tracking

Students can organize experiences such as:

- Clinical experience
- Research
- Shadowing
- Volunteering
- Leadership
- Teaching
- Employment
- Extracurricular activities

The idea is to track both quantitative information, such as dates and hours, and qualitative information, such as reflections and important moments.

### Application Drafting

Experiences can eventually be turned into AMCAS-style activity drafts.

The goal is not to automatically write an application for someone. Instead, the system is meant to help students preserve the details they will eventually need when writing one themselves.

### Story Bank

Premed students repeatedly need examples of meaningful experiences for interviews, secondary essays, and personal statements.

The story bank is meant to give students somewhere to save those moments when they happen rather than trying to remember them years later.

### Readiness Report

The prototype also experiments with showing students areas of their profile that may need attention.

This is intentionally framed as a planning tool rather than an admissions predictor.

Medical school admissions are too complicated to reduce to a single score, and the product should never imply that it can predict whether someone will be accepted.

## What I Learned

This project started as a fairly broad idea, but building the frontend made me think much more carefully about what the product should actually do.

One of the biggest things I realized is that the useful part of Premed OS is not just storing information.

The harder problem is deciding what information should matter to the user and how to present it without making an already stressful process feel even more overwhelming.

A few things became clearer while building it:

### Start before application season

A lot of the value comes from helping students years before they actually submit AMCAS.

Tracking experiences and reflections over time is much easier than reconstructing them later.

### The dashboard needs to answer "what next?"

Generic statistics are not very useful by themselves.

The dashboard should help a student understand what they have done, what might be missing, and what they should focus on next.

### Readiness metrics need to be careful

Any type of readiness report needs clear limitations.

It should help students organize and reflect on their experiences without pretending to calculate their probability of admission.

### Writing tools should support the student

Future writing features should help students brainstorm, organize, and revise without replacing their own voice or introducing inaccurate information.

### Privacy matters

Premed students may enter information about clinical experiences.

Any future version needs clear guidance against storing patient-identifying information and needs stronger privacy protections before handling real user data.

## What I Want to Build Next

The current version is mostly focused on proving out the workflow.

The next major step is rebuilding and expanding the project with more of the functionality implemented directly by me.

Some of the areas I want to work on next are:

- Cleaning up bugs in the existing frontend
- Simplifying parts of the interface
- Adding persistent data storage
- Building a real backend
- Adding authentication
- Saving experiences and drafts between sessions
- Improving the readiness report
- Adding onboarding
- Adding application-cycle planning
- Adding secondary essay tracking
- Adding school list tools
- Adding export functionality
- Testing the product with actual premed students

Later, I may experiment with AI-assisted brainstorming or revision tools, but those would need strong safeguards around factual accuracy and keeping the student's own voice.

## Why I'm Continuing the Project

The first version helped me understand the product idea, but there are a lot of technical decisions and features that I want to go back through myself.

I plan to use the next version as a way to get better at full-stack development while continuing to explore a problem that I genuinely find interesting.

Rather than treating the current prototype as a finished product, I see it as the starting point for a project that I can gradually rebuild and improve as my technical skills grow.
