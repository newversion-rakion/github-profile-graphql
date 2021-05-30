import { gql } from '@apollo/client';

export const GET_USER_PROFILE = gql`
query GetUserProfile {
    viewer {
      login
      name
      bio
      avatarUrl
      company
      location
    }
  }
`

export const GET_REPOSITORIES = gql`
  query GetRepositories($login: String!, $after: String) {
    repositoryOwner(login: $login) {
      id
      repositories(first: 30, after: $after, ownerAffiliations: OWNER, orderBy: { field: UPDATED_AT, direction: DESC }) {
        totalCount
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
          id
          name
          url
          issues {
            totalCount
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`

export const GET_STARGAZERS_BY_REPOSITORY = gql`
  query GetStargazersByRepository($login: String!, $name: String!, $after: String) {
    repositoryOwner(login: $login) {
      id
      repository(name: $name) {
        id
        stargazers(first: 30, after: $after) {
          totalCount
          pageInfo {
            hasNextPage
            endCursor
          }
          nodes {
            avatarUrl
            id
            name
            url
          }
        }
      }
    }
  }
`
export const GET_ISSUES_BY_REPOSITORY = gql`
  query GetIssuesByRepository($login: String!, $name: String!, $after: String) {
    repositoryOwner(login: $login) {
      id
      repository(name: $name) {
        id
        issues(first: 30, after: $after) {
          totalCount
          pageInfo {
            hasNextPage
            endCursor
          }
          nodes {
            id
            author {
              login
              url
            }
            title
            url
            number
            createdAt
            closed
            closedAt
          }
        }
      }
    }
  }
`
