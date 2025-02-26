---
title: "272 Hours of Preparation: Passing the OSCP+"
published: 2025-02-25
description: "After being laid off and struggling to find new opportunities, I decided to bet everything on OSCP+. With only one shot and no retake option, failure was not an option. Here’s my journey, study plan, and exam experience."
image: './cover.jpg'
tags: ["OSCP", "Certification", "Pentesting"]
category: 'Certifications'
draft: false
lang: 'en'
---

# What is OSCP+?
The OSCP+ (Offensive Security Certified Professional Plus) is a hands-on cybersecurity certification focused on penetration testing. Known for its 24-hour practical exam, it tests real-world exploitation skills and is highly respected in the industry.

If you want to know more about it, check the official site: [OSCP Exam Guide](https://help.offsec.com/hc/en-us/articles/360040165632-OSCP-Exam-Guide-Newly-Updated).

# My Background & Why I Took the Exam

I worked full-time as a **white-box pentester** for a year, and before that, I participated in bug bounties and completed several cybersecurity courses and CTFs. After being laid off, I struggled to get interviews and decided to focus on improving my skills. I earned the **eCPPT** (a hands-on certification similar to OSCP) and the **eMAPT** (focused on mobile security, a field I'm passionate about).

<!-- Even with my experience, I knew the OSCP was very hard. I saw skilled people fail, and I didn’t want to take any risks. Later, I found out that OffSec had given an **impossible** to solve set of machines to these professionals. This relieved my stress a little because I knew they should have passed the exam easily.
--!>

# The 272 Hours of Preparation – My Study Plan & Resources

Before committing to the official exam and purchasing the 3 months of access to the course and labs, I decided to start with non-official resources.  While browsing [r/oscp](https://www.reddit.com/r/oscp/), I found the [LainKusanagi List](https://docs.google.com/spreadsheets/d/18weuz_Eeynr6sXFQ87Cd5F0slOj9Z6rt/) and decided to use it to find CTF machines similar to those I'd encounter in the exam. My preparation followed this path:

1. Completed all Linux active machines on HTB at the time (except for the insane ones), just to get back into the 'CTF mindset.'

2. Paid for 1 month of HTB Pro and completed some machines from the List. (And started tracking the time with the app). 

3. Purchased the official content and exam voucher, then completed the PEN-200 course. Despite the high price, the content was good. It’s incredibly important to have organized notes on everything the course teaches you.

4. I wasn’t dedicating enough time to the official course, and I got sick in the final month of access. As a result, I didn’t complete all the challenger labs :(.

5. Going back to the LainKusanagi list, I paid for access to the Proving Grounds Practice machines, which were excellent. These machines are provided by the same company, Offsec.

6. In the final week before the exam, I watched the [Derron C OSCP playlist](https://www.youtube.com/watch?v=gY_9Dncjw-s&list=PLT08J44ErMmb9qaEeTYl5diQW6jWVHCR2), which was fantastic for the Active Directory part.

# The Exam – My Experience

The exam started on **February 20 at 10 AM (local time)**. After completing everything with the proctors, I got my VPN connection at 10:37 AM.

At first, I was shaking. I was sure I wouldn’t make it and felt like a fraud. I decided to take a break for lunch, but I couldn’t eat anything. So, I calmed myself down, meditated for a bit, and thought of new ideas for the AD set. However, instead of working on it right away, I started making progress on the standalone machines.

After some time, I got initial access to one of the standalone machines. Three hours later, I had privilege escalation working, reaching **30 points** (10 from AD and 20 from the standalone). I thought, *"If I finish the AD, I will certainly pass."* That gave me confidence. I went back to AD, much more relaxed, and an hour and a half later, I got **Domain Admin access**. Now I just needed 10 more points to pass.

I took a break to celebrate, took a shower, and came back to tackle another standalone machine. Two hours later, I had both flags from it, putting me at **80 points**—more than enough to pass. I reverted all machines, tested my commands, checked my notes, and took extra screenshots for the report.

I couldn’t sleep, so I started enumerating the last machine, aiming for the full 100 points. After an hour, I still didn’t have initial access, so I decided to get some rest. When I woke up, my 24 hours were already over.

I immediately started working on my report using the [noraj OSCP report template](https://github.com/noraj/OSCP-Exam-Report-Template-Markdown). In the end, my report was **60 pages long**. I read it about five times before submitting it, making sure everything was correct.

Two days later, on Monday at 5:00 AM (local time), I got the email saying I passed. It was way faster than I expected :).

# Exam Tips 

- **Create a good and easy-to-search cheatsheet**. I used Joplin, and its global search was amazing. Everything I learned went there, and after some time, I did quick reviews. Having all key commands and techniques in one place saved me a lot of time during the exam.

- **Focus on your weak points**. In my case, it was Windows privilege escalation and AD. But during my preparation, I spent half my time on Linux machines, which I was already confident in. This almost cost me the exam.

- **Take good notes and screenshots of everything**. This will save you a lot of time during the exam.

- **Never give up**. When the exam starts, set a timer. If you feel like you're failing, look at it and remind yourself, _"I still have 20 hours, it just started."_ Don’t focus on the 4 hours that have passed. Focus on what’s ahead.

- **Take regular breaks**. Keeping your brain fresh helps you come up with new ideas.

- **Test the tools you expect to use before the exam**. You don’t want to waste valuable exam time troubleshooting BloodHound or any other tool.

