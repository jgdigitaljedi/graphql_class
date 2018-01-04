import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLNonNull } from "graphql";
import { fakeDatabase } from '../../FakeDatabase';
import { Post } from '../types/Post';

export const Author = new GraphQLObjectType({
  name: "Author",
  description: "All details of an author on the website",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    posts: {
      type: new GraphQLList(Post),
      resolve: (author) => {
        return fakeDatabase.getPostsOfAuthor(author.id);
      }
    }
  })
});