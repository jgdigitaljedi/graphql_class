import { fakeDatabase } from "../../FakeDatabase";
import { GraphQLList } from 'graphql';
import { Post } from '../types/Post';

export default {
  posts: {
    type: new GraphQLList(Post),
    description: 'Get list of recent blog posts',
    args: {},
    resolve: function () {
      return fakeDatabase.getBlogPosts();
    }
  }
}