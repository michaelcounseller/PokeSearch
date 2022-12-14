import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../Graphql/Queries";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import '../css/TableRow.css'

export function GetAllPokemon({searchInput}) {
  const { error, loading, data } = useQuery(GET_POKEMONS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  console.log("Response from server", data);
  
  
  const testOutput = (pokeName) => {


    if(pokeName && pokeName.includes(searchInput)) {
      return "active"
    } else if (searchInput === null || searchInput === undefined || searchInput === "") {
      return "active"
    } else {
      return "inactive"
    }
  }

  return (
    <>
    <h1>{searchInput}</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Num</TableCell>
              <TableCell>Sprite</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.getAllPokemon.map((pokemon) => (
              <TableRow key={pokemon.key} className={testOutput(pokemon.species)}>
                <TableCell>{pokemon.num}</TableCell>
                <TableCell>
                  <img src={pokemon.sprite} alt={pokemon.species} />
                </TableCell>
                <TableCell pokename={pokemon.species}>
                  <Link to={`pokemon/${pokemon.species}`}>
                    {pokemon.species}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

// export function GetTypes() {
//   const { error, loading, data } = useQuery(GET_TYPES);

//   if (loading) return "Loading...";
//   if (error) return `Error! ${error.message}`;

//   console.log("Response from server", data);
// }

// export function GetColors() {
//   const { error, loading, data } = useQuery(GET_COLOR);

//   if (loading) return "Loading...";
//   if (error) return `Error! ${error.message}`;

//   console.log("Response from server", data);
// }

// export function GetWeights() {
//   const { error, loading, data } = useQuery(GET_WEIGHT);

//   if (loading) return "Loading...";
//   if (error) return `Error! ${error.message}`;

//   console.log("Response from server", data);
// }

// export function GetHeights() {
//   const { error, loading, data } = useQuery(GET_HEIGHT);

//   if (loading) return "Loading...";
//   if (error) return `Error! ${error.message}`;

//   console.log("Response from server", data);
// }
