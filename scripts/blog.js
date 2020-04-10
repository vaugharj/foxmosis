let currentBlog = undefined;
const fullBlogBody = document.getElementById('blog-full-body');
const fullBlogTitle = document.getElementById('blog-full-title');
const fullBlogDate = document.getElementById('blog-full-date');


//fill page with information of blog post that was clicked
const populateBlogPost = (title) => {
  return function(){
    fetchBlogPost(title)
    .then(data => {
      console.log(data);
      fullBlogBody.innerHTML = data.body;
      fullBlogTitle.innerHTML = data.title;
      fullBlogDate.innerHTML = "Written " + data.date;
    })
  }
};

//retrieve blog information from JSON file
const fetchBlogPost = async function(title){
  return fetch('../json/blog.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
      console.log(data);
      for(var i = 0; i < data.blogs.length; i++){
        if(data.blogs[i].title == title){
          // console.log(data.blogs[i]);
          return data.blogs[i];
        }
      }
  });
};


// fetchBlogPost("Title 1")
// .then(res => {
//   console.log(res);
//   currentBlog = res;
// });

//add event listeners
const blogList = document.querySelectorAll('#blog-list > p');
const blogPreviewList = document.getElementsByClassName('blog-post-preview');
for(var i = 0; i < blogList.length; i++){
  console.log(blogList[i]);
  let blogTitle = blogList[i].innerHTML;
  blogList[i].addEventListener('click', populateBlogPost(blogTitle));
}

for(var i = 0; i < blogPreviewList.length; i++){
  let seeMore = blogPreviewList[i].children[blogPreviewList[i].children.length - 1];
  let blogPreviewTitle = blogPreviewList[i].children[0].innerHTML;
  console.log(blogPreviewTitle);
  blogPreviewList[i].addEventListener('click', populateBlogPost(blogPreviewTitle));
  seeMore.addEventListener('click', populateBlogPost(blogPreviewTitle));
}

// blogList.addEventListener('click', populateBlogPost('Title 1'));