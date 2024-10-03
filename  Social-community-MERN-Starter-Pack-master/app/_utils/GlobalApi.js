const { default: axios } = require("axios");

//created axio client to create endpoint
const axiosClient=axios.create({
    baseURL:'http://localhost:8000'
});

const createUser=(data)=>axiosClient.post('/user',data)
const getUserByEmail=(email)=>axiosClient.get('/user/'+email)

//const createPost=(data)=>axiosClient.post('/post',data);
const createPost = async (data) => {
    try {
      const response = await axiosClient.post('/post', data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error('Status:', error.response.status);
        console.error('Data:', error.response.data);
        console.error('Headers:', error.response.headers);
      } else if (error.request) {
        // Request was made but no response received
        console.error('No response received:', error.request);
      } else {
        // Error setting up the request
        console.error('Error:', error.message);
      }
    }
  };
const getAllPost=()=>axiosClient.get('/post');

const onPostLike=(postId,data)=>axiosClient.put("/post/like/"+postId,data)

// //Add New Comment
 const addComment=(data)=>axiosClient.post('/comment',data);

//Delete Comment
const deleteComment=(commentId)=>axiosClient.delete("/comment/"+commentId)
export default{
    createUser,
    getUserByEmail,
    createPost,
    getAllPost,
    onPostLike,
     addComment,
     deleteComment
}