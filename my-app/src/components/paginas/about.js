import React from "react"
import styled from 'styled-components';



const about = () => {
    return(
        <>
        <h1><b>NUESTROS PRINCIPALES PRODUCTOS</b></h1>
        <h2>LOS PRECIOS PUEDEN VARIAR DE ACUERDO A LA INFLACION</h2>
        <Table className="table table-sm">
            <thead className="table-primary">
                <tr>
                    <th>ID</th>
                    <th>nombre</th>
                    <th>precio</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>SANITARIO</td>
                    <td>15000,°°</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>GRIFOS</td>
                    <td>580,°°</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>TUBO PVC</td>
                    <td>2800,°°</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>HIERRO LISO</td>
                    <td>3500,°°</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>ALICATE</td>
                    <td>800,°°</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>MARTILLO BIASSONI</td>
                    <td>3500,°°</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>TENAZA</td>
                    <td>2500,°°</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>CAÑO CORRUGADO</td>
                    <td>2350,°°</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>CAÑO RIGIDO</td>
                    <td>750,°°</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>HIERRO TRENZADO N° 8</td>
                    <td>1880,°°</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>CAÑO PVC N° 40</td>
                    <td>2140,°°</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>SIERRA</td>
                    <td>1200,°°</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>CAÑO PVC 50</td>
                    <td>2120,°°</td>
                </tr>
            </tbody>
        </Table>
        
        </>
    )
}
export default about

const  Table = styled.table`
    margin-left: 150px;
    position: relative;
    width: 80%;
        
`;
