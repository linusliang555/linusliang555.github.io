var posts=["2024/09/17/az/","2024/08/15/最炸裂的一次/","1970/01/01/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };