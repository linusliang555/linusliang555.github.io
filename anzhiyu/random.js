var posts=["2024/08/16/hello-world/","2024/08/15/最炸裂的一次/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };