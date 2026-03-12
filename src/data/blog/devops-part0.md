---
title: "[DevOps Series] Part 0: Introduction and Stories"
description: DevOps Series - Introduction. Why this series exist? Which I will share with you.
pubDatetime: 2025-08-11
tags:
  - devops
  - devops-series

featured: false
draft: false
---


# 📚 Series Table of Contents

1. 📖 [Chapter 0: Introduction and Stories](/posts/devops-part0) (You are here) 🎯
2. 📚 [Chapter 1: Some concepts and terminologies](/posts/devops-part1) 🔍
3. 🚀 [Chapter 2: A noob guy deploy his web app](/posts/devops-part2) 💻
4. 🐳 [Chapter 3: Docker and the world of containerization](/posts/devops-part3) 📦
5. ☸️ [Chapter 4: K8s in a nutshell](/posts/devops-part4) ⚙️
6. 🔧 [Chapter 5: K8s in details](/posts/devops-part5) 🛠️
7. 🏠 [Chapter 6: Before go to the ground](/posts/devops-part6) 🏡
8. 🐧 [Chapter 7: Ubuntu server and the world of Linux](/posts/devops-part7) 🖥️
9. ⚡ [Chapter 8: MicroK8s the simple and powerful K8s](/posts/devops-part8) ⚙️
10. ☁️ [Chapter 9: Harvester HCI the native cloud](/posts/devops-part9) 🌐
11. 🏭 [Chapter 10: More about Harvester HCI](/posts/devops-part10) 🏢
12. 🖥️ [Chapter 11: Promox VE the best VM manager](/posts/devops-part11) 💾
13. 🌐 [Chapter 12: Turn a server into a router with Pfsense](/posts/devops-part12) 🔌
14. 🛠️ [Chapter 13: Some tools, services that you can installed for your devops pipeline](/posts/devops-part13) 🔧
15. 🌍 [Chapter 14: Hello Internet with Cloudflare Zero Trust](/posts/devops-part14) 🔒
16. 🎉 [Chapter 15: Maybe it the end of the series](/posts/devops-part15) 🏁

---

# Introduction

Welcome to my DevOps series with the title **_"From cloud to ground"_**. **Cloud** here refers to cloud service providers like Google Cloud Platform (GCP) or Amazon Web Services (AWS), and **ground** refers to local machines or servers that we can set up in our house or place in a data center.

# I'm not a pro Devops

- I did not choose to become a DevOps engineer. DevOps came to me :)). I started as a developer. My company used to deploy our services to AWS using AWS Lightsail (one of AWS services that allows you to create a virtual machine, easier than AWS EC2). So I had to know how to create a virtual machine in AWS, how to install environments, how to deploy our services to AWS,... Just some basic things that now you can ask ChatGPT to complete in 1 minute.
- One day my boss said we ran out of AWS credits, so he bought some servers and workstations and started to set up stuff like Ubuntu, k8s, Docker,... At this time, with my curiosity, I started to learn about these things. Then my boss let me manage all these servers. That's how my **_ground_** DevOps journey started.
- So this series is not about how to become a pro DevOps engineer. You can consider this series as the story of some noob guy on the Internet. But I hope that the tools introduced in this series, knowledge, and my 2-year experience in this field can help you.

# Who is this series for?

- Beginners who know nothing about DevOps
- Someone who just has a computer, laptop, Raspberry Pi,... and doesn't know what to do with it
- Someone who is just tired of paying for cloud service providers and wants to set up all stuff in their house
- Students who don't want to show their teacher: **_"localhost"_** when demoing their project
- Or simply just read to piss me off :v

For whatever reason, I hope that this series can help you. And thanks for reading my post.

# Ok, let's start

Our DevOps journey starts now. Here is how the journey looks:

1. 📖 [Chapter 0: Introduction and Stories](./devops-part0) (You are here) 🎯
2. 📚 [Chapter 1: Some concepts and terminologies](./devops-part1) 🔍
3. 🚀 [Chapter 2: A noob guy deploy his web app](./devops-part2) 💻
4. 🐳 [Chapter 3: Docker and the world of containerization](./devops-part3) 📦
5. ☸️ [Chapter 4: K8s in a nutshell](./devops-part4) ⚙️
6. 🔧 [Chapter 5: K8s in details](./devops-part5) 🛠️
7. 🏠 [Chapter 6: Before go to the ground](./devops-part6) 🏡
8. 🐧 [Chapter 7: Ubuntu server and the world of Linux](./devops-part7) 🖥️
9. ⚡ [Chapter 8: MicroK8s the simple and powerful K8s](./devops-part8) ⚙️
10. ☁️ [Chapter 9: Harvester HCI the native cloud](./devops-part9) 🌐
11. 🏭 [Chapter 10: More about Harvester HCI](./devops-part10) 🏢
12. 🖥️ [Chapter 11: Promox VE the best VM manager](./devops-part11) 💾
13. 🌐 [Chapter 12: Turn a server into a router with Pfsense](./devops-part12) 🔌
14. 🛠️ [Chapter 13: Some tools, services that you can installed for your devops pipeline](./devops-part13) 🔧
15. 🌍 [Chapter 14: Hello Internet with Cloudflare Zero Trust](./devops-part14) 🔒
16. 🎉 [Chapter 15: Maybe it the end of the series](./devops-part15) 🏁

Let's start with the first chapter: [Chapter 1: Some concepts and terminologies](./devops-part1)

---

## 📚 Series Navigation

| Previous Chapter                                |               Series Info                |                                                                   Next Chapter |
| :---------------------------------------------- | :--------------------------------------: | -----------------------------------------------------------------------------: |
| **← Previous Chapter**<br>_No previous chapter_ | **DevOps Series**<br>**Chapter 0 of 16** | **[Next Chapter →](./devops-part1)**<br>**📚 Some concepts and terminologies** |
