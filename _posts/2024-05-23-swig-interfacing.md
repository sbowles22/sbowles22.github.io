---
layout: post
title: Nancy Drew 2, Take a SWIG of this Interface
date: 2024-05-23 15:42:00
description: I'm real funny for that title, right?
tags: bug team-meeting cimmi
categories: surf
---

#### SWIG `enum` Troubles

Today, I worked on making sure that the max cut problem type could be selected and would show up in the network's couplings. This involved figuring out how SWIG wrapped `enum`'s, which I realized was just to set it as a constant and give it a name like [type]\_[name]. This led me to learning about the `enum class`, which I promptly converted my `typdef enum`'s into.

#### Team Meeting

Today, we met to figure out the progress on the code as well as who was responsible for what parts of the code. The major takeaways were that the `Network` class is just about finished, I am going to focus on expanding the core functionalities of the code, and Vidisha is going to work on expanding the code's feature set. 

#### SWIG Pointer Troubles

My major issue of the day was to figure out why I was not able to pass an instance of the `Graph` class into the `Network::set_source` function while in Python. I initially believed that this was something weird with the SWIG interface and pointers, so I tried all measure of converting everything into pointers, but my problem persisted. I then took the time to split up the `Network::set_source` function into both it and a `Network::configure` function, so no implementation details were left ambiguous. This still did not fix my issue. 

#### Nevermind, you cant dereference a null pointer

Eventually, I realized that this was an issue of not calling the proper constructor to set my arrays to a vallid, malloc'ed pointer. Then I realized that you could not call a constructor from inside a class (for good reasons,) so I decided to refactor my code a little more. I removed the sizing component of the `Network::Network(int)` constructor into a method `Network::resize(int)` that is called upon construction with a pre-defined size. This allowed me to then use this method in my configuration method, saving on repeat code and ensuring that all arrays are malloc'ed before being accessed.

*Edit: After waking up, no, I don't know why that title is supposed to be funny either.*

