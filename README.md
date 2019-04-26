# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

put your answer here - When you click on that, the domain name is changed to the ip address because that's what the computer can read. The computer checks the server to see if it has it, if it doesn't, then it checks other servers to see if they have it. If they do have it, it sends it back to the server where the request was sent and then it is sent to the browser to display on the screen.

## From start to finish, how does data reach you to be rendered in the browser?

put your answer here - From what I understand, when you send an HTTP request, the client side code goes and tells the server-side that the user has requested some information. The server looks through their database to see if they have it. If they do, then it returns it to the client and the client displays it on the screen for the user.

## What code is rendered in the browser?

put your answer here - HTML, JavaScript and if you have a CSS file included, then that's rendered too.

## What is the server-side code’s main function?

put your answer here - The main function of the server side code is to render information from the database. The server-side gets the information that the client side requests.

## What is the client-side code’s main function?

put your answer here - The client-side code's main function is to display things on the screen to the user.

## What is runtime?

put your answer here - What I understand about runtime is that it is the time when the program is running. I also read that runtime is "when a program is running (or being executable). That is, when you start a program running in a computer, it is runtime for that program."(https://searchsoftwarequality.techtarget.com/definition/runtime) I feel that when you open a webpage that's when runtime starts.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

put your answer here - I think it really just depends on the application because they all have different amounts of HTML pages and CSS files etc. So I can't really say how many instances are created because they are all different for different web pages.

## How many instances of the server-side code are available at any given time?

put your answer here - I think it really just depends on how many files you have on the server side of things. When the server is down that's when you don't get any instances. The code still exist, but you can't access them.

## How many instances of the databases connected to the server application are created?

put your answer here - What I understand is that instances and databases are closely related. Databases "are a collection of files that reside on the server"[1] The instance "is the allocated memory and collection of processes running on the server."[1] On this page it also says that "each instance runs on a separate server so the load is spread out on more than one machine."[1] So to answer the question, I think that only one instance of the database is created per server. I also found some additional info that "Real Apllication Clusters (RAC)...let you have multiple instances attached to one database" 
1. https://searchoracle.techtarget.com/answer/What-is-an-instance