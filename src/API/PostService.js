import axios from "axios";

export default class PostService {
  static async getAll() {

    try{

    } catch (e){
        
    }

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    return response.data;
  }
}
