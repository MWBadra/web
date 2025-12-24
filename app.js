const posts = [
  {
    id: 1,
    author: "Amir Tamer",
    title: "My First Post",
    content: "This is the content of the first post.",
    likes: 12,
    createdAt: "2025-01-01T10:00:00Z",
    comments: [
      {
        id: 101,
        author: "John Doe",
        text: "Great post!",
        createdAt: "2025-01-01T11:00:00Z"
      },
      {
        id: 102,
        author: "Sara Ali",
        text: "Nice work Amir!",
        createdAt: "2025-01-01T12:15:00Z"
      }
    ]
  },
  {
    id: 2,
    author: "Mariam Hassan",
    title: "Learning JavaScript",
    content: "Today I learned about arrays and objects!",
    likes: 5,
    createdAt: "2025-01-03T14:20:00Z",
    comments: [
      {
        id: 103,
        author: "Basem",
        text: "JavaScript is awesome!",
        createdAt: "2025-01-03T15:00:00Z"
      }
    ]
  },
  {
    id: 3,
    author: "Hadary",
    title: "My New Project",
    content: "Building a task manager using React and Node!",
    likes: 22,
    createdAt: "2025-01-05T19:45:00Z",
    comments: []
  }
];
const { urlencoded } = require('body-parser');
const express=require('express');
const path = require('path');
const app=express()
app.use(urlencoded())
app.get(('/posts/:postid'),(req,res)=>{
    const {postid}=req.params
    res.send(posts[parseInt(postid)]) 
})
app.get(('/posts'),(req,res)=>{
    res.send(posts) 
})

app.post(('/posts/createPost'),(req,res)=>{
    const {author,content,title,likes}=req.body
    let pid=posts.length
    const post={
        id:pid,
        author:author,
        content:content,
        title:title,
        likes:likes
    }
    posts.push(post)
     res.send( post[pid])
    })
app.listen(3000,()=>{
    console.log('server is listening on port 8000 on http://localhost:3000')
})