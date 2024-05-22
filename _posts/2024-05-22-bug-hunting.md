---
layout: post
title: Nancy Drew 1: Secret of the Lost Matrix
date: 2024-05-24 17:48:00
description: today we are hunting for an elusive bug
tags: bug cimmi ga-meeting
categories: surf
---

#### GA Meeting

Today, I met with Vitor, my SURF Graduate Assistant (GA), so he could get an idea of any questions I had for the program. He reccomended that I show up for tomorrow's social event at 4 pm. Otherwise, he reminded me to get started working on my abstract that is apparently due next week? He also mentioned the format of the mini-conference next week. There are going to be 3 sets of talks, each with 3 choices. One that stood out was about the differences between the scientific and engineering methods.

#### `Network` Class

Today, I got started on work for the `Network` class. The purpose of this class is to configure a graph for evolution as a DOPO network. At first, everything was going smoothly until I tried to build my code. Aside for a few minor issues (syntax errors and whatnot,) nothing seemed off; I mean I had writted this once before in C. To my chegrin, once I fixed this error, I recieved an error that the Python build could not find the matrix class when importing in Python.

#### Where's my `Matrix`?

I first checked the SWIG wrapper file to see if the `Matrix` class appeared anywhere in there. It did not. This happened at 11:30. I then spent an hour messing with build configuration and syntax, but nothing seemed to work. I decided to take my lunch break since it was already 30 mins into when I normally would and come back to this after I got some good thinking done.

Afterwards, I tried several things, looked up all I could about the error, even banged my head into the wall a couple times, but I could just not find anything to clear up what was happening. Eventually, I realized that this was likely an aerror with the fact that `Matrix` is a template class. What weirded me out is that `Matrix` worked when used with the class in its file (templated as a `short`) but not with a class in a different file (templated as a `float`).<d-footnote>c++ veterans might know what up at this point. But hey, cut me some slack I'm new to this.</d-footnote> In response, I moved the class definition into its own file `utils.cpp` and its header into `utils.hpp`. **This did not fix my issues but would prove a crucial step in the right direction in hindsight**. Still though, the same error persisted.

I now decided that I should verify that the code worked when compiling using a straight c++ compiler. Notably, it did not. Instead I was granted with a cocophony of "undefined reference to cimmi::utils::Matrix..." from both the `Graph` and `Network` classes. After trying a plethora of combinations for compiler arguments, I decided that I should keep trekking on through stack overflow. Eventually, I was able to fine [one post](https://stackoverflow.com/questions/8752837/undefined-reference-to-template-class-constructor) that knew what was going on. Man I love stack overflow.

*Lesson learned: class templates belong in header files.*

Also it's 6:15, and I need to make a conference presentation and dinner, so I will stop at a win.

