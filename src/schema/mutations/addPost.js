import { fakeDatabase } from "../../FakeDatabase";
import { GraphQLInt, GraphQLNonNull } from 'graphql';
import { Post, PostInputType } from '../types/Post';

export default {
  addPost: {
    type: Post,
    description: 'Creates a new blog post',
    args: {
      post: { type: PostInputType }
    },
    resolve: function (root, { post }) {
      return fakeDatabase.addNewBlogPost(post);
    }
  }
}