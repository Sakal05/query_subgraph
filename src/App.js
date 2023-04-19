// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';

const GET_PROPOSALS = gql`
  query ProposalEvent {
      proposalEvents {
        id
        owner
        title
        description
        
      }
    
  }
`;

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_PROPOSALS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data.proposalEvents);
  // data.proposalEvents.map((obj) => {
  //   console.log(`Owner: ${obj.owner}`)
  // })
  return data.proposalEvents.map((obj) => (
    <div key={obj.id}>
      <h3>Title: {obj.title}</h3>
      <h3>Owner: {obj.owner}</h3>
      <br />
      <b>Description:</b>
      <p>{obj.description}</p>
      <br />
    </div>
  ));
}

export default function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <br/>
      <DisplayLocations />
    </div>
  );
}