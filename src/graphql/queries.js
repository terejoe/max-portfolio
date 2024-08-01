import { gql } from "@apollo/client";

export const GET_ARTICLES = gql`
  query User($pageSize: Int!, $page: Int!) {
    user(username: "kellslte") {
      id
      username
      name
      profilePicture
      posts(pageSize: $pageSize, page: $page) {
        nodes {
          id
          title
          slug
          subtitle
          content {
            html
            text
          }
        }
        pageInfo {
          nextPage
          previousPage
          hasNextPage
          hasPreviousPage
        }
        totalDocuments
      }
    }
  }
`;

export const GET_SINGLE_ARTICLE = gql`
  query Post($id: ID!) {
    post(id: $id) {
      id
      slug
      title 
      coverImage {
        url
      }
      content {
        html
      }
        
    }
  }
`;
