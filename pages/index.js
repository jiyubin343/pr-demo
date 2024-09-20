
import {Container, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import Link from "next/link";
import Button from "@mui/material";

function createData(name,github,link){
  return {name,github,link};
}
const rows = [
  createData('duduge','https://github.com/jiyubin343/javascript_Lecture/tree/main/%EA%B2%8C%EC%9E%84%EB%93%A4/%EB%91%90%EB%8D%94%EC%A7%80%20%EC%9E%A1%EA%B8%B0','/duduge'),
  createData('memory','https://github.com/jiyubin343/javascript_Lecture/tree/main/%EA%B2%8C%EC%9E%84%EB%93%A4/%EC%B9%B4%EB%93%9C%20%EB%92%A4%EC%A7%91%EA%B8%B0','/memory'),
  createData('snake','https://github.com/jiyubin343/javascript_Lecture/tree/main/%EA%B2%8C%EC%9E%84%EB%93%A4/%EC%8A%A4%EB%84%A4%EC%9D%B4%ED%81%AC%20%EA%B2%8C%EC%9E%84','/snake'),
]

export default function Home() {
  return (
    <>
      <Container fixed>
        <h1></h1>
        <Table sx = {{minWid : 650}} aria-label = "demo-list">
            <TableHead>
              <TableRow>
                <TableCell>Demo-List</TableCell>
                <TableCell>Github</TableCell>
                <TableCell>link</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                key={row.name}
                sx={{'&:last-child td, &:last-child th': {border:0}}}
              >
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell><link href={row.github}>깃허브 바로가기</link></TableCell>
                <TableCell><Button variant = "outlined" size="small" href={row.link}>Link</Button></TableCell>
              </TableRow>
              ))}
            </TableBody>
        </Table>
      </Container>
    </>
  ) 
}